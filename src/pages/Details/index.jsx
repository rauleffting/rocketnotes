import { Container } from './styles.js';
import { Button } from '../../components/Button';

export function Details() {
    
    return(
        <Container>
            <h1>Hello World!</h1>
            <span>Raul Effting</span>
            <Button title="Login" loading/>
        </Container>
    )
}