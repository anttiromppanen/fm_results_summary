import ResultCard from "./ResultCard";
import SummaryCard from "./SummaryCard";

function App() {
  return (
    <div className="bg-white w-full">
      <div className="sm:flex justify-center items-center w-full h-screen">
        <div className="flex flex-col sm:flex-row justify-center items-stretch w-full">
          <ResultCard />
          <SummaryCard />
        </div>
      </div>
    </div>
  )
}

export default App;