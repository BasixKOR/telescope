import React from 'react';
import Head from 'next/head';

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
    {children}
  </>
);

export default Layout;
