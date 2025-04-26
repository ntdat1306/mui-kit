import { Typography } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <>
            <Typography variant='h1'>Overview</Typography>
            <Typography variant='p'>
                Welcome to [Library Name] — a customizable UI library built on top of MUI, designed for developers who
                want full control over their component styling without losing the powerful accessibility and
                functionality MUI provides.
            </Typography>
            <Typography variant='p'>
                Inspired by the philosophy behind shadcn/ui, this library focuses on clarity, customization, and
                developer experience. Instead of locking you into rigid design systems, we use MUI’s createTheme
                mechanism to give you a clean starting point, with the flexibility to override, extend, or completely
                transform the styles to match your brand.
            </Typography>
            <Typography variant='p'>Key Features:</Typography>
            <Typography variant='list'>
                <li>
                    Theme-First Approach: All styles are managed via createTheme, giving you a single source of truth
                    for colors, spacing, typography, and component behaviors.
                </li>
                <li>Full Control: Every component is fully customizable, from variants to slots to styles.</li>
                <li>Accessibility Out of the Box: Powered by MUI’s battle-tested components under the hood.</li>
                <li>Developer-Friendly: No complex configuration or runtime theming. Just extend the theme and go.</li>
                <li>
                    Lightweight and Modern: Ships minimal additional code, designed to fit seamlessly into any modern
                    React project.
                </li>
            </Typography>
            <Typography variant='p'>
                Whether you're building an MVP or a production-grade app, [Library Name] gives you the tools to move
                fast without sacrificing control.
            </Typography>
        </>
    );
};

export default Page;
