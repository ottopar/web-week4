import PropTypes from 'prop-types';
import MitenMenee from './MitenMenee';

const Greeting = (props) => {
  function handleButtonClick() {
    alert('Click');
  }
  return (
    <>
      <h2 className="greeting">Waddup, {props.name}</h2>
      <p>Jou</p>
      <button onClick={handleButtonClick}>nappi</button>
      <MitenMenee />
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
