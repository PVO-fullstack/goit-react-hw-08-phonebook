import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div
    // style={{ display: 'flex', padding: '10px', border: '2px solid black' }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '2px solid black',
        }}
      >
        <nav
          style={{
            display: 'flex',
            gap: '30px',
            padding: '10px',
            listStyle: 'none',
          }}
        >
          <Navigation />
        </nav>
        <>{isLoggedIn ? <UserMenu /> : <AuthNav />}</>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
