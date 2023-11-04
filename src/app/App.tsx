/* VENDOR */
import { Route, Routes } from "react-router-dom";

/* APPLICATION */
import "@/app/styles/App.css";
import { Header } from "@/widgets/Header";
import { Tasks } from "@/pages/Tasks";
import { Categories } from "@/pages/Categories";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/categories" element={<Categories />} />
                <Route index element={<Tasks />} />
            </Routes>
        </div>
    );
}

export default App;
