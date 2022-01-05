import { Input } from '../../components/Form/Input';

import {
    Container,
    Header,
    Title,
    Form,
} from './styles';

function Register () {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Input 
                    placeholder="Nome"
                    placeholderTextColor="#CECEDE"
                />

                <Input 
                    placeholder="Preço"
                    placeholderTextColor="#CECEDE"
                />
            </Form>

        </Container>
    );
};

export { Register };