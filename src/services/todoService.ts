import { ITodo } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface ITodoService {
    getAll: (page?: number, limit?: number) =>IRes<ITodo[]>
}

const todoService:ITodoService  = {
    getAll: (page: number = 1, limit: number = 10): IRes<ITodo[]> =>
        axiosService.get(urls.todos.base, { params: { _page: page, _limit: limit } }),
};

export { todoService };

