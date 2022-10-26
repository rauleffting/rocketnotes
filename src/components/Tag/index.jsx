import { Container } from './styles';

/* O rest vai pasar vários dados, como a key ou o id. */
export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}