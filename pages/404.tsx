import style from '../styles/404.module.scss';

const NotFound = () => {
  return (
    <main className={style.notFound}>
      <h2>404</h2>
      <p>Oops! The page you&apos;re looking for does not seem to exist</p>
    </main>
  );
};

export default NotFound;
