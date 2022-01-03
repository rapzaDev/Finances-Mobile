import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
    type: 'positive' | 'negative';
}

export const Container = styled.View`
    background-color: ${ ({ theme }) => theme.colors.secondary };

    border-radius: ${ RFValue(5) }px;

    padding:  ${ RFValue(17) }px ${ RFValue(24) }px;
    margin-bottom: ${ RFValue(16) }px;
`;

export const Title = styled.Text`
    color: ${ ({ theme }) => theme.colors.title };

    font-family: ${ ({ theme }) => theme.fonts.regular };
    font-size: ${ RFValue(14) }px;
`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${ ({ theme }) => theme.fonts.regular };
    font-size: ${ RFValue(20) }px;

    ${ ({ type, theme }) => type === 'positive' && css`
        color: ${theme.colors.success};
    ` };

    ${ ({ type, theme }) => type === 'negative' && css`
        color: ${theme.colors.attention};
    ` };

    margin-top: ${ RFValue(2) }px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${ RFValue(19) }px;
`;

export const Category = styled.View`
    flex-direction: row;
`;

export const Icon = styled(Feather)`
    font-size: ${ RFValue(20) }px;

    color: ${ ({ theme }) => theme.colors.text };
`;

export const CategoryName = styled.Text`
    font-size: ${ RFValue(14) }px;
    font-family: ${ ({ theme }) => theme.fonts.regular };

    color: ${ ({ theme }) => theme.colors.text };

    margin-left: ${ RFValue(17) }px;
`;

export const TransactionDate = styled.Text`
    font-size: ${ RFValue(14) }px;
    font-family: ${ ({ theme }) => theme.fonts.regular };

    color: ${ ({ theme }) => theme.colors.text };
`;
