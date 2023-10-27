/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
    CSS: {
        csso: {
            comments: false;
            forceMediaMerge: true;
            restructure: false;
        };
        lightningcss: {
            minify: true;
        };
    };
    HTML: {
        "html-minifier-terser": {
            caseSensitive: true;
            collapseInlineTagWhitespace: false;
            collapseWhitespace: true;
            continueOnParseError: true;
            html5: true;
            ignoreCustomComments: RegExp[];
            includeAutoGeneratedTags: true;
            keepClosingSlash: true;
            minifyCSS: true;
            minifyJS: true;
            minifyURLs: false;
            noNewlinesBeforeTagClose: true;
            preventAttributesEscaping: false;
            processConditionalComments: false;
            processScripts: string[];
            quoteCharacter: string;
            removeAttributeQuotes: true;
            removeComments: true;
            removeScriptTypeAttributes: true;
            removeStyleLinkTypeAttributes: true;
            removeTagWhitespace: false;
            sortAttributes: true;
            sortClassName: true;
            trimCustomFragments: true;
            useShortDoctype: false;
        };
    };
    Image: {
        sharp: {
            avif: {
                chromaSubsampling: string;
                effort: number;
            };
            gif: {
                effort: number;
            };
            jpeg: {
                chromaSubsampling: string;
                mozjpeg: true;
                trellisQuantisation: true;
                overshootDeringing: true;
                optimiseScans: true;
            };
            png: {
                compressionLevel: number;
                palette: true;
            };
            raw: {};
            tiff: {
                compression: string;
            };
            webp: {
                effort: number;
            };
        };
    };
    JavaScript: {
        terser: {
            ecma: 5;
            enclose: false;
            keep_classnames: false;
            keep_fnames: false;
            ie8: false;
            module: false;
            safari10: false;
            toplevel: false;
            format: {
                comments: false;
            };
        };
    };
    SVG: {
        svgo: {
            multipass: true;
            js2svg: {
                indent: number;
                pretty: false;
            };
            plugins: "preset-default"[];
        };
    };
    Map: {
        CSS: string;
        HTML: string;
        Image: string;
        JavaScript: string;
        SVG: string;
    };
    Parser: {
        CSS: ("csso" | "lightningcss")[];
        HTML: "html-minifier-terser";
        Image: "sharp";
        JavaScript: "terser";
        SVG: "svgo";
    };
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: Omit<{} & {
        Failed: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Passed: ({ Before, Buffer: _Buffer }: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Accomplished: ({ Input, Before, After, Output }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<any>;
        Read: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Type/Buffer.js").Type>;
        Fulfilled: ({ Files }: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
    }, "__proto__">;
    Files: string;
    Exclude: false;
}, "__proto__">;
export default _default;
