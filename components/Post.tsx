import Image from 'next/image';
import style from '../styles/components/Posts.module.scss';
import { BsBookmarkPlus } from 'react-icons/bs';
import Link from 'next/link';

const data = {
  name: 'John Doe',
  title: 'How to master CSS?',
  tag: ['css', 'design'],
  date: '25-1-2022',
};

const Post = () => {
  return (
    <article className={style.article}>
      <figure className={style.articlePhoto}></figure>
      <div className={style.article_info}>
        <div className={style.author}>
          <figure className={style.author_pic}></figure>
          <Link href={`/users/${data.name.split(' ').join('-')}`} passHref>
            <a className={style.author_name}>{data.name}</a>
          </Link>
          <button className={style.add_to_list}>
            <BsBookmarkPlus className={style.icon} />
          </button>
        </div>
        <Link href={`/posts/${'id'}`}>
          <a className={style.title_body}>
            <h3 className={style.title}>{data.title}</h3>
            <p className={style.body}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, exercitationem cum eum alias unde a repudiandae
              doloremque consectetur...
            </p>
          </a>
        </Link>
        <div className={style.tags_date}>
          <ul className={style.tags}>
            {data.tag.map((tag) => (
              <li key={tag} className={style.tag}>
                {tag}
              </li>
            ))}
          </ul>
          <time className={style.date}>{data.date}</time>
        </div>
      </div>
    </article>
  );
};

export default Post;
