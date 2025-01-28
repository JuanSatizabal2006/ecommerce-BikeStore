import React, { useEffect, useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import './style.css'
import { urlApi } from '../../constants/urlApi';
import { useLocation } from 'react-router-dom';

const Paginador = ({cantPages, enviarProducto}) => {

    //TODO: URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categorias = queryParams.get('categoria');
    console.log(categorias);
    //Consumir la API para guardarla en una variable
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    // Variable de desplazamiento, esta define el valor o posicion inicial/base que usará el paginador
    const [itemInicial, setItemInicial] = useState(0);

    //TODO: Obtener todos los productos de la base de datos
    useEffect(() => {
        const cargarProductos = async () =>{
            const response = await fetch(`${urlApi}/articulos`);
            const data = await response.json()
            //console.log(data);
            setProductos(data);
            
        };
        cargarProductos();
    }, [])

    //Funcion que 'escucha' los clicks del usuario
    const handlePageClick = (event) => {
        //Variable que segun el numero que de click el usuario en el paginador, este cambiara el valor de itemInicial
        //cambiando asi itemFinal y por lo tanto el rango de productos cambia
        const nuevoItem = (event.selected * cantPages) % productos.length;        
        setItemInicial(nuevoItem);
    };

    useEffect(()=>{
        //Variable de desplazamiento, esta define el valor o posicion final que usará el paginador
        const itemFinal = itemInicial + cantPages;
        //Variable que guarda el rango de productos a mostrar
        console.log(productos);
        let productosFiltrados = productos;

        // Filtra los productos basándote en los valores de la categoría en la URL
        if (categorias) {
            const categoriasArray = categorias.split(','); // Divide los valores por comas
            console.log(categoriasArray);
            productosFiltrados = productosFiltrados.filter(producto => categoriasArray.includes(String(producto.id_categoria)));
        }
        console.log(productosFiltrados, 'prodohsfgiua');

        setProductosFiltrados(productosFiltrados)
        //Variable que se enviará al componente padre
        const nuevosProductos = productosFiltrados.slice(itemInicial, itemFinal);

        enviarProducto(nuevosProductos);
        
    },[itemInicial, cantPages, productos, categorias, location.search, categorias])
    
    
    //Se calcula el numero de paginas, para asegurarse de que se muestren todas las páginas necesarias.
    const pageCount = Math.ceil(productosFiltrados.length / cantPages);
    const tamañoPantalla = window.innerWidth;

    //TODO: CONDICIONAL PARA QUE EL PAGINADOR SEA RESPONSIVE, YA QUE CAMBIAMOS LA CANTIDAD DE OPCIONES A MOSTRAR
    const reactPaginateProps =
        tamañoPantalla >= 1024 ? {
            breakLabel: "...",
            nextLabel: "siguiente >",
            onPageChange: handlePageClick,
            pageRangeDisplayed: 5,
            marginPagesDisplayed: 2,
            pageCount: pageCount,
            previousLabel: "< atrás",
            renderOnZeroPageCount: null,
            className: "flex gap-2 flex-wrap"
        } :
        tamañoPantalla >= 768 && tamañoPantalla < 1024 ? {
            breakLabel: "...",
            nextLabel: " > ",
            onPageChange: handlePageClick,
            pageRangeDisplayed: 2,
            marginPagesDisplayed: 2,
            pageCount: pageCount,
            previousLabel: " < ",
            renderOnZeroPageCount: null,
            className: "flex gap-2 flex-wrap"
        } :
        {
            breakLabel: "...",
            nextLabel: " > ",
            onPageChange: handlePageClick,
            pageRangeDisplayed: 1,
            marginPagesDisplayed: 1,
            pageCount: pageCount,
            previousLabel: " < ",
            renderOnZeroPageCount: null,
            className: "flex gap-2 flex-wrap"
        };

  return (
    <>
        <ReactPaginate {...reactPaginateProps} />
    </>
  )
}

export default Paginador