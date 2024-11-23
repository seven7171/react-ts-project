import React, { FC } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Home: FC = () => {
  const nav = useNavigate()

  function evLogin() {
    nav({
      pathname: '/login',
      search: 'user_id=7'
    })
  }
  return (
    <>
      <div>Home</div>
      <div>
        <button onClick={evLogin}>登录</button>
        <Link to={"/register?id=71"}>注册</Link>
      </div>
    </>
  )
}

export default Home
