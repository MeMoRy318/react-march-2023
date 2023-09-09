const urls = {
    cars: {
        base: '/cars',
        byId: ( id: number ): string => `/cars/${id}`,
    },
    auth: {
        base: '/auth',
        me: '/auth/me',
        refresh: '/auth/refresh',
    },
    users: {
        base: '/users',
    },
};

export { urls };
