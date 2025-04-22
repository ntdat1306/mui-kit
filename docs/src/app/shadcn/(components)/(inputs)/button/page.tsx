'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Delete, Send } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Button</Typography>
            <Typography variant='p'>
                Buttons allow users to take actions, and make choices, with a single tap.
            </Typography>
            <Typography variant='p'>
                Buttons communicate actions that users can take. They are typically placed throughout your UI, in places
                like:
            </Typography>
            <Typography variant='list'>
                <li>Modal windows</li>
                <li>Forms</li>
                <li>Cards</li>
                <li>Toolbars</li>
            </Typography>
        </>
    );
};

const BasicButtonSection = () => {
    const code = `import { Button, Stack } from '@mui/material';

const ButtonDemo = () => {
    return (
        <Stack spacing={2}>
            <Stack direction='row' spacing={2}>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Button variant='text' disabled>
                    Text
                </Button>
                <Button variant='contained' disabled>
                    Contained
                </Button>
                <Button variant='outlined' disabled>
                    Outlined
                </Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Button variant='text' loading>
                    Text
                </Button>
                <Button variant='contained' loading>
                    Contained
                </Button>
                <Button variant='outlined' loading>
                    Outlined
                </Button>
            </Stack>
        </Stack>
    );
};

export default ButtonDemo;`;

    const preview = (
        <Stack spacing={2}>
            <Stack direction='row' spacing={2}>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Button variant='text' disabled>
                    Text
                </Button>
                <Button variant='contained' disabled>
                    Contained
                </Button>
                <Button variant='outlined' disabled>
                    Outlined
                </Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Button variant='text' loading>
                    Text
                </Button>
                <Button variant='contained' loading>
                    Contained
                </Button>
                <Button variant='outlined' loading>
                    Outlined
                </Button>
            </Stack>
        </Stack>
    );

    return (
        <>
            <Typography variant='h2'>Basic button</Typography>
            <Typography variant='p'>
                The Button comes with three variants: text (default), contained, and outlined.
            </Typography>

            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const IconButtonSection = () => {
    const code = `import { Delete, Send } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';

const ButtonDemo = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Button variant='outlined' startIcon={<Delete />}>
                Delete
            </Button>
            <Button variant='contained' endIcon={<Send />}>
                Send
            </Button>
        </Stack>
    );
};
    
export default ButtonDemo;`;

    const preview = (
        <Stack direction='row' spacing={2}>
            <Button variant='outlined' startIcon={<Delete />}>
                Delete
            </Button>
            <Button variant='contained' endIcon={<Send />}>
                Send
            </Button>
        </Stack>
    );

    return (
        <>
            <Typography variant='h2'>Buttons with icons and label</Typography>
            <Typography variant='p'>
                Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we
                recognize logos more easily than plain text. For example, if you have a delete button you can label it
                with a dustbin icon.
            </Typography>

            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <BasicButtonSection />
            <IconButtonSection />
        </>
    );
};

export default Page;
