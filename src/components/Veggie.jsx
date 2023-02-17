import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { json } from 'react-router-dom';

function Veggie() {

const [Veggie,setVeggie] = useState([]);

useEffect(() =>{
getVeggie();
},[]);

    const getVeggie = async () => {

        const check =localStorage.getItem('Veggie');
        if(check)
        {setVeggie(JSON.parse(check))}
        else{      
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=cde818e621564d999c3f39863e69c4c1&number=9&tags=vegetarian`);
    const data = await api.json();
    localStorage.setItem('Veggie',JSON.stringify(data.recipes))
    setVeggie(data.recipes)}
    // console.log(Veggie);
  };
  

    return (
<div>
    <Wrapper>
        <h3>
            Veggie Recipes
        </h3>

        <Splide options={{perPage:3,arrows:false,pagination:false,drag:'free',gap:'3rem'}}>
        {Veggie.map((recipes)=>{
            return(
                <SplideSlide key={recipes.id}>
                <Card>
                    <p>{recipes.title}</p>
                    <img src={recipes.image}/>
                <Gradient/>
                </Card>
                </SplideSlide>
            );
        })}
        </Splide>

    </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`
margin:2rem 0rem;
`

const Card = styled.div`
min-height:10rem;
border-radius:1rem;
overflow:hidden;
position:relative;

img{
    border-radius:1rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
    
}
p{
    position:absolute;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    z-index:1;
    text-align:center;
    font-weight:500;
    font-size:1rem;
    height:30%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`
const Gradient=styled.div`
z-index:0;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`


export default Veggie;