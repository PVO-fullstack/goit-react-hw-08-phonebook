import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'components/Home/Home';
import { Contacts } from 'components/Contacts/Contacts';
import { Login } from 'pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Register } from 'pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import { PrivatRoute } from 'components/Routes/PrivatRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { selectIsRefresh } from 'redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    'Refresh user...'
  ) : (
    <>
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
              <PrivatRoute redirectTo="/register" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
