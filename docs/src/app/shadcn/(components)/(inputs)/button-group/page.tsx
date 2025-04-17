import { Button, ButtonGroup, Stack, Typography } from '@mui/material';

const Page = () => {
    return (
        <>
            <Typography variant='h1'>Button Group</Typography>
            <Typography variant='body1'>The ButtonGroup component can be used to group related buttons.</Typography>
            <Typography variant='h2'>Basic button group</Typography>
            <Typography variant='body1'>
                The buttons can be grouped by wrapping them with the ButtonGroup component. They need to be immediate
                children.
            </Typography>

            <ButtonGroup variant='contained' aria-label='Basic button group'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <Typography variant='h2'>Button variants</Typography>
            <Typography variant='body1'>All the standard button variants are supported.</Typography>

            <Stack spacing={2}>
                <ButtonGroup variant='outlined' aria-label='Basic button group'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant='text' aria-label='Basic button group'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>
        </>
    );
};

export default Page;
