import React from 'react';
import {Box, Button} from "@mui/material";



function ButtonChips(props) {

    return (
        <Box
            sx={{
                height: "60px",
                margin: "5px 3px",
                padding: 0,
            }}
        >
                <Button
                    style={{
                        fontWeight: 500,
                        lineHeight: "20px",
                        fontSize: "20px",
                        fontFamily: 'Raleway',
                        borderRadius: "44px",
                        borderColor: "#1986EC",
                        borderStyle: "solid",
                        backgroundColor: "#1986EC",
                        color: "#FFF",
                        textTransform: "lowercase",
                        padding: "20px",
                        boxSizing: "border-box",
                        verticalAlign: "top",
                        cursor: "pointer"

                    }}>
                    {props.pokemon}</Button>
        </Box>
    )
}

export default ButtonChips;
