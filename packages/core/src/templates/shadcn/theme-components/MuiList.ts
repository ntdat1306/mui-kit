import { MuiComponent } from '@/types/theme';
import {
    collapseClasses,
    listItemAvatarClasses,
    listItemButtonClasses,
    listItemClasses,
    listItemIconClasses,
    listItemTextClasses,
    listSubheaderClasses,
    typographyClasses,
} from '@mui/material';

const MuiList: MuiComponent<'MuiList'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .${listSubheaderClasses.root}`]: {
                height: '2rem',
                lineHeight: '1rem',
                padding: '0 0.5rem',
                display: 'flex',
                alignItems: 'center',
            },
            [`& .${listItemClasses.root}`]: {
                padding: '0.5rem',
                borderRadius: `calc(${(theme.vars || theme).shape.borderRadius} - 2px)`,
                '&.Mui-selected': {
                    color: (theme.vars || theme).palette.primary.main,
                    [`& .${listItemIconClasses.root}`]: {
                        color: 'inherit',
                    },
                },
                [`&:has(.${listItemButtonClasses.root})`]: {
                    padding: 0,
                },
            },
            [`& .${listItemButtonClasses.root}`]: {
                padding: '0.5rem',
                borderRadius: `calc(${(theme.vars || theme).shape.borderRadius} - 2px)`,
                '&.Mui-selected': {
                    color: (theme.vars || theme).palette.primary.main,
                    [`& .${listItemIconClasses.root}`]: {
                        color: 'inherit',
                    },
                },
            },
            [`& .${listItemIconClasses.root}, & .${listItemAvatarClasses.root}`]: {
                minWidth: 0,
                marginRight: '0.5rem',
            },
            [`& .${listItemTextClasses.root}`]: {
                margin: 0,
                [`& .${typographyClasses.root}`]: {
                    lineHeight: '1.25rem',
                },
            },
            [`& .${collapseClasses.root}`]: {
                marginLeft: '1rem',
                borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
                [`& .${collapseClasses.wrapper}`]: {
                    padding: '0.125rem 0.625rem',
                },
            },
        }),
    },
};

export default MuiList;
