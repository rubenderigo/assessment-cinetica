import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

import ActorItem from '../ActorItem';

const ActorTable = ({ actors }) => (
  <Table striped bordered hover responsive className="text-center">
    <thead>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Picture</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {actors.map((actor, index) => (
        <ActorItem actor={actor} index={index} />
      ))}
    </tbody>
  </Table>
);

ActorTable.propTypes = {
  actors: PropTypes.array.isRequired,
};

export default ActorTable;
