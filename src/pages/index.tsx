import React from 'react';
import Layout from '@components/Layout';
import { Search } from '@utils/algolia';
import Hits from '@components/Hits';
import SearchBox from '@components/SearchBox';
import { styled } from 'linaria/react';

import 'instantsearch.css/themes/reset.css';

const SearchContainer = styled.header`
  background-color: #f5f6fa;
  display: flex;
`;

export default () => {
  return (
    <Layout>
      <Search>
        <SearchBox />
        <Hits />
      </Search>
    </Layout>
  );
};
