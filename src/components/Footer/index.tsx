import Image from 'next/image';
import * as C from './styles';

function Footer() {
  return (
    <C.Container>
      <C.LinksContainer>
        <C.LinksContent>
          <C.ImageContainer>
            <Image
              src="/emagrecentro-logo.png"
              alt="logo da Emagrecentro"
              width="20"
              height="46"
            />
          </C.ImageContainer>

          <C.AboutBank>Centro de Emagrecimento e Estetica.</C.AboutBank>
        </C.LinksContent>

        <C.LinksContent>
          <C.ColumnLinks>Desenvolvido por</C.ColumnLinks>
          <C.ColumnTitle>Obixy.</C.ColumnTitle>
        </C.LinksContent>

        <C.LinksContent></C.LinksContent>

        <C.LinksContent>
          <C.ColumnTitle>Contatos</C.ColumnTitle>

          <C.ColumnLinks>Tarifas</C.ColumnLinks>
          <C.ColumnLinks>Contrato portador</C.ColumnLinks>
          <C.ColumnLinks>Plano de recompensa</C.ColumnLinks>
          <C.ColumnLinks>Cotação do Dólar</C.ColumnLinks>
          <C.ColumnLinks>Site principal</C.ColumnLinks>
        </C.LinksContent>

        <C.LinksContent>
          <C.ColumnTitle>Central de Atendimento</C.ColumnTitle>

          <C.ColumnText>Capitais e regiões metropolitanas:</C.ColumnText>

          <C.ColumnLinks>4002-2320</C.ColumnLinks>

          <C.ColumnText>Outras localidades:</C.ColumnText>

          <C.ColumnLinks>0800 284 2884</C.ColumnLinks>

          <C.ColumnLinks>(79) 3218-2080</C.ColumnLinks>
        </C.LinksContent>
      </C.LinksContainer>

      <C.DownSide>
        <C.Text>
          Copyright &copy; {new Date().getFullYear()} Obixy Desenvolvimento de
          softwares. Todos direitos reservaddos.
        </C.Text>

        <C.Text>Sergipe</C.Text>
      </C.DownSide>
    </C.Container>
  );
}

export default Footer;
