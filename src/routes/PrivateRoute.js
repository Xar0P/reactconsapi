import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MyRoute() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      // O state fica disponivel no useLocation
      <Navigate to="/login/" replace state={{ prevPath: location.pathname }} />
    );
  }

  return <Outlet />;
}
