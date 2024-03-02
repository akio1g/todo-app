import { styled } from "@mui/material";

export const ToDoContainer = styled("div")(({ theme }) => ({
  maxWidth: "1024px",
  width: "100%",
  height: "100%",
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  padding: "16px 0px",
  color: theme.palette.text.primary
}));

export const Board = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
}));

export const BoardContent = styled("div")(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'center',
  maxWidth: 120,
  padding: "8px 16px"
}));

export const BoardContentQuantity = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: "3rem",
  justifyContent: 'center',
  fontWeight: 700
}));

export const BoardContentText = styled("p")(({ theme }) => ({
  fontSize: "1.2rem",
  textAlign: 'center',
  fontWeight: 500
}));

export const AddContainer = styled("div")({
  display: 'flex',
  height: 48,
  width: "100%",
  alignItems: 'center',
});

export const TodoItem = styled("div")(({ theme }) => ({
  display: 'flex',
  width: "100%",
  height: 48,
  cursor: 'pointer',
  gap: 32,
  alignItems: 'center',
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: theme.shape.borderRadius,
}))

export const TodoList = styled("div")(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 8,
  overflowY: 'auto',
  scrollbarWidth: 'none'
}));

export const ButtonShow = styled("div")(({ theme }) => ({
  display: 'flex',
  height: 36,
  width: 200,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.text.primary}`,
  cursor: 'pointer'
}));

