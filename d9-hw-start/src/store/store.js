import { applyMiddleware, createStore, combineReducers} from 'redux'
import favReducer from '../reducers/favReducer'
import risultatiReducer from '../reducers/risultatiReducer'
import { thunk } from 'redux-thunk'


const initialState = {
    risultati:[],
    fav:[]
}
const bigReducer = combineReducers({
    risultati : risultatiReducer,
    fav: favReducer

})

const store = createStore(bigReducer, initialState, applyMiddleware(thunk))

export default store;