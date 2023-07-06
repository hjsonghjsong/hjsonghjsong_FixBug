import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgress from "@mui/material/CircularProgress";
import { IconButton, Tooltip, Box, Typography } from "@mui/material";

const RenderResumeList = ({resumeList}) => (
    <Box sx={{ flexGrow: 1, paddingY: '40px', paddingX: '20px' }}>
            {resumeList.map((resume) => (
                <Box key={resume.id} sx={{ display: 'flex', border: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingY: '15px', m:3 }}>
                    <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ paddingX: '10px'}}>{resume.name}</Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{paddingX: '10px'}}>{resume.date}</Typography>
                        <CircularProgress variant="determinate" value={resume.rating} color="success" sx={{paddingX: '10px'}}/>
                        <Typography sx={{paddingX: '10px'}}>{resume.rating}</Typography>
                        <Typography sx={{paddingX: '10px'}}>{resume.status}</Typography>
                        <Tooltip title="Preview">
                        <IconButton>
                            <RemoveRedEyeIcon sx={{ color: 'text.primary'}}/>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                        <IconButton>
                            <EditIcon sx={{ color: 'text.primary'}}/>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Download">
                        <IconButton>
                            <DownloadIcon sx={{ color: 'text.primary'}}/>
                        </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            ))}
        </Box>
);

export default RenderResumeList;