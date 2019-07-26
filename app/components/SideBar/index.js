import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SortIcon from '@material-ui/icons/Sort';
import WorkIcon from '@material-ui/icons/Work';
import CalendarIcon from '@material-ui/icons/EventNote';
import SchoolIcon from '@material-ui/icons/School';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));


function SideBar({
  open,
  handleDrawerClose,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const iconList = [
    {
      icon: SortIcon,
      label: 'Sort',
      link: '',
    },
    {
      icon: MailIcon,
      label: 'Message',
      link: '',
    },
    {
      icon: WorkIcon,
      label: 'Work',
      link: '',
    },
    {
      icon: CalendarIcon,
      label: 'Calendar',
      link: '',
    },
    {
      icon: SchoolIcon,
      label: 'School',
      link: '',
    },
    {
      icon: ShowChartIcon,
      label: 'All Modules',
      link: '/',
    },
  ];

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>

      <Divider />

      <List>
        {iconList.map((iconInfo, index) => (
          <ListItem button key={iconInfo.label}>
            <Link to={iconInfo.link}>
              <ListItemIcon>
                <iconInfo.icon />
              </ListItemIcon>
            </Link>
            <ListItemText primary={iconInfo.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

SideBar.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
};

export default SideBar;
