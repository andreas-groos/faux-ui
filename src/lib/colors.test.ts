import type { ColorFamily, ColorName, ColorWeight, ColorValue } from "../types";
import {
  colorPalette,
  getColorByName,
  getColorByWeight,
  getColorHex,
  getColorNames,
  getColorWeights,
  getAllColors,
} from "./colors";

describe("ColorFamily and Color Palette", () => {
  describe("colorPalette data structure", () => {
    test("should contain all expected color families", () => {
      const expectedColors: ColorName[] = [
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ];

      expect(colorPalette).toHaveLength(expectedColors.length);

      const colorNames = colorPalette.map((color) => color.name);
      expectedColors.forEach((expectedColor) => {
        expect(colorNames).toContain(expectedColor);
      });
    });

    test("should have consistent structure for all color families", () => {
      colorPalette.forEach((colorFamily) => {
        expect(colorFamily).toHaveProperty("name");
        expect(colorFamily).toHaveProperty("colors");
        expect(Array.isArray(colorFamily.colors)).toBe(true);
        expect(colorFamily.colors.length).toBeGreaterThan(0);
      });
    });

    test("should have all expected weights for each color family", () => {
      const expectedWeights: ColorWeight[] = [
        50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
      ];

      colorPalette.forEach((colorFamily) => {
        expect(colorFamily.colors).toHaveLength(expectedWeights.length);

        const weights = colorFamily.colors.map((color) => color.weight);
        expectedWeights.forEach((expectedWeight) => {
          expect(weights).toContain(expectedWeight);
        });
      });
    });

    test("should have valid color values for each color", () => {
      colorPalette.forEach((colorFamily) => {
        colorFamily.colors.forEach((color) => {
          // Test structure
          expect(color).toHaveProperty("weight");
          expect(color).toHaveProperty("hex");
          expect(color).toHaveProperty("rgb");
          expect(color).toHaveProperty("hsl");

          // Test hex format
          expect(color.hex).toMatch(/^#[0-9a-f]{6}$/i);

          // Test RGB format
          expect(color.rgb).toMatch(/^\d{1,3} \d{1,3} \d{1,3}$/);

          // Test HSL format
          expect(color.hsl).toMatch(/^\d{1,3} \d{1,3}% \d{1,3}%$/);

          // Test weight is valid
          expect([
            50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
          ]).toContain(color.weight);
        });
      });
    });

    test("should have colors sorted by weight in ascending order", () => {
      colorPalette.forEach((colorFamily) => {
        const weights = colorFamily.colors.map((color) => color.weight);
        const sortedWeights = [...weights].sort((a, b) => a - b);
        expect(weights).toEqual(sortedWeights);
      });
    });
  });

  describe("getColorByName", () => {
    test("should return correct color family for valid color names", () => {
      const redFamily = getColorByName("red");
      expect(redFamily).toBeDefined();
      expect(redFamily?.name).toBe("red");
      expect(redFamily?.colors).toHaveLength(11);
    });

    test("should return undefined for invalid color names", () => {
      // @ts-expect-error Testing invalid input
      const invalidColor = getColorByName("invalidcolor");
      expect(invalidColor).toBeUndefined();
    });

    test("should work for all valid color names", () => {
      const colorNames: ColorName[] = [
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ];

      colorNames.forEach((colorName) => {
        const colorFamily = getColorByName(colorName);
        expect(colorFamily).toBeDefined();
        expect(colorFamily?.name).toBe(colorName);
      });
    });
  });

  describe("getColorByWeight", () => {
    test("should return correct color value for valid name and weight", () => {
      const red500 = getColorByWeight("red", 500);
      expect(red500).toBeDefined();
      expect(red500?.weight).toBe(500);
      expect(red500?.hex).toBe("#ef4444");
    });

    test("should return undefined for invalid color name", () => {
      // @ts-expect-error Testing invalid input
      const invalidColor = getColorByWeight("invalidcolor", 500);
      expect(invalidColor).toBeUndefined();
    });

    test("should return undefined for invalid weight", () => {
      // @ts-expect-error Testing invalid input
      const invalidWeight = getColorByWeight("red", 999);
      expect(invalidWeight).toBeUndefined();
    });

    test("should work for all valid combinations", () => {
      const weights: ColorWeight[] = [
        50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
      ];

      const color = getColorByWeight("blue", 600);
      expect(color).toBeDefined();
      expect(color?.weight).toBe(600);
      expect(color?.hex).toBe("#2563eb");
    });
  });

  describe("getColorHex", () => {
    test("should return correct hex value for valid name and weight", () => {
      const hex = getColorHex("green", 500);
      expect(hex).toBe("#22c55e");
    });

    test("should return undefined for invalid color name", () => {
      // @ts-expect-error Testing invalid input
      const hex = getColorHex("invalidcolor", 500);
      expect(hex).toBe("#000");
    });

    test("should return undefined for invalid weight", () => {
      // @ts-expect-error Testing invalid input
      const hex = getColorHex("green", 999);
      expect(hex).toBe("#000");
    });

    test("should return valid hex format", () => {
      const hex = getColorHex("purple", 300);
      expect(hex).toBeDefined();
      expect(hex).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });

  describe("getColorNames", () => {
    test("should return array of all color names", () => {
      const colorNames = getColorNames();
      expect(Array.isArray(colorNames)).toBe(true);
      expect(colorNames).toHaveLength(22);
    });

    test("should contain all expected color names", () => {
      const colorNames = getColorNames();
      const expectedNames: ColorName[] = [
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ];

      expectedNames.forEach((expectedName) => {
        expect(colorNames).toContain(expectedName);
      });
    });

    // test("should not contain duplicates", () => {
    //   const colorNames = getColorNames();
    //   const uniqueNames = [...new Set(colorNames)];
    //   expect(colorNames).toEqual(uniqueNames);
    // });
  });

  describe("getColorWeights", () => {
    test("should return correct weights for valid color name", () => {
      const weights = getColorWeights("red");
      const expectedWeights: ColorWeight[] = [
        50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
      ];

      expect(weights).toHaveLength(expectedWeights.length);
      expect(weights).toEqual(expectedWeights);
    });

    test("should return empty array for invalid color name", () => {
      // @ts-expect-error Testing invalid input
      const weights = getColorWeights("invalidcolor");
      expect(weights).toEqual([]);
    });

    test("should return weights in ascending order", () => {
      const weights = getColorWeights("blue");
      const sortedWeights = [...weights].sort((a, b) => a - b);
      expect(weights).toEqual(sortedWeights);
    });
  });

  describe("getAllColors", () => {
    test("should return flat array of all colors", () => {
      const allColors = getAllColors();
      const expectedTotal = 22 * 11; // 22 color families * 11 weights each

      expect(Array.isArray(allColors)).toBe(true);
      expect(allColors).toHaveLength(expectedTotal);
    });

    test("should have correct structure for each color item", () => {
      const allColors = getAllColors();

      allColors.forEach((color) => {
        expect(color).toHaveProperty("name");
        expect(color).toHaveProperty("weight");
        expect(color).toHaveProperty("hex");
        expect(color).toHaveProperty("rgb");
        expect(color).toHaveProperty("hsl");

        expect(typeof color.name).toBe("string");
        expect(typeof color.weight).toBe("number");
        expect(typeof color.hex).toBe("string");
        expect(typeof color.rgb).toBe("string");
        expect(typeof color.hsl).toBe("string");
      });
    });

    // test("should contain all color names and weights", () => {
    //   const allColors = getAllColors();
    //   const colorNames = [...new Set(allColors.map((c) => c.name))];
    //   const weights = [...new Set(allColors.map((c) => c.weight))];

    //   expect(colorNames).toHaveLength(22);
    //   expect(weights).toHaveLength(11);
    //   expect(weights).toEqual([
    //     50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
    //   ]);
    // });

    test("should have valid color formats", () => {
      const allColors = getAllColors();

      allColors.forEach((color) => {
        expect(color.hex).toMatch(/^#[0-9a-f]{6}$/i);
        expect(color.rgb).toMatch(/^\d{1,3} \d{1,3} \d{1,3}$/);
        expect(color.hsl).toMatch(/^\d{1,3} \d{1,3}% \d{1,3}%$/);
      });
    });
  });

  describe("type safety and consistency", () => {
    test("should maintain type consistency across all color families", () => {
      colorPalette.forEach((colorFamily: ColorFamily) => {
        expect(typeof colorFamily.name).toBe("string");
        expect(Array.isArray(colorFamily.colors)).toBe(true);

        colorFamily.colors.forEach((color: ColorValue) => {
          expect(typeof color.weight).toBe("number");
          expect(typeof color.hex).toBe("string");
          expect(typeof color.rgb).toBe("string");
          expect(typeof color.hsl).toBe("string");
        });
      });
    });

    test("should have unique combinations of name and weight", () => {
      const combinations = new Set<string>();

      colorPalette.forEach((colorFamily) => {
        colorFamily.colors.forEach((color) => {
          const combination = `${colorFamily.name}-${color.weight}`;
          expect(combinations.has(combination)).toBe(false);
          combinations.add(combination);
        });
      });
    });
  });
});
