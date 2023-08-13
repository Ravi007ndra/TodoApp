import { Box, Button, TextField } from "@mui/material";
import React from "react";


export default function AddTodoForm({ onSave }) {
    let [title, setTitle] = React.useState("");
    let titleField = React.useRef(null);

    function handleClick() {
        onSave(title);
        titleField.current.value = ""
    }
    
    return (
        <Box>            
            <TextField onChange={(e) => setTitle(e.target.value)} inputRef={titleField} />
            <Button onClick={handleClick}>Add</Button>
        </Box>
    )
}