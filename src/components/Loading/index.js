import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <span />;
  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
