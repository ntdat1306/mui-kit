'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Checkbox</Typography>
            <Typography variant='p'>Checkboxes allow the user to select one or more items from a set.</Typography>
            <Typography variant='p'>Checkboxes can be used to turn an option on or off.</Typography>
            <Typography variant='p'>
                If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of
                on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const code = `import { Checkbox } from '@mui/material';

const Demo = () => {
    return (
        <>
            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox disabled />
            <Checkbox disabled checked />
        </>
    );
};

export default Demo;`;

    const preview = (
        <>
            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox disabled />
            <Checkbox disabled checked />
        </>
    );

    return (
        <>
            <Typography variant='h2'>Basic checkboxes</Typography>
            <Typography variant='p'>Some checkbox with different state.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const LabelSection = () => {
    const code = `import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const Demo = () => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
            <FormControlLabel required control={<Checkbox />} label='Required' />
            <FormControlLabel disabled control={<Checkbox />} label='Disabled' />
        </FormGroup>
    );
};

export default Demo;`;

    const preview = (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
            <FormControlLabel required control={<Checkbox />} label='Required' />
            <FormControlLabel disabled control={<Checkbox />} label='Disabled' />
        </FormGroup>
    );

    return (
        <>
            <Typography variant='h2'>Label</Typography>
            <Typography variant='p'>
                You can provide a label to the Checkbox thanks to the FormControlLabel component.
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
            <LabelSection />
        </>
    );
};

export default Page;
