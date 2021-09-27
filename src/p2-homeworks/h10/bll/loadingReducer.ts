const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

type ActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): ActionType => ({type: 'CHANGE_LOADING', isLoading})