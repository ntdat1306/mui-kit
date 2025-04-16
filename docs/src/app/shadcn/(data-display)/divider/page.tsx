'use client';

import { Divider, List, ListItem, ListItemText } from '@mui/material';

const Page = () => {
    return (
        <div>
            <List
                sx={(theme) => ({
                    py: 0,
                    width: '100%',
                    maxWidth: 360,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: (theme.vars || theme).palette.background.paper,
                })}
            >
                <ListItem>
                    <ListItemText primary='Full width variant below' />
                </ListItem>
                <Divider component='li' />
                <ListItem>
                    <ListItemText primary='Inset variant below' />
                </ListItem>
                <Divider variant='inset' component='li' />
                <ListItem>
                    <ListItemText primary='Middle variant below' />
                </ListItem>
                <Divider variant='middle' component='li' />
                <ListItem>
                    <ListItemText primary='List item' />
                </ListItem>
            </List>
        </div>
    );
};

export default Page;
