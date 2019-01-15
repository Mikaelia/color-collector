import C from "../actionTypes";
import { v4 } from "uuid";

/// --> Example Color State
/*
{
  "id": "1",
  "title": "Cool Blue",
  "color": "#bde8ff",
  "rating": 1,
  "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
  "selected": false
}
 */

export const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0,
        selected: false
      };
    case C.RATE_COLOR:
      return state.id !== action.id
        ? state
        : {
            ...state,
            rating: action.rating
          };
    case C.SELECT_COLOR:
      return state.id !== action.id
        ? state
        : {
            ...state,
            selected: !state.selected
          };
    default:
      return state;
  }
};

/// ---> Example Colors State
/*
"colors": [{
            "id": "1",
            "title": "Cool Blue",
            "color": "#bde8ff",
            "rating": 1,
            "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
            "selected": false
        },
*/
export const colors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      //calls color reducer to update color object
      return [...state, color({}, action)];
    case C.RATE_COLOR:
      return state.map(c => color(c, action));
    case C.SELECT_COLOR:
      return state.map(c => color(c, action));
    case C.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};

/// ---> Example palletColors State
/*
{
  "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
  "title": "Pale Violet",
  "color": "#dcceff",
  "rating": 5,
  "timestamp": "Wed Mar 9 2016 03:26:00 GMT-0800 (PST)",
  "selected": false
}
*/
export const palletColors = (state = {}, action) => {
  switch (action.type) {
    case C.SELECT_PCOLOR:
      return state.id !== action.colorId
        ? state
        : {
            ...state,
            selected: !state.selected
          };
    default:
      return state;
  }
};

/// --> Example Palettes State
/*
[{
  "name": "Example Palette 1",
  "id": "a568a5csd39-6bdc-4727-91adsdsdasdfad",
  "selected": false,
  "colors": [{
          "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
          "title": "Pale Pink",
          "color": "#efddff",
          "rating": 1,
          "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
          "selected": false
      }]
*/
export const palettes = (state = [], action) => {
  switch (action.type) {
    case C.ADD_PALETTE:
      // Overwrites palettes with same name
      const filteredPalettes = [...state].filter(
        palette => palette.name !== action.paletteObj.name
      );
      return [...filteredPalettes, action.paletteObj];
    case C.REMOVE_PALETTE:
      return state.filter(palette => palette.id !== action.id);
    case C.ADD_PALETTE_COLORS:
      const deselectedColors = action.colors.map(color => ({
        ...color,
        selected: false
      }));

      const cache = {};

      return state.map(palette => {
        if (palette.id === action.id) {
          palette.colors.map(obj => (cache[obj.id] = obj));
          deselectedColors.forEach(obj => (cache[obj.id] = obj));
          const uniqueColors = Object.values(cache);
          return { ...palette, colors: uniqueColors };
        } else {
          return palette;
        }
      });

    case C.SELECT_PCOLOR:
      return state.map(palette => {
        if (palette.id === action.palletId) {
          const selectedColors = palette.colors.map(pcolor =>
            palletColors(pcolor, action)
          );
          return { ...palette, colors: [...selectedColors] };
        } else {
          return palette;
        }
      });

    case C.SELECT_PALETTE:
      return state.map(palette =>
        palette.id === action.id || palette.selected
          ? { ...palette, selected: !palette.selected }
          : palette
      );

    case C.REMOVE_PALETTE_COLOR:
      return state.map(palette => ({
        ...palette,
        colors: [...palette.colors.filter(color => !color.selected)]
      }));

    default:
      return state;
  }
};

/// --> Example Visibility State

// "visibility" : {
//   paletteControls: true,
//   palettes: true,
// }
export const visibility = (state = {}, action) => {
  switch (action.type) {
    case C.TOGGLE_VISIBILITY:
      return { ...state, [action.component]: !state[action.component] };
    default:
      return state;
  }
};

export const alerts = (state = [], action) => {
  switch (action.type) {
    case "ADD_ALERT":
      return [
        ...state,
        {
          text: action.text,
          style: action.style,
          id: v4()
        }
      ];

    case "REMOVE_ALERT":
      return state.filter(alert => {
        if (alert.id === action.id) {
          return false;
        } else {
          return true;
        }
      });

    default:
      return state;
  }
};
