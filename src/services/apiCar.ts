import axios from 'axios';

import { baseCarsUrls } from '../configs';

const apiCar = axios.create({ baseURL: baseCarsUrls });

export { apiCar };
