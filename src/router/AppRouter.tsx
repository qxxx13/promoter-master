import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../components/LoginPage/LoginPage';
import { MainPage } from '../components/MainPage/MainPage';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/routes"
                element={
                    <ProtectedRoute>
                        <></>
                    </ProtectedRoute>
                }
            />

            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};
