import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import JobDescription from 'components/JobDescription'

import jobsData from '../../jobs.js'

import 'antd/dist/antd.css'
import './style.scss'

const JobDetail = (props) => {
  const { slug } = props
  const [data, setData] = useState({})
  const findJobBySlug = () => jobsData?.find((job) => job.slug === slug)

  useEffect(() => {
    setData(findJobBySlug())
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <Row>
      <Col md={{ offset: 2, span: 20 }}>
        <Col md={24}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Col md={24}>
              <JobDescription item={data} />
            </Col>
          </Row>
        </Col>
      </Col>
    </Row>
  )
}

export default JobDetail
