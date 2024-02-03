import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'

const Dashboard = () => {
  const {open, smallScreen} = useSidebare()
  return (
    <div className={`${open && smallScreen <= 767 ? "md:ml-[85px]" : "md:ml-[225px]"  } m-4  text-xl font-bold underline`}>
      Dashboard
    </div>
  )
}

export default Dashboard
