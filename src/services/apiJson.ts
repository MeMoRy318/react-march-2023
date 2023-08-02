import axios from 'axios';

import { baseJsonUrl } from '../configs';

const apiJson = axios.create({ baseURL: baseJsonUrl });

export { apiJson };
