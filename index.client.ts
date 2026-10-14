import type { PluginClientContext } from "@getpaseo/plugin/client";

// Paseo's «Tool call display → Summary» folds only consecutive tool calls into one line, so every Thinking between
// them splits the group. Dropping a finished Thinking lets that built-in group cover all the tools between two
// messages, as VS Code does. While it streams it is left to the next plugin (paseo-tokps) or the native row.
// The host asks plugins in `serverId/id` order and the first answer wins: this id sorts before paseo-tokps.
export default function contribute(client: PluginClientContext) {
  return client.addTimelineTransformer({
    id: "compacto-thinking",
    query: { itemType: "reasoning" },
    transform: ({ phase }) => (phase === "streaming" ? undefined : { items: [] }),
  });
}
