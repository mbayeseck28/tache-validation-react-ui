import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'

const Commandes = () => {
  const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[240px]" : "md:ml-[100px]"  } m-4  text-xl font-bold underline`}>
      Commandes
    </div>
  )
}


export default Commandes
