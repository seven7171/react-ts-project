import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Login() {
  const [searchParams] = useSearchParams()
  console.log("searchParams",searchParams.get('user_id'))
  document.title = "Login~"
  return (
    <div>
      login release
    </div>
  )
}
