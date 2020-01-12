import React from 'react';
import Layout from '@components/Layout';
import { Search } from '@utils/agolia';
import Hits from '@components/Hits';
import SearchBox from '@components/SearchBox';

import 'instantsearch.css/themes/reset.css';
import { styled } from 'linaria/react';

const SearchContainer = styled.header`
  background-color: #f5f6fa;
  display: flex;
`;

export default () => {
  return (
    <Layout>
      <Search>
        <SearchContainer>
          <SearchBox />
        </SearchContainer>
        <Hits />
      </Search>
    </Layout>
  );
};
