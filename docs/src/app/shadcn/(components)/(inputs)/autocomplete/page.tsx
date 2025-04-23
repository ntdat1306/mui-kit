'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { top100Films } from '@/constants/data';
import { Autocomplete, Stack, TextField, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Autocomplete</Typography>
            <Typography variant='p'>
                The autocomplete is a normal text input enhanced by a panel of suggested options.
            </Typography>
            <Typography variant='p'>
                The widget is useful for setting the value of a single-line textbox in one of two types of scenarios:
            </Typography>
            <Typography variant='list' sx={{ listStyle: 'number' }}>
                <li>
                    The value for the textbox must be chosen from a predefined set of allowed values, for example a
                    location field must contain a valid location name: combo box.
                </li>
                <li>
                    The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to
                    the user, for example a search field may suggest similar or previous searches to save the user time:
                    free solo.
                </li>
            </Typography>
            <Typography variant='p'>
                It's meant to be an improved version of the "react-select" and "downshift" packages.
            </Typography>
        </>
    );
};

const ComboBoxSection = () => {
    const code = `import { Autocomplete, Stack, TextField, Typography } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2}>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 256 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='outlined' />}
            />
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 256 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='filled' />}
            />
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 256 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='standard' />}
            />
        </Stack>
    );
};

export default Demo;`;

    const preview = (
        <Stack spacing={2}>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 256 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='outlined' />}
            />
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 256 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='filled' />}
            />
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 256 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='standard' />}
            />
        </Stack>
    );

    return (
        <>
            <Typography variant='h2'>Combo box</Typography>
            <Typography variant='p'>The value must be chosen from a predefined set of allowed values.</Typography>

            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <ComboBoxSection />
        </>
    );
};

export default Page;
