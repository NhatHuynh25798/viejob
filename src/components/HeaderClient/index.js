import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'
import { Link, navigate } from '@reach/router'

import 'antd/dist/antd.css'
import './style.scss'

const HeaderClient = (props) => {
  const { color } = props
  const [active, setActive] = useState(true)
  const [contentButton, setContentButton] = useState('Cho người tìm việc')

  return (
    <Row justify='space-between' style={{ width: '100%' }}>
      <Col xs={0} md={{ span: 24 }}>
        <Row
          justify='space-between'
          align='middle'
          style={{ width: '100%', height: '100%', flexWrap: 'nowrap' }}
        >
          <Col className='logo'>
            <Link to='/' className='logo-link'>
              <span className='logo-title' style={{ margin: 0, color: color }}>
                VieJobs
              </span>
            </Link>
          </Col>
          <Col style={{ flex: '1 1 0%', color: 'var(--tertiary)!important' }}>
            <Row justify='end' align='middle'>
              <ul style={{ margin: 0 }} className='menu'>
                <Link to='/' className='menu__item'>
                  <li style={{ color: color }}>
                    <span>Về chúng tôi</span>
                  </li>
                </Link>
                <Link to='/' className='menu__item'>
                  <li style={{ color: color }}>
                    <span>Hỗ trợ</span>
                  </li>
                </Link>
                <Link to='/' className='menu__item'>
                  <li style={{ color: color }}>
                    <span>Blog</span>
                  </li>
                </Link>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    size='large'
                    type='primary'
                    className={`${active ? 'customerButton' : ''} buttonHeader`}
                    onClick={() => {
                      setActive(!active)
                      navigate(active ? '/cho-nguoi-tim-viec' : '/')
                      setContentButton(
                        active ? 'Cho doanh nghiệp' : 'Cho người tìm việc'
                      )
                    }}
                  >
                    {contentButton}
                  </Button>
                </Col>
              </ul>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default HeaderClient
