import { GifItem } from "../../components/GifItem"
import { render, screen } from "@testing-library/react"

describe('pruebas en gifitem componente', () => { 

    const title = 'Yo soy el titulo';
    const url = 'https://soylaurl.com/';
    
    test('debe de hacer match con el snapshot', () => { 
        
        const {container} = render( <GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    
     
     })

     test('debe de mostrar la imagen con el url y el alt indicado', () => { 
        
        const {container} = render( <GifItem title={title} url={url}/>)
        //screen.debug();
        //console.log(screen.getByRole('img'))
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

      })


      test('debe de mostrar el titulo en el componente', () => { 
        
        const {container} = render( <GifItem title={title} url={url}/>)

        expect( screen.getByText(title)).toBeTruthy();

       })


 })