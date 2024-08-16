type ColumnDefinitionType<T, K extends keyof T> = {
    key: K;
    header: string;
    width?: number;
    align?: string;
    formatType?: string;
    type?: string;
    dates?: []
}

type TableHeaderProps<T, K extends keyof T> = {
    columns: Array<ColumnDefinitionType<T, K>>;
}

const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>): JSX.Element => {
    const headers = columns.map((column, index) => {
        const style = {
            width: column.width ?? 100,
        };

        return (

            <th
                key={`headCell-${index}`}
                style={style}
                className={`text-${column.align ? column.align : 'left'}  p-4 text-[#1A1717] bg-[#F7F7F7] text-xs font-semibold`}
            >

                {column.header}
            </th>
        );
    });

    return (
        <thead>
            <tr>{headers}</tr>
        </thead>
    );
};

export default TableHeader;