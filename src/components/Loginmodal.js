import React from "react";
import { Modal, Button, Icon, Header } from "semantic-ui-react";
import Videocard from "./Videocard";

const Loginmodal = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(props.open)}
      open={open}
      size="small"
    >
      <Header>
        <Icon name="archive" />
        Archive Old Messages
      </Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Loginmodal;
