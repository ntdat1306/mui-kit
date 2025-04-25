'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

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

    const preview = (
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
            <ToggleButton value='left' variant='outline'>
                <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value='center'>
                <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value='right'>
                <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value='justify' disabled>
                <FormatAlignJustifyIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );

    const code = `import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
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
                <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value='center'>
                <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value='right'>
                <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value='justify' disabled>
                <FormatAlignJustifyIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Demo;`;

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

    const preview = (
        <ToggleButtonGroup value={formats} onChange={handleFormat}>
            <ToggleButton value='bold' variant='outline'>
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value='italic'>
                <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value='underlined'>
                <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value='color' disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );

    const code = `import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
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
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value='italic'>
                <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value='underlined'>
                <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value='color' disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Demo;`;

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
