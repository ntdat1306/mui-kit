const menuImageBaseUrl = 'https://mui.com/static/material-ui/react-components';

const getMenuItems = (template: string, mode?: 'light' | 'dark') => {
    if (!mode) {
        return [];
    }

    const templates = [
        {
            template: 'shadcn',
            menu: [
                {
                    group: 'Inputs',
                    items: [
                        {
                            label: 'Autocomplete',
                            slug: 'autocomplete',
                            image: `${menuImageBaseUrl}/autocomplete-${mode}.png`,
                        },
                        {
                            label: 'Button',
                            slug: 'button',
                            image: `${menuImageBaseUrl}/button-${mode}.png`,
                        },
                        {
                            label: 'Button Group',
                            slug: 'button-group',
                            image: `${menuImageBaseUrl}/button-group-${mode}.png`,
                        },
                        {
                            label: 'Checkbox',
                            slug: 'checkbox',
                            image: `${menuImageBaseUrl}/checkbox-${mode}.png`,
                        },
                        {
                            label: 'Floating Action Button',
                            slug: 'floating-action-button',
                            image: `${menuImageBaseUrl}/fab-${mode}.png`,
                        },
                        {
                            label: 'Radio Group',
                            slug: 'radio-group',
                            image: `${menuImageBaseUrl}/radio-group-${mode}.png`,
                        },
                        {
                            label: 'Rating',
                            slug: 'rating',
                            image: `${menuImageBaseUrl}/rating-${mode}.png`,
                        },
                        {
                            label: 'Select',
                            slug: 'select',
                            image: `${menuImageBaseUrl}/select-${mode}.png`,
                        },
                        {
                            label: 'Slider',
                            slug: 'slider',
                            image: `${menuImageBaseUrl}/slider-${mode}.png`,
                        },
                        {
                            label: 'Switch',
                            slug: 'switch',
                            image: `${menuImageBaseUrl}/switch-${mode}.png`,
                        },
                        {
                            label: 'Text Field',
                            slug: 'text-field',
                            image: `${menuImageBaseUrl}/text-field-${mode}.png`,
                        },
                        {
                            label: 'Toggle Button',
                            slug: 'toggle-button',
                            image: `${menuImageBaseUrl}/toggle-button-${mode}.png`,
                        },
                        {
                            label: 'Typography',
                            slug: 'typography',
                            image: `${menuImageBaseUrl}/typography-${mode}.png`,
                        },
                    ],
                },
                {
                    group: 'Data Display',
                    items: [
                        {
                            label: 'Avatar',
                            slug: 'avatar',
                            image: `${menuImageBaseUrl}/avatar-${mode}.png`,
                        },
                        {
                            label: 'Badge',
                            slug: 'badge',
                            image: `${menuImageBaseUrl}/badge-${mode}.png`,
                        },
                        {
                            label: 'Chip',
                            slug: 'chip',
                            image: `${menuImageBaseUrl}/chip-${mode}.png`,
                        },
                        {
                            label: 'Divider',
                            slug: 'divider',
                            image: `${menuImageBaseUrl}/divider-${mode}.png`,
                        },
                    ],
                },
            ],
        },
    ];

    return templates.find((item) => item.template === template)?.menu || [];
};

export default getMenuItems;
