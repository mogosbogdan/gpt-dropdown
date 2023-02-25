import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { options } from '../components/options';

interface SelectedOptionState {
    value: string;
}

const initialState: SelectedOptionState = {
    value: options[0].value,
};

export const selectedOptionSlice = createSlice({
    name: 'selectedOption',
    initialState,
    reducers: {
        setSelectedOption: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setSelectedOption } = selectedOptionSlice.actions;

export default selectedOptionSlice.reducer;
