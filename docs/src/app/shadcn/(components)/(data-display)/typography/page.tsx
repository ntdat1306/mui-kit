'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Box, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Typography</Typography>
            <Typography variant='p'>
                Use typography to present your design and content as clearly and efficiently as possible.
            </Typography>
        </>
    );
};

const PreviewSection = () => {
    const preview = (
        <Box>
            <Typography variant='h1'>The Joke Tax Chronicles</Typography>
            <Typography variant='p'>
                Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
            </Typography>
            <Typography variant='h2'>The King's Plan</Typography>
            <Typography variant='p'>
                The king thought long and hard, and finally came up with{' '}
                <a href='#' className='font-medium text-primary underline underline-offset-4'>
                    a brilliant plan
                </a>
                : he would tax the jokes in the kingdom.
            </Typography>
            <Typography variant='blockquote'>
                "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the
                privilege."
            </Typography>
            <Typography variant='h3'>The Joke Tax</Typography>
            <Typography variant='p'>
                The king's subjects were not amused. They grumbled and complained, but the king was firm:
            </Typography>
            <Typography variant='list' className='my-6 ml-6 list-disc [&>li]:mt-2'>
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
            </Typography>
            <Typography variant='p'>
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person
                who refused to let the king's foolishness get him down: a court jester named Jokester.
            </Typography>
            <Typography variant='h3'>Jokester's Revolt</Typography>
            <Typography variant='p'>
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't
                seem to stop Jokester.
            </Typography>
            <Typography variant='p'>
                And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny
                that they couldn't help but laugh. And once they started laughing, they couldn't stop.
            </Typography>
            <Typography variant='h3'>The People's Rebellion</Typography>
            <Typography variant='p'>
                The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and
                soon the entire kingdom was in on the joke.
            </Typography>
            <Box sx={{ margin: '1.5rem 0', width: '100%', overflowY: 'auto' }}>
                <Typography variant='table'>
                    <thead>
                        <tr>
                            <th>King's Treasury</th>
                            <th>People's happiness</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Empty</td>
                            <td>Overflowing</td>
                        </tr>
                        <tr>
                            <td>Modest</td>
                            <td>Satisfied</td>
                        </tr>
                        <tr>
                            <td>Full</td>
                            <td>Ecstatic</td>
                        </tr>
                    </tbody>
                </Typography>
            </Box>
            <Typography variant='p'>
                The king, seeing how much happier his subjects were, realized the error of his ways and repealed the
                joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.
            </Typography>
            <Typography variant='p'>
                The moral of the story is: never underestimate the power of a good laugh and always be careful of bad
                ideas.
            </Typography>
        </Box>
    );

    const code = `import { Box, Typography } from '@mui/material';

const Demo = () => {
    return (
        <Box>
            <Typography variant='h1'>The Joke Tax Chronicles</Typography>
            <Typography variant='p'>
                Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
            </Typography>
            <Typography variant='h2'>The King's Plan</Typography>
            <Typography variant='p'>
                The king thought long and hard, and finally came up with{' '}
                <a href='#' className='font-medium text-primary underline underline-offset-4'>
                    a brilliant plan
                </a>
                : he would tax the jokes in the kingdom.
            </Typography>
            <Typography variant='blockquote'>
                "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the
                privilege."
            </Typography>
            <Typography variant='h3'>The Joke Tax</Typography>
            <Typography variant='p'>
                The king's subjects were not amused. They grumbled and complained, but the king was firm:
            </Typography>
            <Typography variant='list' className='my-6 ml-6 list-disc [&>li]:mt-2'>
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
            </Typography>
            <Typography variant='p'>
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person
                who refused to let the king's foolishness get him down: a court jester named Jokester.
            </Typography>
            <Typography variant='h3'>Jokester's Revolt</Typography>
            <Typography variant='p'>
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't
                seem to stop Jokester.
            </Typography>
            <Typography variant='p'>
                And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny
                that they couldn't help but laugh. And once they started laughing, they couldn't stop.
            </Typography>
            <Typography variant='h3'>The People's Rebellion</Typography>
            <Typography variant='p'>
                The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and
                soon the entire kingdom was in on the joke.
            </Typography>
            <Box sx={{ margin: '1.5rem 0', width: '100%', overflowY: 'auto' }}>
                <Typography variant='table'>
                    <thead>
                        <tr>
                            <th>King's Treasury</th>
                            <th>People's happiness</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Empty</td>
                            <td>Overflowing</td>
                        </tr>
                        <tr>
                            <td>Modest</td>
                            <td>Satisfied</td>
                        </tr>
                        <tr>
                            <td>Full</td>
                            <td>Ecstatic</td>
                        </tr>
                    </tbody>
                </Typography>
            </Box>
            <Typography variant='p'>
                The king, seeing how much happier his subjects were, realized the error of his ways and repealed the
                joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.
            </Typography>
            <Typography variant='p'>
                The moral of the story is: never underestimate the power of a good laugh and always be careful of bad
                ideas.
            </Typography>
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Preview</Typography>
            <Typography variant='p'>Styles for headings, paragraphs, lists...etc</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const H1Section = () => {
    const preview = <Typography variant='h1'>Taxing Laughter: The Joke Tax Chronicles</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='h1'>Taxing Laughter: The Joke Tax Chronicles</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>h1</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const H2Section = () => {
    const preview = <Typography variant='h2'>The People of the Kingdom</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='h2'>The People of the Kingdom</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>h2</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const H3Section = () => {
    const preview = <Typography variant='h3'>The Joke Tax</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='h3'>The Joke Tax</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>h3</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const H4Section = () => {
    const preview = <Typography variant='h4'>People stopped telling jokes</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='h4'>People stopped telling jokes</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>h4</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const H5Section = () => {
    const preview = <Typography variant='h5'>People stopped telling jokes</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='h5'>People stopped telling jokes</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>h5</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const H6Section = () => {
    const preview = <Typography variant='h6'>People stopped telling jokes</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='h6'>People stopped telling jokes</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>h6</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const PSection = () => {
    const preview = (
        <Typography variant='p'>
            The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke
            tax.
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='p'>
            The king, seeing how much happier his subjects were, 
            realized the error of his ways and repealed the joke tax.
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>p</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const BlockquoteSection = () => {
    const preview = (
        <Typography variant='blockquote'>
            "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the
            privilege."
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='blockquote'>
            "After all," he said, "everyone enjoys a good joke, 
            so it's only fair that they should pay for the privilege."
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>blockquote</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const TableSection = () => {
    const preview = (
        <Typography variant='table'>
            <thead>
                <tr>
                    <th>King's Treasury</th>
                    <th>People's happiness</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Empty</td>
                    <td>Overflowing</td>
                </tr>
                <tr>
                    <td>Modest</td>
                    <td>Satisfied</td>
                </tr>
                <tr>
                    <td>Full</td>
                    <td>Ecstatic</td>
                </tr>
            </tbody>
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='table'>
            <thead>
                <tr>
                    <th>King's Treasury</th>
                    <th>People's happiness</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Empty</td>
                    <td>Overflowing</td>
                </tr>
                <tr>
                    <td>Modest</td>
                    <td>Satisfied</td>
                </tr>
                <tr>
                    <td>Full</td>
                    <td>Ecstatic</td>
                </tr>
            </tbody>
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>table</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const ListSection = () => {
    const preview = (
        <Typography variant='list'>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='list'>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>list</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const CodeSection = () => {
    const preview = <Typography variant='code'>@radix-ui/react-alert-dialog</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='code'>@radix-ui/react-alert-dialog</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Inline code</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const LeadSection = () => {
    const preview = (
        <Typography variant='lead'>
            A modal dialog that interrupts the user with important content and expects a response.
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='lead'>
            A modal dialog that interrupts the user with important content and expects a response.
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Lead</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const LargeSection = () => {
    const preview = <Typography variant='large'>Are you absolutely sure?</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='large'>Are you absolutely sure?</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Large</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const SmallSection = () => {
    const preview = <Typography variant='small'>Email address</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='small'>Email address</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Small</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const MutedSection = () => {
    const preview = <Typography variant='muted'>Enter your email address.</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='muted'>Enter your email address.</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Muted</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Subtitle1Section = () => {
    const preview = (
        <Typography variant='subtitle1'>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='subtitle1'>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>subtitle1</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Subtitle2Section = () => {
    const preview = (
        <Typography variant='subtitle2'>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='subtitle2'>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>subtitle2</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Body1Section = () => {
    const preview = (
        <Typography variant='body1'>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='body1'>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>body1</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Body2Section = () => {
    const preview = (
        <Typography variant='body2'>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return (
        <Typography variant='body2'>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>body2</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const ButtonSection = () => {
    const preview = <Typography variant='button'>button text</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='button'>button text</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>button</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const CaptionSection = () => {
    const preview = <Typography variant='caption'>caption text</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='caption'>caption text</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>caption</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const OverlineSection = () => {
    const preview = <Typography variant='overline'>overline text</Typography>;

    const code = `import { Typography } from '@mui/material';

const Demo = () => {
    return <Typography variant='overline'>overline text</Typography>;
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>overline</Typography>
            <Typography variant='p'>Applies the theme typography styles.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <PreviewSection />
            <H1Section />
            <H2Section />
            <H3Section />
            <H4Section />
            <H5Section />
            <H6Section />
            <PSection />
            <BlockquoteSection />
            <TableSection />
            <ListSection />
            <CodeSection />
            <LeadSection />
            <LargeSection />
            <SmallSection />
            <MutedSection />
            <Subtitle1Section />
            <Subtitle2Section />
            <Body1Section />
            <Body2Section />
            <ButtonSection />
            <CaptionSection />
            <OverlineSection />
        </>
    );
};

export default Page;
