

const initialState = {
    value: 0
}

type initialStateType = typeof initialState

export const counterReducer = (
    state: initialStateType = initialState, action: ActionType)
    : initialStateType => {
    switch (action.type) {
        case 'INC_VALUE':
            return {
                ...state, value: state.value + 1
            }

        default: {
            return state
        }
    }
}


export const incValueAC = () => ({type: 'INC_VALUE'} as const)

export type IncValueActionType = ReturnType<typeof incValueAC>

export type ActionType = IncValueActionType