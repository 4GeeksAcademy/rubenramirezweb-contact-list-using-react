import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateContact = () => {

  const { store, dispatch } = useGlobalReducer();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const params = useParams();
  const navigate = useNavigate();
  // console.log(params.id)

  const handleUpdateContact = async (contact_id) => {
    let updateContact = {
      name: name,
      phone: phone,
      email: email,
      address: address,
    };

    try {
      const response = await fetch(`${store.apiUrl}/agendas/${store.agendaSlug}/contacts/${contact_id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateContact)
      });

      if (!response.ok) {
        throw new Error(`Ocurrió un error al actualizar el contacto con id: ${contact_id}`);
      }
      navigate('/');
      // alert("Contacto actualizado correctamente");

    } catch (error) {
      console.log(error)
    }
  };

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
                type="text"
                value={name}
                className="form-control"
                // id="exampleInputEmail1"
                placeholder='Full Name'
                onChange={(event) => { setName(event.target.value) }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                className="form-control"
                // id="exampleInputPassword1"
                placeholder='Enter phone'
                onChange={(event) => { setPhone(event.target.value) }}
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
                onChange={(event) => { setEmail(event.target.value) }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="address"
                value={address}
                className="form-control"
                id="inputAddress"
                placeholder='Enter address'
                onChange={(event) => { setAddress(event.target.value) }}
              />
            </div>

            <button type="button" className="btn btn-primary justify-content-auto" onClick={(event) => {
              event.preventDefault();
              handleUpdateContact(params.id);
            }}>
              Update Contact
            </button>

            <div className="d-flex justify-content-center mt-5">
              <Link to="/">
                <button className="btn btn-danger">
                  Go Home
                </button>
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateContact