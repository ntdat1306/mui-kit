'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Tooltip</Typography>
            <Typography variant='p'>
                Tooltips display informative text when users hover over, focus on, or tap an element.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );

    const code = `import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';

const Demo = () => {
    return (
        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic tooltip</Typography>
            <Typography variant='p'>
                Use the Tooltip component to show text when users hover, focus, or tap. Wrap any element and set the
                title prop for the tooltip content.
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
