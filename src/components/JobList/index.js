import React from 'react'
import { Row, Col } from 'antd'

import Slider from 'components/Slider'
import JobItem from '../JobItem'
import 'antd/dist/antd.css'
import './style.scss'

const PrevArrow = (props) => {
  const { onClick, className } = props
  return (
    <div className={className} onClick={onClick}>
      <svg
        width='11'
        height='19'
        viewBox='0 0 11 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.85718 17.5713L1.85718 9.57129L9.85718 1.57129'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

const NextArrow = (props) => {
  const { onClick, className } = props
  return (
    <div className={className} onClick={onClick}>
      <svg
        width='11'
        height='19'
        viewBox='0 0 11 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.14282 1.42871L9.14282 9.42871L1.14282 17.4287'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

const JobList = (props) => {
  const {
    data,
    slidesToShow,
    dots,
    infinite,
    speed,
    slidesToScroll,
    showArrow,
    centerMode,
    centerPadding,
  } = props

  const carouselProps = {
    lazyLoad: false,
    dots: dots ?? false,
    infinite: infinite ?? false,
    speed: speed ?? 500,
    slidesToShow: slidesToShow ?? 5,
    slidesToScroll: slidesToScroll ?? 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    showArrow: showArrow ?? true,
    centerMode: centerMode ?? false,
    centerPadding: centerPadding ?? '20px',
  }

  return (
    <Row className='list-item__container'>
      <Col xs={{ span: 24 }}>
        <div>
          <Slider
            {...carouselProps}
            draggable={true}
            Template={JobItem}
            data={data.sort((a, b) => a?.id - b?.id)}
          ></Slider>
        </div>
      </Col>
    </Row>
  )
}

export default JobList
