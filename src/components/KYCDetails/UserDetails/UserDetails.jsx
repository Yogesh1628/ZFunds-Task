import React from 'react';
import Heading from '../Heading/Heading';
import './UserDetails.css'
import Container from './Container';
import { useNavigate } from 'react-router-dom';

function UserDetails({name = "Dummy Name"}) {
  const Navigate = useNavigate();
  function onPressEdit()
  {
    Navigate('/personal-details');
  }
  return (
        <Container heading="User Details" onPressEdit = {onPressEdit}>
        <Heading heading = "Pan Card Number" data = "Indian Citizen"/>
        <Heading heading = "Name" data = {name}/>
        </Container>
  )
}

export default UserDetails
