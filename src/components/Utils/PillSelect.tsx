import React from "react";

interface PillSelectProps {
    icon?: JSX.Element;
    showIcon?: boolean;
    isSelected?: boolean;
    title: string;
    onSelect: any;
}

const PillSelect = ({ icon, title, showIcon, isSelected, onSelect }: PillSelectProps) => {
    return (
        <button onClick={() => onSelect(title)} className={`flex items-center gap-2  px-4 py-2 w-max rounded-full font-[400] text-sm ${isSelected ? 'border border-primary text-primary' : 'border border-secondary-900 text-neutral-600'}`}>
            <span> {title}</span> {showIcon && <span className="">{isSelected ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23 23" fill="none">
                <line x1="16.6171" y1="17.5103" x2="5.30344" y2="6.19658" stroke="#0B8749" />
                <line x1="17.3243" y1="6.19682" x2="6.01055" y2="17.5105" stroke="#0B8749" />
            </svg> : '+'}</span>}
        </button>
    );
};

export default PillSelect;
