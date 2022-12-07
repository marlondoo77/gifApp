
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


//reac ejecuta este componente cada vez que detecta un cambio
export const GifGrid = ({categoria}) => {

  
  
  const { images, isLoading } = useFetchGifs( categoria );



  return (
    <>

        <h3>{ categoria }</h3>
        {
          isLoading && (<h2>Cargando ...</h2>) 
        }
        
        <div className="card-grid">
          {
            images.map( (imagen) => (
             <GifItem 
              key={imagen.id} 
              { ...imagen }
             />
            ))
          }
        </div>
    
    </>
  )
}
