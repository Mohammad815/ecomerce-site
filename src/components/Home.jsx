import React from 'react'
import { Card } from 'react-bootstrap'
import img from '../assets/images/images.jpg'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <div>
        <Card className="bg-dark text-white">
  <Card.Img src={img} alt="Card image" />
  <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
    <Card.Title className='display-3 fw-bolder mb-0'>New Season Arrivals</Card.Title>
    <Card.Text className='fs-2'>
    Check Out All the treands
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    </div>
    <Products></Products>
    </div>
  )
}

export default Home
