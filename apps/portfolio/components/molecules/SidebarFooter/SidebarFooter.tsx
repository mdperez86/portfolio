import React from 'react';
import { Box, IconButton, SvgIcon } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';

import { ReactComponent as Hackerrank } from '../../../public/icons/hackerrank.svg';

import { useStyles } from './SidebarFooter.styles';

const socials = [
  {
    href: 'https://www.linkedin.com/in/mdperez86/',
    ariaLabel: 'Follow me in LinkedIn',
    Icon: LinkedIn,
    alt: 'LinkedIn',
  },
  {
    href: 'https://github.com/mdperez86',
    ariaLabel: 'Follow me in GitHub',
    Icon: GitHub,
    alt: 'GitHub',
  },
  {
    href: 'https://www.hackerrank.com/mdperez86',
    ariaLabel: 'Follow me in Hackerrank',
    Icon: (props) => <SvgIcon {...props} component={Hackerrank} viewBox="0 0 32 32" />,
    alt: 'Hackerrank',
  },
];

export const SidebarFooter = (props: SidebarFooterProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {socials.map(({ href, ariaLabel, Icon }, index) => (
        <IconButton
          key={index}
          href={href}
          aria-label={ariaLabel}
          size="small"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fontSize="small" aria-label="hidden" />
        </IconButton>
      ))}
    </Box>
  );
};

type SidebarFooterProps = {

};
