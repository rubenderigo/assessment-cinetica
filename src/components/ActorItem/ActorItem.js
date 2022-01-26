import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { getAge, getGender } from '../../utils/actor';
import EditName from '../EditName';

const ActorItem = ({ actor, index }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{actor.id}</td>
      <td>
        <img src={actor.picture} alt="actor" width="70px" height="100px" />
      </td>
      <td>{isEditing ? <EditName actorId={actor.id} /> : actor.name}</td>
      <td>{getAge(actor.bornDate)}</td>
      <td>{getGender(actor.gender)}</td>
      <td>
        <Button variant="primary" onClick={onEditClick}>
          Edit
        </Button>
      </td>
    </tr>
  );
};

ActorItem.propTypes = {
  actor: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ActorItem;
