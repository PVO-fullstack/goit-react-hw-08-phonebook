import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';
import { Welcome } from '../UserMenu/UserMenu.styled';
import { UserMenuConteiner } from '../UserMenu/UserMenu.styled';
import { Button } from '../UserMenu/UserMenu.styled';
import { selectUserName } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <UserMenuConteiner>
      <Welcome>Welcome, {name} </Welcome>
      <Button onClick={() => dispatch(logOutUser())} type="button">
        Logout
      </Button>
    </UserMenuConteiner>
  );
};
