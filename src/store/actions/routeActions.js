export const createRoute = (route) => {
    return (dispatch, getState) => {
        //async call
        dispatch({ type: 'CREATE_ROUTE', route });
    }
};
