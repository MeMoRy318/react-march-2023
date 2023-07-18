interface ICarUrls {
    cars: string
    putPatchDeleteCar: (id: number ) => string
}

const carUrls:ICarUrls = {
    cars: '/cars',
    putPatchDeleteCar: (id: number ):string => `/cars/${id}`,
};

export { carUrls };
