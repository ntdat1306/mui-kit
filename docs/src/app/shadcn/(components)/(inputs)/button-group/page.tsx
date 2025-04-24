'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Button, ButtonGroup, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Button Group</Typography>
            <Typography variant='p'>The ButtonGroup component can be used to group related buttons.</Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <ButtonGroup variant='contained'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    );

    const code = `import { Button, ButtonGroup } from '@mui/material';

const Demo = () => {
    return (
        <ButtonGroup variant='contained'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic button group</Typography>
            <Typography variant='p'>
                The buttons can be grouped by wrapping them with the ButtonGroup component. They need to be immediate
                children.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const VariantsSection = () => {
    const preview = (
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <ButtonGroup variant='outlined'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant='text'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    );

    const code = `import { Button, ButtonGroup, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <ButtonGroup variant='outlined'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <ButtonGroup variant='text'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Button variants</Typography>
            <Typography variant='p'>All the standard button variants are supported.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <BasicSection />
            <VariantsSection />
        </>
    );
};

export default Page;
