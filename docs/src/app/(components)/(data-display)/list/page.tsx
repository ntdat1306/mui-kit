'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography,
} from '@mui/material';
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

const IntroductionSection = () => {
    const preview = (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary='Inbox' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Drafts' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Trash' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Spam' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );

    const code = `import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Demo = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary='Inbox' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Drafts' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Trash' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Spam' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                Lists present information in a concise, easy-to-follow format through a continuous, vertical index of
                text or images.
            </Typography>
            <Typography variant='p'>
                Material UI Lists are implemented using a collection of related components:
            </Typography>
            <Typography variant='list'>
                <li>
                    List: a wrapper for list items. Renders as a <Typography variant='code'>{'<ul>'}</Typography> by
                    default.
                </li>
                <li>
                    List Item: a common list item. Renders as a <Typography variant='code'>{'<li>'}</Typography> by
                    default.
                </li>
                <li>List Item Button: an action element to be used inside a list item.</li>
                <li>List Item Icon: an icon to be used inside of a list item.</li>
                <li>List Item Avatar: an avatar to be used inside of a list item.</li>
                <li>List Item Text: a container inside a list item, used to display text content.</li>
                <li>List Divider: a separator between list items.</li>
                <li>List Subheader: a label for a nested list.</li>
            </Typography>
            <PreviewCode preview={preview} code={code} />
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
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary='Sent mail' />
            </ListItemButton>

            <ListItemButton selected>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary='Drafts' />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
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

    const code = `import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
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
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary='Sent mail' />
            </ListItemButton>

            <ListItemButton selected>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary='Drafts' />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
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
            <IntroductionSection />
            <NestedSection />
        </>
    );
};

export default Page;
