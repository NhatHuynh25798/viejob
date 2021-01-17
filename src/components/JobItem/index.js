import React, { useState } from 'react'
import { Link, navigate } from '@reach/router'
import { Row, Col, Button } from 'antd'

import currencyFormat from 'utils/currencyFormat'
import 'antd/dist/antd.css'
import './style.scss'

const JobItem = (data) => {
  const [active, setActive] = useState(false)

  return (
    <div
      style={{
        padding: '0 0.4rem',
        marginTop: '1.2rem',
        marginBottom: '2.4rem',
      }}
    >
      <div
        className='job-card__container'
        onMouseMove={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Row
          className='job-card__image'
          style={{
            backgroundImage: `url('${data?.image}')`,
          }}
        ></Row>
        {!active ? (
          <div></div>
        ) : (
          <div className='job-card__image--styled'></div>
        )}
        <div className='job-card__description'>
          <Link to='/' className='job-card__description--name'>
            {data?.name}
          </Link>
          <Row align='top'>
            <Col sx={{ span: 24 }}>
              {data?.salary?.maxValue ? (
                <span className='job-card__description--price'>
                  {currencyFormat(data?.salary?.value)} -{' '}
                  {currencyFormat(data?.salary?.maxValue)}
                </span>
              ) : (
                <span className='job-card__description--price'>
                  {currencyFormat(data?.salary?.value)}/{data?.salary?.unit}
                </span>
              )}
            </Col>
          </Row>
          <Row align='top' justify='end' style={{ marginTop: '10px' }}>
            <Col sx={{ span: 24 }}>
              <Button
                type='link'
                onClick={() => {
                  navigate(`/chi-tiet-cong-viec/${data?.slug}`)
                }}
              >
                Xem chi tiết
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default JobItem
