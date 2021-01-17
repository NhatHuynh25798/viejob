import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'antd';

import './style.scss';

const Slider = ({
  data = [],
  Template,
  initialSlide = 0,
  showArrow = false,
  centerMode = false,
  focusOnSelect = false,
  slidesToShow = 1,
  slidesPerRow = 1,
  draggable = true,
  responsive = [],
  dots = false,
  lazyLoad = true,
  nextArrow,
  prevArrow,
}) => {
  const [initSlide, setInitSlide] = useState(initialSlide);
  const slideRef = useRef();

  useEffect((initialSlide) => {
    setInitSlide(initialSlide);
    slideRef.current.slick.innerSlider.slickGoTo(initialSlide);
  }, []);

  const settings = {
    dots,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesPerRow,
    centerMode,
    focusOnSelect,
    draggable,
    centerPadding: '60px',
    initialSlide: initSlide,
    arrows: !!showArrow,
    responsive,
    lazyLoad,
    nextArrow,
    prevArrow,
    // nextArrow: <img src='/static/images/next.svg' alt='slider next arrow' />,
    // prevArrow: (
    //   <img src='/static/images/previous.svg' alt='slider previous arrow' />
    // ),
  };

  const handleOnClick = (idx) => {
    if (focusOnSelect) {
      slideRef.current.slick.innerSlider.slickGoTo(idx);
    }
  };

  return (
    <Carousel
      {...settings}
      onClick={(e) => console.log('carousel click', e)}
      ref={slideRef}
      className="carouselWrapped"
    >
      {data?.map((item, idx) => (
        <Template
          onClick={() => handleOnClick(idx)}
          key={idx}
          idx={idx}
          {...item}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
