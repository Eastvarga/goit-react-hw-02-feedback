import { title, container } from "./styles.module.css";
import { Component } from "react";

class Section extends Component {
  render() {
    return (
      <div className={container}>
        <h2 className={title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
export default Section;
