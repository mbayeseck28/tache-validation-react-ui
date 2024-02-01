import React from 'react'
import useProduits from './../../utils/hooks/useProduits';
import Table from '../table/Table';

export default function ListeProdDashboard() {
  
    const {table, table2, actions} = useProduits();

  return (
    <div className='w-full my-3 mr-5'>
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}
