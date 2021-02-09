import subAPI from '../config/subAPI';

// Pass user data to async function for signup from subAPI module in config
export async function signUp(data) {
    const response = await subAPI.post('api/auth/sign_up', data);
    return response.data;
}

// Pass user data to async function for signin from subAPI module in config
export async function signIn(data) {
    console.log(data)
    const response = await subAPI.post('api/auth/sign_in', data);
    console.log(response.data)
    return response.data;
}
