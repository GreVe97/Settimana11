export default function favReducer(state = [], action) {

    console.log(typeof state)
    console.log(typeof action.payload)

    switch (action.type) {
        case 'ADD_COMPANY_TO_FAVOURITES':
            if (state.find(c => c.company_name === action.payload.company_name)) {
                return state
            }
            return [...state, action.payload]

        case 'REMOVE_COMPANY_TO_FAVOURITES':
            return state.filter(c => c.company_name !== action.payload.company_name)
        default:
            break;
    }

    return state;
}