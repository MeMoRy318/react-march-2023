import * as userActionCreate from './fetchUser';
import * as postsActionCreate from './fetchPost';
import * as commentActionCreate from './fetchComment';
import * as photoActionCreate from './fetchPhoto';

// eslint-disable-next-line import/no-anonymous-default-export
export default { ...userActionCreate, ...postsActionCreate, ...commentActionCreate, ...photoActionCreate };
