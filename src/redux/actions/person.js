import { ADD_PERSON } from '../constant'

export const addAPerson = personObj => ({ data: personObj, type: ADD_PERSON })
