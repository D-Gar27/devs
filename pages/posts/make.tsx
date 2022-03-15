import Head from 'next/head';
import style from '../../styles/MakePost.module.scss';
import { FaRegPaperPlane } from 'react-icons/fa';

const MakePost = () => {
  return (
    <>
      <Head>
        <title>Make</title>
      </Head>
      <main className={`${style.make_post_page} ${style.container}`}>
        <form className={style.make_form}>
          <input type="text" placeholder="Title" />
          <textarea name="" placeholder="Body"></textarea>
          <button className={style.publish_btn}>
            Publish <FaRegPaperPlane />
          </button>
        </form>
      </main>
    </>
  );
};

export default MakePost;
