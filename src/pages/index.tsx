import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { Search } from '../components/search';
import {books} from '../assets/data/books';
import { Card } from '../components/card';
import { TCategories } from '../types/searchTypes';

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<TCategories>('title');
  const [currentBooks, setCurrentBooks] = useState(books);

  useEffect(() => {
    if (!search && JSON.stringify(currentBooks) !== JSON.stringify(books)) {
      setCurrentBooks(books)
    } else if (search) {
      setCurrentBooks(books.filter(book => 
        book[category].toLowerCase().includes(search.toLowerCase())
      ))
    }
  }, [category, search])


  return (
    <Layout searchMaybe={<Search value={search} setValue={setSearch} category={category} setCategory={setCategory}  />}>
      <StyledCardsContainer>
        {currentBooks.map((book) => (
          <Card key={book.id} img={book.img} author={book.author} title={book.title} />
        ))}
      </StyledCardsContainer>
    </Layout>
  )
}