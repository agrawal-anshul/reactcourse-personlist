import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = props => {
  const { image, name, age, children } = props;
  console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${image}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{age}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person image="25" name="John Doe" age="25" />
      <Person image="34" name="Bobby Jones" age="55">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nisi, dolore!
        </p>
      </Person>
      <Person image="56" name="David Guetta" age="15" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
