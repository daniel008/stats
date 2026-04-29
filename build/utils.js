const isMatchRow = (row) => {
    return row.length === 3;
};
export const dateStringToDate = (dateString) => {
    // 28/10/2018  => ['28', '10', '2018'] => map
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    if (!isMatchRow(dateParts)) {
        throw new Error('Invalid date string format');
    }
    const [day, month, year] = dateParts;
    return new Date(year, month - 1, day);
};
//# sourceMappingURL=utils.js.map