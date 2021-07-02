import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { LocaleMenu } from '../../molecules/LocaleMenu';

export const Header = (props: HeaderProps) => {
  const { title, onClick } = props;

  return (
    <Hidden smUp>
      <AppBar component="header">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ flex: '1 0 auto' }}>
            {title}
          </Typography>
          <LocaleMenu id="locale-menu" />
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

type HeaderProps = {
  title: React.ReactNode;
  onClick?: () => void;
};
