import Sidebar from '../../components/Sidebar';
import style from '../../styles/PostDetail.module.scss';
import {
  BsBookmarkPlus,
  BsChat,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const post = {
  title: 'Why JavaScript is so popular?',
  body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nobis, eius, totam voluptas libero voluptatem consequatur facilis omnis natus recusandae animi ex aspernatur impedit harum magnam hic beatae iusto et ratione dolorem saepe cumque! Deserunt necessitatibus rem fugiat quas dolorem, recusandae excepturi, perferendis odio animi at et molestiae ut minus eum commodi veniam voluptate exercitationem. Veritatis excepturi quas, voluptatum dignissimos quisquam doloribus quam eum molestias quaerat, laudantium qui maxime ex facere sed nulla sit ipsa inventore blanditiis voluptates tempora ratione autem magnam. Qui hic quo eveniet. Velit, ut, maiores quaerat fugiat sed voluptatibus molestias quam provident reiciendis nisi consectetur error est quae dolorum repellendus, blanditiis eos magni suscipit soluta? Repellendus tempore voluptas odio, consectetur ipsum unde eveniet suscipit porro mollitia accusamus molestiae, vero fugiat dicta harum quae. Magnam, rerum sequi. Velit soluta quae suscipit a necessitatibus amet, minima repellendus enim libero incidunt similique nobis aliquid nesciunt nam blanditiis perferendis tempora veniam sequi quia at voluptatibus assumenda vitae id commodi. Dolor iure similique numquam voluptatem animi nulla quis. Eum, asperiores a, adipisci optio ipsa maxime perferendis fuga necessitatibus quod ducimus animi consectetur voluptatibus sapiente debitis voluptas nam, incidunt ipsam quas excepturi. Doloribus reiciendis maiores, praesentium id placeat tempore totam atque aliquid laudantium ipsum incidunt fuga quam dignissimos eius repudiandae fugit odit tempora quae temporibus sunt molestiae! Animi, temporibus. Quo ab inventore saepe doloribus dolorem est corporis cupiditate id voluptatibus. Nobis, officia? Cupiditate eius reiciendis, asperiores blanditiis cum reprehenderit? Hic, magnam asperiores eum maiores ad ipsam vero non quod autem blanditiis recusandae quaerat unde enim libero iste mollitia officia placeat. Eius sunt eveniet dolorem! Nihil, itaque commodi ut nobis, accusamus aspernatur fuga illum animi corporis unde esse minus voluptatem accusantium fugit iusto? Nisi magni quas, eligendi dolore beatae iste distinctio consequatur earum voluptas nulla minima odio dolorum sapiente sint? Libero sed beatae voluptatem harum, mollitia et laborum ea, aspernatur rerum maxime dignissimos quas neque vel repellendus repudiandae praesentium perspiciatis. Quia eum a eius numquam ut, veritatis labore alias nemo ipsum quis magni vero optio laborum earum non recusandae voluptas. Exercitationem, culpa quod aliquid nesciunt sit doloribus architecto odit natus animi cupiditate tenetur ipsam maxime asperiores eos reiciendis temporibus, id explicabo. Ad sed laudantium enim maiores? Asperiores inventore ut eaque atque, quasi, neque esse sequi tempore ratione illum molestiae exercitationem obcaecati ad aliquid magnam iure maiores ipsum harum. Alias totam labore voluptates et a adipisci facere enim ipsum impedit, nesciunt unde, magni debitis?',
};

const FullPost = () => {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>{query?.post_slug}</title>
      </Head>
      <main className={`${style.post_page} ${style.container}`}>
        {true && (
          <article className={style.post_details}>
            <Link href={`/users/${'wayne'}`} passHref>
              <section className={style.author}>
                <div className={style.author_info}>
                  <figure className={style.author_pic}></figure>
                  <p className={style.author_name}>Wayne Rooney</p>
                </div>
                <button className={style.add_to_list}>
                  <BsBookmarkPlus className={style.icon} />
                </button>
              </section>
            </Link>
            <section className={style.post_content}>
              <h2 className={style.post_title}>{post.title}</h2>
              <p className={style.post_body}>{post.body}</p>
            </section>
            <section className={style.interact}>
              <div className={style.like_comment}>
                <button className={style.interact_btn}>
                  <BsHeart className={style.icon} /> 34
                </button>
                <button className={style.interact_btn}>
                  <BsChat className={style.icon} /> 5
                </button>
              </div>
              <div className={style.social}>
                <button className={style.interact_btn}>
                  <BsFacebook className={style.icon} />
                </button>
                <button className={style.interact_btn}>
                  <BsTwitter className={style.icon} />
                </button>
                <button className={style.interact_btn}>
                  <BsLinkedin className={style.icon} />
                </button>
              </div>
            </section>
          </article>
        )}
      </main>
    </>
  );
};

export default FullPost;
