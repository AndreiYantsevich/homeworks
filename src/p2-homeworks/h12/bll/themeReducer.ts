type ActionType = {
    type: 'change_theme'
    theme: string
}

type StateType = {
    theme: string
}

const initState = {
    theme: 'some'
};

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'change_theme': {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): ActionType => ({type: 'change_theme', theme}); // fix any