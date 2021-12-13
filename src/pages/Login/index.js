import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import { clicaBotaoRequest } from '../../global/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>Opa</Title>
      <p>Oi</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
