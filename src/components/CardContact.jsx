import React from 'react'
import '../CardContact.css'
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

const CardContact = ({ name, phone, email, address, id, obtenerContactos }) => {

     const { store, dispatch } = useGlobalReducer();

    const deleteContact = async (id) => {
        try {
            const response = await fetch(`${store.apiUrl}/agendas/${store.agendaSlug}/contacts/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Ocurrio un error al eliminar el contacto con el id: ${id}`);
            }

            // console.log(`Contacto con id: ${id} eliminado con exito`);
            obtenerContactos();
        } catch (error) {
            console.log(Error)
        }
    };


    return (

        <div >

            <div className="card shadow-lg p-3" style={{ minWidth: 600, borderRadius: 15 }}>
                <div className="row g-0">
                    {/* Columna izquierda (Foto) */}
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <img
                            src="https://picsum.photos/200/200"
                            className="img-fluid rounded-circle border"
                            alt="Profile Image"
                            style={{ width: 120, height: 120, objectFit: "cover" }}
                        />
                    </div>
                    {/* Columna central (Datos) */}
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title fw-bold d-flex justify-content-start">{name}</h5>
                            <p className="card-text d-flex justify-content-start align-items-center">
                                <i className="fas fa-map-marker-alt me-2" /> {address}
                            </p>
                            <p className="card-text d-flex justify-content-start align-items-center">
                                <i className="fas fa-phone-alt me-2" /> {phone}
                            </p>
                            <p className="card-text d-flex justify-content-start align-items-center">
                                <i className="fas fa-envelope me-2" /> {email}
                            </p>
                            <p className="card-text d-flex justify-content-start align-items-center">
                                <i className="fa-solid fa-id-card me-2" /> {id} 
                            </p>
                        </div>
                    </div>
                    {/* Columna derecha (Iconos de acción) */}
                    <div className="col-md-2 d-flex align-items-center justify-content-center gap-3 pe-2">
                        <Link to={`/edit/${id}`}>
                            <i className="fas fa-edit text-primary fs-4 cursor-pointer" />
                        </Link>
                        <i className="fas fa-trash-alt text-danger fs-4 cursor-pointer" onClick={()=>{deleteContact(id)}}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardContact;