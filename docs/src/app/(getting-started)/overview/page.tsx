import { Typography } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <>
            <Typography variant='h1'>Overview</Typography>
            <Typography variant='p'>
                Welcome to @datstack/mui-shadcn, a lightweight and customizable npm library designed to streamline
                theming for Material UI applications. Inspired by the sleek and modern component styling of Shadcn, this
                library provides a pre-configured createTheme setup to effortlessly restyle all Material UI components
                with a consistent, professional look and feel.
            </Typography>

            <Typography variant='h2'>What is @datstack/mui-shadcn?</Typography>
            <Typography variant='p'>
                @datstack/mui-shadcn is a theming solution built on top of Material UI's createTheme function. It offers
                a ready-to-use theme configuration that applies cohesive styles across all Material UI components,
                ensuring a unified design system for your application. Whether you're building a new project or
                upgrading an existing one, this library simplifies the process of achieving a polished, Shadcn-inspired
                aesthetic without writing extensive custom styles.
            </Typography>

            <Typography variant='h2'>Key Features</Typography>
            <Typography variant='list'>
                <li>
                    Pre-Configured Theme: A carefully crafted theme that restyles Material UI components with modern,
                    Shadcn-like aesthetics.
                </li>
                <li>
                    Component Consistency: Unified styling for buttons, inputs, cards, modals, and more, ensuring a
                    cohesive user experience.
                </li>
                <li>
                    Customizable: Easily extend or override theme properties to match your brand or design requirements.
                </li>
                <li>Lightweight: Minimal footprint with no unnecessary dependencies beyond Material UI.</li>
                <li>TypeScript Support: Fully typed for a seamless development experience in TypeScript projects.</li>
                <li>Developer-Friendly: Simple integration with clear documentation and examples.</li>
            </Typography>

            <Typography variant='h2'>Why Use?</Typography>
            <Typography variant='list'>
                <li>
                    Save Time: Skip the hassle of manually styling each Material UI component. Our pre-built theme gets
                    you started instantly.
                </li>
                <li>
                    Shadcn-Inspired Design: Achieve a modern, clean, and minimal aesthetic similar to Shadcn's component
                    library.
                </li>
                <li>
                    Maintain Flexibility: Customize the theme to fit your project's unique needs while retaining
                    Material UI's powerful features.
                </li>
                <li>
                    Seamless Integration: Works out of the box with any Material UI-based project, whether you're using
                    React or Next.js.
                </li>
            </Typography>
        </>
    );
};

export default Page;
