import React, {FC} from 'react'
import { Outlet } from 'react-router-dom'

const ManageLout: FC = () => {
  return (
    <div>
      <div>left</div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default ManageLout
