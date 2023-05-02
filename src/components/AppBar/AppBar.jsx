import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { HeaderStyled } from './AppBar.styled';
import { NavStyled } from './AppBar.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <HeaderStyled>
        <NavStyled>
          <Navigation />
        </NavStyled>
        <>{isLoggedIn ? <UserMenu /> : <AuthNav />}</>
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
