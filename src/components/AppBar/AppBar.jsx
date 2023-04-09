import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { HeaderStyled } from './AppBar.styled';
import { NavStyled } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
