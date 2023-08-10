import * as React from "react";
import { Card, CardActionArea, Paper } from "@mui/material";
import { Tooltip, Box, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css'

const RenderGeneratedList = (props) => {
    const { index, historyList, setHistoryList, suggestedList, className, ...otherProps } = props;

    const currentList = historyList[index].generatedContent;
    const [htmlValue, setHtmlValue] = React.useState(`<ul>${currentList.map(v => `<li>${v}</li>`).join()}<li><br></li></ul>`);

    const handleChange = newHtmlValue => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(newHtmlValue, "text/html");

        // merge all uls into single ul
        const ulEls = htmlDoc.getElementsByTagName("ul");
        const newUl = htmlDoc.createElement("ul");
        for(let i = 0; i < ulEls.length; i++){
            let liEls = ulEls[i].getElementsByTagName("li");
            while(liEls.length > 0){
                newUl.appendChild(liEls[0]);
            }
        }
        htmlDoc.body.innerHTML = '';
        htmlDoc.body.appendChild(newUl);

        // no bullet points, revert
        let liEls = Array.from(newUl.getElementsByTagName("li"));
        if (liEls.length === 0) {
            handleChange("<ul><li><br></li></ul>");
            return;
        }

        // remove empty points
        liEls.pop(); // ignore last li
        if (liEls.length >= 1) {
            liEls.forEach(li => {
                if (!li.textContent.trim()) {
                    newUl.removeChild(li);
                }
            });
        }

        // strip other html
        newHtmlValue = newUl.outerHTML;
        setHtmlValue(newHtmlValue);

        // save state
        liEls = Array.from(newUl.getElementsByTagName("li"));
        const newList = liEls.map(el => el.textContent);

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
        <Box className={`grid grid-cols-2 gap-4 ${className}`} {...otherProps}>
            <Paper className="p-4">
                <ReactQuill
                    modules={{ toolbar: false }}
                    formats={["list", "bullet"]}
                    theme={"snow"}
                    style={{
                        lineHeight: "1.5",
                        fontSize: "1rem"
                    }}
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
