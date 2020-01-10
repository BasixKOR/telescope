import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, InstantSearchProps } from 'react-instantsearch-dom';
import React from 'react';

export const searchClient = algoliasearch(
  process.env.AGOLIA_APP!,
  process.env.AGOLIA_KEY!
);

export type SearchProps = Exclude<InstantSearchProps, { searchClient: any, indexName: string, apiKey: string, appId: string, algoliaClient: any }>

export const Search: React.FC<SearchProps> = ({ children, ...props }) => (
  <InstantSearch searchClient={searchClient} indexName="repos" {...props}>
    {children}
  </InstantSearch>
);
