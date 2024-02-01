import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'

const Categories = () => {
  const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[240px]" : "md:ml-[100px]"  } m-4  text-xl font-bold underline`}>
      Categories
    </div>
  )
}

export default Categories
