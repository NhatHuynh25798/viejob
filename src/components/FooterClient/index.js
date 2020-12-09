import React from 'react'
import { Row, Col } from 'antd'
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './style.scss'

const FooterClient = (props) => {
  const TitleMenu = ({ title }) => (
    <Row
      style={{
        marginBottom: '30px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'var(--tertiary)',
      }}
    >
      {title}
    </Row>
  )

  const menu = [
    {
      title: <TitleMenu title='Công ty' />,
      items: [
        {
          link: '/',
          content: 'Về chúng tôi',
        },
        {
          link: '/',
          content: 'Blog',
        },
        {
          link: '/',
          content: 'Tuyển dụng',
        },
        {
          link: '',
          content: 'Hợp tác cùng VieJob',
        },
      ],
    },
    {
      title: <TitleMenu title='Chính sách' />,
      items: [
        {
          link: '/',
          content: 'Chính sách bảo mật',
        },
        {
          link: '/',
          content: 'Chính sách hợp tác',
        },
        {
          link: '/',
          content: 'Quy chế sàn Thương mại điện tử VieJob',
        },
      ],
    },
  ]

  return (
    <Row justify='space-between'>
      <Col xs={{ span: 24 }}>
        <Row justify='center' align='top' style={{ marginBottom: '10px  ' }}>
          <Col xs={24} md={12} sm={12} style={{ paddingRight: '0 10px' }}>
            <Row className='logo-footer'>
              <Col>
                <span className='logo-footer__title'>VieJobs</span>
              </Col>
            </Row>
            <Row className='footer-item'>Hotline: 0343 661 688</Row>
            <Row className='footer-item'>Email: nhathuynh25798@gmail.com</Row>
            <Row className='footer-item'>
              Địa chỉ: Trường Đại học Nông Lâm, khu phố 6, phường Linh Trung,
              quận Thủ Đức, thành phố Hồ Chí Minh
            </Row>
          </Col>

          {menu.map((it, idx) => (
            <Col xs={24} md={6} sm={12} key={idx}>
              {it?.title}
              {it?.items?.map((it, idx) => (
                <Row key={idx}>
                  <Link to={it?.link} className='footer-item'>
                    {it?.content}
                  </Link>
                </Row>
              ))}
            </Col>
          ))}
        </Row>
        <Row
          justify='space-between'
          className='footer-item'
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '15px',
            borderTop: '1px solid #d5dae1',
          }}
        >
          <span style={{ display: 'block' }}>
            Copyright © 2020&nbsp;
            <span>VieJob - Make by Trong Nhat</span>
          </span>
          <div>
            <a href='https://www.facebook.com/huynh.trongnhat/'>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{
                  margin: '0 10px',
                  fontSize: '30px',
                  color: '#898f9a',
                }}
              />
            </a>{' '}
            <a href='https://www.youtube.com/'>
              <FontAwesomeIcon
                icon={faYoutube}
                style={{
                  margin: '0 10px',
                  fontSize: '30px',
                  color: '#898f9a',
                }}
              />
            </a>
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default FooterClient
