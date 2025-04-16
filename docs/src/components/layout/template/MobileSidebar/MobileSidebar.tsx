import { Drawer, drawerClasses } from '@mui/material';
import SidebarContent from '../SidebarContent/SidebarContent';

type MobileSidebarProps = {
    isOpen: boolean;
    toggle: () => void;
};

const MobileSidebar = ({ isOpen, toggle }: MobileSidebarProps) => {
    return (
        <Drawer
            open={isOpen}
            onClose={toggle}
            sx={(theme) => ({
                [`& .${drawerClasses.paper}`]: {
                    width: (theme.vars || theme).docs.sidebarWidth,
                },
            })}
        >
            <SidebarContent toggleMobileSidebar={toggle} />
        </Drawer>
    );
};

export default MobileSidebar;
