import { Highlight, connectHits } from 'react-instantsearch-dom';
import { Hit } from 'react-instantsearch-core';
import { styled } from 'linaria/react';
import Octicon, { Repo } from '@primer/octicons-react';
import { Repository } from '@utils/repository';
import { HTMLAttributes } from 'react';

const Hits = styled.section`
  display: flex;
  flex-direction: column;
`;

const HitContainer = styled.div`
  display: flex;
  align-items: center;

  height: fit-content;
  margin: 0 1rem;
  margin-top: 1rem;
  border: 1px solid #dcdde1;
  box-shadow: 0px 0px 2px 0px #dcdde1;

  :last-child {
    margin-bottom: 1rem;
  }

  svg {
    width: 60px;
    height: 60px;
    margin: 10px;
  }
  div {
    flex: 1;
  }
`;

const Header = styled.h1`
  margin: 0;
`;

type TagProps = { color?: string } & HTMLAttributes<HTMLSpanElement>;
const Tag = styled.span<TagProps>`
  display: inline-block;
  font-size: 0.5em;
  padding: 0 0.5em;
  border-radius: 1em;
  margin-left: 1em;
  background-color: ${props => props.color ?? 'gray'};
  color: white;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    color: gray;
  }
`;

const HitHighlight = ({ hit }: { hit: Hit<Repository> }) => (
  <div>
    <Header>
      <Link href={`//github.com/${hit.nameWithOwner}`}>
        <Highlight attribute="nameWithOwner" hit={hit} tagName="mark" />
      </Link>
      {hit.primaryLanguage.name && <Tag>{hit.primaryLanguage.name}</Tag>}
      <Tag color="#fbc531">★ {hit.stargazers.totalCount}</Tag>
    </Header>
    <Highlight attribute="description" hit={hit} tagName="mark" />
  </div>
);

export default connectHits<Repository>(({ hits }) => (
  <Hits>
    {hits.map(hit => (
      <HitContainer key={hit.objectID}>
        <Octicon icon={Repo} size="large" />
        <HitHighlight hit={hit} />
      </HitContainer>
    ))}
  </Hits>
));
