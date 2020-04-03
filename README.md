Poof of Concept: GLSL TypeChecker/Compiler loader for Webpack

Instructions:
There are two glsl files (bug and sample), and both are required in index.js
For testing purposes, compilation is done using https://github.com/evanw/glslx.
Samples were taken from GLSLX website.

run `npx webpack`.

When bug.glsl is imported, a compilation error is shown in the console.
When it is not imported, the generated js code for sample.glsl is printed in the console.

See loader code in glsl-loader.js