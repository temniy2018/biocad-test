import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLeftBar = styled.nav`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 15rem;

  @media (max-width: 767px) {
    & {
      display: none;
    }
  }
`

const StyledLeftBarLink = styled.a`
  text-decoration: none;
  color: #333;

  &:hover, &:active {
    color: #339;
  }
`

const StyledContentWrapper = styled.div`
  margin-left: 15rem;

  @media (max-width: 767px) {
    & {
      margin-left: 0;
    }
  }
`

const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 10px;
`

const StyledHeaderTitle = styled.h1`
  text-align: center
`

const StyledSearchMaybeAndUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const StyledUserIcon = styled.div`
  background-color: #222;
  color: white;
  padding: 10px;
`

const StyledMain = styled.main`
  display: flex;
`

interface ILayoutProps {
  searchMaybe: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({searchMaybe, children}) => {
  return (
    <>
      <StyledLeftBar>
        <StyledLeftBarLink>Главная</StyledLeftBarLink>
        <StyledLeftBarLink>Новости библиотеки</StyledLeftBarLink>
        <StyledLeftBarLink>Сотрудники библиотеки</StyledLeftBarLink>
        <StyledLeftBarLink>Мероприятия библиотеки</StyledLeftBarLink>
      </StyledLeftBar>
      <StyledContentWrapper>
        <StyledHeader>
          <StyledHeaderTitle>Корпоративная библиотека</StyledHeaderTitle>
        </StyledHeader>
        <StyledSearchMaybeAndUser>
          {searchMaybe}
          <StyledUserIcon>RZ</StyledUserIcon>
        </StyledSearchMaybeAndUser>
        <StyledMain>
          {children}
        </StyledMain>
      </StyledContentWrapper>
    </>
  )
}