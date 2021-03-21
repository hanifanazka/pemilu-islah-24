import { Auth } from 'aws-amplify';

export default async function signUp(username, password) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}