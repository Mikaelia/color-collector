import { connect } from "react-redux";
import AddColorForm from "./ui/AddColorForm";
import ColorList from "./ui/ColorList";
import { addColor, rateColor, removeColor, selectColor } from "../actions";

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
