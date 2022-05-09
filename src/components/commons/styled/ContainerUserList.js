import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 50px)'
}));

export default Container;