import { useState } from "react";
import { AppBar } from "../components/AppBar";
import { BoardsSection } from "../components/BoardsSection";
import { Card } from "../components/Card";
export function Board() {
  const [pendingTask, setPendingTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([
    {
      id: "1",
      title: "Node to bun migration",
      description:
        " Move website from node.js to bun.We have trying this for a while but not working out",
    },
  ]);
  const [doneTasks, setDoneTasks] = useState([
    {
      id: "2",
      title: "Node to bun migration",
      description:
        " Move website from node.js to bun.We have trying this for a while but not working out",
    },
  ]);
  return (
    <div>
      <AppBar />
      <div style={{ display: "flex" }}>
        <BoardsSection
          onDrop={(item) => {
            setPendingTasks((p) => p.filter((x) => x.id !== item.id));
            setOngoingTasks((p) => p.filter((x) => x.id !== item.id));
            setDoneTasks((p) => p.filter((x) => x.id !== item.id));
            setPendingTasks((p) => [...p, item]);
          }}
        >
          {pendingTask.map((task) => (
            <Card
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </BoardsSection>

        <BoardsSection
          onDrop={(item) => {
            setPendingTasks((p) => p.filter((x) => x.id !== item.id));
            setOngoingTasks((p) => p.filter((x) => x.id !== item.id));
            setDoneTasks((p) => p.filter((x) => x.id !== item.id));
            setOngoingTasks((p) => [...p, item]);
          }}
        >
          {ongoingTasks.map((task) => (
            <Card
              title={task.title}
              id={task.id}
              description={task.description}
            />
          ))}
        </BoardsSection>

        <BoardsSection
          onDrop={(item) => {
            setPendingTasks((p) => p.filter((x) => x.id !== item.id));
            setOngoingTasks((p) => p.filter((x) => x.id !== item.id));
            setDoneTasks((p) => p.filter((x) => x.id !== item.id));
            setDoneTasks((p) => [...p, item]);
          }}
        >
          {doneTasks.map((task) => (
            <Card
              title={task.title}
              id={task.id}
              description={task.description}
            />
          ))}
        </BoardsSection>
      </div>
    </div>
  );
}
