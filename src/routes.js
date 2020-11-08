import React, { lazy } from 'react'
import { Link, Router } from '@reach/router'
import { Result } from 'antd'

const HomePage = lazy(() => import('./views/Homepage'))

const PageNotFound = () => (
  <Result
    status='404'
    title='404'
    subTitle='Hmm. Chúng tôi gặp khó khăn khi tìm trang web đó.'
    extra={<Link to='/'>Back Home</Link>}
  />
)

const Routes = () => {
  return (
    <Router
      style={{
        backgroundColor: '--var(tertiary)',
        width: '100%',
        maxWidth: '1920px',
      }}
    >
      <HomePage path='/' />
      <PageNotFound path='*' />
    </Router>
  )
}

export default Routes
