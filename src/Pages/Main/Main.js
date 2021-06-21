import styled from 'styled-components';

function Main() {
  return <Page>MAIN PAGE</Page>;
}

const Page = styled.div`
  ${props => props.theme.flexSet()}
  height : 200px;
  background-color: black;
`;

export default Main;
