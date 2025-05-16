'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Card</Typography>
            <Typography variant='p'>Cards contain content and actions about a single subject.</Typography>
        </>
    );
};

const IntroductionSection = () => {
    const preview = (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
                title='green iguana'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    );

    const code = `import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Demo = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
                title='green iguana'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                Cards are surfaces that display content and actions on a single topic. The Material UI Card component
                includes several complementary utility components to handle various use cases:
            </Typography>
            <Typography variant='list'>
                <li>Card: a surface-level container for grouping related components.</li>
                <li>Card Content: the wrapper for the Card content.</li>
                <li>Card Header: an optional wrapper for the Card header.</li>
                <li>Card Media: an optional container for displaying images, videos, etc.</li>
                <li>Card Actions: an optional wrapper that groups a set of buttons.</li>
                <li>
                    Card Action Area: an optional wrapper that allows users to interact with the specified area of the
                    Card.
                </li>
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
