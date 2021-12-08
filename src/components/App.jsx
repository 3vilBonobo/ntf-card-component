import Image from './Image';
import Info from './Info';
import Price from './Price';
import Creator from './Creator';
import Attribution from './Attribution';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Image />
        <Info />
        <Price />
        <hr className="line" />
        <Creator />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
