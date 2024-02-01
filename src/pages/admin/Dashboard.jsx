import React from 'react'
import Cards from '../../components/cards-et-filtre/Cards'
import Filtre from '../../components/cards-et-filtre/Filtre'

const Dashboard = () => {
  return (
    <div className='m-3 text-xl container font-bold '>
      <div className='flex justify-between'>
      <div>Dashboard</div>
      <Filtre/>
      </div>
      

      <Cards/>
    </div>
  )
}

export default Dashboard
