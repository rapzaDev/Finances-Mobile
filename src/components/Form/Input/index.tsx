import { TextInputProps } from 'react-native';

import {
    Container
} from './styles';

type InputProps = TextInputProps;

function Input ( {...rest}: InputProps ) {
    return (
        <Container {...rest} />
    );
};

export { Input };