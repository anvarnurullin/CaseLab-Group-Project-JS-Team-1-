import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrderItem from '../OrderItem/OrderItem';

function OrderList() {
  const orderListState = useSelector((state:RootState) => state.cartCounter);
  const orderListValue = useSelector((state:RootState) => state.orderList);
  console.log(orderListState);
  console.log(orderListValue);
  let setOrderList;
  if(orderListState === 0){
    setOrderList = <div className='emptyCart'>Ваша корзина пуста</div>;
  } else {
    //@ts-expect-error
    setOrderList = orderListValue.map(function(item){
      return <OrderItem {...item}/>
    })
  }
  return ( 
    <div className='OrderList'>
      {setOrderList}
    </div>
  );
}

export default OrderList;