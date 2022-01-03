import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

interface TypeProps {
    type: string;
}

export const Container = styled.View<TypeProps>`
    background-color: ${ ({ theme, type }) => 
    type === 'total' ? theme.colors.primary : theme.colors.secondary };

    ${ ({ type }) => type === 'total' && css`
        border: 1.5px solid;
    `}

    border-color:${ ({ type, theme }) => 
    type === 'total' ? theme.colors.secondary : '#000' };

    width: ${ RFValue(300) }px;

    border-radius: ${ RFValue(5) }px;

    padding: ${ RFValue(19) }px ${ RFValue(23) }px ${ RFValue(42) }px;
    margin-right: ${ RFValue(16) }px;
`;

export const CardHeader = styled.View`
    flex-direction: row;

    justify-content: space-between;
`;

export const CardTitle = styled.Text`
    font-family: ${ ({theme}) => theme.fonts.regular };
    font-size: ${ RFValue(14) }px;

    color: ${ ({theme}) => theme.colors.title };
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${ RFValue(40) }px;

    ${ ({ type }) => type === 'up' && css`
        color: ${ ({theme}) => theme.colors.success_light };
    ` };

    ${ ({ type }) => type === 'down' && css`
        color: ${ ({theme}) => theme.colors.attention_light };
    ` };

    ${ ({ type }) => type === 'total' && css`
        color: ${ ({theme}) => theme.colors.shape };
    ` };
    
`;

export const CardContent = styled.View``;

export const CardAmount = styled.Text<TypeProps>`
    font-family: ${ ({theme}) => theme.fonts.medium };
    font-size: ${ RFValue(32) }px;

    ${ ({ type }) => type === 'up' && css`
        color: ${ ({theme}) => theme.colors.success };
    ` };

    ${ ({ type }) => type === 'down' && css`
        color: ${ ({theme}) => theme.colors.attention };
    ` };

    ${ ({ type }) => type === 'total' && css`
        color: ${ ({theme}) => theme.colors.text };
    ` };

    margin-top: ${ RFValue(38) }px;
`;

export const LastTransaction = styled.Text`
    font-size: ${ RFValue(12) }px;

    color: ${ ({theme}) => theme.colors.text };
`;
