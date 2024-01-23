import "./App.css";
import RevenueCard from "./components/RevenueCard.jsx";

function App() {
  return (
    <div className="grid grid-cols-4">
      <RevenueCard
        title={"Amount Pending"}
        orderCount={13}
        amount={"92,312.20"}
      />
    </div>
  );
}

export default App;