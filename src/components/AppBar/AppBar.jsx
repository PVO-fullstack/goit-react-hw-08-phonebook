import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div
    // style={{ display: 'flex', padding: '10px', border: '2px solid black' }}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <nav>
          <ul
            style={{
              display: 'flex',
              gap: '30px',
              padding: '10px',
              borderBottom: '2px solid black',
              listStyle: 'none',
            }}
          >
            <li>
              <NavLink to="/login">LogIn</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
