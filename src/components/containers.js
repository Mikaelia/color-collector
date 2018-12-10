import { connect } from "react-redux";
import AddColorForm from "./ui/AddColorForm";
import ColorList from "./ui/ColorList";
import PalletControls from "./ui/PalletControls";
import {
  addColor,
  rateColor,
  removeColor,
  selectColor,
  savePallet,
  addPalletColors
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

//Pallet container component
// Connect colors and pallets
export const Pallets = connect(
  state => ({
    colors: [...state.colors],
    pallets: [...state.pallets]
  }),
  dispatch => ({
    onNewPallet(palletObj) {
      dispatch(savePallet(palletObj));
    },
    onAddPalletColor(palletName, color) {
      dispatch(addPalletColors(palletName, color));
    }
  })
)(PalletControls);
