import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { MainTemplate } from '../components/templates/MainTemplate';

const IndexPage = (props: IndexPageProps) => {
  return (
    <MainTemplate title="page.index.title">
      <h2>Resources &amp; Tools</h2>
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
