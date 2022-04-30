import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const Loader = props => {
  const { open } = props;

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

Loader.propTypes = {
  open: PropTypes.bool
};

Loader.defaultProps = {
  open: false
};

export default Loader;