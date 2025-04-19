import { Box, Paper, Stack } from '@mui/material';
import hljs from 'highlight.js';
import { useState } from 'react';
import { TbCopy, TbCopyCheck } from 'react-icons/tb';
import { useCopyToClipboard, useDebounce } from 'react-use';

type HighlightedCodeProps = {
    code: string;
    fileName?: string;
    canCopy?: boolean;
};

const HighlightedCode = ({ code, fileName, canCopy = true }: HighlightedCodeProps) => {
    const highlighted = hljs.highlightAuto(code);
    const [, copyToClipboard] = useCopyToClipboard();
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = () => {
        copyToClipboard(code);
        setCopied(true);
    };

    useDebounce(
        () => {
            setCopied(false);
        },
        1000,
        [copied]
    );

    return (
        <>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                sx={{ marginBottom: '0.5rem', padding: '0 0.5rem' }}
                component='div'
            >
                <Box sx={{ fontWeight: 500 }}>{fileName}</Box>

                {canCopy && (
                    <Box
                        onClick={handleCopy}
                        sx={(theme) => ({
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            width: 24,
                            height: 24,
                            '&:hover': {
                                background: (theme.vars || theme).palette.action.hover,
                                borderRadius: (theme.vars || theme).shape.borderRadius,
                            },
                        })}
                    >
                        {copied ? <TbCopyCheck /> : <TbCopy />}
                    </Box>
                )}
            </Stack>

            <Paper sx={{ maxHeight: 350, overflow: 'auto' }}>
                <pre>
                    <code className='hljs' dangerouslySetInnerHTML={{ __html: highlighted.value }}></code>
                </pre>
            </Paper>
        </>
    );
};

export default HighlightedCode;
