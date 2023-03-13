import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  border: 1px solid #222;
  padding: 2px;
  border-radius: 5px;
  flex-basis: 18%;
  min-width: 150px;
  cursor: pointer;
  margin-bottom: 5px;

  @media (max-width: 767px) {
    & {
      max-width: 150px;
    }
  }

  &:hover {
    border: 3px solid #2b2;
    padding: 0;
  }
`;

const StyledCardImg = styled.img`
  width: 100px;
`;

const StyledCardAuthor = styled.p`
  font-style: italic;
`;

const StyledCardTitle = styled.h3`
  font-size: 1,1rem;
`;

interface ICardProps {
  img: string;
  author: string;
  title: string;
}

export const Card: FC<ICardProps> = ({img, author, title}) => {
  return (
    <StyledCardContainer>
      <StyledCardImg src={img} alt={`${author} ${title}`} />
      <StyledCardAuthor>{author}</StyledCardAuthor>
      <StyledCardTitle>{title}</StyledCardTitle>
    </StyledCardContainer>
  )
}