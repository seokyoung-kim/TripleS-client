/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { HeartFullIcon } from 'components/common/Icons';
import colors from 'styles/colors';

const Card = ({
  // _id,
  link,
  image,
  writer,
  title,
  description,
  date,
  platform,
  category,
  isSaved,
  logo,
  type,
}) => {
  const [onMouse, setOnMouse] = useState(false);
  const [saved, setSaved] = useState(isSaved);

  const openLink = () => {
    window.open(link, '_blank');
  };

  const saveCard = () => {
    setSaved(!saved);
  };

  const onMouseEnter = () => {
    setOnMouse(true);
  };

  const onMouseLeave = () => {
    setOnMouse(false);
  };

  return (
    <Shadow>
      <Wrapper>
        <ContentHeader type={type}>
          <HeaderLeft>
            <PlatFormImageWrapper>
              <img src={logo} alt={platform} />
            </PlatFormImageWrapper>
            <Writer>{writer}</Writer>
          </HeaderLeft>
          <HeaderRight onClick={saveCard}>
            <LikeContainer saved={saved}>
              {saved ? (
                <HeartFullIcon fill={colors.primary[2]} size={13} />
              ) : (
                <HeartFullIcon fill={colors.gray[4]} size={13} />
              )}{' '}
            </LikeContainer>
          </HeaderRight>
        </ContentHeader>

        <ActiveZone
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={openLink}
        >
          <ImageWrapper type={type} hover={onMouse}>
            <div hover={onMouse}>
              <ImageShadow hover={onMouse} />
              {type !== 3 && <img src={image} hover={onMouse} alt="card" />}
            </div>
          </ImageWrapper>
          <ContentBody>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ContentBody>
        </ActiveZone>

        <ContentFooter>
          <DateAndPlatform>
            <Date>{date}</Date>
            <Platform>{`by ${platform}`}</Platform>
          </DateAndPlatform>
          <Category>{category}</Category>
        </ContentFooter>
      </Wrapper>
    </Shadow>
  );
};

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  transition: all 0.4s;
  padding: 0.5rem;
  background: linear-gradient(145deg, #eee, #fff);
  /* 바깥 쪽 / 안쪽 */
  /* box-shadow: -8px -8px 16px #fafafa, inset 4px 4px 8px #fff,
    6px 6px 12px rgba(0, 0, 0, 0.25), inset -4px -4px 8px rgba(0, 0, 0, 0.1); */
  box-shadow: 8px 8px 16px #ccc, -8px -8px 16px #ffffff, inset 4px 4px 8px #fff,
    inset -4px -4px 8px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  width: ${(props) => props.theme.card.width};
  height: ${(props) => props.theme.card.height};
  position: relative;
`;

const ContentHeader = styled.div`
  height: 2.5rem;
  padding: 0.5rem 0.375rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${(props) =>
    props.type === 3 ? '1px solid #dedede' : 'none'};
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const PlatFormImageWrapper = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const Writer = styled.h5`
  margin-left: 0.5rem;
  margin-bottom: 2px;
  font-size: 0.875rem;
  font-weight: 500;
  flex: 1;
  cursor: pointer;
  color: ${colors.gray[2]};

  &:hover {
    color:#601AAF;
    /* color: ${colors.primary[2]}; */
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 6px 7px;
  box-shadow: ${(props) =>
    props.saved
      ? 'inset 3px 3px 6px #cecece, inset -3px -3px 6px #ffffff'
      : '3px 3px 6px #cecece, -3px -3px 6px #ffffff'};
`;

const ActiveZone = styled.div`
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  position: relative;
  /* box-shadow: 4px 4px 8px #fff; */
  transition: all 0.4s;

  height: ${(props) => (props.type === 1 ? '15rem' : '11rem')};
  height: ${(props) => props.type === 3 && '0'};

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }

  ${(props) =>
    props.hover &&
    css`
      box-shadow: -6px -6px 8px #fff, inset 6px 6px 8px #fff;
      transform: translateY(-2px);
    `};

  > div {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;

    &:active {
      box-shadow: none;
      transform: scale(1);
    }

    ${(props) =>
      props.hover &&
      css`
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3),
          inset -6px -6px 8px rgba(0, 0, 0, 0.3);

        img {
          transform: scale(1.05);
        }
      `};

    img {
      border-radius: 0.5rem;
      width: 100%;
      transition: all 0.3s;
    }
  }
`;

const ImageShadow = styled.div`
  transition: all 0.4s;
  /* box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.1); */
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.hover &&
    css`
      box-shadow: none;
    `};
`;

const ContentBody = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 0.5rem;
`;

const Title = styled.div`
  font-weight: 500;
  width: 100%;
  padding: 1rem 0.5rem;
  padding-bottom: 0.75rem;
  line-height: 1.4;
  color: ${colors.gray[1]};
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${colors.gray[3]};
  line-height: 1.25rem;
  padding: 0 0.5rem;
  overflow: hidden;
  max-height: 6.5rem;
`;

const ContentFooter = styled.div`
  height: 2.5rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem;
  font-size: 0.75rem;
`;

const DateAndPlatform = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: ${colors.gray[3]};
`;

const Date = styled.span`
  color: ${colors.gray[3]};
  padding-left: 0.25rem;
`;

const Platform = styled.span`
  color: ${colors.gray[3]};
  padding-left: 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${colors.primary[2]};
  }
`;

const Category = styled.div`
  color: ${colors.gray[3]};
  margin-right: 0.25rem;
  cursor: pointer;

  &:hover {
    color: ${colors.primary[2]};
  }
`;

Card.propTypes = {
  writer: PropTypes.string,
  image: PropTypes.string,
  isSaved: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.string,
  platform: PropTypes.string,
  category: PropTypes.string,
};

Card.defaultProps = {
  writer: '작성자',
  image: 'https://source.unsplash.com/random',
  isSaved: false,
  title: '제목',
  description:
    'Lorem ipsum dolor sit amet consect etur adipisi cing elit. Dicta nobis excep turi maiores, illo minima facere temporibus esse tenetur fugit magni laudantium eos in qui inventore nam fuga sunt molestias consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dicta nobis excep turi maiores, illo minima facere temporibus esse tenetur fugit magni laudantium eos in qui inventore nam fuga sunt molestias consequuntur.',
  link: 'https://naver.com',
  date: '2020.00.00',
  platform: 'platform',
  category: 'category',
};

export default Card;
