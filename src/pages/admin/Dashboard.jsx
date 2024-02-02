import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'

const Dashboard = () => {
  const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  text-xl font-bold underline`}>
      Dashboard
    </div>
  )
}

export default Dashboard
