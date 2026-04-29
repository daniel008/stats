export declare abstract class CsvFileReader<T> {
    fileName: string;
    data: T[];
    constructor(fileName: string);
    abstract mapRow(row: string[]): T;
    read(): void;
}
//# sourceMappingURL=CsvFileReader.d.ts.map