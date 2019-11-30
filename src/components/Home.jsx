import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import { FormattedHTMLMessage } from 'react-intl';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

import { Container, Overflow } from './../css';
import Collaborators from './Collaborators';
import AboutNew from './AboutNew';
import Developer from './Developer';
import Blog from './Blog';
import Contact from './Contact';


const MainTitle = styled.div`

  @media(max-width: 1200px) {
    text-align:center;
  }

  color: #FFFFFF;
  font-family: Rubik;
  font-size: 62px;
  font-weight: bold;
  line-height: 72px;
  letter-spacing: 2px;
`;

const SubTitle = styled.div`

  @media(max-width: 1200px) {
    text-align:center;
  }

  height: 24px;
  color: #FFFFFF;
  font-family: Rubik;
  font-size: 20px;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubSubTitle = styled.div`

  @media(max-width: 1200px) {
    justify-content: center;
  }

  font-size: 20px;
  color: white;
  font-weight: 300;
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

const MainText = styled.div`
  flex: 1;
`;

const MainImage = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  flex: 1;
  height: 783px;
  width: 1003px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: -280px;
  margin-left: 242px;
`;

const MainButtons = styled.div`
  display: flex;
  @media (min-width: 1200px) {
    flex-direction: row;
    max-width: 410px;
    margin-top: 60px;
  }
  @media (max-width: 1200px) {
    margin-top: 40px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  align-items: center;
  justify-content: center;
  a{
    text-decoration: none;
  }
  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }
`;

const DownloadB = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 210px;
  }
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-right: 10px;
  border-radius: 4px;
  width: 200px;
  box-shadow: 0 2px 48px 0 #184dcf;
  padding-left: 8px;
  padding-right: 8px;
  background: #17d1aa;
  color: #ffffff;
  cursor: pointer;
  display: flow;
  flow-orientation: row;

  transition: all .2s;
  &:hover {
    background: rgba(23, 209, 170, .8);
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  }
`;

const DownloadBChrome = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;

const DownloadBChromeTextA = styled.div`
  text-transform: uppercase;
  font-size: 15px;
`;

const DownloadBChromeTextB = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
`;

const WatchVideo = styled.div`
  @media (min-width: 1200px) {
    flex: 1;
  }
  @media (max-width: 1200px) {
    width: 190x;
    margin-top: 16px;
  }

  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  height: 46px;
  margin-right: 10px;
  margin-bottom: 30px;
  border-radius: 0px;
  width: 190px;
  box-shadow: 0 2px 48px 0 #184dcf;
  padding-left: 8px;
  padding-right: 8px;

  border: solid 2px white;
  background: #ffffff00;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  transition: all .2s;
  &:hover{
    background: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  }
`;

const WatchVideoImage = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  margin-right: 10px;
  background: url('./assets/playbtn.svg') center no-repeat;
  border: 0;
`;

const WatchVideoText = styled.div`
  font-size: 15px;
`;

const YoroiInfo = styled.span`
  margin-right: none;
`;

const CheckMark = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  padding-bottom: 3px;
`;

const CheckMark2 = styled(CheckMark)`
  margin-left: 14px;
  padding-bottom: 3px;
`;

const EmurgoLogo = styled.img`
  margin-left: 6px;
  width: 115px;
`;

const ContainerBottom = styled(Container)`
  padding-bottom: 60px;
  max-height: 2400px;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  flex: 1;
  height: 49px;
  width: 190px;
  min-width: 160px;
  border-radius: 8px;
  background-color: #17D1AA;
  margin-bottom:5px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  color: #ffffff;
  display: block;
  overflow:hidden;
  &:hover{
    background-color: #14E2B8;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #17d1aa;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 8px;
  z-index: 3;

  margin-bottom: 5px;
  overflow: auto;
  text-transform:initial;
  text-align: justify;
  width: 190px;

  a {
    background-color: #17d1aa;
    padding: 5px 5px;
    display: block;
    font-size: 14px;

  }
  a:hover {
    background-color: #14E2B8
  }
`;

const Download = styled.div`
  position: relative;
  display: inline-block;
  color: #FFFFFF;
  font-family: Rubik;
  font-size: 15px;
  font-weight: initial;
  line-height: 40px;
  flex: 0.8;

  :hover ${DropdownButton} {
    background-color: #14E2B8;
    align-items:left;
  }
`;

const DownloadItemImage = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
`;

const DownloadLabel = styled.div`
  margin-left: 15px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 5px;
  text-transform: uppercase;
`;

/**
 *  This Component is to be able to pass isOpen
 *  to ModalVideo. Example did not work as intenteded:
 *  Prop was passed by isOpen={this.state.video} but
 *  not binded to state isOpen.
 */
class Video extends ModalVideo {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      showSupportModal: false,
      showDownloadDropdown: false,
    };
    this.openVideo = this.openVideo.bind(this);
  }

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };
  openVideo() {
    this.setState({ video: true });
  }

  render() {
    const _Home = ({ intl: { formatMessage } }) => (
      <span>
        <ContainerBottom>
          <Video isOpen={this.state.video} channel="youtube" videoId="DHtEgLMslIQ" onClose={() => this.setState({ video: false })} />
          <Overflow style={{marginTop: '94px', marginLeft: '-37px'}}>
            <MainText>
              <MainTitle>
                <YoroiInfo>
                  <FormattedHTMLMessage id={'home.title.Yoroi'} />
                </YoroiInfo>
              </MainTitle>
              <SubTitle>
                {formatMessage({id: 'home.title.YoroiDescription'})}
              </SubTitle>
              <SubSubTitle>
                By <EmurgoLogo src="./assets/emurgo_logo.png" alt="Emurgo - Creating a more connected and equitable world through Cardano blockchain" border="0" />
              </SubSubTitle>
              <MainButtons>
                <WatchVideo onClick={this.openVideo} style={{marginTop: '-7px'}}>
                  <div style={{ width: '140px'}}>
                    <WatchVideoText> LEARN MORE </WatchVideoText>
                  </div>
                </WatchVideo>
                <WatchVideo onClick={this.openVideo} style={{marginTop: '-7px'}}>
                  <span>
                    <WatchVideoImage />
                  </span>
                  <div style={{ width: '140px'}}>
                    <WatchVideoText> {formatMessage({ id: 'home.title.watch-the-video' })} </WatchVideoText>
                  </div>
                </WatchVideo>
              </MainButtons>
            </MainText>
          </Overflow>
          <MainImage/>

        </ContainerBottom>
        <AboutNew />
        <Developer />
        <Collaborators />
        <Blog />
        <Contact />
      </span>
    );

    const Home = inject('locale')(injectIntl(observer(_Home)));

    return <Home />;
  }
}

export default App;
