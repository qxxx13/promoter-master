import { extendTheme } from '@mui/joy';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';

export const App = () => {
    const theme = extendTheme({ cssVarPrefix: 'demo' });

    return (
        <BrowserRouter>
            <JoyCssVarsProvider
                defaultMode="dark"
                theme={theme}
                colorSchemeSelector="#demo_dark-mode-by-default"
                modeStorageKey="demo_dark-mode-by-default"
                disableNestedContext
            >
                <AppRouter />
            </JoyCssVarsProvider>
        </BrowserRouter>
    );
};
