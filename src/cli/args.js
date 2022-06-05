export const parseArgs = () => {
    console.log(process.argv
        .slice(2)
        .map((s, i, arr) => i % 2 === 0
        ? `${s.slice(2)} is ${arr[i + 1]}`
        : i !== arr.length - 1
            ? ', '
            : '')
        .join(''));
};
parseArgs();
