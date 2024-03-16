import { Button } from '@mui/joy';
import { useEffect } from 'react';

export const MainPage = () => {
    const onClose = () => {
        Telegram.WebApp.close();
    };

    console.log(Telegram.WebApp.initData);

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return <Button onClick={onClose}>Close</Button>;
};
