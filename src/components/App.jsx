import Image from './Image';
import Info from './Info';
import Price from './Price';
import Creator from './Creator';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Image />
        <Info />
        <Price />
        <hr />
        <Creator />
      </div>
    </div>
  );
}

export default App;
