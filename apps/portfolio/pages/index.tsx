import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { MainTemplate } from '../components/templates/MainTemplate';
import { Heroe } from '../components/molecules/Heroe';

const IndexPage = (props: IndexPageProps) => {
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
