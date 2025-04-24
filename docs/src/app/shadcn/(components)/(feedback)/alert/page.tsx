'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Alert, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Alert</Typography>
            <Typography variant='p'>
                Alerts display brief messages for the user without interrupting their use of the app.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Stack spacing={2} sx={{ width: 256 }}>
            <Alert severity='success'>This is a success Alert.</Alert>
            <Alert severity='info'>This is an info Alert.</Alert>
            <Alert severity='warning'>This is a warning Alert.</Alert>
            <Alert severity='error'>This is an error Alert.</Alert>
        </Stack>
    );

    const code = `import { Alert, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2} sx={{ width: 256 }}>
            <Alert severity='success'>This is a success Alert.</Alert>
            <Alert severity='info'>This is an info Alert.</Alert>
            <Alert severity='warning'>This is a warning Alert.</Alert>
            <Alert severity='error'>This is an error Alert.</Alert>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basics</Typography>
            <Typography variant='p'>
                The Alert component wraps around its content, and stretches to fill its enclosing container.
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
