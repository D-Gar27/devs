import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Posts from '../../components/Posts';
import style from '../../styles/SavedPosts.module.scss';

const PostsPage = () => {
  const { query } = useRouter();
  console.log(query.tag);

  return (
    <>
      <Head>
        <title>Results for {query.tag}</title>
      </Head>
      <main className={style.saved_posts_page}>
        <div className={style.posts_user_saved}>
          <h3>Search results for {query.tag}</h3>
          <Posts />
        </div>
      </main>
    </>
  );
};

export default PostsPage;
