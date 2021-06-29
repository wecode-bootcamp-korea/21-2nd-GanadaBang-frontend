import { useCallback } from 'react';
import styled from 'styled-components/macro';
import {
  useFilterContext,
  CHECK_BOX,
} from '../../../../../Util/useMapPageContext';

export default function CheckWrap({ subTitle, type, list }) {
  const dispatch = useFilterContext();

  const handleCheckBox = useCallback(e => {
    const { value, checked } = e.target;

    dispatch({
      type: CHECK_BOX,
      key: type,
      value,
      checked,
    });
  }, []);

  return (
    <Container>
      <Title>{subTitle}</Title>
      <p>중복선택이 가능합니다.</p>
      <CheckBoxWrapper>
        {list.map((item, index) => (
          <Label key={index}>
            <input
              type="checkbox"
              name={item.name}
              value={item.value}
              checked={item.checked}
              onChange={handleCheckBox}
            />
            <p>{item.value}</p>
          </Label>
        ))}
      </CheckBoxWrapper>
    </Container>
  );
}

const Container = styled.p`
  color: ${({ theme }) => theme.gray};
  font-size: 13px;
  font-weight: 400;
  margin: 5px 0px;
  line-height: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const CheckBoxWrapper = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.solidGray};
`;

const Label = styled.label`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  min-width: 80px;
  margin: 10px 0;

  input {
    margin: 0 10px 0 0;
    border: 0px none;
    border-radius: 0px;
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
`;
