import Posts from '../../components/Posts';
import style from '../../styles/SavedPosts.module.scss';
import Head from 'next/head';

const SavedPosts = () => {
  return (
    <>
      <Head>
        <title>Saved Posts</title>
      </Head>
      <main className={style.saved_posts_page}>
        <div className={style.posts_user_saved}>
          <h3>Your saved posts</h3>
          <Posts />
        </div>
      </main>
    </>
  );
};

export default SavedPosts;
