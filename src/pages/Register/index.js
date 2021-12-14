import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading/index';
import * as actions from '../../global/modules/auth/actions';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.auth.user);
  const { nome: nomeStored } = useSelector((state) => state.auth.user);
  const { email: emailStored } = useSelector((state) => state.auth.user);
  const { isLoading } = useSelector((state) => state.auth);
  const { registeredAnAccount } = useSelector((state) => state.auth);
  const { loginAgain } = useSelector((state) => state.auth);

  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Se tiver id quer dizer que o usuário está logado, então ele está editando seus dados
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [id, nomeStored, emailStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres!');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  useEffect(() => {
    if (registeredAnAccount) {
      navigate('/login/');
      dispatch(actions.resetRegister());
    }

    if (loginAgain) {
      navigate('/login/');
      dispatch(actions.resetLoginAgain());
    }
  }, [loginAgain, registeredAnAccount, navigate, dispatch]);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>
        <button type="submit">
          {id ? 'Salvar alterações' : 'Criar minha conta'}
        </button>
      </Form>
    </Container>
  );
}
