import React, { useState } from 'react'
import { BTS, BottomBox, Box, ContentBox, MainBoxs } from './style'
import main1 from "../../images/main/main1.svg";
import main2 from "../../images/main/main2.svg";
import PLUS from "../../images/main/plus.svg";
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/modal';

const Main = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(0);
  return (
    <MainBoxs>
      {click ? <Modal /> : null}
      <Box>
        <div className="imgbox">
          <img src={main1} alt="main1-img"></img>
        </div>
        <ContentBox>
          <div className="contents">
            <span className="contenthead">EMERGENCY & SOS란 무엇인가?</span>
            <span className="content">
              응급실의 데이터를 조회해 병상이 몇개가 있는지 확인할
            </span>
            <span className="content">
              수 있으며 구급차가 미리 정보를 알고 확인이 가능하다
            </span>
            <small>
              화면 오른쪽 아래 버튼을 클릭하시면 병상 여부를 확인할 수 있습니다.
            </small>
          </div>
        </ContentBox>
      </Box>
      <Box>
        <ContentBox>
          <div className="contents">
            <span className="contenthead">EMERGENCY & SOS가 왜 필요한가?</span>
            <span className="content">
              병상이 꽉차서 응급실이 대처를 못하며 뺑뺑이를 돌아 골든타임을
              놓치지
            </span>
            <span className="content">
              않기 위해서 응급실 별 상황을 실시간으로 파악해야 하기 때문에
              필요하다
            </span>
          </div>
        </ContentBox>
        <div className="imgbox2">
          <img src={main2} alt="main2-img"></img>
        </div>
      </Box>
      <BottomBox>
        <span className="Head">EMERGENCY & SOS 의 방향성?</span>
        <span className="BotContent">
          응급실 뺑뻉이 문제로 고민을 시작해서 병상을 적절하게 지정 받을 수 있는
          서비스를
        </span>
        <div className="BotBox">
          <span className="BCon">
            대기노드 자리가 없을 경우 자동으로 예약시스템? 구조적인
            문제(프로세스)를 해결하는 고민
          </span>
        </div>
      </BottomBox>
      <BTS>
        <button
          className="Btn red"
          onClick={() => {
            setClick(1);
          }}
        >
          <img src={PLUS} alt="emergency"></img>
        </button>
        <button
          className="Btn green"
          onClick={() => {
            navigate("/maps/0");
          }}
        >
          <img src={PLUS} alt="minor-injuries"></img>
        </button>
      </BTS>
    </MainBoxs>
  );
}

export default Main