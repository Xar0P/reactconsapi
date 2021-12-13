import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { StudentContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Students() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/alunos/');
      setAlunos(response.data);
    })();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
      <StudentContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {aluno.Photos[0]?.url ? (
                <img
                  src={aluno.Photos[0].url}
                  onError={(e) => {
                    e.target.src =
                      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZUEvYyUcWlSZS06bKlxaJgHaEj%26pid%3DApi&f=1';
                  }}
                  alt="Imagem"
                />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
