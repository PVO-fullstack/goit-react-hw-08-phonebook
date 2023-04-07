import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
