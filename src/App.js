import React, { Suspense, useState, useEffect } from 'react'
import { Layout, Spin, Row, Col } from 'antd'

import HeaderClient from './components/HeaderClient'
import FooterClient from './components/FooterClient'
import Routes from './routes.js'
import './App.less'

const App = () => {
  const { Header, Footer, Content } = Layout
  const [background, setBackground] = useState('transparent')
  const [color, setColor] = useState('var(--quaternary)')

  useEffect(() => {
    window.addEventListener('scroll', (e) => detectOnScroll(e))
  }, [])

  const detectOnScroll = (e) => {
    const window = e.currentTarget
    let prev = window.scrollY
    if (prev > 0) {
      setBackground('var(--quaternary)')
      setColor('var(--tertiary)')
    }
    if (prev === 0) {
      setBackground('transparent')
      setColor('var(--quaternary)')
    }
  }

  return (
    <Suspense
      fallback={
        <Spin
          size='large'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: 'var(--primary)',
          }}
        />
      }
    >
      <Layout className='layout-container'>
        <Header className='header-container' style={{ background: background }}>
          <Row className='container'>
            <Col xs={24}>
              <HeaderClient color={color} />
            </Col>
          </Row>
        </Header>
        <Content className='content-container margin-content'>
          <Routes />
        </Content>
        <Footer className='footer-container'>
          <Row className='container'>
            <Col xs={24}>
              <FooterClient />
            </Col>
          </Row>
        </Footer>
      </Layout>
    </Suspense>
  )
}

export default App
