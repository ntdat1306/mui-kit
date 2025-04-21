'use client';

import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        setAlignment(newAlignment);
    };

    const [selected, setSelected] = useState<boolean>(false);

    const toggleButton = () => {
        setSelected(!selected);
    };

    return (
        <div>
            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label='text alignment'>
                <ToggleButton value='left' size='large'>
                    <FormatAlignLeft />
                </ToggleButton>
                <ToggleButton value='center' size='large'>
                    <FormatAlignCenter />
                </ToggleButton>
                <ToggleButton value='right' variant='outline' size='large'>
                    <FormatAlignRight />
                </ToggleButton>
                <ToggleButton value='justify' disabled size='large'>
                    <FormatAlignJustify />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default Page;
