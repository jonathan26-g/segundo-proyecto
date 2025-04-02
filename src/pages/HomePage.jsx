import CarouselC from "../components/carousel/CarouselC"
import { useEffect, useState } from 'react'
import CardC from "../components/card/CardC"
import {Col, Container,Row} from 'react-bootstrap'
import productosData from '../Producto.json'



const HomePage = () => {

const [productos, setProductos] = useState([])
const obtenerProductos = () => {
  try {
    let productoLs = JSON.parse(localStorage.getItem('productos')) || [];

    if (productoLs.length === 0) {
      productoLs = productosData.map((producto) => ({ ...producto, status: 'enable' }));
      localStorage.setItem('productos', JSON.stringify(productoLs));
      
    }
    console.log(productosData)
    setProductos(productoLs);
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
};
  

useEffect(() => {
  obtenerProductos()
}, [])







  return (
    <>
    
     <main>

      <CarouselC/>
      <Container className="my-5">
<Row>
        {productos.map((producto) => (
        producto.status !== 'disable' && (
        <Col sm='12' md='6' lg='4' key={producto.id} className="my-3">
         <CardC 
          urlImage={producto.image} 
          alt={producto.description} 
          titulo={producto.title} 
          descripcion={producto.description} 
          precio={producto.price} 
          idProducto={producto.id} 
         />
      </Col>
    )
  ))}
</Row>

      </Container>

      </main> 
    
    
    
    </>
  )
}

export default HomePage
