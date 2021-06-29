import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../../../Util/inputOutsideClick';
import SearchModal from '../../../Components/SearchModal/SearchModal';
import { POST_SEARCHFILTERED_API } from '../../../config';

function SearchWrap() {
  const [inputValue, setInputValue] = useState('');
  const [filterData, setFilterData] = useState([]);
  const { isActive, setIsActive, inputEl } = useOutsideClick();

  const changeInputValue = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch(
      `${POST_SEARCHFILTERED_API}?address=${inputValue}&type=district&category=L4`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.address) {
          setFilterData([...data.address]);
        }
      });
  }, [inputValue]);

  useEffect(() => {
    setInputValue('');
  }, [isActive]);

  return (
    <SearchWrapper ref={inputEl}>
      <form>
        <input
          type="text"
          placeholder="검색"
          onChange={changeInputValue}
          onClick={() => setIsActive(true)}
          value={inputValue}
        />
        {isActive && (
          <SearchModal
            filterData={filterData}
            top={'6rem'}
            setIsActive={setIsActive}
          />
        )}
      </form>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  ${({ theme }) => theme.flexSet()};
  width: 400px;
  height: 100%;
  padding: 0 20px;
  border-right: 1px solid rgb(223, 223, 223);

  form {
    ${({ theme }) => theme.flexSet()};
    width: 100%;
    padding-left: 30px;
    padding-right: 20px;
    background: transparent
      url('https://www.dabangapp.com/static/media/icon-search.5023bf62.svg')
      no-repeat scroll left center / 16px 16px;

    input {
      width: 100%;
      height: 36px;
      font-size: 1.5rem;
      cursor: text;
    }
  }
`;

export default SearchWrap;
