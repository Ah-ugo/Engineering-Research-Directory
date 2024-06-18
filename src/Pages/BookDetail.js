import React from 'react'
import NavBarComp from '../Components/NavbarComp'
import ProductPreviewComp from '../Components/ProductPreviewComp'
import { useParams } from 'react-router-dom'
import FooterComponent from '../Components/FooterComponent'

export default function BookDetail() {
    const {encodedData} = useParams()
    const data = JSON.parse(decodeURIComponent(encodedData));
  return (
    <div>
        <NavBarComp/>
        <div className='mt-32 mb-10 mx-4'>
        <ProductPreviewComp data = {data}/>
        </div>
        <FooterComponent/>
    </div>
  )
}
