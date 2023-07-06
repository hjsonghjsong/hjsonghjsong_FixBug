import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { resumeList } from "../../hooks/fetchResumeList";
import RenderResumeList from "../ResumeComponents/RenderResumeList";

const Resume = () => {
    return (
        <Box>
        <Box sx={{ flexGrow: 1, paddingY: '60px', paddingX: '20px' }}>
            <Box sx={{ display: 'flex', border: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexGrow: 1, backgroundColor: 'white'}}>
                    <Box sx={{flexGrow: 1}}>
                    <h1>Progress graph here</h1>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                    <Button>
                        <AddIcon sx={{ color: 'text.primary'}}/>
                        <Typography sx={{ color: 'text.primary'}}>
                            CREATE RESUME
                        </Typography>
                    </Button>

                </Box>
                </Box>
            </Box>
        </Box>
        <RenderResumeList resumeList={resumeList} />
        </Box>
    );
  };
  
  export default Resume;