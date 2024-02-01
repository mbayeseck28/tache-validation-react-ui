import React from 'react'
import Table from '../../components/table/Table'
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";


const Produits = () => {
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

const actions = [
    {
      icon: <TbEyeShare/>,
      color: 'bg-green-500',
      hanldleClick: () => console.log('Ca marche 1')
    },
    {
      icon: <MdEdit />,
      color: 'bg-orange-500',
      hanldleClick: () => console.log('Ca marche 2')
    },
    {
      icon: <MdOutlineDelete />,
      color: 'bg-red-600',
      hanldleClick: () => console.log('Ca marche 3')
    }
  ]
  return (
    <div className='m-3 w-full'>
      <h1 className='text-xl font-bold'>Produits</h1>
      <div className=' w-full bg-blue-950 flex justify-between px-5 py-3 mt-3'>
        <h5 className='font-bold text-white pt-1'>Liste des produits</h5>
        <button className='btn bg-green-900 text-white rounded p-2'>Ajouter un nouveau employé</button>
      </div>
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}

export default Produits
