import { ShadcnLogo } from '@/components/icon';
import { ItemChildrenMenu, SidebarItem, sidebarItems } from '@/constants/navigation';
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
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment, useEffect, useRef, useState } from 'react';

type SidebarContentProps = {
    toggleMobileSidebar?: () => void;
};

type NestedListProps = SidebarItem & {
    toggleMobileSidebar?: () => void;
};

type NestedListItem = {
    item: ItemChildrenMenu;
    selected: boolean;
    onClick: (slug: string) => void;
};

const NestedListItem = ({ item, selected, onClick }: NestedListItem) => {
    const ref = useRef<HTMLDivElement>(null);

    // Scroll into view when selected
    useEffect(() => {
        if (selected) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [selected]);

    return (
        <ListItem disablePadding component='div' ref={ref}>
            <ListItemButton selected={selected} onClick={() => onClick(item.slug)}>
                <ListItemText primary={item.label} />
            </ListItemButton>
        </ListItem>
    );
};

const NestedList = ({ label, children, toggleMobileSidebar }: NestedListProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const names = pathname.split('/');
    const [prefix, suffix] = names.slice(-2);
    const isMenuOpen = children.some((child) => child.menu.some((item) => item.slug === suffix));

    const [open, setOpen] = useState<boolean>(isMenuOpen);

    /**
     * /shadcn -> prefix = "", suffix = "shadcn"
     * /shadcn/autocomplete -> prefix = "shadcn", suffix = "autocomplete"
     */
    const handleNavigate = (slug: string) => {
        const path = prefix ? names.slice(0, names.length - 1).join('/') : pathname;

        router.push(`${path}/${slug}`);

        if (toggleMobileSidebar) {
            toggleMobileSidebar();
        }
    };

    const items = children.map((child) => (
        <Fragment key={child.key}>
            {child.subheader && <ListSubheader>{child.subheader}</ListSubheader>}

            {child.menu.map((item) => (
                <NestedListItem
                    key={`${child.key}-${item.key}`}
                    item={item}
                    selected={item.slug === suffix}
                    onClick={handleNavigate}
                />
            ))}
        </Fragment>
    ));

    const handleToggle = () => {
        setOpen(!open);
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

            <Collapse in={open} timeout='auto' unmountOnExit>
                <List disablePadding>{items}</List>
            </Collapse>
        </>
    );
};

const SidebarContent = ({ toggleMobileSidebar }: SidebarContentProps) => {
    const pathname = usePathname();
    const basePath = pathname.split('/')[1];

    const menu = sidebarItems.map((item) => (
        <NestedList {...item} toggleMobileSidebar={toggleMobileSidebar} key={item.key} />
    ));

    return (
        <Stack sx={{ height: '100%' }}>
            {/* Logo */}
            <Box
                sx={(theme) => ({
                    gap: 1,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: (theme.vars || theme).docs.padding,
                    height: (theme.vars || theme).docs.navbarHeight,
                    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                })}
                component={Link}
                href={`/${basePath}`}
            >
                <ShadcnLogo fontSize={24} />
                <Box sx={{ fontWeight: 700 }}>shadcn/ui</Box>
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
