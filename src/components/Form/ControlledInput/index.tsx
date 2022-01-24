import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

import {
    Container,
} from './styles';

interface ControlledInputProps extends TextInputProps {
    control: Control;
    name: string;
}

function ControlledInput({ control, name, ...rest }: ControlledInputProps ) {
    return(
        <Container>
            <Controller 
                control={control}
                render={ ({ field: { onChange, value } }) => (
                    <Input 
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
        </Container>
    );
};

export { ControlledInput };