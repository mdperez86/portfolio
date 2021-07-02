import React, { useState } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';

import { useTranslation } from '../../../hooks/useTranslation';
import { Header } from '../../organisms/Header';
import { Sidebar } from '../../organisms/Sidebar';
import { useStyles } from './MainTemplate.styles';

export const MainTemplate = (props: MainTemplate) => {
  const { title, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const t = useTranslation();
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container className={classes.root} maxWidth="xl">
      <Head>
        <title>{t(title)}</title>
      </Head>
      <Header title={t(title)} onClick={handleDrawerToggle} />
      <Sidebar toogle={mobileOpen} onClose={handleDrawerToggle}>
        Content
      </Sidebar>
      <main className={classes.main}>
        {children}
      </main>
      <footer>

      </footer>
    </Container>
  );
};

type MainTemplate = {
  title: string;
  children: React.ReactNode;
};
