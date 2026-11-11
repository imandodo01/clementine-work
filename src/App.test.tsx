import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

describe("Clementine Work", () => {
  it("puts the workshop and works collection before supporting information", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup.indexOf("Selected work.")).toBeLessThan(markup.indexOf("Build. Craft. Explore."));
    expect(markup).toContain("INDEPENDENT DIGITAL WORKSHOP");
    expect(markup).toContain('aria-label="Main navigation"');
    expect(markup).toContain('aria-label="Collapse sidebar"');
  });

  it("does not invent released products or a team", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Products and projects will appear here");
    expect(markup).toContain("INDEPENDENT PRACTICE");
    expect(markup).not.toContain("Our team");
    expect(markup).not.toContain("Client portfolio");
  });
});
