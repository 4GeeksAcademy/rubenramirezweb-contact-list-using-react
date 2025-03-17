import React from 'react'
import '../CardContact.css'
import { Link } from 'react-router-dom';
import UpdateContact from '../pages/UpdateContact';

const CardContact = ({ name, phone, email, address, id }) => {

    const handleEdit = (event) => {
        const clicEditCard = event.type;
        console.log(clicEditCard)




    }

    return (

        <div className="d-flex justify-content-center ">

            <div
                className="card shadow-lg p-3"
                style={{ maxWidth: 800, borderRadius: 15 }}
            >
                <div className="row g-0">
                    {/* Columna izquierda (Foto) */}
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <img
                            src="https://picsum.photos/200/200"
                            className="img-fluid rounded-circle border"
                            alt="Profile Image"
                            style={{ width: 120, height: 80, objectFit: "cover" }}
                        />
                    </div>
                    {/* Columna central (Datos) */}
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bold d-flex justify-content-start">{name}</h5>
                            <p className="card-text d-flex justify-content-start">
                                <i className="fas fa-map-marker-alt me-2" /> {address}
                            </p>
                            <p className="card-text d-flex justify-content-start">
                                <i className="fas fa-phone-alt me-2" /> {phone}
                            </p>
                            <p className="card-text d-flex justify-content-start">
                                <i className="fas fa-envelope me-2" /> {email}
                            </p>
                            <p className="card-text d-flex justify-content-start">
                                <i className="fa-solid fa-id-card me-2" /> {id} 
                            </p>
                        </div>
                    </div>
                    {/* Columna derecha (Iconos de acción) */}
                    <div className="col-md-1 d-flex align-items-center justify-content-center gap-2 pe-4">
                        <Link to={`/edit/${id}`}>
                            <i className="fas fa-edit text-primary fs-4 cursor-pointer" onClick={(event) => handleEdit(event)} />
                        </Link>
                        <i className="fas fa-trash-alt text-danger fs-4 cursor-pointer" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardContact