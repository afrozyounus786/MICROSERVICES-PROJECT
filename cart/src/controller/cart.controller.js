const cartModel = require("../model/cart.model");

async function addIntemtoCart(req, res) {
    const { productId, qty } = req.body;

    const user = req.user.id;

    const cart = await cartModel.findOne({ user: user_id });

    if(!cart){
        const cart = new cartModel({user: user_id , items: []})
    }

   const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (existingItemIndex >= 0) {
        cart.items[ existingItemIndex ].quantity += qty;
    } else {
        cart.items.push({ productId, quantity: qty });
    }

    await cart.save();

    res.status(200).json({
        message: 'Item added to cart',
        cart,
    });
}

async function updateCartItem(req, res) {
    const { productId } = req.params;
    const { qty } = req.body;
    const user = req.user;
    const cart = await cartModel.findOne({ user: user.id });
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (existingItemIndex < 0) {
        return res.status(404).json({ message: 'Item not found' });
    }
    cart.items[ existingItemIndex ].quantity = qty;
    await cart.save();
    res.status(200).json({ message: 'Item updated', cart });
}

async function getCart(req, res) {

    const user = req.user;

    const cart = await cartModel.findOne({ user: user.id })

    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    
    return res.status(200).json({
        cart,
        total: {
            items: cart.items.length,
            quantity: cart.items.reduce((acc, item) => acc + item.quantity, 0)
        }
    })
}


module.exports = {
    addIntemtoCart,
    updateCartItem,
}