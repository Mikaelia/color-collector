// Container components linking app components to state and actions
import { connect } from "react-redux";
import React from "react";
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
  removePaletteColors,
  removePalette,
  removeAlert,
  addAlert
} from "../actions";
import AlertsOverlayComponent from "./AlertsOverlay";

// Connects visibility state, actions to AddColorForm
export const NewColor = connect(
  state => ({
    visibility: { ...state.visibility }
  }),
  dispatch => ({
    // Here we are binding out action creators
    onToggleVisibility() {
      dispatch(toggleVisibility("paletteControls"));
    },
    onNewColor(title, color) {
      dispatch(addColor(title, color));
    },
    addAlert(text, style) {
      dispatch(addAlert(text, style));
    }
  })
)(AddColorForm);

// Connects colors + visibility state, actions to ColorList
export const Colors = connect(
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

// Connects colors, palettes, visibility state to PaletteControls component
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
    onRemovePalette(id) {
      dispatch(removePalette(id));
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
    },
    addAlert(text, style) {
      dispatch(addAlert(text, style));
    }
  })
)(PaletteControls);

export const Alerts = connect(
  state => ({
    alerts: [...state.alerts]
  }),
  dispatch => ({
    removeAlert(id) {
      dispatch(removeAlert(id));
    }
  })
  // connects removeAlert to overlay
)(AlertsOverlayComponent);
