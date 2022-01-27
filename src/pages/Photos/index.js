import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Form } from './styled';
import axios from '../../services/axios';
import * as actions from '../../global/modules/auth/actions';

export default function Photos() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Photos[0].url', ''));
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        toast.error('Erro ao obter imagem');
        navigate('/');
      }
    })();
  }, [id, navigate]);

  async function handleChange(e) {
    const fotoFile = e.target.files[0];
    const fotoURL = URL.createObjectURL(fotoFile);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('photo', fotoFile);

    try {
      setIsLoading(true);
      await axios.post('/photos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada com sucesso!');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar foto.');

      if (status === 401) dispatch(actions.loginFailure());
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Fotos</h1>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
