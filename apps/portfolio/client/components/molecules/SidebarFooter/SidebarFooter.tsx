import React, { useEffect, useState } from 'react';
import { Box, IconButton, SvgIcon, Skeleton } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';
import axios from 'axios';

import { useTranslation } from '../../../hooks/useTranslation';
import { ReactComponent as Hackerrank } from '../../../../public/icons/hackerrank.svg';

import { useStyles } from './SidebarFooter.styles';

const socialIcons = {
  linkedin: LinkedIn,
  github: GitHub,
  hackerrank: (props: unknown) => <SvgIcon {...props} component={Hackerrank} viewBox="0 0 32 32" />,
};

export const SidebarFooter = (props: SidebarFooterProps) => {
  const [socials, setSocials] = useState(Array(3).fill(null));
  const classes = useStyles();
  const t = useTranslation();

  useEffect(() => {
    axios.get('/api/socials').then(({ data }) => {
      setSocials(() => {
        return data.map(({ name, url }) => {
          const id = name.toLowerCase();
          return {
            href: url,
            Icon: socialIcons[id],
            ariaLabel: `sidebarFooter.${id}.ariaLabel`,
          };
        });
      });
    }).catch(() => {
      setSocials(() => []);
    });
  }, []);

  return (
    <Box className={classes.root}>
      {socials.map((social, index) => (
        social ? (
          <IconButton
            key={index}
            href={social.href}
            aria-label={t(social.ariaLabel) as string}
            size="small"
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.Icon fontSize="small" aria-hidden="true" />
          </IconButton>
        ) : (
          <Skeleton key={index} variant="circular" width={30} height={30} />
        )
      ))}
    </Box>
  );
};

type SidebarFooterProps = {

};
