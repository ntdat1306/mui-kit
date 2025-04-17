import { ArrowDownward, ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';

const Page = () => {
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

export default Page;
