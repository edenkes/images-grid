import {Box, CssBaseline} from "@mui/material";
import DashboardAppBar from "./components/DashboardAppBar";
import MainDashboard from "./components/MainDashboard";

function App() {
    return (
        <div className="App">
            <Box sx={{display: "flex"}}>
                <CssBaseline/>
                <DashboardAppBar/>
                <MainDashboard/>
            </Box>
        </div>
    );
}

export default App;
