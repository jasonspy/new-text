import { useState } from "react";

import { Combobox } from "@headlessui/react";
import Countries from "../../data/cities.json";
import { Listbox, Transition } from "@headlessui/react";



interface SelectedProps {
    country: string;
    label: string;
    selectedCity: any;
    setSelectedCity: any;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function CitySelect({
    country,
    setSelectedCity,
    selectedCity,
    label
}: SelectedProps) {
    const [query, setQuery] = useState("");

    const cities = Countries[country as keyof typeof Countries]

    const updateQuery = (e: any) => {

        if (cities) {
            setQuery(e.target?.value)
        }
        else {
            setSelectedCity(e.target?.value)
        }
    }


    const filteredCountries = cities ? query === ""
        ? cities
        : cities.filter((city: any) => {
            return city.toLowerCase().includes(query.toLowerCase());
        }) : [];

    return (
        <div>
            <Listbox>

                <Listbox.Label className="block text-sm  text-[#494949] font-medium">
                    {label && label}
                </Listbox.Label>
            </Listbox>
            <Combobox as="div" value={selectedCity} onChange={setSelectedCity}>
                <div className="relative mt-2">
                    <Combobox.Input
                        className="w-full rounded-[12px] border border-[#E8EAED] py-3 px-2.5 placeholder:text-placeholder placeholder:text-placeholder-inactive placeholder:text-sm  sm:text-sm sm:leading-6 outline-none h-[56px] capitalize"
                        onChange={(event) => updateQuery(event)}
                        displayValue={(city: any) =>
                            `${selectedCity}`
                        }
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">

                    </Combobox.Button>

                    {filteredCountries && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredCountries.map((city: any, index: number) => (
                                <Combobox.Option
                                    key={`${city}-${index}`}
                                    value={city}
                                    className={({ active, selected }) =>
                                        classNames(
                                            "relative cursor-default select-none py-2 pl-3 pr-9",
                                            active ? "bg-[#fff1cf80] text-primary-600" : "text-gray-900",
                                            selected && "font-semibold bg-[#fff1cf80]"
                                        )
                                    }
                                >
                                    {({ active, selected }) => (
                                        <>
                                            <div className="flex items-center">

                                                <span
                                                    className={classNames(
                                                        "ml-3 truncate capitalize cursor-pointer",
                                                        selected && "font-semibold text-primary-600"
                                                    )}
                                                >
                                                    {city}
                                                </span>
                                            </div>

                                            {selected && (
                                                <span
                                                    className={classNames(
                                                        "absolute inset-y-0 right-0 flex items-center pr-4",
                                                        active ? "text-white" : "text-indigo-600"
                                                    )}
                                                >

                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    )}
                </div>
            </Combobox>
        </div>
    );
}
