import data from "./data.json";

function SummaryCard() {
  return (
    <div className="px-7 py-6 w-full sm:max-w-xs shadow-2xl sm:rounded-3xl sm:pl-14">
      <h3 className="my-4 text-lg font-bold sm:text-xl sm:-mt-1">Summary</h3>
      <div className="flex flex-col space-y-4 sm:pb-6">
        {
          data.map((result) => {
            return (
            <div key={result.category} className="flex justify-between p-4 sm:p-3 rounded-lg" style={{ backgroundColor: result.background }}>
              <div className="flex">
                <img src={`src/${result.icon}`} alt="" />
                <p className="ml-3 font-bold" style={{ color: result.textColor }}>
                  {result.category}
                </p>
              </div>
              <p className="text-[#9a9996] font-bold">
                <span className="text-darkGrayBlue">{result.score}</span> / 100
              </p>
            </div> 
            )
          })
        }
        <button className="bg-darkGrayBlue py-4 sm:py-3 rounded-3xl text-white hover:bg-gradient-to-t from-gradientPersianBlue from-30% to-gradientVioletBlue" style={{ marginTop: '1.5rem' }}>Continue</button>
      </div>
    </div>
  )
}

export default SummaryCard