import { describe, it, expect, beforeEach } from "vitest";
import { evaluate } from "../static/slots.js";

describe("Slots logic", () => {
  beforeEach(() => {
    global.state = { balance: 1000 };
  });

  it("should update balance on jackpot", () => {
    evaluate(["🍋", "🍋", "🍋"], 50);
    expect(document.getElementById("message").textContent).toContain("JACKPOT");
    expect(document.getElementById("coins").textContent).toBe("1500");
  });
});
