import React from 'react';
import TextField from '@mui/material/TextField';

interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({ label, type, value, onChange }) => {
    return (
        <TextField label={label} type={type} value={value} onChange={onChange} fullWidth margin="normal" variant="outlined" />
    );
};

export default CustomInput;
