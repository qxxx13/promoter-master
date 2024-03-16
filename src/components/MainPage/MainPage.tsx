import { useEffect } from 'react';

export const MainPage = () => {
    const onClose = () => {
        Telegram.WebApp.close();
    };

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return <button onClick={onClose}>Close</button>;
};
