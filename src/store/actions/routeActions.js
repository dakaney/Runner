export const createRoute = (route) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('routes').add({
            ...route,
            authorFirstName: 'Wayman',
            authorLastName: 'Ng',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ROUTE', route });
        }).catch((err) => {
            dispatch({ type: 'CREATE_ROUTE_ERROR', err});
        })
    }
};
