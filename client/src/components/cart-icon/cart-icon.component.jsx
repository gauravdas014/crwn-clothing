import React from "react";
import { connect } from "react-redux"
import {createStructuredSelector} from "reselect"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import {selectCartItemCount} from  "../../redux/cart/cart.selectors"

import { CartContainer, ShoppingIcon, ItemCountContainer } from "./cart-icon.styles"

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon) 


