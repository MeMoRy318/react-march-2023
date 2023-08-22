import axios from 'axios';

const axiosService = ( baseURL: string ) => axios.create({ baseURL });

export { axiosService };
