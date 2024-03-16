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
            <Button onClick={onClose}>Close</Button>
            <Typography level="h3" color="primary">
                {Telegram.WebApp.initDataUnsafe.user?.id}
            </Typography>
        </Stack>
    );
};
