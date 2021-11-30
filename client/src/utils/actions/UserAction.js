import { USER_ADDRESS } from '../constants.js';

export const addUserAddress = UserInfo => ({
	type: USER_ADDRESS,
	UserInfo
});