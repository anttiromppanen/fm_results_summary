function ResultCard() {
  return (
    <div className="py-5 px-10 z-10 sm:max-w-xs sm:rounded-t-3xl bg-gradientRoyalBlue bg-gradient-to-t from-gradientRoyalBlue from-20% to-gradientSlateBlue text-center flex flex-col items-center justify-between rounded-b-3xl shadow-2xl sm:-mr-8">
      <h4 className="text-lightLavender mb-4 font-bold opacity-80 sm:text-xl">Your Result</h4>
      <div className="h-[130px] sm:h-[170px] w-[130px] sm:w-[170px] rounded-full bg-gradient-to-t from-gradientPersianBlueZero via-gradientPersianBlue to-gradientVioletBlue flex flex-col items-center justify-center mb-4">
        <h2 className="text-white text-5xl font-bold drop-shadow-sm mb-1">76</h2>
        <p className="text-lightLavender text-sm opacity-70">of 100</p>
      </div>
      <div className="mb-6">
        <h4 className="text-2xl text-white shadow-sm mb-2 opacity-85">Great</h4>
        <p className="text-lightLavender opacity-70">You scored hidher than 65% of the people two have taken these tests.</p>
      </div>
    </div>
  )
}

export default ResultCard