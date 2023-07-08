import { launchesUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface ILaunch {
    getAllLaunches: () => IRes<unknown>
}

const launchService: ILaunch = {
    getAllLaunches: (): IRes<unknown> => axiosService.get(launchesUrls.getAllLaunches),
};

export { launchService };
