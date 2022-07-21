import type { NextPage } from 'next';
import Image from 'next/image';
import { RiDoubleQuotesL } from 'react-icons/ri';

import { FiArrowRight, FiBarChart } from 'react-icons/fi';
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

      <C.BannerContainer>
        <C.BannerContent>
          <C.DiplomaTitle>
            Veja os resultados <br /> que você pode esperar!
          </C.DiplomaTitle>

          <div style={{ display: 'flex', gap: 24 }}>
            <div>
              <h2>01</h2>
              <C.Subtitle style={{ marginTop: 6 }}>Semana</C.Subtitle>
            </div>

            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '6px 0',
                display: 'flex',
                alignItems: 'flex-start',
                flexFlow: 'column',
                borderTop: '1px solid #d9d9d9',
              }}
            >
              <C.Subtitle style={{ color: '#232326' }}>
                Resultados notaveis na balança e no espelho na 3 semana
              </C.Subtitle>

              <C.RoundedSpan
                style={{ background: '#ACA474', color: '#FFFFFF' }}
              >
                Proxima <FiArrowRight size={20} color="#FFFFFF" />
              </C.RoundedSpan>
            </div>
          </div>
        </C.BannerContent>
      </C.BannerContainer>

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
            Saber mais!
          </C.Button>
        </C.ContentAboutDiploma>
      </C.DiplomaStage>

      <C.LocalizationSection>
        <div
          style={{
            paddingBottom: 120,
            display: 'flex',
            alignItems: 'flex-start',
            flexFlow: 'column',
          }}
        >
          <C.RoundedSpan style={{ background: '#214b8a', color: '#f2f2f2' }}>
            Fase 1
          </C.RoundedSpan>

          <C.Title>Fase Detox</C.Title>
          <C.Subtitle>
            Duração 1 semana: Fase de Desintoxicação <br /> onde o cliente
            emagrece em média 3% de
            <br /> seu peso corporal
          </C.Subtitle>

          <C.ButtonsContainer>
            <C.RoundedSpan>Anterior</C.RoundedSpan>
            <C.RoundedSpan>Proximo</C.RoundedSpan>
          </C.ButtonsContainer>
        </div>
      </C.LocalizationSection>

      <C.LocalizationSection>
        <div style={{ paddingBottom: 120 }}>
          <C.Title>Nossa unidade</C.Title>
          <C.Subtitle>
            Agora é com você, clique no botão <br /> abaixo e faça o nosso
            método!
          </C.Subtitle>

          <C.Button>Quero emagrecer!</C.Button>
        </div>

        <C.LocalizationMapContainer></C.LocalizationMapContainer>
      </C.LocalizationSection>

      <C.FooterContainer>
        <C.LinksContainer>
          <C.LinksContent>
            <div style={{ display: 'flex', gap: 24 }}>
              <Image
                src="/emagrecentro-logo.png"
                alt="logo da Emagrecentro"
                width="20"
                height="46"
              />
            </div>

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
          <p>
            Copyright &copy; {new Date().getFullYear()} Obixy Desenvolvimento de
            softwares. Todos direitos reservaddos.
          </p>

          <p>Sergipe</p>
        </C.DownSide>
      </C.FooterContainer>
    </C.Container>
  );
};

export default Home;
