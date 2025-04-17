'use client';

import { top100Films } from '@/constants/data';
import { Autocomplete, Box, styled, TextField, Typography } from '@mui/material';

const Page = () => {
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

            <Typography variant='h2'>Combo box</Typography>
            <Typography variant='p'>The value must be chosen from a predefined set of allowed values.</Typography>

            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300, marginTop: 2 }}
                renderInput={(params) => <TextField {...params} label='Movie' />}
            />

            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300, marginTop: 2 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='filled' />}
            />

            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300, marginTop: 2 }}
                renderInput={(params) => <TextField {...params} label='Movie' variant='standard' />}
            />
        </>
    );
};

export default Page;
