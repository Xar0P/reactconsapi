import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function MyRoute() {
  const isLoggedIn = false;
  const location = useLocation();

  // Se a rota estiver fechada e o usuário não estiver logado, vai redirecionar para o /login
  // E guardar a rota anterior, para quando fizer login ser redirecionado para a rota de antes
  if (!isLoggedIn) {
    return (
      <Navigate
        // Recebendo a rota em que vai ser redirecionado, e também a rota anterior.
        to={{ pathname: '/login', state: { prevPath: location.pathname } }}
      />
    );
  }

  return <Outlet />;
}
