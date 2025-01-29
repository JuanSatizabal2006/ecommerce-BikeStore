import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/allNavBar/navBar.jsx";
import { Tittle } from "../../components/home/Tittle1.jsx";
import { Categories } from "../../components/home/Categories.jsx";
import { CarouselMarcas } from "../../components/carrusel/carousel_marca.jsx"
import { Footer } from "../../components/footer/footer.jsx";
import { Services } from "../../components/home/Services.jsx"
import { ProductoHome } from "../../components/home/productoHome.jsx";
import { CartProvider } from "../../components/carrito/carritoContext.jsx";
import { Boton } from "../../components/buttons/boton.jsx";
import { FooterInfo } from "../../components/home/footerInfo.jsx";
import CarruselHome from "../../sections/usuario/home/carruselHome.jsx";
import { dataCarruselHome } from "../../constants/carruselHome.js";

export const Home = () => {

    //const isUser = JSON.parse(localStorage.getItem('infoUser')) || null

    const navigate = useNavigate();

    const ir = ()=>{
        navigate('/catalogo')
    }

    return (
        <>
        {/*}
        <CartProvider>
            <NavBar />
        </CartProvider>
        */}
        <h1>AAAAAAAAAAAAAAA</h1>
        <CarruselHome />
            {/*}
            <div className="section-1">
                <Tittle
                    Tittle={'Categorias'}
                    Text={"El viaje comienza con la elección perfecta de bicicletas. Nuestra selección de"}
                    Text2={"bicicletas está diseñada para adaptarse a cada estilo de vida, con cada "}
                    Text3={"aventura, descubres la libertad sobre dos ruedas"}
                />
            </div>
            <Categories />
            <div className="section-2">
                <CarouselMarcas />
            </div>
            <div className="section-3 flex flex-col gap-4">
                <div className="container-tittle-productos">
                    <Tittle
                        Tittle={'Explora nuestro catalogo'}
                        Tittle2={'¡Las mejores ofertas!'}
                        Text={"Creemos que la calidad no debería romper el banco. Disfruta de precios"}
                        Text2={"competitivos y ahorros irresistibles en cada compra. Explora nuestro catálogo"}
                        Text3={"sabiendo que estás obteniendo lo mejor sin comprometer tu presupuesto."}
                    />
                </div>
                <CartProvider>
                    <ProductoHome />
                </CartProvider>

                <center>
                    <div className="button-border w-full xl:w-[150vh] pb-10 flex justify-center border-b-[2px] border-b-solid border-red">
                        <Boton text={'IR AL CATALOGO'} tipoBoton={'relleno'} enviarAccion={ir} />
                    </div>
                </center>
            </div>
            <div className="section-4">
                <div className="container-tittle-nosotros my-10">
                    <Tittle
                        Tittle={'Nuestro Servicios'}
                        Text={"No solo ofrecemos bicicletas excepcionales, sino que también nos "}
                        Text2={"comprometemos a brindarte una experiencia completa. Más allá de"}
                        Text3={"la venta de bicicletas, te presentamos nuestros servicios exclusivos"}
                        Text4={"que transformarán tu conexión con el ciclismo"}

                    />
                </div>
            </div>
            <div className="section-5">
                <Services />
            </div>

            {
                !isUser && <FooterInfo />
            }
            <Footer />
            */}
        </>
    );
};