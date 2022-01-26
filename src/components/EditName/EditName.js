import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useEditName } from '../../hooks/actor';

const EditName = ({ actorId }) => {
  const { changeName, isLoading } = useEditName();
  const [value, setValue] = useState('');

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      await changeName(actorId, value);

      window.location.reload();
    },
    [value, actorId, changeName]
  );

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Form
      className="d-flex align-center justify-content-center w-100"
      onSubmit={onSubmit}
    >
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter new name"
          onChange={onChange}
          value={value}
          disabled={isLoading}
          style={{ minWidth: '100px' }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" size="sm" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Save'}
      </Button>
    </Form>
  );
};

EditName.propTypes = {
  actorId: PropTypes.string.isRequired,
};

export default EditName;
