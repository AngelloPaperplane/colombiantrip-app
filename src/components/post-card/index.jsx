import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './post-card.module.css';

const PostCard = ({ popularPost }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <div
      className={`${styles.postCard}`}
      style={{ width: popularPost && popularPost.width, gridArea: popularPost && popularPost.gridArea }}>
      <Link href={`/meet-colombia/detail/${popularPost.href}`}></Link>
      <div
        className={`${styles.containerImg}`}
        style={{ height: popularPost && popularPost.height }}>
        <Image fill src={`${popularPost.img}`} alt="" />
      </div>
      <div
        className={`${styles.infoPost}`}
        style={{
          color: popularPost && popularPost.colorText,
          backgroundColor: popularPost && popularPost.bgColor,
        }}>
        <p className={`${styles.datePost} ${Bigola.className}`}>
          {popularPost.date}
        </p>
        <h2 className={`${styles.titlePost} ${Bigola.className}`}>
          {popularPost.title}
        </h2>
        <p className={styles.typePost}>{popularPost.type}</p>
      </div>
    </div>
  );
};

export default PostCard;