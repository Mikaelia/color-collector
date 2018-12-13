import { connect } from "react-redux";
import AddColorForm from "./ui/addColorForm/AddColorForm";
import ColorList from "./ui/colorList/ColorList";
import PaletteControls from "./ui/palletControls/PaletteControls";
import {
  addColor,
  rateColor,
  removeColor,
  selectColor,
  savePalette,
  addPaletteColors,
  selectPalette,
  toggleVisibility,
  selectPColor,
  removePaletteColors
} from "../actions";

//NewColor container component
export const NewColor = connect(
  state => ({
    visibility: { ...state.visibility }
  }),
  dispatch => ({
    onToggleVisibility() {
      dispatch(toggleVisibility("paletteControls"));
    },
    onNewColor(title, color) {
      dispatch(addColor(title, color));
    }
  })
)(AddColorForm);

//Color container component
export const Colors = connect(
  //connecting to colors slice of state
  state => ({
    colors: [...state.colors],
    visibility: { ...state.visibility }
  }),
  dispatch => ({
    onRemove(id) {
      dispatch(removeColor(id));
    },
    onRate(id, rating) {
      dispatch(rateColor(id, rating));
    },
    onSelect(id) {
      dispatch(selectColor(id));
    }
  })
)(ColorList);

//Palette container component
// Connected to colors and palettes state
export const Palettes = connect(
  state => ({
    colors: [...state.colors],
    palettes: [...state.palettes],
    visibility: { ...state.visibility }
  }),
  dispatch => ({
    onNewPalette(paletteObj) {
      dispatch(savePalette(paletteObj));
    },
    onAddPaletteColors(id, colors) {
      dispatch(addPaletteColors(id, colors));
    },
    onSelectPalette(id) {
      dispatch(selectPalette(id));
    },
    onSelectPColor(pid, cid) {
      dispatch(selectPColor(pid, cid));
    },
    onToggleVisibility() {
      dispatch(toggleVisibility("palettes"));
    },
    onRemovePaletteColors() {
      dispatch(removePaletteColors());
    }
  })
)(PaletteControls);
