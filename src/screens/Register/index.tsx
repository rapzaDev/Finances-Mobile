import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionType } from '../../components/Form/TransactionType';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypeContainer,
} from './styles';


function Register () {

    const [ transactionType, setTransactionType ] = useState('');
    const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);

    const [ category, setCategory ] = useState({
        key: 'category',
        name: 'Categoria',
    })

    function handleTransactionTypeSelect(type: 'positive' | 'negative') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
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

                    <CategorySelectButton 
                        title={category.name}      
                        onPress={handleOpenSelectCategoryModal}
                    />

                </Fields>

                <Button title="Enviar"/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>

        </Container>
    );
};

export { Register };