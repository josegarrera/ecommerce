import React, {useEffect} from 'react';
import DIV_CART from './styled';
import {useSelector, useDispatch} from 'react-redux';
import CardCartProducts from '../cardCartProducts/CardCartProducts';
import {getOpenUserOrders} from '../../../redux/actions';

const Cart = () => {
	/* 
  Action que envie a get "/orders" con user._id  ,cart(true)  . Solo tiene que traer las ordenes abiertas. (arreglo con productos agregados en otra session)
  
  
  traer el estado login del useSelector ( si solo necesitamos el id del usuario traer login.user._id)
  
  useEffect ==> 
  getOpenUserOrders(userId)

  boton amount tiene que aumentar la cantidad del producto. 
  hace un put  a /ordens?userId.items[?].lot
  como trabajar produtos de base de datos y productos normales(getProducts)

  


  postOrders(cartProducts);
  
  */

	const cartProduct = useSelector((state) => state.cartProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOpenUserOrders());
	}, []);

	return (
		<DIV_CART>
			<div className='title_cnt'>
				<h1>Shopping Cart</h1>
				<h5>{`You Have {LocalSSState} items in your cart`} </h5>
			</div>

			<div className='products__summ__cnt'>
				<div className='prd__link'>
					<div className='product_cnt'>
						<div className='prd__values'>
							<div>Product</div>
							<div>Amount</div>
							<div>Price</div>
						</div>

						{cartProduct.length ? (
							cartProduct.map((e) => (
								<CardCartProducts key={e._id} product={e} />
							))
						) : (
							<h1>No tienes Producto agregados al carrito</h1>
						)}
						{/* cartProduct.length ? (
              cartProduct.map(
                ({ product: { name, price, imageUrl, _id }, lot }) => (
                  <div className="product_detail">
                    <h3>{name}</h3>
                    <div>
                      <button>+</button>
                      {lot}
                      <button>-</button>
                    </div>
                    <p>{price.currency + price.value}</p>
                    <button className="botooon">X</button>
                  </div>
                )
              )
            ) : (
              <h1>No tienes Producto agregados al carrito</h1>
            ) */}
					</div>
					<div>
						<p className='p_back_home'>{'<<'} Continue Shopping</p>
						<p className='h2__sbt'>subtotal = $Subtotal</p>
					</div>
				</div>

				<div>
					<div className='summary'>
						<div className='summary__title'>
							<h2>Summary</h2>
							<div className='total__prd'>
								<p>total products</p>
								<p>$Subtotal</p>
							</div>
							<div className='total__prd'>
								<p>Shipping Cost </p>
								<p>$500</p>
							</div>
						</div>
					</div>
					<button className='btn_buy'>Checkout</button>
				</div>
			</div>
		</DIV_CART>
	);
};

export default Cart;
