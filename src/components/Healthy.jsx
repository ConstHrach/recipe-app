import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Healthy() {

  const[healthy,setHealthy] = useState([]);

  useEffect(()=>{
      getHealthy();
  }, []);

  const getHealthy = async () => {
      const check = localStorage.getItem("healthy");

      if(check){
          setHealthy(JSON.parse(check));
      } else{
          const api = await fetch(
              `https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}&number=9&tags=healthy`
              );
          const data = await api.json();

          localStorage.setItem("healthy", JSON.stringify(data.recipes));
          setHealthy(data.recipes);
          console.log(data.recipes);
      }
  }
  return (
    <div>
    <Wrapper>
     <h3>Healthy Meals</h3>
     <Splide
         options={{
             perPage:4,
             arrows: false,
             pagination: false,
             drag: "free",
             gap: "5rem",
         }}
         >
     {healthy.map((recipe) => {
         return(
         <SplideSlide key={recipe.id}>
             <Card>
             <Link to={'/recipe/'+ recipe.id} >
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title}/>
                        <Gradient />
                        </Link>
             </Card>
         </SplideSlide>
         );
     })}
     </Splide>
    </Wrapper>
</div>
  )

};
const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
postion: relative;
img{
    border-radius: 3rem;
    position: absolute;
    left: 0;
    width:100%;
    height 100%;
    object-fit: cover;
}
p{
    position: absolute;
    z-index:10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
const Gradient = styled.div`
z-index: 3;
postion: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Healthy