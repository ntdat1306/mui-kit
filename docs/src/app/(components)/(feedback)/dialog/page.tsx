'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Link,
    Typography,
} from '@mui/material';
import { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Dialog</Typography>
            <Typography variant='p'>
                Dialogs inform users about a task and can contain critical information, require decisions, or involve
                multiple tasks.
            </Typography>
            <Typography variant='p'>
                A Dialog is a type of modal window that appears in front of app content to provide critical information
                or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen
                until confirmed, dismissed, or a required action has been taken.
            </Typography>
            <Typography variant='p'>
                Dialogs are purposefully interruptive, so they should be used sparingly.
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>Dialogs are implemented using a collection of related components:</Typography>
            <Typography variant='list'>
                <li>Dialog: the parent component that renders the modal.</li>
                <li>Dialog Title: a wrapper used for the title of a Dialog.</li>
                <li>Dialog Actions: an optional container for a Dialog's Buttons.</li>
                <li>Dialog Content: an optional container for displaying the Dialog's content.</li>
                <li>
                    Dialog Content Text: a wrapper for text inside of{' '}
                    <Typography variant='code'>{'<DialogContent />'}</Typography>.
                </li>
                <li>
                    Slide: optional{' '}
                    <Link href='https://mui.com/material-ui/transitions/#slide' target='_blank'>
                        Transition
                    </Link>{' '}
                    used to slide the Dialog in from the edge of the screen.
                </li>
            </Typography>
        </>
    );
};

const AlertsSection = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const preview = (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                Open alert dialog
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Let Google help apps determine location. This means sending anonymous location data to Google,
                        even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button variant='contained' onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    const code = `import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

const Demo = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                Open alert dialog
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Let Google help apps determine location. This means sending anonymous location data to Google,
                        even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button variant='contained' onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Alerts</Typography>
            <Typography variant='p'>
                Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
            </Typography>
            <Typography variant='p'>
                Most alerts don't need titles. They summarize a decision in a sentence or two by either:
            </Typography>
            <Typography variant='list'>
                <li>Asking a question (for example "Delete this conversation?")</li>
                <li>Making a statement related to the action buttons</li>
            </Typography>
            <Typography variant='p'>
                Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users
                should be able to understand the choices based on the title and button text alone.
            </Typography>
            <Typography variant='p'>If a title is required:</Typography>
            <Typography variant='list'>
                <li>
                    Use a clear question or statement with an explanation in the content area, such as "Erase USB
                    storage?".
                </li>
                <li>Avoid apologies, ambiguity, or questions, such as "Warning!" or "Are you sure?"</li>
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
            <AlertsSection />
        </>
    );
};

export default Page;
