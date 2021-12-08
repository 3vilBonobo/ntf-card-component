import image from '../images/equ.jpg';
import eye from '../images/view.svg';

function Image() {
  return (
    <div className="image-container">
      <img src={image} alt="" className="cube" />
      <img src={eye} alt="" className="eye" />
    </div>
  );
}

export default Image;
