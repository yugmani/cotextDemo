import React, { Component } from "react";
import ComponentF from "./ComponentF";
//context using contextType.
import UserContext from "./userContext";
import { UserProvider } from "./userContext";

class ComponentE extends Component {
  // context using CONTEXTTYPE.
  // contextType works only with 'Class' Components.
  //using contextType you can subscribe only to a single context.
  static contextType = UserContext;

  render() {
    //context using contextType.
    return (
      <div>
        <h2>Component E Context {this.context} using contextType</h2>
        {/* If you want to use the default value remove provider here */}
        <UserProvider value="Yoog">
          <ComponentF />
        </UserProvider>
      </div>
    );
  }
}

//alternative context using contextType.
// ComponentE.contextType = UserContext;

export default ComponentE;
