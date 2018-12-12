import { connect } from "react-redux";
import AddColorForm from "./ui/AddColorForm";
import ColorList from "./ui/ColorList";
import PaletteControls from "./ui/PaletteControls";
import {
  addColor,
  rateColor,
  removeColor,
  selectColor,
  savePalette,
  addPaletteColors,
  selectPalette
} from "../actions";

//NewColor container component
export const NewColor = connect(
  null,
  dispatch => ({
    onNewColor(title, color) {
      dispatch(addColor(title, color));
    }
  })
)(AddColorForm);

//Color container component
export const Colors = connect(
  //connecting to colors slice of state
  state => ({
    colors: [...state.colors]
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
    palettes: [...state.palettes]
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
    }
  })
)(PaletteControls);
