import styled from 'styled-components/macro';
import InputRange from './input/InputRange';

export default function RangeWrap({ type, range: { title, list } }) {
  return (
    <Container>
      <Title>{title}</Title>
      {list.map((item, index) => (
        <InputRange key={index} type={type} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  margin-top: 30px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.flexSet('space-between', 'center')}
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;
