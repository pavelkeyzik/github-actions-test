import { describe } from "vitest";
import { format } from "./format";
import { it, expect } from "vitest";

describe("format", () => {
  it("should do something", () => {
    const result = format();

    expect(result).toBe("false");
  });
});
