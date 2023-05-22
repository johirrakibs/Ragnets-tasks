import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const loggedIn = localStorage.getItem('loggedIn');
  const user = { loggedIn: loggedIn ? loggedIn : false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
