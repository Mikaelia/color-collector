import C from "../actionTypes";

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

export const palettes = (state = [], action) => {
  switch (action.type) {
    case C.ADD_PALLET:
      // Overwrites palettes with same name
      const filteredPalettes = [...state].filter(
        palette => palette.name !== action.paletteObj.name
      );
      return [...filteredPalettes, action.paletteObj];

    // case C.ADD_PALLET_COLORS:
    //   try {
    //     return state.map(pallet => {
    //       return pallet.name === action.name
    //         ? { ...pallet, colors: [...pallet.colors, ...action.colors] }
    //         : pallet;
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }

    case C.REMOVE_PALLET_COLOR:
      break;
    //TODO: Remove palletColot, removePallet
    //TODO: set error state
    default:
      return state;
  }
};
