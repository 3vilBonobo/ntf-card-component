import avatar from '../images/avatar.png';

function Creator() {
  return (
    <div className="creator-container">
      <img src={avatar} alt="" />
      <p>
        {' '}
        Creation of <span>Jules Wyvern</span>{' '}
      </p>
    </div>
  );
}

export default Creator;
