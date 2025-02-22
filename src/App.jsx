import { LikeButton } from "./Card/Button.jsx";
import { Counter } from "./Counter.jsx";
import { Request } from "./Request.jsx";

function Card({ children }) {
  return <div className="p-4 rounded shadow w-36 m-4">{children}</div>;
}

function Header({ children }) {
  return <div className="text-lg">{children}</div>;
}

export function App() {
  return (
    <main>
      <h1>Search for stuff</h1>
      <Counter />
      <Request />
      <Card>
        <Header>This is a card</Header>
        <LikeButton />
        <Card>
          <Header>This is a card</Header>
          <LikeButton />
        </Card>
      </Card>
    </main>
  );
}
