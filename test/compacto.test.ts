import { test } from "node:test";
import assert from "node:assert/strict";
import contribute from "../index.client.ts";

test("a finished Thinking leaves the timeline; a streaming one is left to the next plugin", () => {
  let contribution: any;
  contribute({ addTimelineTransformer: (c: unknown) => ((contribution = c), () => {}) } as never);
  assert.equal(contribution.query.itemType, "reasoning");
  const item = { type: "reasoning", text: "pienso" };
  assert.deepEqual(contribution.transform({ item, phase: "complete" }), { items: [] });
  assert.equal(contribution.transform({ item, phase: "streaming" }), undefined);
});
