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
      <StyledLink to="/login">Log in</StyledLink>
      <StyledLink to="/register">Sign up</StyledLink>
    </AuthConteiner>
  );
};
