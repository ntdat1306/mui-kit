export type ItemChildrenMenu = {
    key: string;
    label: string;
    slug: string;
};

type SidebarItemChildren = {
    key: string;
    subheader?: string;
    menu: ItemChildrenMenu[];
};

export type SidebarItem = {
    key: string;
    label: string;
    children: SidebarItemChildren[];
};

export const sidebarItems: SidebarItem[] = [
    {
        key: 'getting-started',
        label: 'Getting started',
        children: [
            {
                key: 'getting-started-overview',
                menu: [
                    {
                        key: 'overview',
                        label: 'Overview',
                        slug: 'overview',
                    },
                ],
            },
        ],
    },
    {
        key: 'usage',
        label: 'Usage',
        children: [
            {
                key: 'usage-react',
                menu: [
                    {
                        key: 'usage-with-react',
                        label: 'React',
                        slug: 'usage-with-react',
                    },
                    {
                        key: 'usage-with-nextjs',
                        label: 'Next.js',
                        slug: 'usage-with-nextjs',
                    },
                ],
            },
        ],
    },
    {
        key: 'customization',
        label: 'Customization',
        children: [
            {
                key: 'customization-theme',
                menu: [
                    {
                        key: 'add-new-tokens',
                        label: 'Add new tokens',
                        slug: 'add-new-tokens',
                    },
                    {
                        key: 'override-theme-tokens',
                        label: 'Override theme tokens',
                        slug: 'override-theme-tokens',
                    },
                ],
            },
        ],
    },
    {
        key: 'components',
        label: 'Components',
        children: [
            {
                key: 'components-all-components',
                menu: [
                    {
                        key: 'all-components',
                        label: 'All components',
                        slug: 'all-components',
                    },
                ],
            },
            {
                key: 'components-inputs',
                subheader: 'Inputs',
                menu: [
                    {
                        key: 'autocomplete',
                        label: 'Autocomplete',
                        slug: 'autocomplete',
                    },
                    {
                        key: 'button',
                        label: 'Button',
                        slug: 'button',
                    },
                    {
                        key: 'button-group',
                        label: 'Button Group',
                        slug: 'button-group',
                    },
                    {
                        key: 'checkbox',
                        label: 'Checkbox',
                        slug: 'checkbox',
                    },
                    {
                        key: 'floating-action-button',
                        label: 'Floating Action Button',
                        slug: 'floating-action-button',
                    },
                    {
                        key: 'radio-group',
                        label: 'Radio Group',
                        slug: 'radio-group',
                    },
                    {
                        key: 'rating',
                        label: 'Rating',
                        slug: 'rating',
                    },
                    {
                        key: 'select',
                        label: 'Select',
                        slug: 'select',
                    },
                    {
                        key: 'slider',
                        label: 'Slider',
                        slug: 'slider',
                    },
                    {
                        key: 'switch',
                        label: 'Switch',
                        slug: 'switch',
                    },
                    {
                        key: 'text-field',
                        label: 'Text Field',
                        slug: 'text-field',
                    },
                    {
                        key: 'toggle-button',
                        label: 'Toggle Button',
                        slug: 'toggle-button',
                    },
                ],
            },
            {
                key: 'components-data-display',
                subheader: 'Data Display',
                menu: [
                    {
                        key: 'avatar',
                        label: 'Avatar',
                        slug: 'avatar',
                    },
                    {
                        key: 'badge',
                        label: 'Badge',
                        slug: 'badge',
                    },
                    {
                        key: 'chip',
                        label: 'Chip',
                        slug: 'chip',
                    },
                    {
                        key: 'divider',
                        label: 'Divider',
                        slug: 'divider',
                    },
                    {
                        key: 'list',
                        label: 'List',
                        slug: 'list',
                    },
                    {
                        key: 'table',
                        label: 'Table',
                        slug: 'table',
                    },
                    {
                        key: 'tooltip',
                        label: 'Tooltip',
                        slug: 'tooltip',
                    },
                    {
                        key: 'typography',
                        label: 'Typography',
                        slug: 'typography',
                    },
                ],
            },
            {
                key: 'components-feedback',
                subheader: 'Feedback',
                menu: [
                    {
                        key: 'alert',
                        label: 'Alert',
                        slug: 'alert',
                    },
                    {
                        key: 'backdrop',
                        label: 'Backdrop',
                        slug: 'backdrop',
                    },
                    {
                        key: 'dialog',
                        label: 'Dialog',
                        slug: 'dialog',
                    },
                    {
                        key: 'progress',
                        label: 'Progress',
                        slug: 'progress',
                    },
                    {
                        key: 'skeleton',
                        label: 'Skeleton',
                        slug: 'skeleton',
                    },
                    {
                        key: 'snackbar',
                        label: 'Snackbar',
                        slug: 'snackbar',
                    },
                ],
            },
            {
                key: 'components-surfaces',
                subheader: 'Surfaces',
                menu: [
                    {
                        key: 'accordion',
                        label: 'Accordion',
                        slug: 'accordion',
                    },
                    {
                        key: 'app-bar',
                        label: 'App Bar',
                        slug: 'app-bar',
                    },
                    {
                        key: 'card',
                        label: 'Card',
                        slug: 'card',
                    },
                    {
                        key: 'paper',
                        label: 'Paper',
                        slug: 'paper',
                    },
                ],
            },
            {
                key: 'components-navigation',
                subheader: 'Navigation',
                menu: [
                    {
                        key: 'bottom-navigation',
                        label: 'Bottom Navigation',
                        slug: 'bottom-navigation',
                    },
                    {
                        key: 'breadcrumbs',
                        label: 'Breadcrumbs',
                        slug: 'breadcrumbs',
                    },
                    {
                        key: 'drawer',
                        label: 'Drawer',
                        slug: 'drawer',
                    },
                    {
                        key: 'link',
                        label: 'Link',
                        slug: 'link',
                    },
                    {
                        key: 'menu',
                        label: 'Menu',
                        slug: 'menu',
                    },
                    {
                        key: 'pagination',
                        label: 'Pagination',
                        slug: 'pagination',
                    },
                    {
                        key: 'speed-dial',
                        label: 'Speed Dial',
                        slug: 'speed-dial',
                    },
                    {
                        key: 'stepper',
                        label: 'Stepper',
                        slug: 'stepper',
                    },
                    {
                        key: 'tabs',
                        label: 'Tabs',
                        slug: 'tabs',
                    },
                ],
            },
        ],
    },
];
