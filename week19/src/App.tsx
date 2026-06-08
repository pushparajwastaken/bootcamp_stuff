import axios from "axios";
import { useEffect, useState } from "react";
//react only re-renders components if a "state variable" changes
function App() {
  //only the first time this componenrt is rendered will data be initialized to []
  //in all future re-renders,it will not get re-initialized
  const [data, setData] = useState([{ title: "Hi there" }]);
  // const posts = [
  //   {
  //     name: "Harkirat",
  //     content: "Hi there",
  //     backgroundColor: "blue",
  //   },
  //   {
  //     name: "Pushparaj",
  //     content: "Hi I am a learner",
  //     backgroundColor: "yellow",
  //   },
  //   {
  //     name: "Lavanya",
  //     content: "Hi I am the cutest",
  //     backgroundColor: "pink",
  //   },
  // ];

  // setTimeout(() => {
  //   setData([...data, { title: "New entry" }]);
  // }, 1000);

  //if the dependency array (2nd argument) is empty
  //this function only runs on the first render(mount)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <div>
      {data.map((d) => (
        <Post title={d.title} />
      ))}
    </div>
  );
}
function Post(props: any) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        margin: 20,
        borderRadius: 20,
        padding: 20,
        border: "1px solid black",
      }}
    >
      <div>
        <b>{props.title}</b>
      </div>
      {/* <div>{props.content}</div> */}
    </div>
  );
}

export default App;
