import { useRef } from 'react';
import styled from 'styled-components/macro';
import CheckWrap from './DockContainer/CheckWrap';
import RangeWrap from './DockContainer/RangeWrap';
import { useOutsideClick } from '../../../../Util/useOutsideClick';

export default function Dock({ title, subTitle, type, list, range }) {
  const contain = useRef();
  const [isActive, setIsActive] = useOutsideClick(contain, false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Container ref={contain} isActive={isActive}>
      <Button onClick={handleActive} isActive={isActive}>
        <p>{title}</p>
      </Button>
      {isActive && (
        <Main>
          <CheckWrap subTitle={subTitle} type={type} list={list} />
          {range && <RangeWrap type={type} range={range} />}
        </Main>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-right: 5px;
  padding: 0 5px;
  background: ${({ theme }) => theme.white}
    ${({ isActive }) =>
      isActive
        ? "url('https://www.dabangapp.com/static/media/arrow_active.44d074dc.svg')"
        : "url('https://www.dabangapp.com/static/media/arrow.a4a570b9.svg')"}
    no-repeat scroll right 9px center / 10px;
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? theme.blue : theme.solidGray)};
`;

const Button = styled.button`
  max-width: 200px;
  width: 100%;
  padding: 0px 26px 0px 10px;
  height: 34px;
  text-align: left;
  border: 0px none;
  background-color: transparent;
  cursor: pointer;

  p {
    font-size: 13px;
    font-weight: 400;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    color: ${({ theme, isActive }) => (isActive ? theme.blue : theme.gray)};
  }
`;

const Main = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;
  max-height: 500px;
  min-width: 300px;
  padding: 40px 30px;
  overflow: auto;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.solidGray};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 18px -10px;
  z-index: 20;
`;
