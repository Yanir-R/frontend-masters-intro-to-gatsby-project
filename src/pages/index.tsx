import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: true)
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  return (
    <>
      <Layout>
        <h1>Hello Yanir Blog!</h1>
        <Link to="/about">About this site</Link>

        <h2>Check out my recent posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
              <small>Posted {post.frontmatter.date}</small>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
