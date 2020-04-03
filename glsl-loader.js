fs = require('fs');
const glslx = require('glslx');

module.exports = function(source) {
    let result = glslx.compile(source);

    if (result.output) {
        console.log("Compiled OK: ", result.output);
    } else {
        throw new Error(result.log);
    }

    // Parse source to generate params from input and output variables, etc.
    const params = {a: '1', b: '2'};

    let generatedImport = `module.exports = new GLTypedProgram(${JSON.stringify(params)}, \`${source}\`);`;

    console.log(generatedImport);

    return generatedImport;
}