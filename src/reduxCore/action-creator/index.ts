import * as actionCar from './carAction';
import * as actionAuth from './authAction';

// eslint-disable-next-line import/no-anonymous-default-export
export default { ...actionCar, ...actionAuth };
