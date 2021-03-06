import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, UsingSearchClientProps } from 'react-instantsearch-dom';
import React from 'react';

export const searchClient = algoliasearch(
  process.env.ALGOLIA_APP!,
  process.env.ALGOLIA_KEY!
);

export type SearchProps = Omit<
  UsingSearchClientProps,
  'searchClient' | 'indexName'
>;

export const Search: React.FC<SearchProps> = ({ children, ...props }) => (
  <InstantSearch searchClient={searchClient} indexName="repos" {...props}>
    {children}
  </InstantSearch>
);
