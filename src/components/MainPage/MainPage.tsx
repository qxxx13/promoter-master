import { Button, Typography } from '@mui/joy';
import { useEffect } from 'react';

export const MainPage = () => {
    const onClose = () => {
        Telegram.WebApp.close();
    };

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return (
        <>
            <Button onClick={onClose}>Close</Button>;
            <Typography level="h3">{Telegram.WebApp.initDataUnsafe.user?.usernames}</Typography>
        </>
    );
};
