'use client';

import { Box, Container } from '@mui/material';
import React from 'react';
import { useToggle } from 'react-use';
import { TemplateMobileSidebar } from '../MobileSidebar';
import { TemplateNavbar } from '../Navbar';
import { TemplateSidebar } from '../Sidebar';

type TemplateLayoutProps = {
    children: React.ReactNode;
};

const TemplateLayout = ({ children }: TemplateLayoutProps) => {
    const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);

    return (
        <>
            <TemplateNavbar toggleMobileSidebar={toggleMobileSidebar} />
            <TemplateSidebar />
            <TemplateMobileSidebar isOpen={isMobileSidebarOpen} toggle={toggleMobileSidebar} />

            <Box
                sx={(theme) => ({
                    paddingTop: (theme.vars || theme).docs.navbarHeight,
                    paddingLeft: { xs: 0, lg: (theme.vars || theme).docs.sidebarWidth },
                })}
            >
                <Box sx={{ padding: '2rem 0' }}>
                    <Container>{children}</Container>
                </Box>
            </Box>
        </>
    );
};

export default TemplateLayout;
