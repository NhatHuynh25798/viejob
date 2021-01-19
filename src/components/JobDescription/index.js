import React from 'react'
import { Row, Col, Button, Divider } from 'antd'
import currencyFormat from 'utils/currencyFormat'

const JobDescription = ({ item }) => {
  return (
    <Row>
      <Col md={24}>
        <Row>
          <Col md={6}>
            <div
              style={{
                background: `url(${item?.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '80px',
                height: '80px',
                borderRadius: '6px',
              }}
            />
          </Col>
          <Col md={10}>
            <div>{item?.name}</div>
            <div>{item?.userName}</div>
            <div>
              Mã việc: {item?.id} | {item?.address}
            </div>
          </Col>
          <Col md={8}>
            <Button>Nhận việc</Button>
          </Col>
          <Divider />
        </Row>
      </Col>
      <Col md={24}>
        <Row>
          <img src='/assets/images/fee-icon.svg' alt='e' />
          &nbsp;&nbsp; Thù lao &nbsp;&nbsp;{currencyFormat(item?.salary?.value)}
          /{item?.salary?.unit}
        </Row>
        <Row>
          <div>{item?.salary?.note}</div>
        </Row>
      </Col>
      <Divider />
      <Col md={24}>
        <Row>
          <img src='/assets/images/calendar-icon.svg' alt='e' />
          &nbsp;&nbsp; Lịch làm việc
        </Row>
        <div>
          <div>
            Thời gian: Từ {item?.schedule?.startDate} đến
            {item?.schedule?.endDate}
          </div>
          <div>
            Ca làm: {item?.schedule?.startTime}-{item?.schedule?.endTime}
          </div>
        </div>
      </Col>
      <Divider />
      <Col md={24}>
        <Row>
          <img src='/assets/images/location-icon.svg' alt='e' />
          &nbsp;&nbsp; Nơi làm việc &nbsp;&nbsp;
        </Row>
        <Row>
          <div>{item?.address}</div>
        </Row>
      </Col>
      <Divider />
      <Col md={24}>
        <Row>Mô tả</Row>
        <Row>
          <div dangerouslySetInnerHTML={{ __html: item?.description }} />
        </Row>
      </Col>
    </Row>
  )
}

export default JobDescription
