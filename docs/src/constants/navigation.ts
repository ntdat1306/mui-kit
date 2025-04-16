export type SidebarItem = {
    key: string;
    label: string;
    children: {
        key: string;
        subheader?: string;
        menu: { key: string; label: string; slug: string }[];
    }[];
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
        ],
    },
];
