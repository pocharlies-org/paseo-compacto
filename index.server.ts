import type { PluginServerContext } from "@getpaseo/plugin/server";

// Empty on purpose: the host only ships a plugin's client bundle when the plugin also registers server-side
// (measured in paseo-tokps on 0.11.2).
export default function contribute(_server: PluginServerContext) {
  return () => {};
}
