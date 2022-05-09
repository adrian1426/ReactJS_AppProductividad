import styled from "@emotion/styled";

const Searcher = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  margin: '2%',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

export default Searcher;