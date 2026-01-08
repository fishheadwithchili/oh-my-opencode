import { createRequire } from "module";

// 解决 AJV 库在 Bundled ESM 环境下调用 require 的问题
// @ts-ignore
globalThis.require = createRequire(import.meta.url);

// 解决 google-auth 在某些环境下缺少 OPENCODE_LIBC 定义的问题
// @ts-ignore
globalThis.OPENCODE_LIBC = "glibc";
