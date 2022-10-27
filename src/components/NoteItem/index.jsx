import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return(
    <Container isNew={isNew}> {/* passar propriedade para dentro do styled component */}
      <input 
        type="text" 
        value={value}
        readOnly={!isNew} /* O item já adicionado fica como leitura e não pode ser alterado */
        {...rest}  
      />

      <button 
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete' }
      >
        { isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}