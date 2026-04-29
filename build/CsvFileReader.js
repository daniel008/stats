import fs from 'fs';
export class CsvFileReader {
    fileName;
    data = [];
    constructor(fileName) {
        this.fileName = fileName;
    }
    read() {
        this.data = fs
            .readFileSync(this.fileName, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
//# sourceMappingURL=CsvFileReader.js.map