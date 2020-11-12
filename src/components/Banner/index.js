import React from 'react'
import { Row, Col, Button } from 'antd'

import './style.scss'

const Banner = (props) => {
  return (
    <Row justify='center'>
      <Col
        xs={24}
        className='banner'
        style={{ backgroundImage: `url('${props.backgroundImage}')` }}
      >
        <Col xs={{ span: 18, offset: 3 }}>
          <Row className='banner__content'>
            <Col xs={24} className='banner__content--title'>
              {props?.content?.title}
            </Col>
            <Col xs={24} className='banner__content--description'>
              {props?.content?.description}
            </Col>
            <Col>
              <Button
                type='primary'
                size='large'
                className='banner__content--button'
              >
                Đăng ký ngay
              </Button>
            </Col>
            <Col style={{ marginTop: '15vh' }}>
              <Row
                onClick={() => {
                  let elmnt = document.getElementById('advantage')
                  elmnt.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                <Col>
                  <img
                    src='./assets/images/arrow-down.svg'
                    alt='down'
                    className='arrow-down'
                  />
                </Col>
                <Col className='arrow-click'>Kéo xuốnga để xem thêm</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </Row>
  )
}
export default Banner
