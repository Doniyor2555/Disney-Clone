import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://api.time.com/wp-content/uploads/2018/06/bo-rgb-s120_22a_cs_pub-pub16-318.jpg" alt="chinese-mom" />
      </Background>
      <ImgTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="bao" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play-icon" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="play-icon" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="groupWatch-button" />
        </GroupWatchButton>
      </Controls>
        <SubTitle>
          2018 • 7m • Family, kids, Animation
        </SubTitle>
        <Description>
          A chinese mom who sad when her grown son leaves home gets another <br /> chance at motherhood when one of her dumplings springs to life. But she <br /> finds that nothing stays cute and small forever.
        </Description>
    </Container> 
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 72px;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  height: 56px;
  margin-right: 22px;
  background: rbg(249, 249, 249);
  border: none;
  cursor: pointer;
  letter-spacing: 1.8px;

  &:hover {
    background: rgb(198, 198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: #fff;
  text-transform: uppercase;
`


const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #fff;
  cursor: pointer;
  span {
    font-size: 30px;
    color: #fff;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`


const SubTitle = styled.div`
  min-height: 20px;
  margin-top: 20px;
  color: rgb(249, 249, 249);
  font-size: 15px;
`

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
`