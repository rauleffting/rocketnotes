import { Container } from './styles';

/* o icon: Icon é para não quebrar a regra de que 
todo Component tem de começar com letra maiúscula */
export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20}/>} {/* Se ícone existe, usa o ícone */}
      <input {...rest} />
    </Container>
  )
}