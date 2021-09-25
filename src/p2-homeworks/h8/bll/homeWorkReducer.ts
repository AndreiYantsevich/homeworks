import {UserType} from '../HW8';

type SortByName = {
    type: 'sort'
    payload: {
        direction: string
    }
}

type SortByAge = {
    type: 'check'
    payload: {
        age: number
    }
}

type ActionsType = SortByName | SortByAge

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload.direction === 'up') {
                state.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload.direction === 'down') {
                state.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return [...state]
        }
        case 'check': {
            return [...state.filter((e) => e.age > action.payload.age)]
        }
        default:
            return state
    }
}

export const sortByNameAC = (direction: string): SortByName => {
    return {
        type: 'sort',
        payload: {
            direction
        }
    }
}

export const sortByAgeAC = (age: number): SortByAge => {
    return {
        type: 'check',
        payload: {
            age
        }
    }
}