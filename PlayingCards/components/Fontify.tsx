import React from "react";
import {
  useTheme,
  Typography
} from "@mui/material";

export function Fontify(props: any) {
  const theme = useTheme();
  const {
      type,
      fontSize,
      color,
      children,
  } = props;
  let textFont = "Pfont";
  let textfontSize = "1rem";
  if(type === "heading") textFont = "HFont"
  if (fontSize) textfontSize = fontSize;
  return (
    <Typography sx={{
      textAlign: "center",
      fontFamily: textFont,
      fontSize: textfontSize,
      color: color ? color : theme.palette.text.primary,
    }}>
      {children}
    </Typography>    
  );
};
