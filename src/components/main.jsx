import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <MDBCarousel showIndicators fade interval={4000}>
      <MDBCarouselItem itemId={1}>
        <img src='https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-22-LmTLHWkkY.jpg' className='d-block w-100 h-50' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://i.ytimg.com/vi/D22y1MuvwdY/maxresdefault.jpg' className='d-block w-100 h-50' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://i.pinimg.com/originals/9a/71/6f/9a716f90fc2e24079b8960168d5ea089.jpg' className='d-block w-100 h-50' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  )
}

export default Home