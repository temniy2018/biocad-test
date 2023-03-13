import React, { FC } from 'react';
import styled from 'styled-components';
import { TCategories } from '../types/searchTypes';

const StyledSearchContainer = styled.div`
  display: inline-flex;
`

const StyledSearch = styled.input`
  outline: none;
`;

const StyledCategory = styled.span`
  font-weight: bold;
`;

interface ISearchProps {
  value: string;
  setValue: (value: string) => void;
  category: TCategories;
  setCategory: (value: TCategories) => void;
}

export const Search: FC<ISearchProps> = ({value, setValue, category, setCategory}) => {
  const onHandleCategory = () => {
    setCategory(category === 'author' ? 'title' : 'author')
  }

  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <StyledSearchContainer>
      <StyledSearch value={value} onChange={onHandleSearch} />
      <StyledCategory onClick={onHandleCategory}>{category}</StyledCategory>
    </StyledSearchContainer>
  )
}