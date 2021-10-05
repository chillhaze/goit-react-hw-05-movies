import PropTypes from 'prop-types';
import {
  HeaderContainer,
  Logo,
  BtnContainer,
  Button,
  Title,
} from './Header.styled';
import { NavLink } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

export const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo>
          <FaReact />
          <Title>{title}</Title>
        </Logo>
      </NavLink>

      <BtnContainer>
        <Button>
          <NavLink exact to="/">
            Home
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/movies">Movies</NavLink>
        </Button>
      </BtnContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
