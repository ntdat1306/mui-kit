import { MuiComponent } from '@/types/theme';

const MuiTypography: MuiComponent<'MuiTypography'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            variants: [
                {
                    props: { variant: 'h1' },
                    style: {
                        fontWeight: 800,
                        fontSize: '2.25rem',
                        lineHeight: '2.5rem',
                        scrollMargin: '5rem',
                        letterSpacing: '-0.025em',
                        [theme.breakpoints.up('lg')]: {
                            fontSize: '3rem',
                            lineHeight: 1,
                        },
                    },
                },
                {
                    props: { variant: 'h2' },
                    style: {
                        fontWeight: 600,
                        marginTop: '2.5rem',
                        fontSize: '1.875rem',
                        lineHeight: '2.5rem',
                        scrollMargin: '5rem',
                        paddingBottom: '0.5rem',
                        letterSpacing: '-0.025em',
                        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,

                        '&:first-child': {
                            marginTop: 0,
                        },
                    },
                },
                {
                    props: { variant: 'h3' },
                    style: {
                        fontWeight: 600,
                        marginTop: '2rem',
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        scrollMargin: '5rem',
                        letterSpacing: '-0.025em',
                    },
                },
                {
                    props: { variant: 'h4' },
                    style: {
                        fontWeight: 600,
                        marginTop: '1.5rem',
                        fontSize: '1.25rem',
                        lineHeight: '1.75rem',
                        scrollMargin: '5rem',
                        letterSpacing: '-0.025em',
                    },
                },
                {
                    props: { variant: 'p' },
                    style: {
                        lineHeight: '1.75rem',
                        marginBottom: '1.5rem',
                        '&:not(:first-child)': {
                            marginTop: '1.5rem',
                        },
                    },
                },
                {
                    props: { variant: 'blockquote' },
                    style: {
                        fontStyle: 'italic',
                        paddingLeft: '1.5rem',
                        borderLeft: `2px solid ${(theme.vars || theme).palette.divider}`,
                        marginTop: '1.5rem',
                    },
                },
                {
                    props: { variant: 'table' },
                    style: {
                        width: '100%',
                        textIndent: 0,
                        borderColor: 'inherit',
                        borderCollapse: 'collapse',
                        '& tr': {
                            borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
                            '&:nth-child(even)': {
                                backgroundColor: (theme.vars || theme).palette.muted.main,
                            },
                            '& th, & td': {
                                textAlign: 'left',
                                padding: '0.5rem 1rem',
                                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                                '&[align=center]': {
                                    textAlign: 'center',
                                },
                                '&[align=right]': {
                                    textAlign: 'right',
                                },
                            },
                            '& th': {
                                fontWeight: 700,
                            },
                        },
                    },
                },
                {
                    props: { variant: 'list' },
                    style: {
                        margin: '1.5rem',
                        marginRight: 0,
                        listStyle: 'none',
                        listStyleType: 'disc',
                        '& > li': {
                            marginTop: '0.5rem',
                        },
                    },
                },
                {
                    props: { variant: 'code' },
                    style: {
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        position: 'relative',
                        lineHeight: '1.25rem',
                        borderRadius: '0.25rem',
                        padding: '0.2rem 0.3rem',
                        backgroundColor: (theme.vars || theme).palette.muted.main,
                    },
                },
                {
                    props: { variant: 'lead' },
                    style: {
                        color: (theme.vars || theme).palette.text.secondary,
                        fontSize: '1.25rem',
                        lineHeight: '1.75rem',
                    },
                },
                {
                    props: { variant: 'large' },
                    style: {
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        lineHeight: '1.75rem',
                    },
                },
                {
                    props: { variant: 'small' },
                    style: {
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        lineHeight: 1,
                    },
                },
                {
                    props: { variant: 'muted' },
                    style: {
                        color: (theme.vars || theme).palette.text.secondary,
                        fontSize: '0.875rem',
                        lineHeight: '1.25rem',
                    },
                },
            ],
        }),
    },
    defaultProps: {
        variantMapping: {
            p: 'p',
            blockquote: 'blockquote',
            table: 'table',
            list: 'ul',
            lead: 'p',
            large: 'div',
            small: 'small',
            muted: 'p',
        },
    },
};

export default MuiTypography;
