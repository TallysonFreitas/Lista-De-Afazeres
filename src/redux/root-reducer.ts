import { combineReducers } from 'redux'
import tarefaReducer from './tarefa/reducer'

const RootReducer = combineReducers({ tarefaReducer })

export default RootReducer
