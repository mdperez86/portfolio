import React from 'react';
import { Box, Drawer, Paper, useMediaQuery, useTheme } from '@material-ui/core';

import { SidebarHeader } from '../../molecules/SidebarHeader';
import { SidebarContent } from '../../molecules/SidebarContent';
import { SidebarFooter } from '../../molecules/SidebarFooter';

import { useStyles } from './Sidebar.styles';

export const Sidebar = (props: SidebarProps) => {
  const { toogle, onClose } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  return (
    <Drawer
      variant={matchesMobile ? "temporary" : "permanent"}
      open={matchesMobile ? toogle : true}
      onClose={onClose}
      classes={{
        root: classes.root,
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: matchesMobile, // Better open performance on mobile.
      }}
    >
      <Paper className={classes.paper}>
        <Box overflow="auto">
          <SidebarHeader />
          <SidebarContent />
        </Box>
        <SidebarFooter />
      </Paper>
    </Drawer>
  );
};

type SidebarProps = {
  toogle: boolean;
  onClose: () => void;
};
