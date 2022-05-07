import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { clothesData } from '../../data/clothesData'


const ClothesDetail = () => {

   const { clothesId } = useParams ()

   const [clothes, setclothes] = useState( {} )

useEffect (  () => {

  (async () => {
    const clothesData =  await getClothesDetail()
    if ( clothesData) {
      setclothes (clothesData)
    }
   
  }) ()
 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [clothesId])

const getClothesDetail = () => { 
   return new Promise ( (resolve) => {
      setTimeout(() => {
        resolve( clothesData.find( c => c.id == clothesId ) )
      }, 2000);
   } )
 }

 

  return (
    
  
  <div className='card-body flex'>
    <div className="card flex flex-col place-items-center w-96 ml-4 mt-6 mb-8 border-solid border-2 border-sky-500">
      <h2 className="card-title ml-4 text-black ">Detalle de producto!</h2>

      <div className="text-left ml-4 text-black ">
        <figure><img className="h-15" src= { `https://robohash.org/${clothes.id}`} alt=""/></figure> 
        <div>{clothes.name}</div>
        <div>{clothes.tipo}</div>
        <div>${clothes.precio}</div>
      </div>

          <div className='card-footer bg-teal-600 justify-center text-white'>  
            <h5> Variedad de talles.</h5>
            <h6> Envios a todo el país.</h6>
          </div>

      <div type="button" className="card-actions justify-center m-5 btn bg-indigo-700">
        <Link className="inline-block align-middle mt-4 text-white" to='/clothes/15'> Volver a "Pantalon Raider" </Link>
      </div>

    </div>
  </div>

  )
}

export default ClothesDetail