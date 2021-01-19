import React, { useState, useEffect, useMemo } from 'react'
import { Row, Col } from 'antd'
import { Link, navigate } from '@reach/router'
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
  }, [slug])

  return (
    <Row>
      <Col md={{ offset: 2, span: 20 }}>
        <Row>
          <Col xs={24} md={24}>
            <img
              style={{
                width: '100%',
              }}
              src='/assets/images/0WuXTFTBHEgkyyQW4WQb.jpg'
              alt='background'
            />
          </Col>
          <Col md={24}>
            <Row style={{ justifyContent: 'space-between' }}>
              <Col md={16}>
                <JobDescription item={data} />
              </Col>
              <Col md={6}>b</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default JobDetail
