import React, { useState, useEffect } from 'react'
import { getAllData } from '../services/fetchAyudantias'
import { FaEnvelope, FaPhone, FaLink } from 'react-icons/fa'

function Ayudantias() {
	const [ayudantias, setAyudantias] = useState([])

	useEffect(() => {
		const fetching = async () => {
			const res = await getAllData()
			setAyudantias(res)
		}
		fetching()
	}, [])

	return (
		<section className="max-w-screen-lg m-auto py-8 px-2">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{ayudantias.map((ayudantia, index) => (
					<div key={index} className='shadow-lg rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
                        <div className='flex items-center h-[72px] rounded-t-lg p-2 bg-slate-800 text-white'>
                            <h2 className='text-lg font-medium text-center line-clamp-2 w-full'>{ayudantia.nombre_curso}</h2>
                        </div>
                        <div className='p-2'>
                            <p>Sección: {ayudantia.seccion_curso}</p>
                            <p>Docente: {ayudantia.profesor_teoria}</p>
                            <p>Alumno: {ayudantia.nombres_alumno} {ayudantia.apellidos_alumno}</p>
                            <p>Codigo Alumno: {ayudantia.codigo_alumno}</p>
                            <div id="contact" className='flex items-center gap-2'>
                                <p>Contacto: </p>
                                <a href={`mailto:${ayudantia.correo_alumno}`}><FaEnvelope size={14} /></a>
                                <a href={`tel:+51${ayudantia.celular_alumno}`}><FaPhone size={14} /></a>
                                <a href="#"><FaLink size={14} /></a>
                                
                            </div>
                        </div>    
					</div>
				))}
			</div>
		</section>
	)
}

export default Ayudantias
