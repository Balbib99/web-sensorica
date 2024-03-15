import React, { useState } from "react";

export function SearchSaveMeasurement() {
    const [formToShow, setFormToShow] = useState(null);

    const changeForm = (form) => {
        setFormToShow(form);
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-semibold mb-4">Sensor Data</h1>
                {/* Botones de opciones */}
                <div className="flex justify-between mb-4">
                    <button onClick={() => changeForm('search')} className="bg-blue-500 text-white p-3 rounded-md w-full mr-1">Buscar</button>
                    <button onClick={() => changeForm('record')} className="bg-blue-500 text-white p-3 rounded-md w-full ml-1">Grabar</button>
                </div>

                {/* Formulario de búsqueda */}
                {formToShow === 'search' && (
                    <div className="bg-gray-200 p-8 rounded shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Formulario de Búsqueda</h2>
                        <form>
                            {/* Campos del formulario */}
                            <div className="form-group mb-4">
                                <label htmlFor="measurement">Measurement:</label>
                                <input type="text" id="measurement" name="measurement" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="id">ID:</label>
                                <input type="text" id="id" name="id" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="contaminant">Contaminant:</label>
                                <select id="contaminant" name="contaminant" className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                                    <option value="all">All</option>
                                    <option value="temperature">Temperature</option>
                                    <option value="humidity">Humidity</option>
                                    {/* Agrega más opciones aquí según los contaminantes disponibles */}
                                </select>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="time-range">Time Range:</label>
                                <input type="text" id="time-range" name="time-range" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Buscar" className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer" />
                            </div>
                        </form>
                    </div>
                )}

                {/* Formulario de grabación */}
                {formToShow === 'record' && (
                    <div className="bg-blue-200 p-8 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Formulario de Búsqueda</h2>
                    <form>
                        {/* Campos del formulario */}
                        <div className="form-group mb-4">
                            <label htmlFor="measurement">Measurement:</label>
                            <input type="text" id="measurement" name="measurement" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="id">ID:</label>
                            <input type="text" id="id" name="id" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Grabar datos" className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer" />
                        </div>
                    </form>
                </div>
                )}
            </div>
        </div>
    );
}