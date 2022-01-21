import React from 'react';
import Title from "./Title";
import {Box} from "@mui/material";
import ChipsContainer from "./ChipsContainer";


function ContainerReact(){

    return  <Box
        sx={{
            margin: "100px auto",
        }}
    >
    <Title />
    <ChipsContainer />
    </Box>
}

export default ContainerReact;
