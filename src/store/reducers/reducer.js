const ADD_TODO = "ADD_TODO"
const COMPLETE_TODO = "COMPLETE_TODO"
const REMOVE_TODO = "REMOVE_TODO"

const initialState = [
    { id: 0, text: "First task", completed: true },
    { id: 1, text: "Second task", completed: true },
    { id: 2, text: "Third task", completed: false }
]

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.length,
                    text: action.payload,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return state.map( (todo) => {
                if (todo.id !== action.payload) return todo
                return {
                    ...todo,
                    completed: true
                }
            } )
        case REMOVE_TODO:
            let newstate = [
                ...state
            ]
            delete newstate[action.payload]
            let newnewstate = []
            newstate.map( (todo) => {
                if (todo === undefined) return todo
                newnewstate.push(todo)
                return todo
            } )
            return newnewstate
        default:
            return state
    }
}

export default todoReducer;