import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";

export const App = () => (
    <BrowserRouter>
        <div className="min-h-screen bg-gray-50 p-4">
            <RoutesApp />
        </div>
    </BrowserRouter>
);

export default App;