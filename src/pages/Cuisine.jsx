import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link,useParams } from 'react-router-dom'

function Cuisine() {
  
    let params=useParams();
 const [cuisine,setCuisine]=useState([]);
useEffect(() =>{
    console.log(params.type);
    getCuisine(params.type);
    
    },[params.type]);
    
        const getCuisine = async (name) => {
    
            // const check =localStorage.getItem('popular');
            
              
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cde818e621564d999c3f39863e69c4c1&cuisine=${name}&number=15`);
        const data = await api.json();
        // localStorage.setItem('cuisine',JSON.stringify(data.recipes))
        setCuisine(data.results);
        // console.log(cuisine);
      };
      
  
  
    return (
    <Grid>
   
   
    {cuisine.map((item)=>{
            return (
                <Card key={item.id}>
                    <img src={item.image}></img>
                    <h4>{item.title}</h4>
                </Card>
            );
        })
    }

    </Grid>  
  )
}




const Grid = styled.div`

display:grid;
margin-top:1rem;
grid-template-columns:repeat(auto-fit,minmax(11rem,1fr));
grid-gap:2rem;
`
const Card = styled.div`
img{
    width:100%;
    border-radius:1rem;
}
a{
    text-decoration:none;
}

h4{
    text-align:center;
    padding:1rem; 
    font-size:0.8rem; 
    font-weight:300;
}

`


export default Cuisine