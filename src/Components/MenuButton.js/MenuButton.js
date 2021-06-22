import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MenuButtons = ({ path, name }) => {
  const location = useLocation();

  return (
    <MenuLink
      to={path}
      compare={location.pathname === path}
      main={location.pathname === '/'}
    >
      {name}
    </MenuLink>
  );
};

export default MenuButtons;

const MenuLink = styled(Link)`
  color: ${({ compare, main, theme }) => {
    if (main) return theme.white;

    return compare ? theme.blue : theme.black;
  }};

  &:hover {
    color: ${({ main, theme }) => (main ? 'white' : theme.blue)};
  }
`;
