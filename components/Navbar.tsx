import style from '../styles/components/Navbar.module.scss';
import { BsFillHouseFill, BsBellFill, BsBookmarksFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.navbar} ${style.container}`}>
        <Link href={'/'} passHref>
          <p className={style.logo}>Logo</p>
        </Link>
        <ul className={style.nav_menu}>
          <Link href={'/'} passHref>
            <li className={style.nav_menu_item}>
              <BsFillHouseFill className={style.icon} />
            </li>
          </Link>
          {/* <Link href={'/'} passHref>
          <li className={style.nav_menu_item}>
          <BsBellFill className={style.icon} />
          </li>
        </Link> */}
          <Link href={'/me/saved-posts'} passHref>
            <li className={style.nav_menu_item}>
              <BsBookmarksFill className={style.icon} />
            </li>
          </Link>
          <Link href={'/posts/make'} passHref>
            <li className={style.nav_menu_item}>
              <BiEdit className={style.icon} />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
