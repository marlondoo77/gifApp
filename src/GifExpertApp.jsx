import {useState} from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Demon Slayer']);

  const onAddCategory = (newCategory) => {

    if( categories.includes(newCategory) ){
       return;
    }

    setCategories( [ newCategory, ...categories ] );

    //asi tambien se puede hacer
    //setCategories( cat => [...cat, 'hola'] )

  };


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 

        onNewCategory={ value => onAddCategory(value) }
      />
      

    
      { categories.map( categoria => (
            <GifGrid 
              key={categoria}  
              categoria={ categoria }ç
            />
          )) 
      }

    </>
  )
}
