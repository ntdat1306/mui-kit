const baseUrl = 'https://mui.com/static/material-ui/react-components';

type Components = {
    key: string;
    subheader: string;
    menu: {
        key: string;
        label: string;
        slug: string;
        image: string;
    }[];
}[];

const getShadcnComponents = (mode?: 'light' | 'dark'): Components => {
    if (!mode) {
        return [];
    }

    return [
        {
            key: 'inputs',
            subheader: 'Inputs',
            menu: [
                {
                    key: 'autocomplete',
                    label: 'Autocomplete',
                    slug: 'autocomplete',
                    image: `${baseUrl}/autocomplete-${mode}.png`,
                },
                {
                    key: 'button',
                    label: 'Button',
                    slug: 'button',
                    image: `${baseUrl}/button-${mode}.png`,
                },
                {
                    key: 'button-group',
                    label: 'Button Group',
                    slug: 'button-group',
                    image: `${baseUrl}/button-group-${mode}.png`,
                },
                {
                    key: 'checkbox',
                    label: 'Checkbox',
                    slug: 'checkbox',
                    image: `${baseUrl}/checkbox-${mode}.png`,
                },
                {
                    key: 'floating-action-button',
                    label: 'Floating Action Button',
                    slug: 'floating-action-button',
                    image: `${baseUrl}/fab-${mode}.png`,
                },
                {
                    key: 'radio-group',
                    label: 'Radio Group',
                    slug: 'radio-group',
                    image: `${baseUrl}/radio-group-${mode}.png`,
                },
                {
                    key: 'rating',
                    label: 'Rating',
                    slug: 'rating',
                    image: `${baseUrl}/rating-${mode}.png`,
                },
                {
                    key: 'select',
                    label: 'Select',
                    slug: 'select',
                    image: `${baseUrl}/select-${mode}.png`,
                },
                {
                    key: 'slider',
                    label: 'Slider',
                    slug: 'slider',
                    image: `${baseUrl}/slider-${mode}.png`,
                },
                {
                    key: 'switch',
                    label: 'Switch',
                    slug: 'switch',
                    image: `${baseUrl}/switch-${mode}.png`,
                },
                {
                    key: 'text-field',
                    label: 'Text Field',
                    slug: 'text-field',
                    image: `${baseUrl}/text-field-${mode}.png`,
                },
                {
                    key: 'toggle-button',
                    label: 'Toggle Button',
                    slug: 'toggle-button',
                    image: `${baseUrl}/toggle-button-${mode}.png`,
                },
            ],
        },
        {
            key: 'data-display',
            subheader: 'Data Display',
            menu: [
                {
                    key: 'avatar',
                    label: 'Avatar',
                    slug: 'avatar',
                    image: `${baseUrl}/avatar-${mode}.png`,
                },
                {
                    key: 'badge',
                    label: 'Badge',
                    slug: 'badge',
                    image: `${baseUrl}/badge-${mode}.png`,
                },
                {
                    key: 'chip',
                    label: 'Chip',
                    slug: 'chip',
                    image: `${baseUrl}/chip-${mode}.png`,
                },
                {
                    key: 'divider',
                    label: 'Divider',
                    slug: 'divider',
                    image: `${baseUrl}/divider-${mode}.png`,
                },
                {
                    key: 'list',
                    label: 'List',
                    slug: 'list',
                    image: `${baseUrl}/list-${mode}.png`,
                },
                {
                    key: 'table',
                    label: 'Table',
                    slug: 'table',
                    image: `${baseUrl}/table-${mode}.png`,
                },
                {
                    key: 'tooltip',
                    label: 'Tooltip',
                    slug: 'tooltip',
                    image: `${baseUrl}/tooltip-${mode}.png`,
                },
                {
                    key: 'typography',
                    label: 'Typography',
                    slug: 'typography',
                    image: `${baseUrl}/typography-${mode}.png`,
                },
            ],
        },
        {
            key: 'feedback',
            subheader: 'Feedback',
            menu: [
                {
                    key: 'alert',
                    label: 'Alert',
                    slug: 'alert',
                    image: `${baseUrl}/alert-${mode}.png`,
                },
                {
                    key: 'backdrop',
                    label: 'Backdrop',
                    slug: 'backdrop',
                    image: `${baseUrl}/backdrop-${mode}.png`,
                },
                {
                    key: 'dialog',
                    label: 'Dialog',
                    slug: 'dialog',
                    image: `${baseUrl}/dialog-${mode}.png`,
                },
                {
                    key: 'progress',
                    label: 'Progress',
                    slug: 'progress',
                    image: `${baseUrl}/progress-${mode}.png`,
                },
                {
                    key: 'skeleton',
                    label: 'Skeleton',
                    slug: 'skeleton',
                    image: `${baseUrl}/skeleton-${mode}.png`,
                },
                {
                    key: 'snackbar',
                    label: 'Snackbar',
                    slug: 'snackbar',
                    image: `${baseUrl}/snackbar-${mode}.png`,
                },
            ],
        },
        {
            key: 'surfaces',
            subheader: 'Surfaces',
            menu: [
                {
                    key: 'accordion',
                    label: 'Accordion',
                    slug: 'accordion',
                    image: `${baseUrl}/accordion-${mode}.png`,
                },
                {
                    key: 'app-bar',
                    label: 'App Bar',
                    slug: 'app-bar',
                    image: `${baseUrl}/appbar-${mode}.png`,
                },
                {
                    key: 'card',
                    label: 'Card',
                    slug: 'card',
                    image: `${baseUrl}/card-${mode}.png`,
                },
                {
                    key: 'paper',
                    label: 'Paper',
                    slug: 'paper',
                    image: `${baseUrl}/paper-${mode}.png`,
                },
            ],
        },
        {
            key: 'navigation',
            subheader: 'Navigation',
            menu: [
                {
                    key: 'bottom-navigation',
                    label: 'Bottom Navigation',
                    slug: 'bottom-navigation',
                    image: `${baseUrl}/bottomnav-${mode}.png`,
                },
                {
                    key: 'breadcrumbs',
                    label: 'Breadcrumbs',
                    slug: 'breadcrumbs',
                    image: `${baseUrl}/breadcrumbs-${mode}.png`,
                },
                {
                    key: 'drawer',
                    label: 'Drawer',
                    slug: 'drawer',
                    image: `${baseUrl}/drawer-${mode}.png`,
                },
                {
                    key: 'link',
                    label: 'Link',
                    slug: 'link',
                    image: `${baseUrl}/link-${mode}.png`,
                },
                {
                    key: 'menu',
                    label: 'Menu',
                    slug: 'menu',
                    image: `${baseUrl}/menu-${mode}.png`,
                },
                {
                    key: 'pagination',
                    label: 'Pagination',
                    slug: 'pagination',
                    image: `${baseUrl}/pagination-${mode}.png`,
                },
                {
                    key: 'speed-dial',
                    label: 'Speed Dial',
                    slug: 'speed-dial',
                    image: `${baseUrl}/speed-dial-${mode}.png`,
                },
                {
                    key: 'stepper',
                    label: 'Stepper',
                    slug: 'stepper',
                    image: `${baseUrl}/stepper-${mode}.png`,
                },
                {
                    key: 'tabs',
                    label: 'Tabs',
                    slug: 'tabs',
                    image: `${baseUrl}/tabs-${mode}.png`,
                },
            ],
        },
    ];
};

export default getShadcnComponents;
