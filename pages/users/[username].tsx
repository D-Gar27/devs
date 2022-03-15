import Head from 'next/head';
import { useRouter } from 'next/router';
import Post from '../../components/Post';
import Posts from '../../components/Posts';
import Sidebar from '../../components/Sidebar';
import style from '../../styles/User.module.scss';

const userInfo = {
  name: 'Wayne Rooney',
  profilePic: '',
  bio: 'No.10 Goat of Manchester United',
  uid: 'dfdf',
};

const posts = [1, 2, 4, 5];

const UserPage = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <>
      <Head>
        <title>{query?.username}</title>
      </Head>
      <main className={style.user_page}>
        <section className={style.user_info}>
          <figure className={style.user_pic}></figure>
          <p className={style.user_name}>{userInfo.name}</p>
          <p className={style.user_bio}>{userInfo.bio}</p>
          <button className={style.follow_btn}>Follow</button>
        </section>
        <div className={style.posts_from_user}>
          <h3>Articles from {userInfo.name}</h3>
          <Posts />
        </div>
      </main>
    </>
  );
};

export default UserPage;
