import { createMuiTheme } from '@material-ui/core';
import { rgbToHex } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: rgbToHex('rgb(4, 19, 104)')
        }
    },
    typography: {
        fontFamily: ' "Montserrat", sans-serif'
    }
});
