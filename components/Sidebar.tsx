import style from '../styles/components/Sidebar.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';

const arr = [1, 2, 3];

interface Props {
  author?: {
    name: string;
    profilePic: string;
    bio: string;
    uid: string;
  };
}

const Sidebar = ({ author }: Props) => {
  const { pathname } = useRouter();
  return (
    <aside className={style.sidebar}>
      <div className={style.search_bar}>
        <input type="text" name="search" placeholder="Search" />
        <FaSearch className={style.search_icon} />
      </div>
      {pathname === '/users/[username]' ? (
        <Author author={author} />
      ) : pathname === '/posts/[post_slug]' ? (
        <Author author={author} />
      ) : (
        <RecommendedTopic />
      )}
    </aside>
  );
};

export default Sidebar;

const RecommendedTopic = () => {
  return (
    <>
      <section className={style.popular_posts}>
        <h5>Popular Posts</h5>
        {arr.map((post) => (
          <article key={post} className={style.popular_post}>
            <div className={style.authorr}>
              <figure className={style.author_pic}></figure>
              <Link href={`/users/${post}`} passHref>
                <p className={style.author_name}>John Doe</p>
              </Link>
            </div>
            <p className={style.post_title}>What is JavaScript?</p>
          </article>
        ))}
      </section>
      <section className={style.people_to_follow}>
        <h5>People to follow</h5>
        {arr.map((post) => (
          <article key={post} className={style.person}>
            <div className={style.person_info}>
              <div className={style.person_name_pic}>
                <figure className={style.person_pic}></figure>
                <Link href={`/users/${post}`} passHref>
                  <p className={style.person_name}>John Doe</p>
                </Link>
              </div>
              <p className={style.person_bio}>
                A Frontend Developer and UI/UX designer
              </p>
            </div>
            <button className={style.follow_btn}>Follow</button>
          </article>
        ))}
      </section>
    </>
  );
};

const Author = ({ author: a }: Props) => {
  const author = {
    name: 'Wayne Rooney',
    profilePic: '',
    bio: 'The Goat, The Legend, OG',
    uid: '23423523',
  };
  return (
    <div className={style.author}>
      <figure className={style.author_pic}></figure>
      <div className={style.author_name_bio}>
        <div>
          <Link href={`/users/${author?.name}`} passHref>
            <h4 className={style.author_name}>{author?.name}</h4>
          </Link>
          <p className={style.author_bio}>{author?.bio}</p>
        </div>
        <button className={style.follow_btn}>Follow</button>
      </div>
    </div>
  );
};
