import { Container, Links, Content } from './styles.js';

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function Details() {
    
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellat rerum in voluptas libero vitae repellendus, fugiat eos exercitationem corporis, officiis sapiente asperiores? Quod quos maxime sunt molestiae hic exercitationem.
          </p>

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

        </Content>
      </main>
    </Container>
  )
}