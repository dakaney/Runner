const initState = {
    routes: []
};

const routeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ROUTE':
            console.log('created route', action.route)
            return state;
        case 'CREATE_ROUTE_ERROR':
            console.log('create route error', action.err);
            return state;
        default:
            return state;
    }
}

export default routeReducer;
