/* This example requires Tailwind CSS v2.0+ */
import { Listbox, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { DropArrow } from "../../assets/icons";

interface selectProps {
  label: string;
  selected: any;
  setSelected: any;
  data: any;
  name?: string;
  height?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Select({
  label,
  selected,
  setSelected,
  data,
  name,
  height,
}: selectProps) {
  const onChange = ({ name, id }: { name: string, id: string }) => {
    return setSelected({ name, id })

  }
  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <div className="flex flex-col w-full">
          <Listbox.Label className="block text-sm  text-[#494949] font-medium mb-2">
            {label && label}
          </Listbox.Label>
          <div className="mt-1 relative w-full ">
            <Listbox.Button
              className={`${height ? height : "h-[56px] bg-white"
                } relative w-full rounded-[12px] border border-[#E8EAED] outline-none shadow-sm px-4  cursor-pointer py-2 text-left cursor-default focus:outline-none  sm:text-sm`}
            >
              <span className="block truncate capitalize">
                {selected?.name ? selected?.name : name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <DropArrow />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {data?.map((person: any, index: number) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-[#fff1cf80] text-primary-600"
                          : "text-gray-900",
                        "cursor-pointer select-none relative py-2 pl-8 pr-4"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected
                              ? "font-medium"
                              : "font-normal capitalize",
                            "block truncate"
                          )}
                        >
                          {person?.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}


