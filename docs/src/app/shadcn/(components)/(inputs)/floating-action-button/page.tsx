import { Add, Edit } from '@mui/icons-material';
import { Fab, Stack } from '@mui/material';

const Page = () => {
    return (
        <div>
            <Stack direction='row' spacing={2}>
                <Fab color='primary' aria-label='add'>
                    <Add />
                </Fab>
                <Fab color='secondary' aria-label='edit'>
                    <Edit />
                </Fab>
            </Stack>
        </div>
    );
};

export default Page;
