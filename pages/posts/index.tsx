import { FC } from "react";
import {GetStaticProps} from 'next';
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import {PostType} from '../../types';

type PostsTypeProps = {
	posts: PostType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts: FC<PostsTypeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text='Posts list:' />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
