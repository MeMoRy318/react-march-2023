const urls = {
    cars: {
        base: '/cars',
        bYId: (id:number): string => `/cars/${id}`,
    },
};

export { urls };
