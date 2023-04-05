import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'components/Home/Home';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Contacts } from 'components/Contacts/Contacts';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Login } from 'pages/Login';
import { Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom';
import { Register } from 'pages/Register';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { useEffect } from 'react';

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
