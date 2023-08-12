const urls = {
    cars: {
        base: '/cars',
        carsGetId: ( id: number ): string => `/cars/${id}`,
    },
};

export { urls };
