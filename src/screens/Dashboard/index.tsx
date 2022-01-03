import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    PowerIcon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList,
} from './styles';

function Dashboard() {

    const data = [
        {
            title:"Desenvolvimento de site",
            amount:"+ R$ 12.000,00",
            category: { name:"Vendas", icon: "dollar-sign" },
            date:"25/12/2021",
        },
        {
            title:"Aluguel",
            amount:"- R$ 2.000,00",
            category: { name:"Casa", icon: "dollar-sign" },
            date:"2/12/2021",
        },
        {
            title:"Gatos",
            amount:"- R$ 200,00",
            category: { name:"Casa", icon: "dollar-sign" },
            date:"31/12/2021",
        },

    ]

    return (
        <>
            <Container>
                <Header>
                    <UserWrapper>
                        <UserInfo>
                            <Photo 
                                source={ { uri:"https://avatars.githubusercontent.com/u/68792232?v=4" } } 
                            />
                            <User>
                                <UserGreeting>Olá,</UserGreeting>
                                <UserName>Rafael</UserName>
                            </User>
                        </UserInfo>

                        <PowerIcon name="power" />
                    </UserWrapper>

                </Header>

                <HighlightCards>
                    <HighlightCard 
                        title="Entradas"
                        amount="R$ 17.400,00"
                        lastTransaction="Última entrada dia 25 de dezembro"
                        type="up"
                    />
                    <HighlightCard 
                        title="Saídas"
                        amount="R$ 1.259,00"
                        lastTransaction="Última saída dia 31 de dezembro"
                        type="down"
                    />
                    <HighlightCard 
                        title="Total"
                        amount="R$ 16.141,00"
                        lastTransaction="01 à 31 de dezembro"
                        type="total"
                    />
                </HighlightCards>

                <Transactions>
                    <Title>Listagem</Title>

                    <TransactionsList 
                        data={data}
                        renderItem={ ({ item }) => <TransactionCard data={ item } />  }
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: getBottomSpace()
                        }}
                    />

                </Transactions>


            </Container>
        </>
    );
}

export { Dashboard };