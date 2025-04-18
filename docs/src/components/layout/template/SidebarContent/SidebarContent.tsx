import { SidebarItem, sidebarItems } from '@/constants/navigation';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import {
    Box,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Stack,
} from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';

type SidebarContentProps = {
    toggleMobileSidebar?: () => void;
};

type NestedListProps = SidebarItem & {
    toggleMobileSidebar?: () => void;
};

const NestedList = (props: NestedListProps) => {
    const { label, children, toggleMobileSidebar } = props;

    const router = useRouter();
    const pathname = usePathname();

    /**
     * /shadcn -> prefix = "", suffix = "shadcn"
     * /shadcn/autocomplete -> prefix = "shadcn", suffix = "autocomplete"
     */
    const names = pathname.split('/');
    const [prefix, suffix] = names.slice(-2);
    const isMenuOpen = children.some((child) => child.menu.some((item) => item.slug === suffix));

    const [open, setOpen] = useState<boolean>(isMenuOpen);

    const items = children.map((child) => (
        <Fragment key={child.key}>
            {child.subheader && <ListSubheader>{child.subheader}</ListSubheader>}

            {child.menu.map((item) => (
                <ListItem key={`${child.key}-${item.key}`} disablePadding>
                    <ListItemButton selected={item.slug === suffix} onClick={() => handleNavigate(item.slug)}>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </Fragment>
    ));

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleNavigate = (slug: string) => {
        const path = prefix ? names.slice(0, names.length - 1).join('/') : pathname;

        router.push(`${path}/${slug}`);

        if (toggleMobileSidebar) {
            toggleMobileSidebar();
        }
    };

    return (
        <>
            <ListItemButton onClick={handleToggle}>
                <ListItemIcon
                    sx={(theme) => ({
                        color: (theme.vars || theme).palette.primary.main,
                    })}
                >
                    {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                </ListItemIcon>

                <ListItemText primary={label} />
            </ListItemButton>

            <Collapse in={open} timeout='auto' unmountOnExit sx={{ marginLeft: 2 }}>
                <List disablePadding>{items}</List>
            </Collapse>
        </>
    );
};

const SidebarContent = ({ toggleMobileSidebar }: SidebarContentProps) => {
    const menu = sidebarItems.map((item) => (
        <NestedList {...item} toggleMobileSidebar={toggleMobileSidebar} key={item.key} />
    ));

    return (
        <Stack sx={{ height: '100%' }}>
            {/* Logo */}
            <Box
                sx={(theme) => ({
                    flexShrink: 0,
                    height: (theme.vars || theme).docs.navbarHeight,
                    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: (theme.vars || theme).docs.padding,
                })}
            >
                Logo
            </Box>

            {/* Menu */}
            <Box
                sx={(theme) => ({
                    flex: 1,
                    overflowY: 'auto',
                    ...(!toggleMobileSidebar && { borderRight: `1px solid ${(theme.vars || theme).palette.divider}` }),
                })}
            >
                <List disablePadding>{menu}</List>
            </Box>
        </Stack>
    );
};

export default SidebarContent;
