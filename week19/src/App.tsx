function App() {
  const posts = [
    {
      name: "Harkirat",
      content: "Hi there",
    },
    {
      name: "Pushparaj",
      content: "Hi I am a learner",
    },
    {
      name: "Lavanya",
      content: "Hi I am the cutest",
    },
  ];

  return (
    <div>
      <h1> LinkedIn!!!!!!!</h1>
      {posts.map((p) => (
        <Post name={p.name} content={p.content} />
      ))}
    </div>
  );
}
function Post(props: any) {
  return (
    <div
      style={{
        margin: 20,
        borderRadius: 20,
        padding: 20,
        border: "1px solid black",
      }}
    >
      <div>
        <b>{props.name}</b>
      </div>
      <div>{props.content}</div>
    </div>
  );
}

export default App;
