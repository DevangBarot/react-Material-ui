import React from "react";

//Material UI Imports
import { Fragment } from "react";
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import cera from './assets/font/CeraPro-Regular.woff';

/**
 * If you want to apply custom style 
 * <Button 
            variant="contained" 
            color="primary"
            style={{
                fontSize: 14,
                color: 'red'
            }}>
            Hello
        </Button>
 */
import { makeStyles } from "@material-ui/core";
import {ThemeProvider,createTheme } from "@material-ui/core/styles";

const ceraPro = {
    fontFamily: 'cerapro',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('cerapro'),
    local('cerapro-regular),
    url(${cera}) format('woff')
    `,
}
const useStyle = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B,#FF8E53)',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color: 'white',
        padding: '15px 30px'
    }
})

const theme = createTheme({
    palette: {
        primary: {
            main: '#2CE080'
        },
        secondary: {
            main: '#C6DAF6'
        }
    },
    typography: {
        fontFamily: 'Cera pro, Arial',
        
    },
    overrides: {
        MuiCssBaseline: {
            '@global' : {
                '@font-face': [cera],
            }
        }
    }
    
})
function ButtonStyled() {
    const classes = useStyle();
    return <Button className={classes.root}>Test Styled Button</Button>
}

export const Material = (props) => {
    return <Fragment>
        <ThemeProvider theme={theme}>
            <ButtonStyled />
            <Button
                variant="contained"
                color="secondary"
                startIcon={<SaveIcon />}
            >
                Hello
            </Button>
        </ThemeProvider>
    </Fragment>
}
