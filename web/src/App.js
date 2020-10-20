import React from 'react';

// import api from './services/api'

import GlobalStyles from './styles/GlobalStyles';

// import Button from './components/Button'
import Routes from './routes'

const App = () => {
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   function handleProducts() {
  //     api.get('products').then(({ data }) => {
  //       setProducts(data)
  //     })
  //   }

  //   setTimeout(handleProducts, 1000)
  // }, [products])

  // if (!products.length) return <h1>Carregando dados...</h1>

  return (
    <>
      <Routes />
      {/* {products.map(product => (
        <h1>{product.name}</h1>
      ))}

      <Button
        title="Próximo"
      />  */}
      <GlobalStyles />
    </>
  );
};

export default App;
