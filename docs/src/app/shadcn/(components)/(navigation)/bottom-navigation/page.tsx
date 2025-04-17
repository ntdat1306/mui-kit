'use client';

import { Favorite, LocationOn, Restore } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label='Recents' icon={<Restore />} />
                <BottomNavigationAction label='Favorites' icon={<Favorite />} />
                <BottomNavigationAction label='Nearby' icon={<LocationOn />} />
            </BottomNavigation>
        </div>
    );
};

export default Page;
