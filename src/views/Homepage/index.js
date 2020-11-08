import React from 'react'
import { Row, Col } from 'antd'

import Banner from 'components/Banner'
import Advantages from 'components/Advantages'
import './style.scss'

const Homepage = (props) => {
  const content = {
    title: 'CẦN NGƯỜI LÀM SẼ CÓ NGAY',
    description:
      'Tiếp cận nhanh chóng với 40,000+ nhân sự sẵn sàng làm việc, mọi thủ tục được VieJob hỗ trợ',
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
          backgroundImage='https://viec.co/_next/static/imgs/banner-a89f0651555909c0474a1a4e4250395d.jpg'
          content={content}
        />
      </Col>
      <Col xs={24} sm={24}>
        <Advantages data={advantages} />
      </Col>
    </Row>
  )
}

export default Homepage
