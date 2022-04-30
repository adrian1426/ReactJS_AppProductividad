import { makeStyles } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

const Loader = props => {
  const { open } = props;
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
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