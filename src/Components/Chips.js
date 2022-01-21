import React from 'react';
import {Box} from "@mui/material";
import ButtonChips from "./ButtonChip";



function Chips(props){

    return  <Box
        sx={{
            width: "484px",
            margin: "auto 12px auto 0",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center,"
        }}
    >
        {props.data.map((button , id) => (
            <ButtonChips key={id} pokemon={button} />
        ))}

    </Box>
}

export default Chips;
