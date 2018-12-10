import React, { Component } from "react";
import { ArrowUp, ArrowDown } from "./Arrows";
import { Heart } from "./Pointer";
import onClickOutside from "react-onclickoutside";

class Dropdown extends Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title
  };
  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => (item.selected = false));
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  };

  handleClickOutside(e) {
    this.setState({
      listOpen: false
    });
  }

  selectItem = (title, id, palletKey) => {
    this.setState(
      {
        headerTitle: title,
        listOpen: false
      },
      this.resetThenSet(id, palletKey)
    );
  };
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const { pallets } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? <ArrowUp /> : <ArrowDown />}
        </div>

        {listOpen && (
          <ul className="dd-list">
            {pallets.map(pallet => (
              <li
                className="dd-list-item"
                key={pallet.name}
                onClick={() =>
                  this.selectItem(pallet.name, pallet.name, pallet.name)
                }
              >
                {pallet.name}
                {pallet.selected && <Heart />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
