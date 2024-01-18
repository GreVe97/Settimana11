export default function risultatiReducer(state = [], action) {

    console.log(state)
    console.log(action)

    switch (action.type) {
        case 'RICERCA':           
            return [...action.payload.data]
        default:
            break;
    }

    return state;
}