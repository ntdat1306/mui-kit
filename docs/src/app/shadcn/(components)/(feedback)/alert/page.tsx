'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Alert, Stack, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { HighlightedCode } from '@/components/ui/HighlightedCode';

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

const IntroductionSection = () => {
    const preview = (
        <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
            Here is a gentle confirmation that your action was successful.
        </Alert>
    );

    const code = `import CheckIcon from '@mui/icons-material/Check';
import { Alert, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
            Here is a gentle confirmation that your action was successful.
        </Alert>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                Alerts give users brief and potentially time-sensitive information in an unobtrusive manner.
            </Typography>
            <Typography variant='p'>
                The Material UI Alert component includes several props for quickly customizing its styles to provide
                immediate visual cues about its contents.{' '}
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const BasicSection = () => {
    const code = `import Alert from '@mui/material/Alert';`;

    return (
        <>
            <Typography variant='h2'>Basics</Typography>
            <HighlightedCode code={code} canCopy={false} />
            <Typography variant='p'>
                The Alert component wraps around its content, and stretches to fill its enclosing container.
            </Typography>
        </>
    );
};

const SeveritySection = () => {
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
            <Typography variant='h3'>Severity</Typography>
            <Typography variant='p'>
                The <Typography variant='code'>severity</Typography> prop accepts four values representing different
                <Typography variant='code'>success</Typography> (the default),{' '}
                <Typography variant='code'>info</Typography>, <Typography variant='code'>warning</Typography>, and
                <Typography variant='code'>error</Typography>–with corresponding icon and color combinations for each:
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <IntroductionSection />
            <BasicSection />
            <SeveritySection />
        </>
    );
};

export default Page;
