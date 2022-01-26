import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { useGetAge } from '../../hooks/actor';

const ActorItem = ({ actor, index }) => {
  const { getAge } = useGetAge();
  const getGender = (gender) => (gender === 'M' ? 'Actor' : 'Actress');

  return (
    <tr key={actor.id}>
      <td>{index + 1}</td>
      <td>{actor.id}</td>
      <td>
        <img src={actor.picture} alt="actor" width="70px" height="100px" />
      </td>
      <td>{actor.name}</td>
      <td>{getAge(actor.bornDate)}</td>
      <td>{getGender(actor.gender)}</td>
      <td>
        <Button variant="primary">Edit</Button>
      </td>
    </tr>
  );
};

ActorItem.propTypes = {
  actor: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ActorItem;