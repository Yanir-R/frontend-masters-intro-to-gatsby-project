import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo';

import '../styles/global.css';
import { header, content } from '../styles/layout.module.css';

type LayoutProps = {
  children?:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal;
  title?: string;
  description?: string;
  image?: false;
  path?: false;
};

export default function Layout(props: LayoutProps) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};
  return (
    <>
      <Seo
        title={props.title}
        description={props.description}
        image={props.image}
        path={props.path}
      />
      <header className={header}>
        <Link to={'/'}>{meta.title}</Link>
        <nav>
          <Link to={'/about'}>About</Link>
        </nav>
      </header>
      <main className={content}>{props.children}</main>
    </>
  );
}
