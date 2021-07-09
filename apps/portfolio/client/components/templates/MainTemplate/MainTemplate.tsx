import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Container, Paper } from '@material-ui/core';

import { useTranslation } from '../../../hooks/useTranslation';
import { Header } from '../../organisms/Header';
import { Sidebar } from '../../organisms/Sidebar';
import { Footer } from '../../organisms/Footer';

import { useStyles } from './MainTemplate.styles';

export const MainTemplate = (props: MainTemplate) => {
  const { title, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const t = useTranslation();
  const classes = useStyles();

  const handleDrawerToggle = (toggle: boolean) => {
    setMobileOpen(toggle);
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Head>
        <title>{t(title)}</title>
      </Head>

      <Paper elevation={6} className={classes.paper}>
        
        <Header title={t(title)} onClick={() => handleDrawerToggle(true)} />
        <Sidebar toggle={mobileOpen} onToggle={handleDrawerToggle} />
        
        <Box component="main" className={classes.wrapper}>
          <Box className={classes.bgContainer} role="presentation">
            <Image 
              src="/images/top-bg-02.jpg"
              width={1200}
              height={640}
              layout="fixed"
              objectFit="cover"
              objectPosition="50% 54%"
              aria-hidden="true"
              alt="top-bg-02"
            />
            <Box className={classes.bgShadow} />
          </Box>
          <Box className={classes.main}>
            {children}
            <Footer />
          </Box>
        </Box>
      </Paper>

    </Container>
  );
};

type MainTemplate = {
  title: string;
  children: React.ReactNode;
};