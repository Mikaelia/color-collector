import React from 'react'

const PalletModal = ({name, colors}) => 
    <div className="pallet-modal">
        <div className="pallet-modal__heading">
            {name}
        </div>
        <div className="pallet-modal__details">
            <h1>Colors</h1>
            <ul className="pallet-modal__color-list">
                {colors.map((color) => {
                    <Color title={color.title} color={color.color}/>
                })}
            </ul>
        </div>
      
    </div>



export default PalletModal() {

}
