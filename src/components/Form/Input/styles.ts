import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    width: 100%;
    padding: ${ RFValue(18) }px ${ RFValue(16) }px;

    font-size: ${ RFValue(14) }px;
    font-family: ${ ({ theme }) => theme.fonts.regular };

    background-color: ${ ({ theme }) => theme.colors.primary };
    color: ${ ({ theme }) => theme.colors.text };

    border: 2px solid ${ ({ theme }) => theme.colors.secondary };
    border-radius: ${ RFValue(5) }px;

    margin-bottom: ${ RFValue(8) }px;
`;