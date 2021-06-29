import styled from 'styled-components';
import Dock from './Filter/Dock';

function FliterWrap({ filterList }) {
  return (
    <Container>
      {filterList.map((filter, index) => (
        <Dock
          key={index}
          title={filter.title}
          subTitle={filter.subTitle}
          type={filter.type}
          list={filter.list}
          range={filter.range}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  height: 100%;
  padding: 0px 12px 0px 8px;
`;

export default FliterWrap;
