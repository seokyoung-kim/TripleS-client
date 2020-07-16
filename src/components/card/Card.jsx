import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  ImageIcon,
  BookmarkIcon,
  BookmarkFullIcon,
} from 'components/common/Icons';
import colors from 'styles/colors';

const Card = ({
  // _id,
  link,
  image,
  writer,
  title,
  description,
  tags,
  date,
  platform,
  category,
  isSaved,
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
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ImageWrapper hasImage={image} onClick={openLink}>
        {image ? (
          <img src={image} alt="card" />
        ) : (
          <ImageIcon size={48} fill="#fff" />
        )}
      </ImageWrapper>
      <Content hover={onMouse} hasImage={image}>
        <ContentHeader>
          <PlatFormImageWrapper>
            <img
              src="https://api.surfit.io/v1/channel/logo/w6rbw/1x"
              alt={platform}
            />
          </PlatFormImageWrapper>
          <Writer>{writer}</Writer>
          <span>{category}</span>
        </ContentHeader>
        <ContentBody>
          <Title onClick={openLink}>{title}</Title>
          <Description onClick={openLink}>
            {onMouse
              ? `${description.slice(0, 360)}...`
              : `${description.slice(0, 75)}...`}
          </Description>
          {onMouse && (
            <>
              <Date>{date}</Date>
              <Platform>`by ${platform}`</Platform>
            </>
          )}
        </ContentBody>
        <ContentFooter>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </Tags>
          <Bookmark onClick={saveCard}>
            {saved ? <BookmarkFullIcon /> : <BookmarkIcon fill="#BDBDBD" />}
          </Bookmark>
        </ContentFooter>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${(props) => props.theme.card.width};
  height: ${(props) => props.theme.card.height};
  border-radius: ${(props) => props.theme.card.radius};
  background-color: ${colors.white};
  box-shadow: ${(props) => props.theme.boxShadow[3]};
  position: relative;
  font-family: 'Noto Sans KR';
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: ${(props) => props.theme.card.radius};
  background-color: ${colors.bg};
  overflow: hidden;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    align-self: flex-start;
    margin-top: 1.5rem;
  }

  img {
    width: 100%;
    border-radius: 12px 12px 0px 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 19rem;
  border-radius: 12px 12px 8px 8px;
  position: absolute;
  bottom: 0;
  background-color: ${colors.white};
  box-shadow: ${(props) => props.theme.boxShadow.upper};
  transition: height 0.2s ease-in;
  overflow: hidden;

  ${(props) =>
    props.hasImage &&
    css`
      height: 12rem;
    `}

  ${(props) =>
    props.hover &&
    css`
      height: 100%;
      border-radius: 0.5rem;
    `}
`;

const ContentHeader = styled.div`
  border-bottom: 2px solid ${colors.gray[6]};
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  span {
    font-size: 0.75rem;
    color: ${colors.gray[4]};
  }
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
  }
`;

const Writer = styled.h5`
  margin-left: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  padding-bottom: 2px;
  flex: 1;
  cursor: pointer;
`;

const Bookmark = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 0.75rem;
`;

const ContentBody = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${colors.gray[3]};
  line-height: 1.25rem;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  text-align: justify;
`;

const ContentFooter = styled.div`
  height: 3rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  justify-content: space-between;
`;

const Tags = styled.div`
  padding: 0rem 1rem;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.gray[3]};
`;

const Tag = styled.p`
  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }
`;

const Date = styled.span`
  font-size: 0.75rem;
  color: ${colors.gray[4]};
  padding-left: 1rem;
`;

const Platform = styled.span`
  font-size: 0.75rem;
  color: ${colors.gray[4]};
  padding-left: 0.5rem;
`;

Card.propTypes = {
  writer: PropTypes.string,
  image: PropTypes.string,
  isSaved: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string,
    }),
  ),
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
  tags: ['tag1', 'tag2'],
  link: 'https://naver.com',
  date: '2020.00.00',
  platform: 'platform',
  category: 'category',
};

export default Card;
