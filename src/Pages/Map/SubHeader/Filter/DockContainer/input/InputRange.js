import { useState, useCallback, useContext } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components/macro';
import {
  RANGE,
  useFilterContext,
} from '../../../../../../Util/useMapPageContext';

export default function InputRange({ type, item }) {
  const dispatch = useFilterContext();
  const [range, setRange] = useState(item.range);
  const step = item.step;

  const getRange = () => {
    const [minRange, maxRange] = range;

    let returnText = minRange === 0 ? '' : `${minRange * item.unit}만원  ~  `;
    returnText += maxRange === 100 ? '무제한' : `${maxRange * item.unit}만원`;

    return returnText;
  };

  const handleRange = useCallback(range => {
    const { value } = item;

    dispatch({
      type: RANGE,
      key: type,
      value,
      range,
    });
  }, []);

  return (
    <Container>
      <SubTitle>
        {item.value} <span>{getRange()}</span>
      </SubTitle>
      <StyledSlider
        step={step}
        renderTrack={Track}
        renderThumb={Thumb}
        value={range}
        onChange={(range, index) => setRange(range)}
        onAfterChange={(range, index) => handleRange(range)}
      />
      <RangeRulr>
        <li>0</li>
        <li>{item.unit * 50}만원</li>
        <li>무제한</li>
      </RangeRulr>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.solidGray};
`;

const SubTitle = styled.h1`
  ${({ theme }) => theme.flexSet('space-between', 'center')}
  color: ${({ theme }) => theme.gray};
  font-size: 18px;
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 15px;

  span {
    color: ${({ theme }) => theme.blue};
    font-size: 15px;
    font-weight: 400;
    flex: 0 0 auto;
  }
`;

const RangeRulr = styled.ul`
  ${({ theme }) => theme.flexSet('space-between', 'center')}
  color: ${({ theme }) => theme.black};
  margin-top: 20px;
  height: 18px;
  position: relative;

  li {
    min-width: 24px;
    color: ${({ theme }) => theme.gray};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
`;

const StyledSlider = styled(ReactSlider)`
  ${({ theme }) => theme.flexSet('center', 'center')}
  margin-top: 30px;
  width: 100%;
  height: 5px;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  cursor: grab;

  width: 24px;
  height: 24px;
  border-radius: 24px;
  box-shadow: rgba(157, 157, 157, 0.2) 0px 2px 5px 0px;
  border: 1px solid rgb(237, 237, 237);
  background-color: rgb(255, 255, 255);
  backface-visibility: hidden;
  position: absolute;
  top: -10px;
  right: -12px;
  outline: currentcolor none medium;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${({ theme, index }) =>
    index === 2 ? theme.solidGray : index === 1 ? theme.blue : theme.solidGray};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;
