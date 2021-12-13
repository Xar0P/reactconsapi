/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../global/modules/auth/actions';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const prevPath = get(location, 'state.prevPath', '/');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password }));
  }

  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLogged) {
      navigate(prevPath);
    }
  }, [isLogged, prevPath, navigate]);

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Seu e-mail"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
