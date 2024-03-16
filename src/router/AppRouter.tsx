import { Route, Routes } from 'react-router-dom';

import { MainPage } from '../components/MainPage/MainPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/routes" element={<></>} />
            <Route path="/login" element={<></>} />
        </Routes>
    );
};
