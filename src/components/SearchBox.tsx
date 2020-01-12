import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Search } from '@primer/octicons-react';
import { styled } from 'linaria/react';

type SearchInputProps = { invaild: boolean } & React.InputHTMLAttributes<
  HTMLInputElement
>;

const SearchContainer = styled.header`
  background-color: #f5f6fa;
  display: flex;
  width: 100vw;
  height: 100px;
  
  position: fixed;
  top: 0;
  left: 0;

  & + section {
    margin-top: 100px;
  }
`;

const SearchInput = styled.input<SearchInputProps>`
  display: block;
  box-sizing: border-box;

  margin: 1.5rem auto;
  width: 50vw;
  font-size: 2rem;
  border-width: 0;
  border: 1px solid #7f8fa6;
  transition: box-shadow 0.2s ease-in-out;

  :active,
  :focus {
    box-shadow: 0px 0px 2px 0px #00a8ff;
  }
`;

export const SearchBox = connectSearchBox(
  ({ currentRefinement, refine, isSearchStalled }) => (
    <SearchInput
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      invaild={isSearchStalled}
    />
  )
);

export default () => (
  <SearchContainer>
    <SearchBox />
  </SearchContainer>
);
