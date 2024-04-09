import Container from "react-bootstrap/Container";
import { Stack, Button } from "react-bootstrap";


function App() {
  return (
    <Container>
      <Stack direcktion="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
    </Container>
  );
}

export default App;
