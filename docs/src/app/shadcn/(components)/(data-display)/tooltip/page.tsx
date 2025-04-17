import { Delete } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const Page = () => {
    return (
        <div>
            <Tooltip title='Delete'>
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default Page;
