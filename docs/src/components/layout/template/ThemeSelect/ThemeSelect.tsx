import { Computer, DarkMode, LightMode } from '@mui/icons-material';
import { Menu, MenuItem, PaletteMode, useColorScheme, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { NavbarButton } from '../NavbarButton';

const ICON_SIZE = 18;

const themes = [
    {
        label: 'Light',
        icon: <LightMode sx={{ fontSize: ICON_SIZE }} />,
        value: 'light',
    },
    {
        label: 'Dark',
        icon: <DarkMode sx={{ fontSize: ICON_SIZE }} />,
        value: 'dark',
    },
    {
        label: 'System',
        icon: <Computer sx={{ fontSize: ICON_SIZE }} />,
        value: 'system',
    },
];

const ThemeSelect = () => {
    const { mode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorEl);

    // Match icon with current mode
    const icon = themes.find((theme) => theme.value === mode)?.icon;

    const items = themes.map((theme, index) => (
        <MenuItem key={index} onClick={() => handleChoose(theme.value)}>
            {theme.label}
        </MenuItem>
    ));

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChoose = (value: string) => {
        setMode(value as PaletteMode);
        setAnchorEl(null);
    };

    if (!mode) {
        return;
    }

    return (
        <>
            <NavbarButton variant='outlined' onClick={handleClick} sx={{ marginLeft: 'auto' }}>
                {icon}
            </NavbarButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disableScrollLock={true}
            >
                {items}
            </Menu>
        </>
    );
};

export default ThemeSelect;
