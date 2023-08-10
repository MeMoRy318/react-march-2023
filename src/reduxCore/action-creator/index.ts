import * as actionUser  from './fetchUser';
import * as actionPost  from './fetchPost';
import * as actionComment  from './fetchComment';

// eslint-disable-next-line import/no-anonymous-default-export
export default { ...actionUser, ...actionPost, ...actionComment };
