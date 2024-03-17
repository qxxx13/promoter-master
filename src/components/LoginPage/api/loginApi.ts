import { instance } from '../../../common/apiConfig';
import { LoginedUserType } from '../../../types/UserType';

export const login = async (loginData: { telegramId: string; username: string; password: string }) => {
    const user: LoginedUserType = await instance
        .post('/auth/login', loginData)
        .then((res) => res.data)
        .catch((error) => console.log(error));

    localStorage.setItem('token', user.accessToken);
    localStorage.setItem('isAuth', String(true));
    localStorage.setItem('userRole', JSON.stringify(user.Role));
    localStorage.setItem('user', JSON.stringify(user));

    return user;
};
