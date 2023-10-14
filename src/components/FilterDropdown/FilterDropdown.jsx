import { useState } from "react";
import { StyledSelect } from "./FilterDropdown.styled";

export const FilterDropdown = ({ setFilterOption }) => {
  const options = ["all", "follow", "followings"];
  const [selectedOption, setSelectedOption] = useState("all");

  return (
    <StyledSelect
      className="select-following"
      classNamePrefix="Select"
      closeMenuOnSelect={true}
      isClearable={true}
      isSearchable={false}
      closeMenuOnScroll={true}
      options={options.map((option) => ({
        value: option,
        label: option,
      }))}
      value={{
        value: selectedOption,
        label: selectedOption,
      }}
      onChange={(selectedOption) => {
        setSelectedOption(selectedOption.value);
        setFilterOption(selectedOption.value);
      }}
    />
  );
};
