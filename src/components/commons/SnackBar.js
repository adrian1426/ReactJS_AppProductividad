import { useContext } from 'react';
import { Alert, Snackbar } from "@mui/material";
import SnackContext from '../../context/SnackContext';

const SnackBar = () => {
  const { snack, setSnack } = useContext(SnackContext);
  const { open, severity, msg } = snack;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack({ open: false, severity: 'info', msg: '' });
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;