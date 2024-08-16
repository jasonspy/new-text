
import { useNavigate } from "react-router-dom";
import { paths, skills } from "../../../../util/helpers";
import PillSelect from "../../../../components/Utils/PillSelect";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { InputField } from "../../../../components/Input";

interface PathSelectionProps {
    currentStep: number;
    data: any;
    onComplete: any;
}

const PathSelection = ({ currentStep, data, onComplete }: PathSelectionProps) => {
    const [selectedPaths, setSelectedPaths] = useState<string[]>([]);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const onPathSelect = (path: string) => {
        if (selectedPaths.includes(path)) {
            const newPaths = selectedPaths.filter((currentPath: string) => currentPath !== path)
            setSelectedPaths([...newPaths])
            return
        }
        setSelectedPaths([...selectedPaths, path])
    }
    const onSelectSkill = (skill: string) => {

        if (selectedSkills.includes(skill)) {
            const newSkills = selectedSkills.filter((currentSkill: string) => currentSkill !== skill)
            setSelectedSkills([...newSkills])
            return
        }
        setSelectedSkills([...selectedSkills, skill])
    }

    const isSelected = (path: string) => selectedPaths.includes(path)
    const showOtherSkillsInput = () => selectedSkills.includes('Others')

    const handleBackButton = () => {
        onComplete(currentStep, { ...data, paths: [...data.paths, ...selectedPaths], skills: [...data.skills, ...selectedSkills] }, true)
    }
    const handleFormSubmit = () => {
        onComplete(currentStep, { ...data, paths: [...selectedPaths], skills: [...selectedSkills] })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedPaths([...selectedPaths, ...data.paths])
        setSelectedSkills([...selectedSkills, ...data.skills])
    }, [])

    return (
        <div className="mt-8 mx-4  sm:w-full sm:max-w-sm md:max-w-2xl lg:max-w-5xl md:w-full md:mx-auto">
            <div className="bg-white shadow rounded-xl ">

                <p className="text-primary text-md lg:text-md  border-b  px-3 md:px-5 py-4 ">
                    Mentorship Path
                </p>

                <div className="px-3 md:px-5 py-5">
                    <div className="md:flex md:gap-1 items-center">
                        <p className="text-md">Mentorship Path </p>
                        <span className="text-[#5E5E5E] text-sm"> (Pick a Minimum of 1 Mentorship Path)</span>
                    </div>

                    <section className="my-5 flex flex-wrap w-full gap-4">
                        {
                            paths.map((path: any, index: number) => <PillSelect key={path} showIcon={true} title={path} onSelect={(path: string) => onPathSelect(path)} isSelected={isSelected(path)} />)

                        }
                    </section>


                    <div className="mt-10">
                        <div className="md:flex md:gap-1 items-center">
                            <p className="text-md">Professional Skills? </p>
                            <span className="text-[#5E5E5E] text-sm"> (Select all that applies)</span>
                        </div>

                        <section className="my-5 mb-10 gap-4 sm-w-1/1 md:w-2/3 lg:w-1/2 grid grid-cols-2">

                            {
                                skills.map((skill: any, index: number) => <label key={index} className="checkbox-container w-max">
                                    <input
                                        type="checkbox"
                                        checked={selectedSkills.includes(skill)}
                                        disabled={false}
                                        className="w-fit"
                                        value={skill}
                                        onChange={(e: any) => onSelectSkill(e.target.value)}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="text-neutral-600 ml-7 text-sm"> {skill} </span>
                                </label>)

                            }
                        </section>

                        {showOtherSkillsInput() && <section className="md:w-1/3">
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Other Professional Skills
                                </label>
                                <div className="mt-2">
                                    <InputField
                                        id="email"
                                        name="email"
                                        type="text"
                                        onChange={() => null}
                                        placeholder={'Enter other skills here'}
                                        classes={"bg-transparent border-[#E8EAED]"}
                                        required
                                    />
                                </div>
                            </div>
                        </section>}
                    </div>

                    <section className="mt-20 my-10 w-full">
                        <div className="w-full flex items-center lg:px-0 space-y-6 flex-col md:flex-row justify-between md:space-x-6 md:space-y-0">
                            <span className="w-full md:w-fit">
                                <Button
                                    loading={false}
                                    name={'Back'}
                                    type="button"
                                    onClick={handleBackButton}
                                    className="text-primary border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                                />
                            </span>
                            <span className="w-full md:w-fit">
                                <Button
                                    type={"button"}
                                    name={'Next'}
                                    onClick={handleFormSubmit}
                                    disabled={!selectedPaths.length && !selectedSkills.length}
                                    className="text-white bg-primary  disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                                />
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PathSelection

