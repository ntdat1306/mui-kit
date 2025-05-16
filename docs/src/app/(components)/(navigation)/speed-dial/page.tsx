'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Speed Dial</Typography>
            <Typography variant='p'>
                When pressed, a floating action button can display three to six related actions in the form of a Speed
                Dial.
            </Typography>
            <Typography variant='p'>
                If more than six actions are needed, something other than a FAB should be used to present them.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    const preview = (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel='SpeedDial basic example'
                icon={<SpeedDialIcon />}
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
            >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} />
                ))}
            </SpeedDial>
        </Box>
    );

    const code = `import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const Demo = () => {
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];
    
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel='SpeedDial basic example'
                icon={<SpeedDialIcon />}
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
            >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} />
                ))}
            </SpeedDial>
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic speed dial</Typography>
            <Typography variant='p'>The floating action button can display related actions.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <BasicSection />
        </>
    );
};

export default Page;
