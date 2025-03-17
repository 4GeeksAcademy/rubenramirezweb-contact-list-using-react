import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardContact from "../components/CardContact.jsx";

const API_URL_BASE = 'https://playground.4geeks.com/contact';

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const createAgenda = async () => {
		try {
			const response = await fetch(store.apiUrl + '/agendas/' + store.agendaSlug, { method: 'POST' });

			if (!response.ok) {
				throw new Error("Ocurrio un error al crear la agenda");
			}

		} catch (error) {

		}
	}

	const obtenerContactos = async () => {
		try {
			const response = await fetch(store.apiUrl + '/agendas/' + store.agendaSlug + '/contacts');


			if (response.status == 404) {
				createAgenda()
				throw new Error("La agenda no existe, creando una");
			}

			if (!response.ok) {
				throw new Error("Ocurrio un error al obtener los contactos");
			}

			const data = await response.json();
			dispatch({ type: "set_contacts", payload: { contacts: data.contacts } })
		} catch (error) {

		}
	};

	useEffect(() => {
		obtenerContactos();
	}, []);

	return (
		<div className="text-center mt-5">
			<h2>Lista de Contactos</h2>
			<div className="row justify-content-center">
				{store.contacts.map((contact) => (
					<div key={contact.id} className="col-12 mb-3 d-flex justify-content-center">
						{/* Pasamos los datos al componente CardContact */}
						<CardContact
							name={contact.name}
							phone={contact.phone}
							email={contact.email}
							address={contact.address}
							id={contact.id}
						/>
					</div>
				))}
			</div>
			{/* <ul>
				{store.contacts.map((value, index) => {

					return <li key={value.id}> {value.name} </li>
				})}
			</ul>
			<CardContact /> */}
		</div>
	);
}; 