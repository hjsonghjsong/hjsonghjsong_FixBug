import * as React from 'react';
import { List, ListItem, ListItemIcon } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { TextField } from '@mui/material';
import { Tooltip, Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const RenderGeneratedList = (props) => {

    const {index, historyList, setHistoryList} = props;
    
    const addPoint = () => {
        setHistoryList(historyList.map((item, i) => i === index ? {...item, generatedContent: [...item.generatedContent, '']} : item));
    }
    const removePoint = (key) => () => {
        setHistoryList(historyList.map((item, i) => i === index ? {...item, generatedContent: item.generatedContent.filter((_, i) => i !== key)} : item));
    }

    const handlePointChange = (key) => (event) => {
        setHistoryList(historyList.map((item, i) => i === index ? {...item, generatedContent: item.generatedContent.map((point, i) => {
            if (i === key) {
                return event.target.value;
            } else {
                return point;
            }
        }
        )} : item));

    }
    return (
        <Box>
        <List dense>
                {historyList[index].generatedContent.map((point, key) => (
                    <ListItem key={key}>
                        <ListItemIcon onClick={removePoint(key)} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Tooltip title="Remove">
                            <RemoveCircleOutlineIcon />
                            </Tooltip>
                        </ListItemIcon>
                        <TextField
                            value={point}
                            onChange={handlePointChange(key)}
                            fullWidth
                            multiline
                            />
                        
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBlockStart: '10px' }}>
            <Box sx={{ display: 'flex', flexGrow: 1}}>
                <Box sx={{display: 'flex'}}>
                <Button variant="outlined" onClick={addPoint}>
                    <AddIcon sx={{color: 'text.primary' }}/>
                    <Typography sx={{ color: 'text.primary'}}>
                        Add Point
                    </Typography>
                </Button>

            </Box>
            </Box>
        </Box>
        </Box>
    );
}

export default RenderGeneratedList;