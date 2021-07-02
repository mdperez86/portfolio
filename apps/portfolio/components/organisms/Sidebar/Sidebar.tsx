import React from 'react';
import { Drawer, useMediaQuery, useTheme } from '@material-ui/core';

import { SidebarHeader } from '../../molecules/SidebarHeader';
import { SidebarContent } from '../../molecules/SidebarContent';
import { SidebarFooter } from '../../molecules/SidebarFooter';

import { useStyles } from './Sidebar.styles';

export const Sidebar = (props: SidebarProps) => {
  const { children, toogle, onClose } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('xs'));

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
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </Drawer>
  );
};

type SidebarProps = {
  children: React.ReactNode;
  toogle: boolean;
  onClose: () => void;
};
