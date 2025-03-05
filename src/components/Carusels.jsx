import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '290px',
  color: '#fff',
  lineHeight: '290px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel
    autoplay={{
      dotDuration: true,
    }}
    autoplaySpeed={3000}
    className=' py- shadow-[0px_0px_10px] shadow-amber-200'
  >
    <div>
      <h3 style={contentStyle}><img 
      src="https://avatars.mds.yandex.net/i?id=2c31c53df6930ce541f64ee462d8716ee7284dc7-9181668-images-thumbs&n=13" 
      alt="sale"
      className='w-full h-full' 
      /></h3>
    </div>

    <div>
      <h3 style={contentStyle}><img 
      src="https://i.ebayimg.com/thumbs/images/g/LG4AAOSwGtBhmgS3/s-l1200.jpg" 
      alt="keds" 
      className='w-full h-full' 
      /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img 
      src="https://avatars.mds.yandex.net/i?id=6f84b67443323125a6f5f1a6efd6de21_l-4842841-images-thumbs&n=13" 
      alt="keds" 
      className='w-full h-full' 
      /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img 
      src="https://i.pinimg.com/736x/85/a5/13/85a513d8cd569c914a1521d26fcb8a59.jpg" 
      alt="keds" 
      className='w-full h-full' 
      /></h3>
    </div>
  </Carousel>
);
export default App;