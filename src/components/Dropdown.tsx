import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption } from '../redux/optionsSlice';
import { options } from './options';
import Card from './Card';

interface RootState {
    selectedOption: {
        value: string;
    };
}

const Dropdown = () => {
    const selectedOption = useSelector((state: RootState) => state.selectedOption.value);
    const dispatch = useDispatch();

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedOption((event.target.value)));
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleOptionChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Card />
        </div>
    );
};

export default Dropdown;
