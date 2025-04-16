import { Button, ButtonProps, styled } from '@mui/material';

const NavbarButton = styled(Button)<ButtonProps>(({ theme }) => ({
    width: 32,
    height: 32,
    minWidth: 0,
}));

export default NavbarButton;
