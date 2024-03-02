import { styled } from "@mui/material";

export const MasterContainer = styled("main")(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center'
}));