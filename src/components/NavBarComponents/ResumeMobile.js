import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ResumeMobile = () => (
    
        <Box sx={{ flexGrow: 1, paddingY: '70px', paddingX: '30px', color:'black'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexGrow: 1}}>
                    <Box sx={{flexGrow: 1}} />
                    <Box sx={{display: 'flex'}}>
                    <Button variant="outlined">
                        <AddIcon sx={{color: 'text.primary' }}/>
                        <Typography sx={{ color: 'text.primary'}}>
                            CREATE RESUME
                        </Typography>
                    </Button>

                </Box>
                </Box>
            </Box>
        </Box>
);

export default ResumeMobile;