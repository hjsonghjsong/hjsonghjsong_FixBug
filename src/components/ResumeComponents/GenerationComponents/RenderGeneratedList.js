import * as React from "react";
import { Card, CardActionArea, InputAdornment, Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Tooltip, Box, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RenderGeneratedList = (props) => {
    const { index, historyList, setHistoryList, suggestedList } = props;

    const currentList = historyList[index].generatedContent;
    const [htmlValue, setHtmlValue] = React.useState(`<ul>${currentList.map(v => `<li>${v}</li>`).join()}<li><br></li></ul>`);

    const handleChange = newHtmlValue => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(newHtmlValue, "text/html");
        const ulEl = htmlDoc.getElementsByTagName("ul")[0];

        // no bullet points, revert
        if (!ulEl) {
            handleChange("<ul><li><br></li></ul>");
            return;
        }

        // strip other html
        newHtmlValue = ulEl.outerHTML;
        setHtmlValue(newHtmlValue);

        const liEls = Array.from(ulEl.getElementsByTagName("li"));
        const newList = liEls.map(el => el.textContent);

        // save state
        const newHistoryList = Object.assign({}, historyList);
        newHistoryList[index] = {
            ...newHistoryList[index],
            generatedContent: newList
        }
        setHistoryList(newHistoryList);
    };

    const addPoint = point => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(htmlValue, "text/html");
        const ulEl = htmlDoc.getElementsByTagName("ul")[0];
        const liEl = htmlDoc.createElement("li");

        liEl.appendChild(htmlDoc.createTextNode(point));
        ulEl.appendChild(liEl);

        handleChange(htmlDoc.documentElement.innerHTML);
    }

    return (
        <Box className="grid grid-cols-2 gap-4">
            <Paper className="p-4">
                <ReactQuill
                    modules={{
                        toolbar: false
                    }}
                    formats={["list", "bullet"]}
                    theme="snow"
                    value={htmlValue}
                    onChange={handleChange}
                />
            </Paper>
            <Card className="p-4">
                <Box className="overflow-auto 20rem max-h-80">
                    <Box className="flex flex-col gap-2">
                        {suggestedList?.map((point, key) => (
                            <Card
                                key={key}
                                onClick={() => addPoint(point)}
                                variant="outlined"
                            >
                                <CardActionArea>
                                    <Tooltip title="Add">
                                        <Box className="flex gap-4 p-4">
                                            <AddCircleOutlineOutlinedIcon />
                                            <Typography>{point}</Typography>
                                        </Box>
                                    </Tooltip>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Box>

            </Card>
        </Box>
    );
};

export default RenderGeneratedList;
