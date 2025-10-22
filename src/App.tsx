import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-primary text-contrast transition-colors duration-300">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
