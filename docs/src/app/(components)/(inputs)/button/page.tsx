'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
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

const BasicSection = () => {
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

    const code = `import { Button, Stack } from '@mui/material';

const Demo = () => {
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

export default Demo;`;

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

const IconSection = () => {
    const preview = (
        <Stack direction='row' spacing={2}>
            <Button variant='outlined' startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant='contained' endIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    );

    const code = `import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Button variant='outlined' startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant='contained' endIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    );
};
    
export default Demo;`;

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
            <BasicSection />
            <IconSection />
        </>
    );
};

export default Page;
