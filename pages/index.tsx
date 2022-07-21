import type { NextPage } from 'next';
import Image from 'next/image';
import { RiDoubleQuotesL } from 'react-icons/ri';

import { FiBarChart } from 'react-icons/fi';
import Head from '../src/infra/components/Head';
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

      <div
        style={{
          width: '100%',
          height: 200,
          background: 'red',
        }}
      ></div>

      <C.ResultsSection>
        <C.ContentAboutResults>
          <FiBarChart size={100} color="#ACA474" />
          <C.Title>
            Veja os resultados de <br /> algumas clientes!
          </C.Title>
          <C.Subtitle>
            Se eles conseguem, você <br /> também pode!
          </C.Subtitle>

          <C.CarrouselFooter>
            <C.DotsContainer>
              <C.Dot />
              <C.Dot />
              <C.Dot active />
            </C.DotsContainer>

            <C.ButtonsContainer>
              <C.RoundedSpan>Anterior</C.RoundedSpan>
              <C.RoundedSpan>Proximo</C.RoundedSpan>
            </C.ButtonsContainer>
          </C.CarrouselFooter>
        </C.ContentAboutResults>

        <C.VideoInstagramContainer></C.VideoInstagramContainer>
      </C.ResultsSection>

      <C.DiplomaStage>
        <C.DiplomaContainer>
          <Image
            src="/emagrecentro-logo.png"
            alt="logo da Emagrecentro"
            width="21"
            height="48"
          />

          <div>
            <C.DiplomaTitle>
              Comprovada <br /> Cientificamente
            </C.DiplomaTitle>

            <C.DiplomaSubtitle>
              É uma metodologia comprovada cientificamente que combina
              procedimentos estéticos avançados com um programa de reeducação
              alimentar.
            </C.DiplomaSubtitle>
          </div>

          <C.AbsoluteImageDiploma>
            <Image
              src="/diploma-background.png"
              alt="Qualidade aprovada"
              width={100}
              height={100}
            />
          </C.AbsoluteImageDiploma>
        </C.DiplomaContainer>

        <C.ContentAboutDiploma>
          <C.Title style={{ color: '#F2F2F2' }}>
            Certificado de <br />
            qualidade
          </C.Title>

          <C.Subtitle style={{ color: '#F2F2F2' }}>
            Se você dentro desse tempo, por algum motivo, achar que o Método 4
            Fases não faz sentido e que, milagrosamente, só não funciona com
            você, basta mandar você entrar em contato e terá todo o seu dinheiro
            de volta.
          </C.Subtitle>

          <C.Button style={{ backgroundColor: '#ACA474', color: '#FFFFFF' }}>
            Quero emagrecer!
          </C.Button>
        </C.ContentAboutDiploma>
      </C.DiplomaStage>
    </C.Container>
  );
};

export default Home;
