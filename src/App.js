import "./App.css";
import NavBar from "./NavBar/NavBar";
import TodosSection from "./TodosSection";

function App() {
    return (
        <span className="flex-column">
            <NavBar />
            <TodosSection />
        </span>
    );
}

export default App;
