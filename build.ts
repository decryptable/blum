const output = await Bun.build({
  entrypoints: ["./index.ts"],
  format: "esm",
  target: "node",
  naming: "blum.js",
  outdir: ".",
  minify: true,
  sourcemap: "none",
});

if (output.success) {
  console.log("Build successful!");
} else {
  console.error("Build failed!");
  process.exit(1);
}
