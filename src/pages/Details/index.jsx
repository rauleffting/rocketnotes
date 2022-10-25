import { Container, Links } from './styles.js';

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function Details() {
    
  return (
    <Container>
      <Header />

      <ButtonText title="Excluir nota" />

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="Login" loading />
    </Container>
  )
}