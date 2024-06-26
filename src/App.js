import Container from "react-bootstrap/Container";
import { Stack, Button} from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <Container className="my-4">
      <Stack direcktion="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard name="Entartaiment" amount={200} max={100}></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
