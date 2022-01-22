import React from 'react';
import Title from "./Title";
import {Box} from "@mui/material";
import ChipsContainer from "./ChipsContainer";


function ContainerReact() {

    return (
        <main>
            <Box
                sx={{
                    margin: "100px 0 0",
                }}
            >
                <Title/>
                <ChipsContainer/>
            </Box>
        </main>)
}

export default ContainerReact;
