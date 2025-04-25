'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Bottom Navigation</Typography>
            <Typography variant='p'>
                The Bottom Navigation bar allows movement between primary destinations in an app.
            </Typography>
            <Typography variant='p'>
                Bottom navigation bars display three to five destinations at the bottom of a screen. Each destination is
                represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is
                taken to the top-level navigation destination associated with that icon.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const [value, setValue] = useState<number>(0);

    const preview = (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
            <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
            <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
        </BottomNavigation>
    );

    const code = `import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

const Demo = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
            <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
            <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Bottom navigation</Typography>
            <Typography variant='p'>
                When there are only three actions, display both icons and text labels at all times.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <BasicSection />
        </>
    );
};

export default Page;
