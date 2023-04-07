import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'components/Home/Home';
import { Contacts } from 'components/Contacts/Contacts';
import { Login } from 'pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Register } from 'pages/Register';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import { PrivatRoute } from 'components/Routes/PrivatRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
