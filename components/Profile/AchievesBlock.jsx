import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Achieve from './Achieve';

import styles from './profile.module.scss';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function AchievesBlock() {
  return (
    <div>
      <div className={styles.achieves}>
        <Slider {...settings}>
          <Achieve name="5 посещенных мероприятий" />
          <Achieve name="10 посещенных мероприятий" />
          <Achieve name="1 год в организации" />
          <Achieve name="5 хороших отзывов" />
        </Slider>
      </div>
    </div>
  );
}
