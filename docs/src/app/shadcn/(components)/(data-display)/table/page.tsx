'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Table</Typography>
            <Typography variant='p'>Tables display sets of data. They can be fully customized.</Typography>
            <Typography variant='p'>
                Tables display information in a way that's easy to scan, so that users can look for patterns and
                insights. They can be embedded in primary content, such as cards. They can include:
            </Typography>
            <Typography variant='list'>
                <li>A corresponding visualization</li>
                <li>Navigation</li>
                <li>Tools to query and manipulate data</li>
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>Tables are implemented using a collection of related components:</Typography>
            <Typography variant='list'>
                <li>
                    <Typography variant='code'>{'<TableContainer />'}</Typography> : A wrapper that provides
                    horizontally scrolling behavior for the <Typography variant='code'>{'<Table />'}</Typography>{' '}
                    component.
                </li>
                <li>
                    <Typography variant='code'>{'<Table />'}</Typography>: The main component for the table element.
                    Renders as a <Typography variant='code'>{'<table>'}</Typography> by default.
                </li>
                <li>
                    <Typography variant='code'>{'<TableHead />'}</Typography>: The container for the header row(s) of{' '}
                    <Typography variant='code'>{'<Table />'}</Typography>. Renders as a{' '}
                    <Typography variant='code'>{'<thead>'}</Typography> by default.
                </li>
                <li>
                    <Typography variant='code'>{'<TableBody />'}</Typography>: The container for the body rows of{' '}
                    <Typography variant='code'>{'<Table />'}</Typography>. Renders as a{' '}
                    <Typography variant='code'>{'<tbody>'}</Typography> by default.
                </li>
                <li>
                    <Typography variant='code'>{'<TableRow />'}</Typography>: A row in a table. Can be used in{' '}
                    <Typography variant='code'>{'<TableHead />'}</Typography>,{' '}
                    <Typography variant='code'>{'<TableBody />'}</Typography>, or{' '}
                    <Typography variant='code'>{'<TableFooter />'}</Typography>. Renders as a{' '}
                    <Typography variant='code'>{'<tr>'}</Typography> by default.
                </li>
                <li>
                    <Typography variant='code'>{'<TableCell />'}</Typography>: A cell in a table. Can be used in{' '}
                    <Typography variant='code'>{'<TableRow />'}</Typography>. Renders as a{' '}
                    <Typography variant='code'>{'<th>'}</Typography> in{' '}
                    <Typography variant='code'>{'<TableHead />'}</Typography> and{' '}
                    <Typography variant='code'>{'<td>'}</Typography> in{' '}
                    <Typography variant='code'>{'<TableBody />'}</Typography> by default.
                </li>
                <li>
                    <Typography variant='code'>{'<TableFooter />'}</Typography>: An optional container for the footer
                    row(s) of the table. Renders as a <Typography variant='code'>{'<tfoot>'}</Typography> by default.
                </li>
                <li>
                    <Typography variant='code'>{'<TablePagination />'}</Typography>: A component that provides controls
                    for paginating table data.
                </li>
                <li>
                    <Typography variant='code'>{'<TableSortLabel />'}</Typography>: A component used to display sorting
                    controls for column headers, allowing users to sort data in ascending or descending order.
                </li>
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
        return { name, calories, fat, carbs, protein };
    };

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const preview = (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align='right'>Calories</TableCell>
                        <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                        <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                        <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.calories}</TableCell>
                            <TableCell align='right'>{row.fat}</TableCell>
                            <TableCell align='right'>{row.carbs}</TableCell>
                            <TableCell align='right'>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell align='right'>22.5</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );

    const code = `import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';

const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) => {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Demo = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align='right'>Calories</TableCell>
                        <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                        <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                        <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.calories}</TableCell>
                            <TableCell align='right'>{row.fat}</TableCell>
                            <TableCell align='right'>{row.carbs}</TableCell>
                            <TableCell align='right'>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell align='right'>22.5</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic table</Typography>
            <Typography variant='p'>A simple example with no frills.</Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <IntroductionSection />
            <BasicSection />
        </>
    );
};

export default Page;
