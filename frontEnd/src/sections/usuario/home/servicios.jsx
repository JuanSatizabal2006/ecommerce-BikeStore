import React from "react";
import TitleHome from "../../../components/titleHome";

const Servicios = () => {
  return (
    <section>
      <TitleHome
        titulo="Nuestros Servicios"
        texto="No solo ofrecemos bicicletas excepcionales, sino que también nos
          comprometemos a brindarte una experiencia completa. Más allá de la
          venta de bicicletas, te presentamos nuestros servicios exclusivos que
          transformarán tu conexión con el ciclismo"
      />
      <div className="w-full flex justify-around flex-wrap gap-8 mt-8">
        <div className="max-w-80 min-w-56 text-center">
          <div className="group relative overflow-hidden rounded-lg cursor-pointer">
            <div className="absolute w-full h-full bg-grey_transparent flex items-center p-4 font-medium -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p>
                Comprendemos que las aventuras no siempre ocurren en horarios
                convencionales. Es por eso que nuestro equipo de atención al
                cliente está disponible las 24 horas, los 7 días de la semana.
                ¿Tienes una pregunta urgente o necesitas asistencia? Estamos
                aquí para resolver cualquier problema y asegurarnos de que tu
                experiencia con nosotros sea siempre fluida y placentera.
              </p>
            </div>
            <img src="/public/img/imgServices/img1.png" alt="" />
          </div>
          <p className="first-letter:uppercase font-semibold mt-4 text-lg">
            Atención 24/7
          </p>
        </div>

        <div className="max-w-80 min-w-56 text-center">
          <p className="first-letter:uppercase font-semibold mb-4 text-lg">
            Blog
          </p>
          <div className="group relative overflow-hidden rounded-lg cursor-pointer">
            <div className="absolute w-full h-full bg-grey_transparent flex items-center p-4 font-medium -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p>
                Únete a la conversación, comparte tus pensamientos y conecta con
                otros amantes del ciclismo. En BikeStore, el diálogo no tiene
                límites y la comunidad es nuestra fuerza impulsora. ¡Únete a
                nosotros y forma parte de la conversación!
              </p>
            </div>
            <img src="/public/img/imgServices/img2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
