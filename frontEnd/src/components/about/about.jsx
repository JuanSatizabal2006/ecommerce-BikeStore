import React from 'react';

const CardsInfo = [
    {
        id: "1",
        icon: "fa-solid fa-medal text-white text-lg p-[6px]",
        text: "COMPETITIVIDAD",
        info: "En Bike Store, nos preocupamos por nuestra imagen a nivel nacional, por lo que siempre tratamos de dar el 100% para mantener nuestro status alto y competir con otras empresas."
    },
    {
        id: "2",
        icon: "fa-solid fa-leaf text-white text-lg p-[6px]",
        text: "ECO FRIENDLY",
        info: "La mayoría de nuestros productos del catálogo son amigables con el medio ambiente, lo que brinda una gran diversidad para nuestros clientes."
    },
    {
        id: "3",
        icon: "fa-solid fa-headphones text-white text-lg p-[6px]",
        text: "SOPORTE",
        info: "Nuestro equipo de soporte estará para ti siempre por si tienes alguna duda, queja o reclamo, también puedes usar nuestro formulario, siempre los tomamos en cuenta."
    },
    {
        id: "4",
        icon: "fa-solid fa-thumbs-up bg-white rounded-full p-[6px] w-7 h-7 text-red",
        text: "CALIDAD",
        info: "Todos nuestros productos son originales, traídos desde la bodega de sus fabricantes, por lo que nuestra calidad es indiscutible."
    }
];

export const AboutCard = () => {
    return (
        <>
            {CardsInfo.map((obj) => {
                return (
                    <div key={obj.id} className="container p-6 flex flex-col gap-2 2xl:w-[40vh]  2xl:h-[35vh] xl:w-[35vh]  xl:h-auto rounded-xl shadow-grey_2 shadow-lg align-middle justify-center">
                        <div className="container-card-icon flex justify-center">
                            <div className="container-icon bg-red rounded-full p-[10px] h-12 w-12 flex justify-center">
                                <i className={`${obj.icon}`}></i>
                            </div>
                        </div>
                        <p className='container-tittle text-red text-sm text-center font-semibold'>
                            {obj.text}
                        </p>
                        <p className='container-text text-sm text-center w-54'>
                            {obj.info}
                        </p>
                    </div>
                );
            })}
        </>
    );
};

