import React, { Component } from "react";
import { ArrowUp, ArrowDown } from "./Arrows";
import { Heart } from "./Emoji";
import onClickOutside from "react-onclickoutside";

class Dropdown extends Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title,
    paletteSelected: ""
  };

  handleClickOutside = e =>
    this.setState({
      listOpen: false
    });

  selectItem = e => {
    const name = e.target.innerHTML;
    this.setState({ paletteSelected: name });
  };

  toggleList = () =>
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));

  render() {
    const { palettes } = this.props;
    const { listOpen, headerTitle, paletteSelected } = this.state;
    const selected = paletteSelected.trim();
    return (
      <div className="dd">
        <div className="dd__header" onClick={this.toggleList}>
          <div className="dd__header-title heading-sm">{headerTitle}</div>
          <ArrowDown className={listOpen ? " up" : ""} />
        </div>
        {listOpen && (
          <ul className="dd__list ">
            {palettes.map(palette => (
              <li
                className={
                  palette.name === selected
                    ? "dd__list-item list-item--selected"
                    : "dd__list-item"
                }
                key={palette.name}
                onClick={this.selectItem}
              >
                <span className="dd__list-item-name"> {palette.name}</span>

                {palette.name === selected && (
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
