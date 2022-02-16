import React from 'react';
import { Link } from 'react-router-dom';

import webp from '../../assets/images/404/webp/img.webp';
import webp2x from '../../assets/images/404/webp/img@2x.webp';
import webp3x from '../../assets/images/404/webp/img@3x.webp';
import png from '../../assets/images/404/png/img.png';
import png2x from '../../assets/images/404/png/img@2x.png';
import png3x from '../../assets/images/404/png/img@3x.png';
import styles from './styles.module.scss';

const { errorPage, imgWrapper, textBlock, title, description } = styles;

const Page404 = () => (
  <section className={errorPage}>
    <div className={imgWrapper}>
      <picture>
        <source type="image/webp" srcSet={`${webp} 1x, ${webp2x} 2x, ${webp3x} 3x`}/>
        <img width="600" height="549" alt="frightened man"
          srcSet={`${png} 1x, ${png2x} 2x, ${png3x} 3x`}
          src={png}
        />
      </picture>
    </div>
    <div className={textBlock}>
      <h2 className={title}>404</h2>
      <p className={description}>Oops, this page is not found...</p>
      <Link to="/">Go home</Link>
    </div>
  </section>
);

export default Page404;
