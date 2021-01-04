import React from 'react';
import Link from 'next/link';
import style from './PreviewCard.module.css';

const PreviewCard = ({
  imgSrc,
  heading,
  subHeading,
  text
}) => {
  return (
    <Link href="/article"> 
      <article className={style.galleryPreview}>     
          <img className={style.galleryPreviewImage} src={imgSrc} />
          <div className={style.textWrapper}>
            <div className={style.heading}>{heading}</div>
            <div className={style.subHeading}>{subHeading}</div>
          </div>
          <div className={style.text}>{text}</div>
      </article>
    </Link>
  )
}

export default PreviewCard;