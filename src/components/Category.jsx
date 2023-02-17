import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles , GiChopsticks} from "react-icons/gi"
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function Category() {
  return (
    <List>
       <SLink to={"/"}>
        <FaHome/><h4> Home</h4>
        </SLink>  
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice/><h4> Italian</h4>
        </SLink>  
        <SLink to={"/cuisine/American"}>
        <FaHamburger/><h4> Amercian</h4>
        </SLink>  
        <SLink to={"/cuisine/Chinese"}>
        <GiNoodles/><h4> Chinese</h4>
        </SLink>  
        <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks/><h4> Japanese</h4>
        </SLink> 
       
    </List>
  )
}


const List = styled.div`
display:flex;
justify-content:center;
margin:2rem 0 rem;
` 

const SLink = styled(NavLink)`
display:flex;
text-decoration:none;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:1rem;
margin-top:1rem;
background:linear-gradient(35deg,#494949 ,#313131);
width:5em;
height:5rem;
font-size:1rem;
cursor:pointer;
color:white;
transform : scale(0.7);

h4{
  color:white;
  font-size:0.8rem;
  margin-top:0.5rem;
}
svg{
  font-size:1.5rem;
}

&.active{
  background:linear-gradient(to right,#f27121 , #e94057);
}

`

export default Category