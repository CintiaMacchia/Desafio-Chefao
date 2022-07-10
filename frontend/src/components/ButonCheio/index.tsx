import * as S from './styles';

interface Props{
    typeButton?: "button" | "submit" | "reset" | undefined;
    text: string;
  
}

const ButonCheio = ({typeButton, text}:Props) => {
  return (
    <S.StyledButton type = {typeButton} >{text}</S.StyledButton>
  );
}

export default ButonCheio;