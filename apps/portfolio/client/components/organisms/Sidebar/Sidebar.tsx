import React from 'react';
import { Box, SwipeableDrawer, Paper, useMediaQuery } from '@material-ui/core';

import { SidebarHeader } from '../../molecules/SidebarHeader';
import { SidebarContent } from '../../molecules/SidebarContent';
import { SidebarFooter } from '../../molecules/SidebarFooter';

import { useStyles } from './Sidebar.styles';

export const Sidebar = (props: SidebarProps) => {
  const { toggle, onToggle } = props;

  const classes = useStyles();
  const matchesMobile = useMediaQuery(
    ({ breakpoints }) => breakpoints.down('md'),
    { defaultMatches: true },
  );

  return (
    <SwipeableDrawer
      anchor="left"
      variant={matchesMobile ? "temporary" : "permanent"}
      open={toggle}
      onClose={() => onToggle(false)}
      onOpen={() => onToggle(true)}
      swipeAreaWidth={matchesMobile ? 8 : 0}
      disableSwipeToOpen={false}
      classes={{
        root: classes.root,
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: matchesMobile, // Better open performance on mobile.
      }}
    >
      <Paper className={classes.paper} component="nav">
        <Box overflow="auto">
          <SidebarHeader />
          <SidebarContent />
        </Box>
        <SidebarFooter />
      </Paper>
    </SwipeableDrawer>
  );
};

type SidebarProps = {
  toggle: boolean;
  onToggle: (toggle: boolean) => void;
};
