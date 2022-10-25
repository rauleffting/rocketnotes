import { Container, Profile } from './styles';

export function Header() {
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/rauleffting.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>Raul Effting</strong>
        </div>
      </Profile>
    </Container>
  )
}