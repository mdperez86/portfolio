import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Box } from '@material-ui/core';

import { MainTemplate } from '../components/templates/MainTemplate';
import { HireForm } from '../components/organisms/HireForm';
import { Heroe } from '../components/molecules/Heroe';

const IndexPage = (props: IndexPageProps) => {
  return (
    <MainTemplate title="page.index.title">
      <Heroe title="page.index.title" />
      <Box my={3}>
        <HireForm />
      </Box>
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
