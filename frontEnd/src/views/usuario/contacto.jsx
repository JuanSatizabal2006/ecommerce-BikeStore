import React, { useState, useEffect } from 'react';
import { NavBar } from "../../components/allNavBar/navBar";
import { Footer } from "../../components/footer/footer";
import { CartProvider } from '../../components/carrito/carritoContext.jsx';

export const Contact_us = () => {
    const [inputs, setInputs] = useState({
        Nombre: 'Click aquí...',
        Email: 'Click aquí...',
        Telefono: '',
        Comentario: 'Click aquí...'
    });
    const [errors, setErrors] = useState({
        Nombre: '',
        Email: '',
        Telefono: '',
        Comentario: '',
        Checkbox: ''
    });
    const [isChecked, setIsChecked] = useState(false);
    const [showMap, setShowMap] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        let newErrors = { ...errors };

        if (name === 'Telefono') {
            if (!isNaN(value) || value === '') {
                setInputs({ ...inputs, [name]: value });
                newErrors[name] = '';
            } else {
                newErrors[name] = 'Por favor, ingresa solo números en el campo de teléfono.';
            }
        } else if (name === 'Comentario') {
            newValue = value.slice(0, 500).replace(/[^a-zA-Z0-9\s]/g, '');
            setInputs({ ...inputs, [name]: newValue });
        } else {
            setInputs({ ...inputs, [name]: value });
        }

        setErrors(newErrors);
    };

    const handleInputClick = (e) => {
        const { name } = e.target;
        if (inputs[name] === 'Click aquí...' && name !== 'Telefono') {
            setInputs({ ...inputs, [name]: '' });
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setErrors({ ...errors, Checkbox: '' });
    };

    const isFormValid = () => {
        return isChecked;
    };

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setShowMap(false);
        } else {
            setShowMap(true);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <CartProvider>
                <NavBar />
            </CartProvider>
            <div className="w-full flex flex-col md:flex-row bg-white">
                <div className="w-full md:w-1/2 pt-16 px-4">
                    <p className='text-4xl text-center md:text-left'>¿Tienes una pregunta?</p>
                    <div className="container-form mx-12 md:max-w-lg mt-8">
                        <form
                            action="https://formsubmit.co/bikestorebellakoo@gmail.com"
                            method="POST"
                            className='flex flex-col gap-4 text-xl'
                        >
                            <label htmlFor="Name">Nombre</label>
                            <input
                                value={inputs.Nombre}
                                onClick={handleInputClick}
                                onChange={handleInputChange}
                                type="text"
                                className={`h-12 rounded-xl border-solid border-2 border-red px-3 py-2 ${errors.Nombre ? 'border-red-500' : ''}`}
                                name="Nombre"
                                id="Name"
                                pattern="[A-Za-z\s]+"
                            />
                            {errors.Nombre && <p className="text-red-500">{errors.Nombre}</p>}

                            <label htmlFor="Email">E-mail</label>
                            <input
                                value={inputs.Email}
                                onClick={handleInputClick}
                                onChange={handleInputChange}
                                type="email"
                                className={`h-12 rounded-xl border-solid border-2 border-red px-3 py-2 ${errors.Email ? 'border-red-500' : ''}`}
                                name="Email"
                                id="Email"
                            />
                            {errors.Email && <p className="text-red-500">{errors.Email}</p>}

                            <label htmlFor="Phone">Telefono</label>
                            <input
                                value={inputs.Telefono}
                                onClick={handleInputClick}
                                onChange={handleInputChange}
                                type="text"
                                pattern="[0-9]*"
                                className={`h-12 rounded-xl border-solid border-2 border-red px-3 py-2 ${errors.Telefono ? 'border-red-500' : ''}`}
                                name="Telefono"
                                id="Phone"
                            />
                            {errors.Telefono && <p className="text-red-500">{errors.Telefono}</p>}

                            <label htmlFor="Comments">Comentario</label>
                            <textarea
                                value={inputs.Comentario}
                                onChange={handleInputChange}
                                onClick={handleInputClick}
                                name="Comentario"
                                className={`h-32 rounded-xl border-solid border-2 border-red px-3 py-2 resize-none text-gray-500 text-lg ${errors.Comentario ? 'border-red-500' : ''}`}
                                id="Comments"
                                cols="30"
                                rows="10"
                            >
                                {inputs.Comentario}
                            </textarea>
                            {errors.Comentario && <p className="text-red-500">{errors.Comentario}</p>}

                            <div className="container-check_box text-xl flex gap-4 justify-center">
                                <input
                                    type="checkbox"
                                    className='h-8 w-11 rounded-xl border-solid border-2 border-red'
                                    name="check"
                                    id="check"
                                    onChange={handleCheckboxChange}
                                    checked={isChecked}
                                />
                                <label htmlFor="check">Me gustaría proteger mi información firmando un contrato de privacidad</label>
                            </div>
                            {errors.Checkbox && <p className="text-red-500">{errors.Checkbox}</p>}

                            <center className=" mt-4 md:mt-8">
                                <div className="h-24">
                                    <input
                                        type='submit'
                                        value="Enviar"
                                        disabled={!isFormValid()}
                                        className={`h-10 w-36 px-10 py-1 tracking-wide text-white text-xl font-bold transition-colors duration-200 transform border-solid bg-red rounded-md ${isFormValid() ? 'hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red opacity-100' : 'opacity-50'}`}
                                    />
                                </div>
                            </center>
                            <input type="hidden" name='_next' value="http://localhost:5173/contact" />
                            <input type="hidden" name='_captcha' value="false" />
                        </form>
                    </div>
                </div>
                {showMap && (
                    <div className="w-full md:w-1/2 h-96 md:h-auto">
                        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.217653210704!2d-76.3026539250757!3d3.537169696437087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04eb621c76ff%3A0xe794cd7bf8b74bdb!2sSENA%20-%20Centro%20de%20Biotecnologia%20Industrial%20Palmira!5e0!3m2!1ses-419!2sco!4v1711904691075!5m2!1ses-419!2sco" ></iframe>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};


