// ########## Import Dependencies Here ##########
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const DashboardAppBar = (props) => {
  const { toggleVisibility, activateSideMenuAction } = props;
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={activateSideMenuAction} style={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={styles.flex}>
            Scorpio Club Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DashboardAppBar;