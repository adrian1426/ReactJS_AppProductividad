import styled from "@emotion/styled";

const CardContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  padding: '6px',
  width: '300px',
  margin: '5px',
  borderRadius: '5px'
}));

export default CardContent;