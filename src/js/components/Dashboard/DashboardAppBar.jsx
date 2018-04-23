import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Buttoon from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

export default class DashboardAppBar extends Component {
  render() {
    const { toggleVisibility } = this.props;
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleVisibility} className={styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={styles.flex}>
              Dashboard
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}