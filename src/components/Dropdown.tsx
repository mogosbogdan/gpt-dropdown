import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Dropdown = () => {
  const options = useSelector((state: RootState) => state.options);

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value} style={{ color: option.color }}>
            {option.label}
          </option>
        ))}
      </select>
      <p>You have selected: {options.find((option) => option.value === selectedValue)?.label}</p>
    </div>
  );
};

export default Dropdown;
