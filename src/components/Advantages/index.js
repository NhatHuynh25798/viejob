import React from 'react'
import { Row, Col } from 'antd'

import './style.scss'

const Advantages = (props) => {
  const { data } = props

  const partners = [
    './assets/images/tiki.png',
    './assets/images/lazada.png',
    './assets/images/shopee.png',
    './assets/images/vin-id.png',
    './assets/images/huunghi.png',
    './assets/images/dhl.png',
    './assets/images/kerry.png',
    './assets/images/ninja-van.png',
    './assets/images/ghn.png',
    './assets/images/mini-good.png',
  ]

  return (
    <Row justify='center' style={{ padding: '120px' }} id='advantage'>
      <Col xs={24}>
        <Row justify='space-between' align='top'>
          {data?.map((it, idx) => (
            <Col
              sm={8}
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0 10px',
              }}
            >
              <Row
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '20px',
                }}
              >
                <img src={it?.img} alt='advantage' />
              </Row>
              <Row
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '10px',
                  fontSize: '20px',
                  textAlign: 'center',
                  color: it?.title?.color,
                }}
              >
                <span>{it?.title?.content}</span>
              </Row>
              <Row
                style={{
                  textAlign: 'center',
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#898f9a',
                }}
              >
                <span>{it?.description}</span>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
      <Col xs={24} style={{ padding: '120px 0 0 0' }}>
        <Row justify='space-between'>
          <Col
            style={{
              flex: '1 1 0%',
            }}
          >
            <Row justify='center'>
              <Col style={{ width: '70%' }}>
                <Row>
                  <span
                    style={{
                      color: 'var(--tertiary)',
                      paddingBottom: '30px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                    }}
                  >
                    Đối tác uy tín
                  </span>
                </Row>
                <Row>
                  <span
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    VieJob luôn nỗ lực kết nối cùng các đối tác uy tín để cung
                    cấp những công việc có mức thù lao cao cùng môi trường làm
                    việc chuyên nghiệp.
                  </span>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={8}>
            {partners.map((it, idx) => (
              <img
                key={idx}
                src={it}
                alt={it}
                style={{
                  paddingBottom: '10px',
                  paddingRight: '5px',
                  paddingLeft: '5px',
                  flex: '0 0 17%',
                  width: '80px',
                  maxWidth: ' 80px',
                }}
              />
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Advantages
