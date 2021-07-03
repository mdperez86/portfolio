import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Box, Typography, Card } from '@material-ui/core';

import { MainTemplate } from '../components/templates/MainTemplate';
import { Heroe } from '../components/molecules/Heroe';
import { useTranslation } from '../hooks/useTranslation';

const IndexPage = (props: IndexPageProps) => {
  const t = useTranslation();

  return (
    <MainTemplate title="page.index.title">
      <Heroe title="page.index.title" />
    </MainTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
}

type IndexPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default IndexPage;
