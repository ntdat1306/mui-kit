import useComputedColorScheme from '@/hooks/useComputedColorScheme';
import getMenuItems from '@/utils/getMenuItems';
import { Box, List, ListItem, ListItemButton, ListItemText, ListSubheader, Stack } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment } from 'react';

type SidebarContentProps = {
    toggleMobileSidebar?: () => void;
};

const SidebarContent = ({ toggleMobileSidebar }: SidebarContentProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const computedColorScheme = useComputedColorScheme();

    const [prefix, suffix] = pathname.split('/').filter((item) => Boolean(item));

    const menuItems = getMenuItems(prefix, computedColorScheme);

    const menu = menuItems.map((item, itemIndex) => (
        <Fragment key={itemIndex}>
            {/* Subheader */}
            <ListSubheader>{item.group}</ListSubheader>

            {/* Menu */}
            {item.items.map((i, index) => {
                const isSelected = suffix === i.slug;

                return (
                    <ListItem key={`${itemIndex}${index}`} disablePadding>
                        <ListItemButton selected={isSelected} onClick={() => handleNavigate(prefix, i.slug)}>
                            <ListItemText primary={i.label} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </Fragment>
    ));

    const handleNavigate = (prefix: string, slug: string) => {
        router.push(`/${prefix}/${slug}`);

        if (toggleMobileSidebar) {
            toggleMobileSidebar();
        }
    };

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
                    borderRight: `1px solid ${(theme.vars || theme).palette.divider}`,
                })}
            >
                <List>{menu}</List>
            </Box>
        </Stack>
    );
};

export default SidebarContent;
