import type { NextPage } from 'next';
import Image from 'next/image';
import Head from '../src/infra/components/Head';
import { RiDoubleQuotesL } from 'react-icons/ri';
import * as C from './styles';

const Home: NextPage = () => {
  return (
    <C.Container>
      <Head title="Clinica | Emagrecentro" />

      <C.MainContainer>
        <C.MainContent
          style={{
            justifyContent: 'space-between',
            paddingTop: '4rem',
            paddingBottom: '12rem',
          }}
        >
          <Image
            src="/emagrecentro-logo.png"
            alt="logo da Emagrecentro"
            width="26"
            height="60"
          />

          <div
            style={{
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <C.RoundedSpan>Ver vídeo</C.RoundedSpan>
            <C.Title>
              Conheça o Método 4 <br /> Fases da Emagrecentro
            </C.Title>
            <C.Subtitle>
              Elimine até 10% do seu peso <br /> em 5 semanas!
            </C.Subtitle>

            <C.Button>Saber mais</C.Button>
          </div>
        </C.MainContent>

        <C.MainContent style={{ justifyContent: 'flex-end', width: '100%' }}>
          <C.ClientOpinion>
            <C.OpinionIcon>
              <RiDoubleQuotesL size={32} color="#ACA474" />
            </C.OpinionIcon>
            <C.Opinion>
              <h3>Juliana Almeida</h3>
              <p style={{ color: '#8C8C8C' }}>
                O atendimento da Emagrecentro é fenomenal, adorei a recepção e a
                qualidade do serviço foi exepcional! Muito satisfeita!!! 😍❤️
              </p>
            </C.Opinion>
          </C.ClientOpinion>

          <C.VideoContainer></C.VideoContainer>
        </C.MainContent>
      </C.MainContainer>
    </C.Container>
  );
};

export default Home;
