import C from "./actionTypes";
import { v4 } from "uuid";

export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
});

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

export const selectPalette = id => ({
  type: C.SELECT_PALETTE,
  id
});

export const savePalette = paletteObj => ({
  type: C.ADD_PALETTE,
  id: v4(),
  paletteObj
});

export const removePaletteColors = () => ({
  type: C.REMOVE_PALETTE_COLOR
});

export const addPaletteColors = (id, colors) => ({
  type: C.ADD_PALETTE_COLORS,
  colors,
  id
});

export const toggleVisibility = component => ({
  type: C.TOGGLE_VISIBILITY,
  component
});

export const selectPColor = (pid, cid) => ({
  type: C.SELECT_PCOLOR,
  pid,
  cid
});
