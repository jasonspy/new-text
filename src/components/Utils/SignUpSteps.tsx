
export default function Stepper({ steps, currentStep }: { steps: any, currentStep: number }) {
    return (
        <nav aria-label="Progress" className="w-full">
            <ol
                role="list"
                className={`rounded-md  md:flex flex-wrap gap-4 items-center  step-holder`}
            >
                {steps.map((step: any, stepIdx: number) => (
                    <li key={step.name} className="relative  justify-between  h-max  gap-4 md:flex  arrow_link">
                        {step.id <= currentStep ? (
                            <div className="flex flex-col gap-0 items-center">
                                <div className="text-xs flex bg-primary w-4 h-4 rounded-full flex items-center justify-center">
                                    <span className="text-white font-light">{stepIdx + 1}</span>
                                </div>
                                <button className="group flex items-center  w-max py-2 px-6 rounded-3xl bg-transparent  text-primary">
                                    <span className="flex items-center text-sm font-medium flex items-center justify-center font-[400]">
                                        {step.name}
                                    </span>

                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-0 items-center">
                                <div className="text-xs flex bg-[#33333380] w-4 h-4 rounded-full flex items-center justify-center">
                                    <span className="text-white font-light">{stepIdx + 1}</span>
                                </div>
                                <button className="group flex items-center w-max py-2 px-6 rounded-3xl bg-transparent font-light text-[#33333380]">
                                    <span className="flex items-center text-sm font-light">

                                        <span className="text-sm font-normal text-inferit group-hover:text-[#5E5E5E]">
                                            {step.name}
                                        </span>
                                    </span>
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
