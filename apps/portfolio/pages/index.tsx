import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Box } from '@material-ui/core';

import { MainTemplate } from '../client/components/templates/MainTemplate';
import { HireForm } from '../client/components/organisms/HireForm';
import { Heroe } from '../client/components/molecules/Heroe';

const IndexPage = (props: IndexPageProps) => {
  return (
    <MainTemplate title="page.index.title">
      <Heroe title="page.index.h1.text" />
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
