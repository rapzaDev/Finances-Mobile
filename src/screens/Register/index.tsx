import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
} from './styles';

function Register () {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                        placeholderTextColor="#CECEDE"
                    />

                    <Input 
                        placeholder="Preço"
                        placeholderTextColor="#CECEDE"
                    />
                </Fields>
                
                <Button title="Enviar"/>
            </Form>

        </Container>
    );
};

export { Register };