import {
    Container,
    Category, 
    Icon,
} from './styles';

interface CategorySelectProps {
    title: string;
}

function CategorySelect ( { title }:CategorySelectProps) {
    return (
        <Container>
            <Category>{title}</Category>
            <Icon name="chevron-down"/>
        </Container>
    );
};

export { CategorySelect };