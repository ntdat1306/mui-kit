'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { ArrowDownward, ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Accordion</Typography>
            <Typography variant='p'>
                The Accordion component lets users show and hide sections of related content on a page.
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    const preview = (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDownward />} aria-controls='panel1-content' id='panel1-header'>
                    <Typography component='span'>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDown />} aria-controls='panel2-content' id='panel2-header'>
                    <Typography component='span'>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDown />} aria-controls='panel2-content' id='panel2-header'>
                    <Typography component='span'>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDown />} aria-controls='panel2-content' id='panel2-header'>
                    <Typography component='span'>Accordion 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );

    const code = `import { ArrowDownward, ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const Demo = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDownward />} aria-controls='panel1-content' id='panel1-header'>
                    <Typography component='span'>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDown />} aria-controls='panel2-content' id='panel2-header'>
                    <Typography component='span'>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDown />} aria-controls='panel2-content' id='panel2-header'>
                    <Typography component='span'>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDown />} aria-controls='panel2-content' id='panel2-header'>
                    <Typography component='span'>Accordion 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                The Material UI Accordion component includes several complementary utility components to handle various
                use cases:
            </Typography>
            <Typography variant='list'>
                <li>Accordion: the wrapper for grouping related components.</li>
                <li>
                    Accordion Summary: the wrapper for the Accordion header, which expands or collapses the content when
                    clicked.
                </li>
                <li>Accordion Details: the wrapper for the Accordion content.</li>
                <li>Accordion Actions: an optional wrapper that groups a set of buttons.</li>
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
        </>
    );
};

export default Page;
