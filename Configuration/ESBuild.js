/**
 * @module ESBuild
 *
 */
export default {
    color: true,
    format: "esm",
    logLevel: "debug",
    metafile: true,
    minify: true,
    outdir: "Target",
    platform: "node",
    target: "esnext",
    tsconfig: "tsconfig.json",
    write: true,
    plugins: [
        {
            name: "Target",
            setup({ onStart, initialOptions: { outdir } }) {
                onStart(async () => {
                    try {
                        outdir
                            ? await (await import("fs/promises")).rm(outdir, {
                                recursive: true,
                            })
                            : {};
                    }
                    catch (_Error) {
                        console.log(_Error);
                    }
                });
            },
        },
    ],
    define: {
        "process.env.VERSION_PACKAGE": `'${(await (await import("@playform/build/Target/Function/JSON.js")).default("package.json"))?.version}'`,
        "process.env.TARGETS": JSON.stringify((await import("lightningcss")).browserslistToTargets(
        // @ts-expect-error
        (await import("browserslist")).default("defaults"))),
    },
};