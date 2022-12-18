// Refer to this document for a definitive view of a MUI Theme
// https://mui.com/material-ui/customization/default-theme/

import {PaletteMode} from "@mui/material";

const theme = {
    primary: {light: "#FF3CD5", dark : "#FF3CD5"},
    secondary: {light: "#071842", dark : "#071842"},
    paperBg: {light: "#fff",dark : "#09304c"},
};
const { primary, secondary, paperBg} = theme;

export const playingCardsTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: mode === "light" ? primary.light : primary.dark,
        },
        secondary: {
            main: mode === "light" ? secondary.light : secondary.dark,
        },
        background: {
            paper: mode === "light" ? paperBg.light : paperBg.dark,
        },
    },
})
