import React from 'react';
import Head from 'next/head';
import { styled } from 'linaria/react';

const Global = styled.span`
  display: none;
  :global() {
    body {
      margin: 0;
    }
  }
`;

const Layout: React.FC<{ title?: string }> = ({
  children,
  title = 'Telescope',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Global />
    {children}
  </>
);

export default Layout;
