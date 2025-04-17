import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const Page = () => {
    return (
        <>
            <Typography variant='h1'>Checkbox</Typography>
            <Typography variant='body1'>Checkboxes allow the user to select one or more items from a set.</Typography>
            <Typography variant='body1'>Checkboxes can be used to turn an option on or off.</Typography>
            <Typography variant='body1'>
                If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of
                on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.
            </Typography>
            <Typography variant='h2'>Basic checkboxes</Typography>

            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox disabled />
            <Checkbox disabled checked />

            <Typography variant='h2'>Label</Typography>
            <Typography variant='body1'>
                You can provide a label to the Checkbox thanks to the FormControlLabel component.
            </Typography>

            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
                <FormControlLabel required control={<Checkbox />} label='Required' />
                <FormControlLabel disabled control={<Checkbox />} label='Disabled' />
            </FormGroup>
        </>
    );
};

export default Page;
