import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title,
    ButtonComponent,
} from './styles';

interface ButtonProps extends RectButtonProps {
    title: string;
    onPress: () => void;
}

function Button ( { title, ...rest }: ButtonProps) {
    return (
        <Container>
            <ButtonComponent {...rest}>
                <Title>{title}</Title>
            </ButtonComponent>
        </Container>
    );
};

export { Button };