import React, { useState } from 'react';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypeContainer,
} from './styles';

import { TransactionType } from '../../components/Form/TransactionType';

function Register () {

    const [ transactionType, setTransactionType ] = useState('');

    function handleTransactionTypeSelect(type: 'positive' | 'negative') {
        setTransactionType(type);
    }

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

                    <TransactionsTypeContainer>
                        <TransactionType 
                            title="Entrada"
                            type="positive"
                            onPress={() => handleTransactionTypeSelect('positive')}
                            isSelected={transactionType === 'positive'}
                        />
                        <TransactionType 
                            title="Saída"
                            type="negative"
                            onPress={() => handleTransactionTypeSelect('negative')}
                            isSelected={transactionType === 'negative'}
                        />
                    </TransactionsTypeContainer>
                </Fields>

                <Button title="Enviar"/>
            </Form>

        </Container>
    );
};

export { Register };