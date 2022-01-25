import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

import {
    Container,
    Error,
} from './styles';

interface ControlledInputProps extends TextInputProps {
    control: Control;
    name: string;
    error: string;
};

function ControlledInput( { control, name, error, ...rest }: ControlledInputProps ) {
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
            
            { error && <Error>{error}</Error> }
        </Container>
    );
};

export { ControlledInput };