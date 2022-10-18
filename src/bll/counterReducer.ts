

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

        case 'SET_VALUE_FROM_LOCAL_STORAGE':
            return {
                ...state, value: action.value
            }
        default: {
            return state
        }
    }
}


export const incValueAC = () => ({type: 'INC_VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET_VALUE_FROM_LOCAL_STORAGE', value} as const)

export type IncValueActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageType = ReturnType<typeof setValueFromLocalStorageAC>


export type ActionType = IncValueActionType | SetValueFromLocalStorageType