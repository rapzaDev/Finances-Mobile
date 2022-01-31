import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7,
})`
    background-color: ${ ({ theme }) => theme.colors.primary };

    border: ${ RFValue(2) }px solid ${ ({theme}) => theme.colors.secondary };
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${ RFValue(18) }px ${ RFValue(16) }px;

    border-radius: ${ RFValue(5) }px;
`;

export const Category  = styled.Text`
    color: ${ ({ theme }) => theme.colors.text };
    font-size: ${ RFValue(14) }px;
`;

export const Icon = styled(Feather)`
    color: ${ ({ theme }) => theme.colors.text };

    font-size: ${ RFValue(20) }px;
`;
