import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from "react-hook-form";

import { ControlledInput } from '../../components/Form/ControlledInput';
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


interface FormData {
    [name: string]: any;
};


function Register () {

    const [ transactionType, setTransactionType ] = useState('');
    const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);

    const [ category, setCategory ] = useState({
        key: 'category',
        name: 'Categoria',
    });

    const { 
        control,
        handleSubmit,
    } = useForm();

    function handleTransactionTypeSelect(type: 'positive' | 'negative') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleRegister(form: FormData) {
        const data = {
            name: form.name,
            amount: form.amount,
        }
        
        console.log(data);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <ControlledInput 
                        name="name"
                        control={control}
                        placeholder="Nome"
                        placeholderTextColor="#CECEDE"
                    />

                    <ControlledInput 
                        name="amount"
                        control={control}
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

                <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
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