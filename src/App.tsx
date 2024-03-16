import React, { useEffect } from 'react';

function App() {
    const onClose = () => {
        Telegram.WebApp.close();
    };

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return (
        <div>
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
