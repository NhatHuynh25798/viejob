import React from 'react'
import { Row, Col, Form, Input, Button, Select } from 'antd'

import Banner from 'components/Banner'
import Advantages from 'components/Advantages'
import './style.scss'

const Homepage = (props) => {
  const { path } = props
  const [form] = Form.useForm()
  const { Option } = Select

  const contentProvider = {
    title: 'CẦN NGƯỜI LÀM SẼ CÓ NGAY',
    description:
      'Tiếp cận nhanh chóng với 40,000+ nhân sự sẵn sàng làm việc, mọi thủ tục được VieJob hỗ trợ',
  }

  const advantagesProvider = [
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

  const contentCustomer = {
    title: 'Tìm việc làm thời vụ trong vài phút',
    description:
      'Chủ động chọn việc làm, ngày đi làm cho các công ty uy tín như Tiki, GHN, Shopee,...',
  }

  const advantagesCustomer = [
    {
      img: './assets/images/salary.svg',
      title: {
        color: '#f5a337',
        content: 'Thu nhập hấp dẫn',
      },
      description:
        'Chủ động chọn việc thu nhập cao, nhận lương hàng tuần, nhiều chế độ thưởng thêm hấp dẫn.',
    },
    {
      img: './assets/images/schedule.svg',
      title: {
        color: '#37c994',
        content: 'Làm việc linh hoạt',
      },
      description:
        'Tùy chọn ngày, giờ, địa điểm phù hợp với bạn. Chọn nhiều việc xen kẽ để tối ưu hóa thời gian của bạn.',
    },
    {
      img: './assets/images/support.svg',
      title: {
        color: '#374fc7',
        content: 'Luôn được quan tâm',
      },
      description:
        'Hướng dẫn làm việc chi tiết. Được đóng bảo hiểm và đóng thuế đầy đủ khi làm việc.',
    },
  ]

  const jobs = [
    'Tài xế/ Giao hàng',
    'Thủ kho/ Kho vận',
    'Nhân viên phục vụ',
    'Bảo vệ',
    'Thợ xây/ Thợ hồ',
    'Gia sư',
    'Thợ sửa chữa các loại',
    'Thợ làm tóc/ Nail/ Spa /Thẩm mỹ',
    'Công việc khác',
  ]

  return (
    <Row justify='center'>
      <Col xs={24} sm={24}>
        <Banner
          backgroundImage={
            path === '/'
              ? '/assets/images/provider-banner.jpg'
              : '/assets/images/customer-banner.jpg'
          }
          content={path === '/' ? contentProvider : contentCustomer}
        />
      </Col>
      {path !== '/' && (
        <Col xs={24} className='find-filter' id='find-filter'>
          <Row justify='space-between' className='container' gutter={[32, 0]}>
            <Col xs={12}>
              <span
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#545a65',
                }}
              >
                Rất nhiều công việc hấp dẫn đang chờ bạn.
              </span>
            </Col>
            <Col xs={12}>
              <Form
                form={form}
                scrollToFirstError
                className='find-filter__form'
              >
                <Form.Item name='jobs'>
                  <Input
                    size='large'
                    placeholder='Nhập tên công việc cần tìm'
                  />
                </Form.Item>

                <Form.Item name='types'>
                  <Select size='large' defaultValue={'1'}>
                    <Option key='1'>Tất cả</Option>
                    <Option key='2'>Bán thời gian</Option>
                    <Option key='3'>Toàn thời gian</Option>
                    <Option key='4'>Việc làm thời vụ</Option>
                  </Select>
                </Form.Item>

                <Form.Item name='categories'>
                  <Select size='large' defaultValue={'-1'}>
                    <Option key='-1'>Tất cả công việc</Option>
                    {jobs?.map((it, idx) => (
                      <Option key={idx} value={it}>
                        {it}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Row>
                  <Button
                    htmlType='submit'
                    type='primary'
                    size='large'
                    style={{ width: '40%', borderRadius: '0.4rem' }}
                  >
                    Xem ngay
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      )}
      <Col xs={24} sm={24} className='container'>
        <Advantages
          data={path === '/' ? advantagesProvider : advantagesCustomer}
        />
      </Col>
      {path === '/' && (
        <Col className='contact-us'>
          <Row className='container' justify='space-between'>
            <Col xs={12} className='contact-us__info'>
              <Row>
                <Col xs={24}>
                  <span>Liên hệ ngay</span>
                  <p>
                    Bạn đang đau đầu với vấn đề tuyển dụng nhân sự? Điền thông
                    tin ngay để đăng ký và chúng tôi sẽ giúp bạn điều đó.
                  </p>
                </Col>
              </Row>
              <Row justify='space-around' className='info-data'>
                <Col xs={12}>
                  <div className='info-data__number'>40.000+</div>
                  <span>người lao động</span>
                </Col>
                <Col xs={12}>
                  <div className='info-data__number'>360.000+</div>
                  <span>giờ làm việc</span>
                </Col>
              </Row>
            </Col>
            <Col xs={12} className='contact-us__form'>
              <Form form={form} scrollToFirstError className='form-body'>
                <Form.Item
                  name='name'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập tên của bạn',
                    },
                  ]}
                >
                  <Input
                    size='large'
                    addonBefore={
                      <img src='./assets/images/user-icon.svg' alt='icon' />
                    }
                    placeholder='Nhập tên của bạn'
                  />
                </Form.Item>

                <Form.Item
                  name='phone'
                  rules={[
                    {
                      required: true,
                      message: 'Hãy nhập số điện thoại của bạn',
                    },
                  ]}
                >
                  <Input
                    size='large'
                    addonBefore={
                      <img src='./assets/images/phone-icon.svg' alt='icon' />
                    }
                    placeholder='Nhập số điện thoại của bạn'
                  />
                </Form.Item>

                <Form.Item
                  name='email'
                  rules={[
                    {
                      type: 'email',
                      message: 'Email không hợp lệ',
                    },
                    {
                      required: true,
                      message: 'Vui lòng điền email',
                    },
                  ]}
                >
                  <Input
                    size='large'
                    addonBefore={
                      <img src='./assets/images/email-icon.svg' alt='icon' />
                    }
                    placeholder='Nhập email của bạn'
                  />
                </Form.Item>

                <Row justify='end'>
                  <Button
                    htmlType='submit'
                    type='primary'
                    size='large'
                    style={{ borderRadius: '0.4rem' }}
                  >
                    Đăng ký ngay
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  )
}

export default Homepage
