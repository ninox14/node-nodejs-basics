export const parseEnv = () => {
    console.log(Object.entries(process.env)
        .filter(([name]) => name.includes('RSS_'))
        .map((envVar) => envVar.join('='))
        .join(';\n'));
};
parseEnv();
