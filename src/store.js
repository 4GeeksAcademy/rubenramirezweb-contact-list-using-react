export const initialStore = () => {
  return {
    message: null,
    apiUrl: 'https://playground.4geeks.com/contact',
    agendaSlug: 'rrubenagenda',
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {


  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_contacts': 
      const { contacts } = action.payload
      return {
        ...store,
        contacts: [...contacts] 
      }
    default:
      throw Error('Unknown action.');
  }
}