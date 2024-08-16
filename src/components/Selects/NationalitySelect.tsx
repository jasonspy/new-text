import { useState } from "react";

import { Combobox } from "@headlessui/react";
import Countries from "../../data/countries.json";
import { Listbox, Transition } from "@headlessui/react";




interface SelectedProps {
    label: string;
    selectedCountry: any;
    setSelectedCountry: any;
    isRequired: boolean;
    isDisabled?: boolean;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function NationalitySelect({
    setSelectedCountry,
    selectedCountry,
    label, isRequired, isDisabled
}: SelectedProps) {
    const [query, setQuery] = useState("");

    const onSelect = (value: string) => {
        setSelectedCountry(value)
    }

    const filteredCountries =
        query === ""
            ? Countries
            : Countries.filter((country: any) => {
                return country?.nationality.toLowerCase().includes(query.toLowerCase());
            });

    return (
        <div>
            <Listbox>

                <Listbox.Label className="block text-sm  text-[#494949] font-medium">
                    {label && label} {isRequired && <span className="text-[#FF3B30]">*</span>}
                </Listbox.Label>
            </Listbox>
            <Combobox as="div" value={selectedCountry} onChange={onSelect}>
                <div className="relative mt-1">
                    <Combobox.Input
                        className="w-full rounded-[12px] border border-[#E8EAED] py-3 px-2.5 placeholder:text-placeholder placeholder:text-placeholder-inactive placeholder:text-sm  sm:text-sm sm:leading-6 outline-none h-[50px] capitalize bg-[#ECECEC] border-[#8F8F8F]"
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(country: any) =>
                            `${selectedCountry}`
                        }
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">

                    </Combobox.Button>

                    {filteredCountries.length > 0 && !isDisabled && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredCountries.map((country: any) => (
                                <Combobox.Option
                                    key={country.name}
                                    value={{ name: country.name, nationality: country.nationality }}
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
                                                    {country?.nationality}
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
