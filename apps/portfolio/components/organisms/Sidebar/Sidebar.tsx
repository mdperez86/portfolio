import React from 'react';
import { Drawer, useMediaQuery, useTheme } from '@material-ui/core';

import { useStyles } from './Sidebar.styles';
import { SidebarHeader } from '@md/components/molecules/SidebarHeader';

export const Sidebar = (props: SidebarProps) => {
  const { children, toogle, onClose } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Drawer
      // container={container}
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
      <SidebarHeader>
        Avatar
      </SidebarHeader>
      {children}
    </Drawer>
  );
};

type SidebarProps = {
  children: React.ReactNode;
  toogle: boolean;
  onClose: () => void;
};
