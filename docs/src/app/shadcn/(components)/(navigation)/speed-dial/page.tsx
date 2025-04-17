'use client';

import { FileCopy, Print, Save, Share } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const actions = [
    { icon: <FileCopy />, name: 'Copy' },
    { icon: <Save />, name: 'Save' },
    { icon: <Print />, name: 'Print' },
    { icon: <Share />, name: 'Share' },
];

const Page = () => {
    return (
        <div>
            <SpeedDial
                ariaLabel='SpeedDial basic example'
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} />
                ))}
            </SpeedDial>
        </div>
    );
};

export default Page;
