import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Button } from '@mui/material';

export default function TodoList({ data, onStatusUpdate }) {
    return (
        <List dense={true}>
            {
                data.map(item => (
                    <ListItem
                        secondaryAction={
                            <Button onClick={() => onStatusUpdate(item.id)}>
                                {item.status === "pending" ? "COMPLETED" : "PENDING"}
                            </Button>
                        }
                    >
                        <ListItemAvatar>
                            {item.id}
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.title}
                            secondary={item.status}
                        />
                    </ListItem>
                ))
            }
        </List>
    )
}