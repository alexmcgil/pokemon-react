import React from 'react';
import {Box, createTheme, ThemeProvider, Typography} from "@mui/material";

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 48,
            color: "#A0A0A0",
            height: "48px",
            fontFamily: "Raleway",
            textTransform: "capitalize",
            fontWeight: 700,
            boxSizing: "border-box"
        },
        p: {
            display: "block",
            fontFamily: "Raleway",
            fontSize: "17px",
            lineHeight: "26px",
            textAlign: "left",
            color: "#A0A0A0"
        }
    },
});


function TerminDefinition(props) {

    return <Box
        sx={{
            padding: "44px 44px 16px",
            width: '484px',
            height: "440px",
            backgroundColor: "#000",
        }}
    >
        <ThemeProvider theme={theme}>
            <Typography variant="h1">{props.dataTermin.name}</Typography>
            <Box sx={{
                margin: "44px 0",
                width: "396px",
                height: "200px",
                backgroundColor: "#A0A0A0",
            }} >
            <img src={props.dataTermin.img} alt={props.dataTermin.name}/>
            </Box>
            <Typography variant="p">Снялса в {props.dataTermin.description.number} сериях</Typography>
            <Typography variant="p">id: {props.dataTermin.description.id}</Typography>
            <Typography variant="p">height: {props.dataTermin.description.height}</Typography>
            <Typography variant="p">attack: {props.dataTermin.description.attack}</Typography>
        </ThemeProvider>
    </Box>
}

export default TerminDefinition;
