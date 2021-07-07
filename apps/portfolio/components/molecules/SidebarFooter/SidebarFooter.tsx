import React, { useEffect, useState } from 'react';
import { Box, IconButton, SvgIcon } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';
import axios from 'axios';

import { useTranslation } from '../../../hooks/useTranslation';
import { ReactComponent as Hackerrank } from '../../../public/icons/hackerrank.svg';

import { useStyles } from './SidebarFooter.styles';

const socialIcons = {
  linkedin: LinkedIn,
  github: GitHub,
  hackerrank: (props: unknown) => <SvgIcon {...props} component={Hackerrank} viewBox="0 0 32 32" />,
};

export const SidebarFooter = (props: SidebarFooterProps) => {
  const [socials, setSocials] = useState([]);
  const classes = useStyles();
  const t = useTranslation();

  useEffect(() => {
    axios.get('/api/socials').then(({ data }) => {
      setSocials(() => {
        return Object.entries(data).map(([name, href]) => ({
          href,
          Icon: socialIcons[name],
          ariaLabel: `sidebarFooter.${name}.ariaLabel`,
        }));
      });
    }).catch(() => {
      setSocials(() => []);
    });
  }, []);

  return (
    <Box className={classes.root}>
      {socials.map(({ href, ariaLabel, Icon }, index) => (
        <IconButton
          key={index}
          href={href}
          aria-label={t(ariaLabel) as string}
          size="small"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fontSize="small" aria-hidden="true" />
        </IconButton>
      ))}
    </Box>
  );
};

type SidebarFooterProps = {

};
