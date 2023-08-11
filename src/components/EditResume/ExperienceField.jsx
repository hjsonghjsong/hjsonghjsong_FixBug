import React from "react";
import DynamicWidthInput from "../DynamicWidthInput";
import DatePickerComponent from "../DatePickerComponent";
import CustomTextArea from "../CustomTextArea";

const ExperienceField = () => {
  return (
    <div id="experience-field" className="gap-2 flex flex-col">
      <div className="w-full p-1 bg-slate-300 rounded-sm">
        <span className="w-full font-semibold text-lg px-2">Experience</span>
      </div>
      {/* Job Title */}

      <div className="w-full flex justify-between items-center">
        <div className="flex w-full justify-start items-center gap-2">
          <DynamicWidthInput
            placeholder="Job Title"
            name="title"
            className="text-left w-full"
          />
        </div>
        <div className="flex gap-1">
          <DatePickerComponent views={["month", "year"]} />
          <div>-</div>
          <DatePickerComponent views={["month", "year"]} />
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        {/* Bullets */}
        <CustomTextArea />
      </div>
    </div>
  );
};

export default ExperienceField;
