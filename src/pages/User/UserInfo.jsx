import React from 'react'

function UserInfo(props) {
  return (
    <div>
    <div>THÔNG TIN TÀI KHOẢN</div>
    <p className='my-3'><strong>Họ tên</strong>: {props?.data.name}</p>
    <p><strong>Email</strong>: {props?.data.email}</p>
    </div>
  )
}

export default UserInfo