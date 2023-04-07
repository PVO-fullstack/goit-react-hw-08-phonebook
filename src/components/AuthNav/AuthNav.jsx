import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AuthConteiner } from './AuthNav.styled';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
    text-decoration: none;
  }
`;

export const AuthNav = () => {
  return (
    <AuthConteiner>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Signup</StyledLink>
    </AuthConteiner>
  );
};
