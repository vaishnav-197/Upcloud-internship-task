import React from 'react'
import { Card } from 'react-bootstrap';

import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlineSearchCircle } from 'react-icons/hi';

export default function card() {
  return (
    <div className="searchcard">
      <Card style={{ width: '24rem' ,marginLeft:'84px' , height:'40rem' }}>

  <Card.Body>
    <Card.Title><IoIosArrowBack/> Near By</Card.Title>
    <div><input type="text" name="name" placeholder="        search" className=" searchbar"/><HiOutlineSearchCircle /></div>
    
  
  </Card.Body>
</Card>
    </div>
  )
}
