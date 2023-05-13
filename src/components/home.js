import React from 'react'
import Product from "./product"

const Home = () => {
  return (
    <div>
      <div>
        <img className='img-fluid' src='https://www.lladro.com/media/wysiwyg/banners/DVORO/desktop_EN.jpg' />
      </div>
      <div>
        <img className='img-fluid' src='https://www.lladro.com/media/wysiwyg/banners/PUPPIE/desktop_EN2.jpg' />
      </div>
      <Product />
    </div>
  )
}
export default Home