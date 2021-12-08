import ethereum from '../images/ethereum.svg';
import clock from '../images/clock.svg';

function Price() {
  return (
    <div className="price-container">
      <div className="ethereum">
        {' '}
        <span>
          <img src={ethereum} alt="" />
        </span>{' '}
        0.041 ETH
      </div>
      <div className="time-left">
        {' '}
        <span>
          <img src={clock} alt="" />
        </span>{' '}
        3 days left
      </div>
    </div>
  );
}

export default Price;
