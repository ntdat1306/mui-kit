import { Box, Typography } from '@mui/material';

const Page = () => {
    return (
        <div>
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

            <Typography variant='code'>@radix-ui/react-alert-dialog</Typography>
            <Typography variant='lead'>
                A modal dialog that interrupts the user with important content and expects a response.
            </Typography>
            <Typography variant='large'>Are you absolutely sure?</Typography>
            <Typography variant='small'>Email address</Typography>
            <Typography variant='muted'>Enter your email address.</Typography>
        </div>
    );
};

export default Page;
