import { ADD_PERSON } from '../constant'

export const createAddPersonAction = personObj => ({ data: personObj, type: ADD_PERSON })
