import React, { Component } from "react";
import { ArrowDown } from "./Arrows";
import { Heart } from "./Emoji";
import onClickOutside from "react-onclickoutside";
import v4 from "uuid";

class Dropdown extends Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title,
    paletteSelected: ""
  };

  //closes list on external click
  handleClickOutside = e =>
    this.setState({
      listOpen: false
    });

  //sets selected li in state and dispatch paletteSelect action
  selectItem = id => {
    const { onSelectPalette } = this.props;
    this.setState({ paletteSelected: id });
    onSelectPalette(id);
  };

  // toggles open/closed dropdown
  toggleList = () =>
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));

  render() {
    const { palettes } = this.props;
    const { listOpen, headerTitle, paletteSelected } = this.state;
    const selected = paletteSelected;
    return (
      <div className="dd">
        <div className="dd__header" onClick={this.toggleList}>
          <div className="dd__header-title heading-sm">{headerTitle}</div>
          <ArrowDown className={listOpen ? " up" : ""} />
        </div>
        {listOpen && (
          <ul className="dd__list">
            {palettes.map(palette => (
              <li
                className={
                  palette.id === selected
                    ? "dd__list-item list-item--selected"
                    : "dd__list-item"
                }
                key={palette.id}
                onClick={() => this.selectItem(palette.id)}
              >
                <span key={v4()} className="dd__list-item-name">
                  {palette.name}
                </span>

                {palette.id === selected && (
                  <Heart className="dd__list-heart" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
