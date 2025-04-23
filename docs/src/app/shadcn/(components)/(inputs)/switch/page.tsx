'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Stack, Switch, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Switch</Typography>
            <Typography variant='p'>Switches toggle the state of a single setting on or off.</Typography>
            <Typography variant='p'>
                Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as
                well as the state it's in, should be made clear from the corresponding inline label.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const code = `import { Stack, Switch } from '@mui/material';

const Demo = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Switch defaultChecked />
            <Switch />
            <Switch disabled defaultChecked />
            <Switch disabled />
        </Stack>
    );
};

export default Demo;`;

    const preview = (
        <Stack direction='row' spacing={2}>
            <Switch defaultChecked />
            <Switch />
            <Switch disabled defaultChecked />
            <Switch disabled />
        </Stack>
    );

    return (
        <>
            <Typography variant='h2'>Basic switches</Typography>
            <Typography variant='p'>Some basic switches</Typography>
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
