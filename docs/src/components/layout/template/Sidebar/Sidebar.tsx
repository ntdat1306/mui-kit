import { Box } from '@mui/material';
import SidebarContent from '../SidebarContent/SidebarContent';

const Sidebar = () => {
    return (
        <Box
            sx={(theme) => ({
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: (theme.vars || theme).docs.sidebarWidth,
                background: (theme.vars || theme).palette.background.default,
                display: { xs: 'none', lg: 'block' },
            })}
        >
            <SidebarContent />
        </Box>
    );
};

export default Sidebar;
