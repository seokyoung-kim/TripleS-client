import React from 'react';
import Card from 'components/card/Card';

const CardContainer = () => {
  return (
    <Card
      link={link}
      image={image}
      writer={writer}
      title={title}
      description={description}
      tags={tags}
      date={date}
      platform={platform}
      category={category}
      isSaved={isSaved}
    />
  );
};

export default CardContainer;
