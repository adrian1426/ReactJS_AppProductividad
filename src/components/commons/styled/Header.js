import styled from "@emotion/styled";

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '5px',
  height: '40px'
}));

export default Header;