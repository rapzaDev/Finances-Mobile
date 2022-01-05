import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    
    background-color: ${ ({ theme }) => theme.colors.secondary };

    align-items: center;

    font-family: ${ ({ theme }) => theme.fonts.medium };
    font-size: ${ RFValue(14) }px;

    padding:${ RFValue(18) }px;

    border-radius: ${ RFValue(5) }px;
`;

export const Title = styled.Text`
    color:${ ({ theme }) => theme.colors.title };

    font-family: ${ ({ theme }) => theme.fonts.regular };
    font-size: ${ RFValue(14) }px;
`;