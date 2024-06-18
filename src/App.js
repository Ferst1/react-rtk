import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { delByIdAction, delLastProductAction,sortByPriceAction } from './store/productsReducer';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(delLastProductAction())}>Удалить последний элемент</button>
        <button onClick={() => dispatch(sortByPriceAction())}>Сортировка по цене</button>
      </div>
      <div className="product_wrapper">
        {Array.isArray(products) && products.map((product) => (
          <div key={product.id} onClick={() => dispatch(delByIdAction(product.id))}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
