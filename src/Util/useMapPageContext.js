import { createContext, useContext } from 'react';
import produce from 'immer';

export const CHECK_BOX = 'CHECK_BOX';
export const RANGE = 'RANGE';

const FilterContext = createContext();
export const useFilterContext = () => useContext(FilterContext);
export const FilterProvider = FilterContext.Provider;

const MapContext = createContext();
export const useMapContext = () => useContext(MapContext);
export const MapProvider = MapContext.Provider;

export const useFilterReducer = (state, action) => {
  switch (action.type) {
    case CHECK_BOX:
      return produce(state, draft => {
        const filterTap = draft.find(filter => filter.type === action.key);
        const list = filterTap.list.find(item => item.value === action.value);
        list.checked = action.checked;
      });
    case RANGE:
      return produce(state, draft => {
        const filterTap = draft.find(filter => filter.type === action.key);
        const list = filterTap.range.list.find(
          item => item.value === action.value
        );
        list.range = action.range;
      });
    default:
      return state;
  }
};
