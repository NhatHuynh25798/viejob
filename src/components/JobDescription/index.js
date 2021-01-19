import React from 'react'
import { Row, Col, Button, Divider } from 'antd'
import currencyFormat from 'utils/currencyFormat'

const JobDescription = ({ item }) => {
  return (
    <Row>
      <Col md={24}>
        <Row gutter={[16, 16]}>
          <Col md={6}>
            <div
              style={{
                backgroundImage: `url('${item?.image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: '150px',
                borderRadius: '6px',
              }}
            />
          </Col>
          <Col md={10}>
            <Row gutter={[0, 10]}>
              <Col
                style={{
                  paddingRight: '30px',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  lineHeight: '30px',
                }}
              >
                {item?.name}
              </Col>
              <Col span={24}>{item?.userName}</Col>
              <Col>
                Mã việc: {item?.id} | {item?.address}
              </Col>
            </Row>
          </Col>
          <Col
            md={8}
            style={{
              display: ' flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
          >
            <Button type='primary' size={'large'}>
              Nhận việc
            </Button>
          </Col>
          <Divider />
        </Row>
      </Col>
      <Col md={8}>
        <Row align='middle' gutter={[10, 10]}>
          <Col>
            <img
              style={{ width: 16, height: 16 }}
              src='/assets/images/fee-icon.svg'
              alt='e'
            />
            &nbsp;&nbsp; <strong>Thù lao</strong> &nbsp;&nbsp;
            <span
              style={{
                color: '#f5a337',
                backgroundColor: 'rgba(245, 163, 55, 0.1)',
                padding: '7px 15px',
                borderRadius: '6px',
              }}
            >
              <strong>
                {currencyFormat(item?.salary?.value)}/{item?.salary?.unit}
              </strong>
            </span>
          </Col>
          <Col span={24}>
            <div>{item?.salary?.note}</div>
          </Col>
        </Row>
      </Col>
      <Col md={8}>
        <Row align='middle' gutter={[10, 10]}>
          <Col>
            <img src='/assets/images/calendar-icon.svg' alt='e' />
            &nbsp;&nbsp; <strong>Lịch làm việc</strong>
          </Col>
          <Col span={24}>
            Thời gian: Từ {item?.schedule?.startDate} đến
            {item?.schedule?.endDate}
          </Col>
          <Col span={24}>
            Ca làm: {item?.schedule?.startTime}-{item?.schedule?.endTime}
          </Col>
        </Row>
      </Col>
      <Col md={8}>
        <Row align='middle' gutter={[10, 10]}>
          <Col span={24}>
            <img
              style={{ width: 20, height: 20 }}
              src='/assets/images/location-icon.svg'
              alt='e'
            />
            &nbsp;&nbsp; <strong>Nơi làm việc</strong> &nbsp;&nbsp;
          </Col>
          <Col>
            <div>{item?.address}</div>
          </Col>
        </Row>
      </Col>
      <Divider />
      <Col>
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <strong>Mô tả công việc</strong>
          </Col>
          <Col span={24}>
            <div dangerouslySetInnerHTML={{ __html: item?.description }} />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <strong>Yêu cầu công việc</strong>
          </Col>
          <Col span={24}>
            <div dangerouslySetInnerHTML={{ __html: item?.request }} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default JobDescription
