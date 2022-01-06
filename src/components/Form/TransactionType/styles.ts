import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


interface ContainerProps {
    type: 'positive' | 'negative';
    isSelected: boolean;
}

interface IconProps {
    type: 'positive' | 'negative';
}


export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: ${ RFPercentage(22.7) }px;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    border: 1.5px solid;
    border-radius: ${ RFValue(5) }px;

    ${ ({ isSelected }) =>  isSelected 
        ? css`border-color: ${({ theme }) => theme.colors.background};`
        : css`border-color: ${({ theme }) => theme.colors.primary};`
    };

    background-color: ${({ theme }) => theme.colors.secondary};

    ${ ({ isSelected, type }) =>  isSelected && type === 'negative' && css`
        background-color: ${({ theme }) => theme.colors.attention_light};
    ` };

    ${ ({ isSelected, type }) =>  isSelected && type === 'positive' && css`
        background-color: ${({ theme }) => theme.colors.success_light};
    ` };



    padding: ${ RFValue(16) }px;
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${ RFValue(24) }px;

    margin-right: ${ RFValue(12) }px;

    color: ${ ({ theme, type }) => 
        type === 'positive' 
        ? theme.colors.success
        : theme.colors.attention
    };

`;

export const Title = styled.Text`
    font-family: ${ ({ theme }) => theme.fonts.regular };
    font-size: ${ RFValue(14) }px;

    color: ${ ({ theme }) => theme.colors.text };
`;
