import React from "react";
import { Select } from "@chakra-ui/react";

const CustomSelect = ({ width, mr, options, onSelect }) => {
  return (
    <Select
      width={width}
      mr={mr}
      placeholder="Select Template"
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;
