import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import {Button} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ImageCard from "./ImageCard";


export default function MainDashboard() {
    const [images, setImages] = useState([])
    const [chosenImages, setChosenImages] = useState([])
    const [direction, setDirection] = useState("row")
    useEffect(() => {
        console.log()
        fetch("https://api.jonathanczyzyk.com/api/v1/images/small", {
            "method": "GET",
            "headers": {
                "x-api-key": "api-key-dbe03832-1816-44d5-93ea-9da099054596"
            }
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    response.json().then((parseResponse) => {
                        console.log(parseResponse);
                        setImages(parseResponse)
                        setChosenImages(parseResponse.slice(0, 5))
                    }).catch((err) => {
                        console.log(err)
                    });
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    const refreshImage = () => {
        setChosenImages(images.sort(() => 0.5 - Math.random()).slice(0, 5));
    }
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
            }}
        >
            <Toolbar/>
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                <Grid container>
                    <Grid container justifyContent="flex-end">
                        <Box sx={{backgroundColor: (theme) => theme.palette.grey[300]}}>
                            <IconButton onClick={() => setDirection("row")}
                                        color={direction === "row" ? "primary" : "inherit"}>
                                <ViewAgendaIcon/>
                            </IconButton>
                            <IconButton onClick={() => setDirection("column")}
                                        color={direction !== "row" ? "primary" : "inherit"}>
                                <ViewColumnIcon/>
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid container spacing={3} mb={4} mt={1} direction={direction} justifyContent="center"
                          alignItems="center">
                        {chosenImages.map((image) =>
                            <Grid key={image.url} item xs={direction === "row" ? 2.4 : 1}
                            >
                                <ImageCard image={image}/>
                            </Grid>
                        )}
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button onClick={refreshImage} variant="contained">Refresh</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )

}

