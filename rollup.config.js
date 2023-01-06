import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";


export default {
    external: /node_modules/u,
    input: "src/index.ts",
    output: {
        dir: "build",
        sourcemap: true,
    },
    plugins: [nodeResolve(), typescript()],
};
