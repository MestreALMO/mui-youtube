import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { purple } from "@mui/material/colors";

function App() {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box style={{ padding: "20px", background: "blue" }} />

      {mobileScreen ? (
        <Box sx={{ p: "20px", background: purple[900], color: "#fff" }}>
          text
        </Box>
      ) : (
        ""
      )}

      <Typography variant="h1">DevALMO, YouTube Channel</Typography>
    </>
  );
}

export default App;
