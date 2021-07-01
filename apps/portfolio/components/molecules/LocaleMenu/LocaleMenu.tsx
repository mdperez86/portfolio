import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';

import { FlagIcon } from '@md/components/atoms/FlagIcon';

import { useTranslation } from '@md/hooks/useTranslation';

export const LocaleMenu = (props: LocaleMenuProps) => {
  const { id } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const { locale, locales, push } = useRouter();
  const t = useTranslation();

  const handleChange = (locale: string) => {
    push('', undefined, { locale });
    setAnchorEl(null);
  };

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-controls={id}
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <FlagIcon locale={locale} />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >
        {locales.map((locale) => (
          <MenuItem key={locale} onClick={() => handleChange(locale)}>
            <FlagIcon locale={locale} />
            <Box component="span" m={1}>{t(`locale.${locale}`)}</Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

type LocaleMenuProps = {
  id: string;
};