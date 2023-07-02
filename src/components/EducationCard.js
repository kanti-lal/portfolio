function EducationCard({ year, degree, university }) {
	return (
		<div className="flex flex-col w-full lg:w-auto items-start bg-white py-5 px-6 sm:py-8 sm:px-10 rounded-2xl space-y-4 border border-transparent hover:border-gray-300 hover:shadow-lg cursor-pointer">
			<span className="px-3 py-2 bg-gray-500 text-white rounded-lg text-xs sm:text-sm lg:text-base xl:text-lg">
				{year}
			</span>
			<div className="flex flex-col items-start space-y-2">
				<h3 className="font-bold text-xs sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-500">
					{degree}
				</h3>
				<h5 className="text-gray-500 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-normal">
					{university}
				</h5>
			</div>
		</div>
	)
}

export default EducationCard
