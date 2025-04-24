'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Stepper</Typography>
            <Typography variant='p'>
                Steppers convey progress through numbered steps. It provides a wizard-like workflow.
            </Typography>
            <Typography variant='p'>
                Steppers display progress through a sequence of logical and numbered steps. They may also be used for
                navigation. Steppers may display a transient feedback message after a step is saved.
            </Typography>
            <Typography variant='list'>
                <li>Types of Steps: Editable, Non-editable, Mobile, Optional</li>
                <li>Types of Steppers: Horizontal, Vertical, Linear, Non-linear</li>
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const preview = (
        <Box sx={{ flex: 1 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant='caption'>Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </Fragment>
            ) : (
                <Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                    </Box>
                </Fragment>
            )}
        </Box>
    );

    const code = `import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';

const Demo = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant='caption'>Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </Fragment>
            ) : (
                <Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                    </Box>
                </Fragment>
            )}
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                The Stepper component displays progress through a sequence of logical and numbered steps. It supports
                horizontal and vertical orientation for desktop and mobile viewports.
            </Typography>
            <Typography variant='p'>Steppers are implemented using a collection of related components:</Typography>
            <Typography variant='list'>
                <li>Stepper: the container for the steps.</li>
                <li>Step: an individual step in the sequence.</li>
                <li>Step Label: a label for a Step.</li>
                <li>Step Content: optional content for a Step.</li>
                <li>Step Button: optional button for a Step.</li>
                <li>Step Icon: optional icon for a Step.</li>
                <li>Step Connector: optional customized connector between Steps.</li>
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
