import React, { useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const schema = yup.object({
    name: yup.string().required('Nome é obrigatorio'),
    amount: yup
        .number()
        .typeError('Informe um valor númerico')
        .positive('O valor nao pode ser negativo')
        .required('Valor do preço é obrigatorio')
})


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
        register,
        formState:{ errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

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
        if ( !transactionType ) 
            return Alert.alert('Selecione o tipo de transação');

        if ( category.key === 'category' ) 
            return Alert.alert('Selecione o tipo de transação');


        const data = {
            name: form.name,
            amount: form.amount,
        }
        
        console.log(data);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <ControlledInput 
                            // name="name"
                            {...register('name')}
                            control={control}
                            placeholder="Nome"
                            placeholderTextColor="#CECEDE"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                        />

                        <ControlledInput    
                            // name="amount"
                            {...register('amount')}
                            control={control}
                            placeholder="Preço"
                            placeholderTextColor="#CECEDE"
                            keyboardType="numeric"
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
        </TouchableWithoutFeedback>
    );
};

export { Register };