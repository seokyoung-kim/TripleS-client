import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 800px;
  height: 560px;
  background-color: white;
  border-radius: 20px;
  margin: 60px;
`;

const MailText = styled.div`
  width: 151px;
  height: 24px;
  text-align: left;
  letter-spacing: -0.5px;
  color: black;
  font-size: 20px;
  margin: 20px;
`;

const DivideLine = styled.div`
  width: 800px;
  height: 1px;
  background: black 0% 0% no-repeat padding-box;
  opacity: 0.1;
  margin: 10px 0 10px 0;
`;

const SwitchText = styled.div`
  width: 150px;
  height: 20px;
  margin: 20px;
  font-size: 16px;
`;

const MailCycleText = styled.div`
  width: 80px;
  height: 20px;
  margin: 20px 20px 5px 20px;
  font-size: 16px;
`;

const MailCycleDetailText = styled.div`
  width: 800px;
  height: 18px;
  margin: 5px 20px 20px 20px;
  font-size: 14px;
  color: #a4a4a4;
`;
const InterestingText = styled.div`
  width: 80px;
  height: 20px;
  margin: 60px 20px 5px 20px;
  font-size: 16px;
`;

const InterestingDetailText = styled.div`
  width: 800px;
  height: 18px;
  margin: 5px 20px 20px 20px;
  font-size: 14px;
  color: #a4a4a4;
`;

const FormButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const FormButtonBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const SubmitButtonContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  background-color: #7300f5;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  border: 0;
  width: 80px;
  justify-content: center;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

const FormSelect = styled.select`
  width: 90px;
  border: 1px solid #999;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const FormOption = styled.option``;

const TextFieldContainer = styled.div`
  width: 800px;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const InterestInput = styled.input`
  width: 300px;
  border-radius: 5px;
  border: 1px solid black;
`;

const MailForm = () => {
  const [weekState, setWeekState] = useState('주');
  const [dayState, setDayState] = useState('요일');
  const [timeState, setTimeState] = useState('시간');

  const onWeekChange = (e) => {
    setWeekState(e.target.value);
  };
  const onDayChange = (e) => {
    setDayState(e.target.value);
  };
  const onTimeChange = (e) => {
    setTimeState(e.target.value);
  };

  return (
    <Wrapper>
      <Box>
        <MailText>메일링 서비스</MailText>
        <DivideLine />
        <SwitchText>구독 메일 발송</SwitchText>
        <MailCycleText>발송 주기</MailCycleText>
        <MailCycleDetailText>
          설정한 주기마다 구독하신 메일을 발송해 드립니다.
        </MailCycleDetailText>

        <FormButtonContainer>
          <FormButtonBox>
            <FormSelect value={weekState} onChange={onWeekChange}>
              <FormOption value={'everyWeek'}>매주</FormOption>
              <FormOption value={'everyOtherWeek'}>격주</FormOption>
            </FormSelect>
            <FormSelect value={dayState} onChange={onDayChange}>
              <FormOption value={'monday'}>월요일</FormOption>
              <FormOption value={'tuesday'}>화요일</FormOption>
              <FormOption value={'wednesday'}>수요일</FormOption>
              <FormOption value={'thursday'}>목요일</FormOption>
              <FormOption value={'friday'}>금요일</FormOption>
              <FormOption value={'saturday'}>토요일</FormOption>
              <FormOption value={'sunday'}>일요일</FormOption>
            </FormSelect>
            <FormSelect value={timeState} onChange={onTimeChange}>
              <FormOption value={'sevenAM'}>오전 7시</FormOption>
              <FormOption value={'sevenPM'}>오후 7시</FormOption>
            </FormSelect>
          </FormButtonBox>
        </FormButtonContainer>
        <>
          <InterestingText>관심 분야</InterestingText>
          <InterestingDetailText>
            구독을 원하는 관심 분야를 입력해 주세요. 입력하신 내용과 관련된
            포스트를 메일링해드립니다.
          </InterestingDetailText>
        </>
        <TextFieldContainer>
          <InterestInput placeholder="ex) 스프링부트, 리액트" />
        </TextFieldContainer>
        <SubmitButtonContainer>
          <SubmitButton>저장</SubmitButton>
        </SubmitButtonContainer>
      </Box>
    </Wrapper>
  );
};

export default MailForm;
