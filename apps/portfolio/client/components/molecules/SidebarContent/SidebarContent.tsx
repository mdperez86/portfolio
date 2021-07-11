import React, { useEffect, useState } from 'react';
import { Box, Divider, Button, Skeleton } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';

import { ShortPersonalInfo } from '../ShortPersonalInfo';
import { SpeakingLanguages } from '../SpeakingLanguages';
import { Top5Skills } from '../Top5Skills';

import { useStyles } from './SidebarContent.styles';
import { useTranslation } from '../../../hooks/useTranslation';
import { usePersonalInfo } from '../../../hooks/usePersonalInfo';

export const SidebarContent = (props: SidebarContentProps) => {
  const classes = useStyles();
  const t = useTranslation();

  const personalInfo = usePersonalInfo();

  return (
    <Box className={classes.root}>
      <ShortPersonalInfo />
      <Divider />
      <SpeakingLanguages />
      <Divider />
      <Top5Skills />
      <Divider />
      <Box mt={3}>
        {personalInfo?.cv ? (
          <Button
            href={personalInfo.cv}
            color="secondary"
            size="small"
            endIcon={<CloudDownload />}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('button.downloadCV.text')}
          </Button>
        ) : (
          <Skeleton />
        )}
      </Box>
    </Box >
  );
};

type SidebarContentProps = {

};
