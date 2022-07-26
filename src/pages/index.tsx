import type { NextPage } from 'next';
import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

import Modal from '../components/Modal';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Head from '../infra/components/Head';
import MethodStages from './components/MethodStages';
import Opinions from './components/Opinions';
import Results from './components/Results';
import ClientResults from './components/ClientResults';
import VideoRecorder from './components/VideoRecorder';
import useModal from '../components/Modal/modal-call';

import { Separator, Subtitle, Title } from '../components/Basepage';

import * as C from './styles';

const Home: NextPage = () => {
  const videoPlayer = useRef<any>(null);
  const { isShown, handleSwitch } = useModal();

  function handleOpenVideo() {
    videoPlayer.current.pause();
    handleSwitch();
  }

  function handleReturnPlayer() {
    handleSwitch();
    videoPlayer.current.play();
  }

  return (
    <C.Container>
      <Head title="Clinica | Emagrecentro" />

      <C.MainContainer>
        <C.MainContent
          style={{
            justifyContent: 'space-between',
            paddingTop: '4rem',
            paddingBottom: '10rem',
          }}
        >
          <C.MainContentHeader>
            <Image
              src="/emagrecentro-logo.png"
              alt="logo da Emagrecentro"
              width="19"
              height="45"
            />

            <C.MainContentHeader>
              <a href="">Início</a>

              <a href="">Tratamentos</a>

              <a href="">Localização</a>

              <a href="">Redes sociais</a>
            </C.MainContentHeader>
          </C.MainContentHeader>

          <C.MathodStagesContent>
            <Button size="medium" colorStyle="tined" onClick={handleOpenVideo}>
              Ver vídeo
            </Button>
            <Title>
              Conheça o Método 4 <br /> Fases da Emagrecentro
            </Title>
            <Subtitle>
              Elimine até 10% do seu peso <br /> em 5 semanas!
            </Subtitle>

            <Button size="larger" colorStyle="filled">
              Saber mais
            </Button>
          </C.MathodStagesContent>
        </C.MainContent>

        <C.MainContent style={{ justifyContent: 'flex-end', width: '100%' }}>
          <Opinions />

          <video
            ref={videoPlayer}
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '370px' }}
            onClick={handleOpenVideo}
          >
            <source src="/emagrecentro-ads.mp4" />
          </video>
        </C.MainContent>
      </C.MainContainer>

      <Results />

      <ClientResults />

      <C.DiplomaStage>
        <C.DiplomaContainer>
          <Image
            src="/emagrecentro-logo.png"
            alt="logo da Emagrecentro"
            width="21"
            height="48"
          />

          <Separator>
            <C.DiplomaTitle>
              Comprovada <br /> Cientificamente
            </C.DiplomaTitle>

            <C.DiplomaSubtitle>
              É uma metodologia comprovada cientificamente que combina
              procedimentos estéticos avançados com um programa de reeducação
              alimentar.
            </C.DiplomaSubtitle>
          </Separator>

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
          <Fade direction="up" duration={1000} triggerOnce>
            <Title style={{ color: '#F2F2F2' }}>
              Certificado de <br />
              qualidade
            </Title>

            <Subtitle style={{ color: '#F2F2F2' }}>
              Se você dentro desse tempo, por algum motivo, achar que o Método 4
              Fases não faz sentido e que, milagrosamente, só não funciona com
              você, basta mandar você entrar em contato e terá todo o seu
              dinheiro de volta.
            </Subtitle>

            <Button size="larger" colorStyle="golden">
              Saber mais!
            </Button>
          </Fade>
        </C.ContentAboutDiploma>
      </C.DiplomaStage>

      <MethodStages />

      <Footer />

      <Modal
        isShown={isShown}
        hide={handleReturnPlayer}
        modalContent={
          <>
            <VideoRecorder />
          </>
        }
      />
    </C.Container>
  );
};

export default Home;
