import { styled } from '@mui/material/styles';

const Li = styled('li')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '4px',
  cursor: 'pointer',
  ':hover': {
    color: theme.palette.primary.main
  }
}));

export default Li;