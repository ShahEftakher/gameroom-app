import React from "react";
import { Form } from "semantic-ui-react";
import Navbar from "../components/Navbar";

const Uploadvideo = () => {
  return (
    <div>
      <Navbar />
      <Form>
          <Form.Field>
              <label>Video Title</label>
              <input type="text"/>
          </Form.Field>
          <Form.Field>
              <label>Description</label>
              <input type="text"/>
          </Form.Field>
      </Form>
    </div>
  );
};

export default Uploadvideo;
