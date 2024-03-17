import { Button, Stack, Typography } from '@mui/joy';
import { useEffect } from 'react';

export const MainPage = () => {
    const onClose = () => {
        Telegram.WebApp.close();
    };

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return (
        <Stack>
            <Typography level="h3">Мои маршруты</Typography>
        </Stack>
    );
};
