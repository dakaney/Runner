export const createRoute = (route) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('routes').add({
            ...route,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ROUTE', route });
        }).catch((err) => {
            dispatch({ type: 'CREATE_ROUTE_ERROR', err});
        })
    }
};
