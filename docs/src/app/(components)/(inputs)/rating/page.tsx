'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Rating, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Rating</Typography>
            <Typography variant='p'>
                Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a
                rating of their own.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const [value, setValue] = useState<number | null>(2);

    const preview = (
        <Stack spacing={2}>
            <div>
                <Typography component='legend'>Controlled</Typography>
                <Rating
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
            <div>
                <Typography component='legend'>Uncontrolled</Typography>
                <Rating
                    onChange={(_, newValue) => {
                        console.log(newValue);
                    }}
                    defaultValue={2}
                />
            </div>
            <div>
                <Typography component='legend'>Read only</Typography>
                <Rating value={value} readOnly />
            </div>
            <div>
                <Typography component='legend'>Disabled</Typography>
                <Rating value={value} disabled />
            </div>
            <div>
                <Typography component='legend'>No rating given</Typography>
                <Rating value={null} />
            </div>
        </Stack>
    );

    const code = `import { Rating, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const Demo = () => {
    const [value, setValue] = useState<number | null>(2);

    return (
        <Stack spacing={2}>
            <div>
                <Typography component='legend'>Controlled</Typography>
                <Rating
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
            <div>
                <Typography component='legend'>Uncontrolled</Typography>
                <Rating
                    onChange={(_, newValue) => {
                        console.log(newValue);
                    }}
                    defaultValue={2}
                />
            </div>
            <div>
                <Typography component='legend'>Read only</Typography>
                <Rating value={value} readOnly />
            </div>
            <div>
                <Typography component='legend'>Disabled</Typography>
                <Rating value={value} disabled />
            </div>
            <div>
                <Typography component='legend'>No rating given</Typography>
                <Rating value={null} />
            </div>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic rating</Typography>
            <Typography variant='p'>Some rating with different state.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const PrecisionSection = () => {
    const preview = (
        <Stack spacing={1}>
            <Rating defaultValue={2.5} precision={0.5} />
            <Rating defaultValue={2.5} precision={0.5} readOnly />
        </Stack>
    );

    const code = `import { Rating, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={1}>
            <Rating defaultValue={2.5} precision={0.5} />
            <Rating defaultValue={2.5} precision={0.5} readOnly />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Rating precision</Typography>
            <Typography variant='p'>
                The rating can display any float number with the value prop. Use the precision prop to define the
                minimum increment value change allowed.
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
            <PrecisionSection />
        </>
    );
};

export default Page;
