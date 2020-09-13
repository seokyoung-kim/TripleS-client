import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 800px;
  height: 540px;
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
  /* margin: 10px; */
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const TextFieldContainer = styled.div`
    width: 800px;
  height: 18px;
  /* margin: 5px 20px 20px 20px; */
  display: flex;
  justify-content: center;
`

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

const MailForm = () => {
  const classes = useStyles();
  const [week, setWeek] = React.useState('');
  const [day, setDay] = React.useState('');
  const [time, setTime] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setWeek(event.target.value);
    setDay(event.target.value);
    setTime(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <Box>
        <MailText>메일링 서비스</MailText>
        <DivideLine />
          <SwitchText>구독 메일 발송</SwitchText>
          {/* <FormControlLabel
            control={
              <IOSSwitch
                checked={state.checkedB}
                onChange={handleChangeSwitch}
                name="checkedB"
              />
            }
          /> */}
        <MailCycleText>발송 주기</MailCycleText>
        <MailCycleDetailText>
          설정한 주기마다 구독하신 메일을 발송해 드립니다.
        </MailCycleDetailText>

        <FormButtonContainer>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">주</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={week}
              onChange={handleChange}
            >
              <MenuItem value={10}>매주</MenuItem>
              <MenuItem value={20}>격주</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">요일</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={day}
              onChange={handleChange}
            >
              <MenuItem value={10}>월요일</MenuItem>
              <MenuItem value={20}>화요일</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">시간</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={time}
              onChange={handleChange}
            >
              <MenuItem value={10}>7AM</MenuItem>
              <MenuItem value={20}>7PM</MenuItem>
            </Select>
          </FormControl>
        </FormButtonContainer>
<>
        <InterestingText>관심 분야</InterestingText>
        <InterestingDetailText>
          구독을 원하는 관심 분야를 입력해 주세요. 입력하신 내용과 관련된 포스트를 메일링해드립니다.
        </InterestingDetailText>
        </>
        <TextFieldContainer>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="ex) 스프링부트, 리액트" />
        </form>
        </TextFieldContainer>
        <SubmitButtonContainer>
          <SubmitButton>저장</SubmitButton>
        </SubmitButtonContainer>
      </Box>
    </Wrapper>
  );
};

export default MailForm;
