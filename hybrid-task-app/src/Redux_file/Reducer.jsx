const initialData = [
    {
        id: 0,
        task: "Reactjs",
        description: "A experience developer",
        information: "React with Flux",
        due_date: 2022
    },
    {
        id: 1,
        task: "Nextjs",
        description: "A experience developer",
        information: "Next with Redux",
        due_date: 2023
    },
    {
        id: 2,
        task: "Vuejs",
        description: "A experience developer",
        information: "Vue with vuetify",
        due_date: 2023
    },]
const Reduce = (state = initialData, action) => {
    switch (action.type) {
        case "ADD":
            state = [...state, action.payload]
            return state;
        case "UPDATE":
            const updatestate = state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
            state = updatestate;
            return state
        case "DELETE":
            const filter_contact = state.filter((contact) => contact.id !== action.payload && contact)
            state = filter_contact;
            return state
        default: return state
    }
}
export default Reduce