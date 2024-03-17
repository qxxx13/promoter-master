import { Button, Stack, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';

export const MainPage = () => {
    const [currentUser, setCurrentUser] = useState();
    const onClose = () => {
        Telegram.WebApp.close();
    };

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return (
        <Stack alignItems="center" sx={{ p: 2 }}>
            <Typography level="h1">Мои маршруты</Typography>
            <Button onClick={() => localStorage.clear()}>Выход</Button>
        </Stack>
    );
};
