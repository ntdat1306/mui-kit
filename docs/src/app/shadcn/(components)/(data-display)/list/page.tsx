'use client';

import { Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useState } from 'react';

const Page = () => {
    const [open, setOpen] = useState<boolean>(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
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
        </div>
    );
};

export default Page;
