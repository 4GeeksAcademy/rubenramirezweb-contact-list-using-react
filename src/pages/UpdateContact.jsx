import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const UpdateContact = () => {

  const { store, dispatch } = useGlobalReducer();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const params = useParams();
  console.log(params.id)

  const handleUpdateContact = async (contact_id) => {

    let updateContact = {
      "name": name,
      "phone": phone,
      "email": email,
      "adress": address,
    };

    try {
      const response = await fetch(`store.apiUrl + '/agendas/' + store.agendaSlug + '/contacts' + ${contact_id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateContact)
      });

      if (!response.ok)
        throw new Error(`Ocurrió un error al crear el contacto con id: ${contact_id}`);

      // setContact({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   address: ""
      // });
    } catch (error) {
      console.log(error)
    }
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  //   try {
  //     const response = await fetch(store.apiUrl + '/agendas/' + store.agendaSlug + '/contacts', { 
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(contact)
  //      });

  //     if (!response.ok) {
  //       throw new Error("Ocurrio un error al crear la agenda");
  //     }

  // Limpia el formulario después de registrar el contacto
  //   setName({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: ""
  //   });

  //   } catch (error) {

  //   }
  // }

  useEffect(() => {
    const contact = store.contacts.find((contact) => contact.id == params.id)
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
    setAddress(contact.address);

  }, []);

  return (
    <div>
      <div className="colum">
        <div className="row justify-content-md-center mt-5">
          <form className="col-lg-4 md-4">
            <h1>Update your data</h1>
            <div className="mb-3 mt-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="name"
                value={name}
                className="form-control"
                // id="exampleInputEmail1"
                placeholder='Full Name'
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone
              </label>
              <input
                type="phone"
                value={phone}
                className="form-control"
                // id="exampleInputPassword1"
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
                value={email}
                className="form-control"
                // id="exampleInputPassword1"
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
                value={address}
                className="form-control"
                id="inputAddress"
                placeholder='Enter address'
                onChange={(event) => { setAddress(event.target.value) }}
              />
            </div>

            <button type="submit" className="btn btn-primary justify-content-auto" onClick={() => {
              handleUpdateContact(params.id);
            }}>
              Update Contact
            </button>
          </form>
        </div>
      </div>



    </div>
  )
}

export default UpdateContact