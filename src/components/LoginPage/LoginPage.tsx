import { Button, Input, Stack, Typography } from '@mui/joy';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login } from './api/loginApi';

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ password: string }>();
    const onSubmit: SubmitHandler<{ password: string }> = (data) => handleLogin(data);

    const navigate = useNavigate();

    const handleLogin = async (data: { password: string }) => {
        await login({
            telegramId: String(Telegram.WebApp.initDataUnsafe.user?.id),
            username: '',
            password: data.password,
        });

        navigate('/');
    };

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
                <Typography level="h3">Привет {Telegram.WebApp.initDataUnsafe.user?.first_name}</Typography>
                <Input
                    {...register('password', { required: true })}
                    placeholder="password"
                    type="password"
                    color={errors.password ? 'danger' : 'neutral'}
                />
                <Button variant="outlined" type="submit">
                    Войти
                </Button>
            </Stack>
        </form>
    );
};
