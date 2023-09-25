import type Option from "../Interface/Option.js";
import type { AstroIntegration } from "astro";
export declare const Default: Omit<{} & {
    CSS: {
        comments: false;
        forceMediaMerge: true;
        restructure: false;
    };
    HTML: {
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
    Image: {
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
    JavaScript: {
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
    SVG: {
        multipass: true;
        js2svg: {
            indent: number;
            pretty: false;
        };
        plugins: "preset-default"[];
    };
    Map: {
        CSS: string;
        HTML: string;
        Image: string;
        JavaScript: string;
        SVG: string;
    };
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Action: Omit<{} & {
        Read: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Interface/Buffer.js").Type>;
        Passed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Failed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Accomplished: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<any>;
    }, "__proto__">;
    Logger: 2;
}, "__proto__">;
export declare const _Default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Interface/Buffer.js").Type>;
        Passed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Failed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Accomplished: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<import("files-pipe/Target/Interface/Plan.js").default>;
    };
};
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeLeafURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
}>, Readonly<{
    key: PropertyKey;
    parents: readonly Readonly<Record<PropertyKey, unknown>>[];
}>>;
export declare const sharp: typeof import("sharp");
declare const _default: (_Option?: Option) => AstroIntegration;
export default _default;