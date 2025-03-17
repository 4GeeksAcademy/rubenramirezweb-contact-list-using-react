import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const CreateNewContact = () => {
  const { store, dispatch } = useGlobalReducer()

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(contact)
    try {
      const response = await fetch(store.apiUrl + '/agendas/' + store.agendaSlug + '/contacts', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
       });

      if (!response.ok) {
        throw new Error("Ocurrio un error al crear la agenda");
      }

      // Limpia el formulario después de registrar el contacto
    setContact({
      name: "",
      email: "",
      phone: "",
      address: ""
    });

    } catch (error) {

    }
  }


  return (
    <div>
      <div className="colum">
        <div className="row justify-content-md-center mt-5">
          <form className="col-lg-4 md-4">
            <h1>Add a new contact</h1>
            <div className="mb-3 mt-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={contact.name}
                className="form-control"
                id="exampleInputEmail1"
                placeholder='Full Name'
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                value={contact.phone}
                className="form-control"
                id="exampleInputPassword1"
                placeholder='Enter phone'
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={contact.email}
                className="form-control"
                id="exampleInputPassword1"
                placeholder='Enter email'
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={contact.address}
                className="form-control"
                id="exampleInputPassword1"
                placeholder='Enter address'
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary justify-content-auto" onClick={handleSubmit}>
              Register Contact
            </button>
            <p className="mt-3">
              <a href="https://urban-capybara-x5vg9p7rjqrvcp55g-3000.app.github.dev/">or get backs to contacts</a>
            </p>
          </form>
        </div>
      </div>



    </div>
  )
}

export default CreateNewContact