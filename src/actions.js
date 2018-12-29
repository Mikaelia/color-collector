import C from "./actionTypes";
import { v4 } from "uuid";

/// ---> ColorForm Actions
export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString(),
  selected: false
});

/// ---> Color List Actions
export const removeColor = id => ({
  type: C.REMOVE_COLOR,
  id
});

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
});
export const selectColor = id => ({
  type: C.SELECT_COLOR,
  id
});

/// ---> Palette Actions
export const selectPalette = id => ({
  type: C.SELECT_PALETTE,
  id
});

export const savePalette = paletteObj => ({
  type: C.ADD_PALETTE,
  id: v4(),
  paletteObj
});

export const removePalette = id => ({
  type: C.REMOVE_PALETTE,
  id
});

export const removePaletteColors = () => ({
  type: C.REMOVE_PALETTE_COLOR
});

export const addPaletteColors = (id, colors) => ({
  type: C.ADD_PALETTE_COLORS,
  colors,
  id
});

export const selectPColor = (palletId, colorId) => ({
  type: C.SELECT_PCOLOR,
  palletId,
  colorId
});

/// ---> Component Visibility Actions
export const toggleVisibility = component => ({
  type: C.TOGGLE_VISIBILITY,
  component
});

/// --> Alert Actions
// style -> success, fail?
export const addAlert = (text, style) => {
  return {
    type: "ADD_ALERT",
    text,
    style,
    id: v4()
  };
};

export const removeAlert = id => {
  return {
    type: "REMOVE_ALERT",
    id
  };
};
