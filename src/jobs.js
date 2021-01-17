export default [
  {
    id: 1,
    name: 'CTV làm việc kho ca 21:00 - 05:00',
    userId: 1,
    userName: 'Công ty cổ phần dịch vụ giao hàng nhanh',
    salary: {
      value: 35000,
      unit: 'giờ',
      note:
        'Thù lao sẽ được thanh toán sau khi kết thúc ca và xác nhận giờ công',
    },
    type: 'Thời vụ',
    category: 'Thủ kho/Kho vận',
    schedule: {
      startDate: '12/12/2020',
      endDate: '13/12/2020',
      startTime: '20:00',
      endTime: '05:00',
    },
    address: 'Phường Tân Thới, quận 12, thành phố Hồ Chí Minh',
    description: `
    <p>- Xử l&yacute; l&ecirc;n/xuống h&agrave;ng ho&aacute;.<br />- Đ&oacute;ng g&oacute;i.<br />- Kiểm đếm h&agrave;ng ho&aacute;.<br />- B&agrave;n giao h&agrave;ng ho&aacute; cho c&aacute;c nh&acirc;n vi&ecirc;n giao h&agrave;ng.<br />- Thưởng th&ecirc;m nếu năng suất l&agrave;m việc su&acirc;t l&agrave;m việc tốt.</p>
    `,
    request: '<p>- C&oacute; sức khoẻ.<br />- Ưu ti&ecirc;n nam.</p>',
    image: './assets/images/viec-lam-kho.jpeg',
    slug: 'ctv-lam-viec-kho-ca-21h-5h',
  },
  {
    id: 2,
    name: 'CTV Phân loại hàng event tháng 12 ca (9h00 - 18h00)',
    userId: 2,
    userName: 'Ninja Van',
    salary: {
      value: 35000,
      unit: 'giờ',
      note:
        'Thù lao sẽ được thanh toán sau khi kết thúc ca và xác nhận giờ công',
    },
    type: 'Thời vụ',
    category: 'Thủ kho/Kho vận',
    schedule: {
      startDate: '13/12/2020',
      endDate: '13/12/2020',
      startTime: '09:00',
      endTime: '18:00',
    },
    address:
      'Số 19 Quốc lộ 22, Ấp Trạm Bơm, Xã Tân Phú Trung, Huyện Củ Chi, Xã Tân Phú Trung, Huyện Củ Chi, Hồ Chí Minh',
    description: `
    <p>- Ph&acirc;n loại sắp xếp h&agrave;ng h&oacute;a<br />- Phụ chuyển h&agrave;ng l&ecirc;n tải<br />- L&agrave;m theo hướng dẫn của quản l&yacute;</p>`,
    request: '<p>- C&oacute; sức khoẻ.<br />- Ưu ti&ecirc;n nam.</p>',
    image: './assets/images/phan-loai-hang-hoa.jpeg',
    slug: 'phan-loai-event-thang-12-ca-9h-18h',
  },
  {
    id: 3,
    name: 'CTV giúp việc nhà, nhận tiền ngay sau ca làm',
    userId: 4,
    userName: 'Nguyễn Thị Thu Ngân',
    salary: {
      value: 7000000,
      unit: 'tháng',
      note: 'Thù lao sẽ được trả theo tháng',
    },
    type: 'Toàn thời gian',
    category: 'Thủ kho/Kho vận',
    schedule: {
      startDate: '13/12/2020',
      endDate: '',
      startTime: '09:00',
      endTime: '21:00',
    },
    address: 'Số 284/25/20, đường Lý Thường Kiệt, phường 14, quận 10.',
    description: `<p>Lau ch&ugrave;i, dọn dẹp</p>
    <p>Giặt giũ, ủi đồ</p>
    <p>Tổng vệ sinh</p>`,
    request: `<p>Si&ecirc;ng năng, kỹ t&iacute;nh v&agrave; y&ecirc;u th&iacute;ch c&ocirc;ng việc</p>
    <p>Ưu ti&ecirc;n đ&atilde; c&oacute; kinh nghiệm gi&uacute;p việc nh&agrave;</p>
    <p>Người ứng tuyển sẽ n&oacute;i chuyện với người đăng tuyển trước khi nhận việc</p>`,
    image: './assets/images/sinh-vien-don-nha-theo-gio-1024x678.jpeg',
    slug: 'cong-viec-giup-viec-nha',
  },
  {
    id: 4,
    name: 'CTV Làm việc kho Ca 10h - 20h - Củ Chi (Chủ nhật)',
    userId: 3,
    userName: 'Công ty cổ phần giao hàng tiết kiệm',
    salary: {
      value: 35000,
      unit: 'giờ',
      note:
        'Thù lao sẽ được thanh toán sau khi kết thúc ca và xác nhận giờ công',
    },
    type: 'Thời vụ',
    category: 'Thủ kho/Kho vận',
    schedule: {
      startDate: '13/12/2020',
      endDate: '13/12/2020',
      startTime: '10:00',
      endTime: '20:00',
    },
    address:
      'Số 19 Quốc lộ 22, Ấp Trạm Bơm, Xã Tân Phú Trung, Huyện Củ Chi, Xã Tân Phú Trung, Huyện Củ Chi, Hồ Chí Minh',
    description: `
    <p>- Ph&acirc;n loại sắp xếp h&agrave;ng h&oacute;a<br />- Phụ chuyển h&agrave;ng l&ecirc;n tải<br />- L&agrave;m theo hướng dẫn của quản l&yacute;</p>`,
    request: '<p>- C&oacute; sức khoẻ.<br />- Ưu ti&ecirc;n nam.</p>',
    image: './assets/images/t.jpg',
    slug: 'lam-viec-kho-ca-10h-20h-cu-chi',
  },
  {
    id: 5,
    name: 'CTV Phân loại hàng event tháng 12 ca (9h00 - 18h00)',
    userId: 1,
    userName: 'Công ty cổ phần dịch vụ Giao hàng nhanh',
    salary: {
      value: 35000,
      unit: 'giờ',
      note:
        'Thù lao sẽ được thanh toán sau khi kết thúc ca và xác nhận giờ công',
    },
    type: 'Thời vụ',
    category: 'Thủ kho/Kho vận',
    schedule: {
      startDate: '13/12/2020',
      endDate: '13/12/2020',
      startTime: '09:00',
      endTime: '18:00',
    },
    address:
      'Khu chế xuất Linh Trung, phường Linh Trung, quận Thủ, Hồ Chí Minh',
    description: `
    <p>- Ph&acirc;n loại sắp xếp h&agrave;ng h&oacute;a<br />- Phụ chuyển h&agrave;ng l&ecirc;n tải<br />- L&agrave;m theo hướng dẫn của quản l&yacute;</p>`,
    request: '<p>- C&oacute; sức khoẻ.<br />- Ưu ti&ecirc;n nam.</p>',
    image: './assets/images/đơn-hàng-đóng-gói-hàng-hóa-đài-bắc-đài-loan.jpeg',
    slug: 'phan-loai-hang-event-thang-12',
  },
  {
    id: 6,
    name: 'Tuyển nhân viên bảo vệ',
    userId: 5,
    userName: 'Coffee 1998',
    salary: {
      value: 5500000,
      maxValue: 10000000,
      unit: 'tháng',
      note: 'Thù lao sẽ được thanh toán theo tháng',
    },
    type: 'Toàn thời gian',
    category: 'Bảo vệ',
    schedule: {
      startDate: '13/12/2020',
      endDate: '13/12/2020',
      startTime: '09:00',
      endTime: '18:00',
    },
    address:
      '84 đường Linh Trung, khu phố 2, phường Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh',
    description: `
    <p>- L&agrave;m theo hướng dẫn của quản l&yacute;</p>`,
    request: '<p>- C&oacute; sức khoẻ.',
    image: './assets/images/baove.jpeg',
    slug: 'tuyen-nhan-vien-bao-ve',
  },
]

function getName(name, old) {
  console.log(arguments)
}

const getNamed = () => {}

const getName3 = (function () {})(function getName4() {})()
