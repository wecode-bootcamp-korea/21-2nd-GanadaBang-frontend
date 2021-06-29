import { useState, useEffect } from 'react';
import styled from 'styled-components';

const INIT_SETTING = {
  CURRENT_PAGE: 1,
  PAGE_SIZE: 5,
  VIEW_PAGE: 5,
};

export default function Pagination({
  items,
  current = 1,
  pageSize,
  handlePage,
  outputItem,
}) {
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    setCurrentPage(current);
  }, [items]);

  useEffect(() => {
    const page = pageSetting(items.length, currentPage, pageSize);
    const currentPageList = items.slice(page.startIndex, page.endIndex + 1);

    outputItem(currentPageList);
  }, [currentPage, items]);

  const pageSetting = (
    totalItemsRecord,
    currentPage = INIT_SETTING.CURRENT_PAGE,
    pageSize = INIT_SETTING.PAGE_SIZE
  ) => {
    const totalPages = Math.ceil(totalItemsRecord / pageSize);

    let startPage, endPage;

    if (totalPages <= INIT_SETTING.VIEW_PAGE) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const centerPage = Math.round(INIT_SETTING.VIEW_PAGE / 2);
      const rangePage = Math.floor(INIT_SETTING.VIEW_PAGE / 2);

      if (currentPage <= centerPage) {
        startPage = 1;
        endPage = INIT_SETTING.VIEW_PAGE;
      } else if (currentPage + rangePage >= totalPages) {
        startPage = totalPages - rangePage * 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - rangePage;
        endPage = currentPage + rangePage;
      }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItemsRecord - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );

    return {
      totalPages: totalPages,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  const pageMove = (movingPage = 1) => {
    const { totalPages } = pageSetting(items.length);

    const isPageCanMove = movingPage >= 1 && movingPage <= totalPages;
    if (!isPageCanMove) return;

    setCurrentPage(movingPage);
  };

  return (
    <Container>
      <Paging>
        <Page onClick={() => pageMove(currentPage - 1)}>이전</Page>
        {pageSetting(items.length, currentPage).pages.map((page, index) => (
          <Page
            key={index}
            isSelected={currentPage === page}
            onClick={() => pageMove(page)}
          >
            {page}
          </Page>
        ))}
        <Page onClick={() => pageMove(currentPage + 1)}>다음</Page>
      </Paging>
    </Container>
  );
}

const Container = styled.div`
  margin: 50px 0 50px;
`;

const Paging = styled.ul`
  ${({ theme }) => theme.flexSet()}
`;

const Page = styled.li`
  ${({ theme }) => theme.flexSet()}
  width: 32px;
  height: 32px;
  margin: 0px 4px;
  font-size: 1.2rem;
  border: 1px solid
    ${({ theme, isSelected }) => (isSelected ? theme.blue : theme.solidGray)};
  color: ${({ theme, isSelected }) => (isSelected ? theme.white : theme.black)};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.blue : theme.white};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.blue : theme.white};
  border-radius: 50%;
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.blue};
  }
`;
