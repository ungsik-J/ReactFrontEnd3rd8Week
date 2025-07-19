export const initialState = {
    loading: true,
    data: [],
    error: null
}

export function dataReducer(state, action) {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, loading: true, error: null }
            break;
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: null }
            break;
        case 'FETCH_ERROR':
            return { loading: false, data: [], error: action.error }
            break;
        default:
            return state;
    }
}