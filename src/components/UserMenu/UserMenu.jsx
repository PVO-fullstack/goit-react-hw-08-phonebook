import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex' }}>
      <p>mango@mail.com Welcome, {name}</p>
      <button onClick={() => dispatch(logOutUser())} type="button">
        Logout
      </button>
    </div>
  );
};
