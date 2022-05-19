import { Divider, ListItem, ListItemText} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const EmpItem = ({emp:{empName,empDescription}}) => {
    return(
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={empName}
                    secondary={empDescription}
                />
                <EditIcon />
                <DeleteIcon />
                <Divider variant="inset" component="li" />
            </ListItem>
            
        </>
    )
}

export default EmpItem