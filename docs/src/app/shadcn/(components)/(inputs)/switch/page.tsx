import { Switch } from '@mui/material';

const Page = () => {
    return (
        <div>
            <Switch defaultChecked />
            <Switch />
            <Switch disabled defaultChecked />
            <Switch disabled />
        </div>
    );
};

export default Page;
