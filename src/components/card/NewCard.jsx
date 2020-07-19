/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { HeartEmptyIcon, HeartFullIcon } from 'components/common/Icons';
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
      <Border>
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
                <div saved={saved}>
                  {saved ? (
                    <HeartFullIcon fill={colors.primary[2]} size={13} />
                  ) : (
                    <HeartEmptyIcon fill={colors.secondary[2]} size={13} />
                  )}{' '}
                </div>
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
                {type !== 3 && <img src={image} alt="card" />}
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
      </Border>
    </Shadow>
  );
};

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  transition: all 0.4s;
  box-shadow: -8px -8px 12px #fff;
`;

const Border = styled.div`
  padding: 0.5rem;
  transition: all 0.4s;
  border-radius: 1rem;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15);
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
  box-shadow: ${(props) =>
    props.saved
      ? '2px 2px 4px #fff, inset 2px 2px 8px rgba(0, 0, 0, 0.1)'
      : ' 2px 2px 4px rgba(0, 0, 0, 0.15)'};

  div {
    border-radius: 8px;
    padding: 6px 7px;
    box-shadow: -2px -2px 4px #fff;

    box-shadow: ${(props) => (props.saved ? 'none' : '-2px -2px 4px #fff')};
  }
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

  ${(props) =>
    props.hover &&
    css`
      box-shadow: -6px -6px 12px #fff;
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

    ${(props) =>
      props.hover &&
      css`
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);

        img {
          transform: scale(1.05);
        }
      `};

    img {
      border-radius: 0.5rem;
      width: 100%;
      transition: all 0.4s;
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
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${colors.gray[3]};
  line-height: 1.25rem;
  padding: 0 0.5rem;
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
