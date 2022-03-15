import style from '../styles/components/Posts.module.scss';
import Post from './Post';

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const Posts = () => {
  return (
    <section className={style.posts}>
      {arr.map((data) => (
        <Post key={data} />
      ))}
    </section>
  );
};

export default Posts;
