import React from 'react'
import Cards from '../../components/cards-et-filtre/Cards'
import Filtre from '../../components/cards-et-filtre/Filtre'
import Revenue from './Revenue'

const Dashboard = () => {
  return (
    <div>
      <div className='m-3 text-xl container font-bold '>
        <div className='flex justify-between'>
        <div>Dashboard</div>
        <Filtre/>
        </div>
        <Cards/>
      </div>
      <div className='lg:grid-cols-6 md:grid-cols-12'>
        <Revenue />
      </div>
    </div>
  )
}

export default Dashboard
