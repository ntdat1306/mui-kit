'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Lists</Typography>
            <Typography variant='p'>Lists are continuous, vertical indexes of text or images.</Typography>
            <Typography variant='p'>
                Lists are a continuous group of text or images. They are composed of items containing primary and
                supplemental actions, which are represented by icons and text.
            </Typography>
        </>
    );
};

const NestedSection = () => {
    const [open, setOpen] = useState<boolean>(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const preview = (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component='nav'
            subheader={<ListSubheader component='div'>Nested List Items</ListSubheader>}
        >
            <ListItemButton>
                <ListItemIcon>
                    <Send />
                </ListItemIcon>
                <ListItemText primary='Sent mail' />
            </ListItemButton>

            <ListItemButton selected>
                <ListItemIcon>
                    <Drafts />
                </ListItemIcon>
                <ListItemText primary='Drafts' />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Inbox />
                </ListItemIcon>
                <ListItemText primary='Inbox' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout='auto' unmountOnExit sx={{ marginLeft: 2 }}>
                <List component='div' disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                </List>

                <Collapse in={open} timeout='auto' unmountOnExit>
                    <List
                        component='div'
                        disablePadding
                        subheader={<ListSubheader component='div'>Nested List Items</ListSubheader>}
                    >
                        <ListItemButton>
                            <ListItemText primary='Starred' />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary='Starred' />
                        </ListItemButton>
                    </List>

                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            <ListItemButton>
                                <ListItemText primary='Starred' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary='Starred' />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Collapse>
            </Collapse>
        </List>
    );

    const code = `import { Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useState } from 'react';

const Demo = () => {
    const [open, setOpen] = useState<boolean>(true);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component='nav'
            subheader={<ListSubheader component='div'>Nested List Items</ListSubheader>}
        >
            <ListItemButton>
                <ListItemIcon>
                    <Send />
                </ListItemIcon>
                <ListItemText primary='Sent mail' />
            </ListItemButton>

            <ListItemButton selected>
                <ListItemIcon>
                    <Drafts />
                </ListItemIcon>
                <ListItemText primary='Drafts' />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Inbox />
                </ListItemIcon>
                <ListItemText primary='Inbox' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout='auto' unmountOnExit sx={{ marginLeft: 2 }}>
                <List component='div' disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                </List>

                <Collapse in={open} timeout='auto' unmountOnExit>
                    <List
                        component='div'
                        disablePadding
                        subheader={<ListSubheader component='div'>Nested List Items</ListSubheader>}
                    >
                        <ListItemButton>
                            <ListItemText primary='Starred' />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary='Starred' />
                        </ListItemButton>
                    </List>

                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            <ListItemButton>
                                <ListItemText primary='Starred' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary='Starred' />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Collapse>
            </Collapse>
        </List>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Nested List</Typography>
            <Typography variant='p'>
                Displays hierarchical items with expandable sublists, ideal for menus or categories. Supports icons,
                text, and smooth animations.
                <Typography variant='code'>middle</Typography>.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <NestedSection />
        </>
    );
};

export default Page;
