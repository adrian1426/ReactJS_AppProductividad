import styled from "@emotion/styled";

const ContainerCards = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  margin: '2%',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'

}));

export default ContainerCards;