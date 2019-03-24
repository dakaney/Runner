const initState = {
    routes: []
};

const routeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ROUTE':
            return state;
        case 'CREATE_ROUTE_ERROR':
            return state;
        default:
            return state;
    }
}

export default routeReducer;
