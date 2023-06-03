import React, { useState } from 'react'
import Product from "./product"
import { Button } from 'primereact/button';

import { Calendar } from 'primereact/calendar';
import store from '../store';

store.subscribe(() => console.log(store.getState()))

export const Home = () => {
  const [date, setDate] = useState(null);
  return (
    <div>
      <div>
        <img className='img-fluid' src='https://www.lladro.com/media/wysiwyg/banners/DVORO/desktop_EN.jpg' />
      </div>
      <div>
        <img className='img-fluid' src='https://www.lladro.com/media/wysiwyg/banners/PUPPIE/desktop_EN2.jpg' />
      </div>
      <Product />
      <Button label="Submit" />
      <Calendar value={date} onChange={(e) => setDate(e.value)} />
    </div>
  )
}
