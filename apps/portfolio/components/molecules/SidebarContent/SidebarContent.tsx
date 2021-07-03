import React from 'react';
import { Box, Divider, Button } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';

import { ShortPersonalInfo } from '../ShortPersonalInfo';
import { SpeakingLanguages } from '../SpeakingLanguages';
import { Top5Skills } from '../Top5Skills';

import { useStyles } from './SidebarContent.styles';
import { useTranslation } from '../../../hooks/useTranslation';

export const SidebarContent = (props: SidebarContentProps) => {
  const classes = useStyles();
  const t = useTranslation();

  return (
    <Box className={classes.root}>
      <ShortPersonalInfo />
      <Divider />
      <SpeakingLanguages />
      <Divider />
      <Top5Skills />
      <Divider />
      <Box mt={3}>
        <Button
          href="https://drive.google.com/file/d/1INlDMvZ_tssh2s6qTpr6aRp9m4GjKEIN/view?usp=sharing"
          size="small"
          endIcon={<CloudDownload />}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('button.downloadCV.text')}
        </Button>
    </Box>
    </Box >
  );
};

type SidebarContentProps = {

};
