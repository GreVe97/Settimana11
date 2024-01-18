import axios from 'axios'
export const addCompany = (company) => {
    return { type: 'ADD_COMPANY_TO_FAVOURITES', payload: company }
}

export const removeCompany = (company) => {
    return { type: 'REMOVE_COMPANY_TO_FAVOURITES', payload: company }
}

export const ricerca = (query) => {
    return function (dispatch) {
        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
        axios.get(baseEndpoint + query + "&limit=20")
            .then(response => { 
                console.log(response.data); 
                console.log(response);
                return dispatch({ type: 'RICERCA', payload: response.data})
            }).catch(error => console.log(error))
    }
}

