import React, {useState, useEffect} from "react";
import { getAllData } from "../services/fetchAyudantias";
import {FaEnvelope, FaPhone, FaLink} from "react-icons/fa"

function Ayudantias() {

    const [ ayudantias, setAyudantias ] = useState([])

    useEffect(()=>{

        const fetch = async () =>{
            const res = await getAllData()
            setAyudantias(res)
        }

        fetch()
    },[])

    return (
        <section className="max-w-screen-lg mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    ayudantias.map((ayudantia, index) => (
                        <div key={index} className="shadow-lg rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                            <div id="card-header" className="flex p-2 h-[72px] rounded-t-lg bg-slate-800 text-white">
                                <h2 className="flex items-center justify-center text-lg font-medium text-center w-full line-clamp-2">{ayudantia.nombre_curso}</h2>
                            </div>
                            <div id="card-body" className="p-2">
                                <p className="line-clamp-1" >Sección: {ayudantia.seccion_curso}</p>
                                <p className="line-clamp-1" >Docente: {ayudantia.profesor_teoria}</p>
                                <p className="line-clamp-1" >Alumno: {ayudantia.nombres_alumno} {ayudantia.apellidos_alumno}</p>
                                <p className="line-clamp-1" >Codigo Alumno: {ayudantia.codigo_alumno}</p>
                                <div id="contact" className="flex items-center gap-2">
                                    <p>Contacto:</p>
                                    <a href={`mailto:${ayudantia.correo_alumno}`}><FaEnvelope size={14} /></a>
                                    <a href={`tel:+51${ayudantia.celular_alumno}`}><FaPhone size={14} /></a>
                                    <a href="https://google.com"><FaLink size={14} /></a>
                                </div>
                            </div>
                        </div>
                    )

                    )
                }
            </div>
        </section>
    );
}

export default Ayudantias;
