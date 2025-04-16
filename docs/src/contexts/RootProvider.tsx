import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import React from 'react';

type RootProviderProps = {
    children: React.ReactNode;
};

const RootProvider = ({ children }: RootProviderProps) => {
    return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};

export default RootProvider;
