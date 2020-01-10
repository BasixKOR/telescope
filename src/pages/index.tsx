import React from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import { Search } from '@utils/agolia';
import { SearchBox, Hits } from 'react-instantsearch-dom';
import Hit from '@components/Hit';

export default () => {
  return (
    <Layout>
      <Search>
        <SearchBox autoFocus />
        <Hits />
      </Search>
    </Layout>
  );
};
