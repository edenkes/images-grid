import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";


export default function DashboardAppBar() {
    return (
        <AppBar position="absolute">
            <Toolbar>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{flexGrow: 1}}
                >
                    Images Gallery
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

