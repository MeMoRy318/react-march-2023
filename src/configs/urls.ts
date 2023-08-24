const enum EUrls {
    ME = '/me',
    AUTH = '/auth',
    REFRESH = '/refresh',
    USERS = '/users',
    CARS = '/cars',
    PHOTO = '/photo'
}

const urls = {
    cars: {
        base: EUrls.CARS,
        byId: ( id: number ): string => `${EUrls.CARS}/${id}`,
        byPhoto: ( id: number ): string => `${EUrls.CARS}/${id}${EUrls.PHOTO}`,
    },
    auth: {
        base: EUrls.AUTH,
        me: `${EUrls.AUTH}${EUrls.ME}`,
        refresh: `${EUrls.AUTH}${EUrls.REFRESH}`,
    },
    users: {
        base: EUrls.USERS,
    },
};

export { urls };
