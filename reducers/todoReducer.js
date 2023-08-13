export default function todoReducer(state, action) {
    switch (action.type) {
        case 'add-todo':
            return [
                ...state,
                {...action.payload, status: "pending"}
            ]
        
        case 'change-status':            
            let newTodos = state.map(item => {
                
                if (item.id === action.payload.id) {
                    return {
                        ...item,                        
                        status: item.status === "pending" ? "completed" : "pending"
                    }
                    
                }
                
                return item;
            });            
            return newTodos;
        
        default:
            return state;
    }
}
