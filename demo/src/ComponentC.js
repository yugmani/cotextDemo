import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { UserConsumer } from "./userContext";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return <h1>I am {username} using Default Value</h1>;
          }}
        </UserConsumer>
        ;
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
