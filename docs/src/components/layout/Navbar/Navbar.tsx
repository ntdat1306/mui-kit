import { DragHandle } from '@mui/icons-material';
import { Box } from '@mui/material';
import { NavbarButton } from '../NavbarButton';
import { TemplateThemeSelect } from '../ThemeSelect';

type NavbarProps = {
    toggleMobileSidebar: () => void;
};

const Navbar = ({ toggleMobileSidebar }: NavbarProps) => {
    return (
        <Box
            sx={(theme) => ({
                position: 'fixed',
                top: 0,
                left: { xs: 0, lg: (theme.vars || theme).docs.sidebarWidth },
                right: 0,
                display: 'flex',
                alignItems: 'center',
                backdropFilter: 'blur(8px)',
                zIndex: (theme.vars || theme).zIndex.appBar,
                height: (theme.vars || theme).docs.navbarHeight,
                padding: `0 ${(theme.vars || theme).docs.padding}`,
                borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                backgroundColor: `rgba(${(theme.vars || theme).palette.background.defaultChannel} / 0.25)`,
            })}
        >
            <NavbarButton
                variant='outlined'
                onClick={toggleMobileSidebar}
                sx={{
                    display: {
                        lg: 'none',
                    },
                }}
            >
                <DragHandle />
            </NavbarButton>

            <TemplateThemeSelect />
        </Box>
    );
};

export default Navbar;
