import React from 'react'
import { Row, Col } from 'antd'

import Banner from 'components/Banner'
import Advantages from 'components/Advantages'

const CustomerPage = (props) => {
  const content = {
    title: 'Tìm việc làm thời vụ trong vài phút',
    description:
      'Chủ động chọn việc làm, ngày đi làm cho các công ty uy tín như Tiki, GHN, Shopee,...',
  }

  const advantages = [
    {
      img: './assets/images/findFreelancer.svg',
      title: {
        color: '#f5a337',
        content: 'Tìm người nhanh chóng',
      },
      description:
        'Tuyển được người chỉ sau 4h. Từ bây giờ việc tìm kiếm nhân sự ngắn hạn sẽ không còn là vấn đề của bạn nữa.',
    },
    {
      img: './assets/images/fee.svg',
      title: {
        color: '#37c994',
        content: 'Chấm công & tính phí',
      },
      description:
        'Tạm biệt giấy tờ phức tạp. Mọi công việc chấm công, tính lương, trả lương đều được tự động hoá thông qua nền tảng VieJob.',
    },
    {
      img: './assets/images/support.svg',
      title: {
        color: '#374fc7',
        content: 'Hỗ trợ 24/7',
      },
      description:
        'Đội chăm sóc khách hàng 24/7 luôn sẵn sàng hỗ trợ bạn để giải quyết các vấn đề cấp bách, giúp công việc của bạn luôn trôi chảy.',
    },
  ]

  return (
    <Row>
      <Col xs={24} sm={24}>
        <Banner
          backgroundImage='/assets/images/customer-banner.jpg'
          content={content}
        />
      </Col>
      <Col xs={24} sm={24}>
        <Advantages data={advantages} />
      </Col>
    </Row>
  )
}

export default CustomerPage
