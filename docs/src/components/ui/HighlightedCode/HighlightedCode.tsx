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
        <Box sx={{ margin: '1.5rem 0' }}>
            {fileName && <Box sx={{ fontWeight: 500, marginBottom: '0.5rem', padding: '0 0.5rem' }}>{fileName}</Box>}

            <Box sx={{ position: 'relative' }}>
                <Box
                    onClick={handleCopy}
                    sx={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fafafa',
                    }}
                >
                    {copied ? <TbCopyCheck /> : <TbCopy />}
                </Box>

                <Paper className='hljs' sx={{ maxHeight: 384, overflow: 'auto' }}>
                    <pre>
                        <code className='hljs' dangerouslySetInnerHTML={{ __html: highlighted.value }}></code>
                    </pre>
                </Paper>
            </Box>
        </Box>
    );
};

export default HighlightedCode;
