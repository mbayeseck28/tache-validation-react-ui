import React from 'react'
import Graphique2 from './graphique2/Graphique2'
import Cards from '../../components/cards-et-filtre/Cards'
import Filtre from '../../components/cards-et-filtre/Filtre'

const Dashboard = () => {
  return (
    <div className='m-3 text-xl font-bold underline'>
    <div className='m-3 text-xl container font-bold '>
      <div className='flex justify-between'>
      <div>Dashboard</div>
      <Filtre/>
      </div>
      

      <Cards/>
      
    </div>
    <div className="flex">
    <Graphique2/>
    </div>
    </div>
  )
}

export default Dashboard

