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
                <ToggleButton value='left' aria-label='left aligned' size='large'>
                    <FormatAlignLeft />
                </ToggleButton>
                <ToggleButton value='center' aria-label='centered' size='large'>
                    <FormatAlignCenter />
                </ToggleButton>
                <ToggleButton value='right' aria-label='right aligned' variant='outline'>
                    <FormatAlignRight />
                </ToggleButton>
                <ToggleButton value='justify' aria-label='justified' disabled>
                    <FormatAlignJustify />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default Page;
