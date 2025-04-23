'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import {
    ArrowDropDown,
    FormatAlignCenter,
    FormatAlignJustify,
    FormatAlignLeft,
    FormatAlignRight,
    FormatBold,
    FormatColorFill,
    FormatItalic,
    FormatUnderlined,
} from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { MouseEvent, useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Toggle Button</Typography>
            <Typography variant='p'>A Toggle Button can be used to group related options.</Typography>
            <Typography variant='p'>
                To emphasize groups of related Toggle buttons, a group should share a common container. The
                <Typography variant='code'>ToggleButtonGroup</Typography> controls the selected state of its child
                buttons when given its own <Typography variant='code'>value</Typography> prop.
            </Typography>
        </>
    );
};

const ExclusiveSection = () => {
    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (_event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
        setAlignment(newAlignment);
    };

    const code = `import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { MouseEvent, useState } from 'react';

const Demo = () => {
    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
            <ToggleButton value='left' variant='outline'>
                <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value='center'>
                <FormatAlignCenter />
            </ToggleButton>
            <ToggleButton value='right'>
                <FormatAlignRight />
            </ToggleButton>
            <ToggleButton value='justify' disabled>
                <FormatAlignJustify />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Demo;`;

    const preview = (
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
            <ToggleButton value='left' variant='outline'>
                <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value='center'>
                <FormatAlignCenter />
            </ToggleButton>
            <ToggleButton value='right'>
                <FormatAlignRight />
            </ToggleButton>
            <ToggleButton value='justify' disabled>
                <FormatAlignJustify />
            </ToggleButton>
        </ToggleButtonGroup>
    );

    return (
        <>
            <Typography variant='h2'>Exclusive selection</Typography>
            <Typography variant='p'>With exclusive selection, selecting one option deselects any other.</Typography>
            <Typography variant='p'>
                In this example, text justification toggle buttons present options for left, center, right, and fully
                justified text (disabled), with only one item available for selection at a time.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const MultipleSection = () => {
    const [formats, setFormats] = useState(() => ['bold', 'italic']);

    const handleFormat = (_event: MouseEvent<HTMLElement>, newFormats: string[]) => {
        setFormats(newFormats);
    };

    const code = `import { ArrowDropDown, FormatBold, FormatColorFill, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { MouseEvent, useState } from 'react';

const Demo = () => {
    const [formats, setFormats] = useState(() => ['bold', 'italic']);

    const handleFormat = (event: MouseEvent<HTMLElement>, newFormats: string[]) => {
        setFormats(newFormats);
    };

    return (
        <ToggleButtonGroup value={formats} onChange={handleFormat}>
            <ToggleButton value='bold' variant='outline'>
                <FormatBold />
            </ToggleButton>
            <ToggleButton value='italic'>
                <FormatItalic />
            </ToggleButton>
            <ToggleButton value='underlined'>
                <FormatUnderlined />
            </ToggleButton>
            <ToggleButton value='color' disabled>
                <FormatColorFill />
                <ArrowDropDown />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Demo;`;

    const preview = (
        <ToggleButtonGroup value={formats} onChange={handleFormat}>
            <ToggleButton value='bold' variant='outline'>
                <FormatBold />
            </ToggleButton>
            <ToggleButton value='italic'>
                <FormatItalic />
            </ToggleButton>
            <ToggleButton value='underlined'>
                <FormatUnderlined />
            </ToggleButton>
            <ToggleButton value='color' disabled>
                <FormatColorFill />
                <ArrowDropDown />
            </ToggleButton>
        </ToggleButtonGroup>
    );

    return (
        <>
            <Typography variant='h2'>Multiple selection</Typography>
            <Typography variant='p'>
                Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have
                multiple options selected.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <ExclusiveSection />
            <MultipleSection />
        </>
    );
};

export default Page;
