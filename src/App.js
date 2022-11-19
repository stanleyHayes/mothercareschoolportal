import './App.css';
import {Box, ThemeProvider, Typography} from "@mui/material";
import {THEMES} from "./utils/themes";

function App() {
    return (
        <ThemeProvider theme={THEMES.dark}>
            <Box sx={{
                height: "100vh",
                backgroundColor: "#ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography variant="h4" align="center">Coming Soon</Typography>
            </Box>
        </ThemeProvider>
    );
}

export default App;
