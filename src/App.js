import React,{useState, useEffect}  from "react";
import './App.css'
import axios from 'axios'
import Recipe from "./Recipe";

function App() {
const APP_ID="11909f61";
const APP_KEY="f2ca9ce7f86b510ade09e39e1d83ff15"
const[recipe, setRecipe] = useState([]);
const [search, setSearch]=useState('')
const [query, setQuery] = useState('chicken')
  useEffect(()=> {
    getRecipe();
  },[query])
  const getRecipe=async ()=> {
    const response=await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    setRecipe(response.data.hits)
    console.log(response.data.hits);
  }

  const updateSearch =(e) => {
       setSearch(e.target.value)
  }

  const updateQuery =(e) => {
     e.preventDefault()
    setQuery(search)
}


              return (
                <div className="App">
                   <form onSubmit={updateQuery}>
                     <input type='text' value={search} onChange={updateSearch} />
                     <button type='button'>Search</button>
                   </form>
                   {recipe.map((recipe)=>(
                     <Recipe
                     title={recipe.recipe.label} 
                     calories={recipe.recipe.calories} 
                     image={recipe.recipe.image}
                     ingredients={recipe.recipe.ingredients}/>
                   ))}
                
                </div>
              )
     
   
  
}

export default App;




