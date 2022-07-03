import { GlobalStyles } from "@mui/material";
import { red } from "@mui/material/colors";

export const StylesGlobal = () => {
  return (
    <GlobalStyles
      styles={{
        "*": { color: red[900] },
      }}
    />
  );
};
