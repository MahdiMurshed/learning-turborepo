import Head from 'next/head';
import { ReactNode } from 'react';

export interface ILayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
