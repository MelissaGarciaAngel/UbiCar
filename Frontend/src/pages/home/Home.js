import React, { useState, useEffect } from "react";
import Searcher from "../../components/Searcher";
import List from "../../components/List";
import Categories from "../../components/Categories";
import { Skeleton } from "@mui/material";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [loading, setLoading] = useState(true);
   
  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    }, 5000)
  }, [])
  
  
  const handleCategory = (category) => {
    setSelectedCategory(category.id);
    setTitle(category.titulo);
  };
  
  const loader = () =>{
  return (
    <div>

      <Searcher setCity={setSelectedCity} setDates={setSelectedDates}/>
      <Categories handleCategory={handleCategory} />
      <div style={{backgroundColor: "white", margin: "0", padding: "0"}}>
      <Skeleton sx={{ bgcolor: 'grey.200', margin: "0", padding: "0" }} variant="rounded" width={1950} height={2000}>
        
      </Skeleton>
      </div>
      </div>
  );}

  if (loading){
    return (loader())
  }

  else {
    return (
      <div>
  
        <Searcher setCity={setSelectedCity} setDates={setSelectedDates}/>
        <Categories handleCategory={handleCategory} />
        <List cat={title} selectedCity={selectedCity} selectedCategory={selectedCategory} selectedDates={selectedDates} />
      </div>

  );}
};

export default Home;
