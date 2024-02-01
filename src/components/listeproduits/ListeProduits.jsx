import React from 'react'
import Table from '../table/Table'

export default function ListeProduits() {
     const table = [
    'id', 'Article', 'Quantité', 'Actions'
]
  const table2 = [
    {
      id: Math.floor(Math.random()*10000000),
      article: {
        src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        nom: "Dos Santos",
        desc: 'Un beau gas'
      },
      quantite: 50,
      age: 22,
      date: 6/4/2000
    }
]


  
      return(
          <>
          <Table thead={table} tbody={table2} />
          </>
      )
  
}
