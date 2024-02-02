import React from 'react'
import Cards from '../../components/cards-et-filtre/Cards'
import Filtre from '../../components/cards-et-filtre/Filtre'
import Revenue from './Revenue'
import Graphique2 from './graphique2/Graphique2'

const Dashboard = () => {
  return (


    <div className='m-3 text-xl font-bold underline'>
    <div className='m-3 text-xl container font-bold '>
      <div className='flex justify-between'>
        <Filtre/>
      </div>
      
      <Cards/>
      
    </div>
    <div className='flex'>
      <div>
        <Revenue />
      </div>
      <div>
        <Graphique2 />
      </div>
    </div>
    
    </div>
  )
}

export default Dashboard

