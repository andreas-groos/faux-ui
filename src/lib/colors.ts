import type { ColorFamily, ColorName, ColorValue, ColorWeight } from "../types";

export const colorPalette: ColorFamily[] = [
  {
    name: "slate",
    colors: [
      { weight: 50, hex: "#f8fafc", rgb: "248 250 252", hsl: "210 40% 98%" },
      { weight: 100, hex: "#f1f5f9", rgb: "241 245 249", hsl: "210 40% 96%" },
      { weight: 200, hex: "#e2e8f0", rgb: "226 232 240", hsl: "214 32% 91%" },
      { weight: 300, hex: "#cbd5e1", rgb: "203 213 225", hsl: "213 27% 84%" },
      { weight: 400, hex: "#94a3b8", rgb: "148 163 184", hsl: "215 20% 65%" },
      { weight: 500, hex: "#64748b", rgb: "100 116 139", hsl: "215 16% 47%" },
      { weight: 600, hex: "#475569", rgb: "71 85 105", hsl: "215 19% 35%" },
      { weight: 700, hex: "#334155", rgb: "51 65 85", hsl: "215 25% 27%" },
      { weight: 800, hex: "#1e293b", rgb: "30 41 59", hsl: "217 33% 17%" },
      { weight: 900, hex: "#0f172a", rgb: "15 23 42", hsl: "222 84% 5%" },
      { weight: 950, hex: "#020617", rgb: "2 6 23", hsl: "222 84% 5%" },
    ],
  },
  {
    name: "gray",
    colors: [
      { weight: 50, hex: "#f9fafb", rgb: "249 250 251", hsl: "210 20% 98%" },
      { weight: 100, hex: "#f3f4f6", rgb: "243 244 246", hsl: "220 14% 96%" },
      { weight: 200, hex: "#e5e7eb", rgb: "229 231 235", hsl: "220 13% 91%" },
      { weight: 300, hex: "#d1d5db", rgb: "209 213 219", hsl: "212 10% 84%" },
      { weight: 400, hex: "#9ca3af", rgb: "156 163 175", hsl: "218 11% 65%" },
      { weight: 500, hex: "#6b7280", rgb: "107 114 128", hsl: "220 9% 46%" },
      { weight: 600, hex: "#4b5563", rgb: "75 85 99", hsl: "215 14% 34%" },
      { weight: 700, hex: "#374151", rgb: "55 65 81", hsl: "215 20% 27%" },
      { weight: 800, hex: "#1f2937", rgb: "31 41 55", hsl: "215 28% 17%" },
      { weight: 900, hex: "#111827", rgb: "17 24 39", hsl: "221 39% 11%" },
      { weight: 950, hex: "#030712", rgb: "3 7 18", hsl: "229 84% 5%" },
    ],
  },
  {
    name: "zinc",
    colors: [
      { weight: 50, hex: "#fafafa", rgb: "250 250 250", hsl: "0 0% 98%" },
      { weight: 100, hex: "#f4f4f5", rgb: "244 244 245", hsl: "240 5% 96%" },
      { weight: 200, hex: "#e4e4e7", rgb: "228 228 231", hsl: "240 5% 90%" },
      { weight: 300, hex: "#d4d4d8", rgb: "212 212 216", hsl: "240 5% 84%" },
      { weight: 400, hex: "#a1a1aa", rgb: "161 161 170", hsl: "240 4% 65%" },
      { weight: 500, hex: "#71717a", rgb: "113 113 122", hsl: "240 4% 46%" },
      { weight: 600, hex: "#52525b", rgb: "82 82 91", hsl: "240 5% 34%" },
      { weight: 700, hex: "#3f3f46", rgb: "63 63 70", hsl: "240 5% 26%" },
      { weight: 800, hex: "#27272a", rgb: "39 39 42", hsl: "240 4% 16%" },
      { weight: 900, hex: "#18181b", rgb: "24 24 27", hsl: "240 6% 10%" },
      { weight: 950, hex: "#09090b", rgb: "9 9 11", hsl: "240 10% 4%" },
    ],
  },
  {
    name: "neutral",
    colors: [
      { weight: 50, hex: "#fafafa", rgb: "250 250 250", hsl: "0 0% 98%" },
      { weight: 100, hex: "#f5f5f5", rgb: "245 245 245", hsl: "0 0% 96%" },
      { weight: 200, hex: "#e5e5e5", rgb: "229 229 229", hsl: "0 0% 90%" },
      { weight: 300, hex: "#d4d4d4", rgb: "212 212 212", hsl: "0 0% 83%" },
      { weight: 400, hex: "#a3a3a3", rgb: "163 163 163", hsl: "0 0% 64%" },
      { weight: 500, hex: "#737373", rgb: "115 115 115", hsl: "0 0% 45%" },
      { weight: 600, hex: "#525252", rgb: "82 82 82", hsl: "0 0% 32%" },
      { weight: 700, hex: "#404040", rgb: "64 64 64", hsl: "0 0% 25%" },
      { weight: 800, hex: "#262626", rgb: "38 38 38", hsl: "0 0% 15%" },
      { weight: 900, hex: "#171717", rgb: "23 23 23", hsl: "0 0% 9%" },
      { weight: 950, hex: "#0a0a0a", rgb: "10 10 10", hsl: "0 0% 4%" },
    ],
  },
  {
    name: "stone",
    colors: [
      { weight: 50, hex: "#fafaf9", rgb: "250 250 249", hsl: "60 9% 98%" },
      { weight: 100, hex: "#f5f5f4", rgb: "245 245 244", hsl: "60 9% 96%" },
      { weight: 200, hex: "#e7e5e4", rgb: "231 229 228", hsl: "20 6% 90%" },
      { weight: 300, hex: "#d6d3d1", rgb: "214 211 209", hsl: "24 6% 83%" },
      { weight: 400, hex: "#a8a29e", rgb: "168 162 158", hsl: "24 5% 64%" },
      { weight: 500, hex: "#78716c", rgb: "120 113 108", hsl: "25 5% 45%" },
      { weight: 600, hex: "#57534e", rgb: "87 83 78", hsl: "33 5% 32%" },
      { weight: 700, hex: "#44403c", rgb: "68 64 60", hsl: "30 6% 25%" },
      { weight: 800, hex: "#292524", rgb: "41 37 36", hsl: "12 6% 15%" },
      { weight: 900, hex: "#1c1917", rgb: "28 25 23", hsl: "24 10% 10%" },
      { weight: 950, hex: "#0c0a09", rgb: "12 10 9", hsl: "20 14% 4%" },
    ],
  },
  {
    name: "red",
    colors: [
      { weight: 50, hex: "#fef2f2", rgb: "254 242 242", hsl: "0 86% 97%" },
      { weight: 100, hex: "#fee2e2", rgb: "254 226 226", hsl: "0 93% 94%" },
      { weight: 200, hex: "#fecaca", rgb: "254 202 202", hsl: "0 96% 89%" },
      { weight: 300, hex: "#fca5a5", rgb: "252 165 165", hsl: "0 93% 82%" },
      { weight: 400, hex: "#f87171", rgb: "248 113 113", hsl: "0 91% 71%" },
      { weight: 500, hex: "#ef4444", rgb: "239 68 68", hsl: "0 84% 60%" },
      { weight: 600, hex: "#dc2626", rgb: "220 38 38", hsl: "0 73% 51%" },
      { weight: 700, hex: "#b91c1c", rgb: "185 28 28", hsl: "0 74% 42%" },
      { weight: 800, hex: "#991b1b", rgb: "153 27 27", hsl: "0 70% 35%" },
      { weight: 900, hex: "#7f1d1d", rgb: "127 29 29", hsl: "0 63% 31%" },
      { weight: 950, hex: "#450a0a", rgb: "69 10 10", hsl: "0 75% 15%" },
    ],
  },
  {
    name: "orange",
    colors: [
      { weight: 50, hex: "#fff7ed", rgb: "255 247 237", hsl: "33 100% 96%" },
      { weight: 100, hex: "#ffedd5", rgb: "255 237 213", hsl: "34 100% 92%" },
      { weight: 200, hex: "#fed7aa", rgb: "254 215 170", hsl: "32 98% 83%" },
      { weight: 300, hex: "#fdba74", rgb: "253 186 116", hsl: "31 97% 72%" },
      { weight: 400, hex: "#fb923c", rgb: "251 146 60", hsl: "27 96% 61%" },
      { weight: 500, hex: "#f97316", rgb: "249 115 22", hsl: "25 95% 53%" },
      { weight: 600, hex: "#ea580c", rgb: "234 88 12", hsl: "21 90% 48%" },
      { weight: 700, hex: "#c2410c", rgb: "194 65 12", hsl: "17 88% 40%" },
      { weight: 800, hex: "#9a3412", rgb: "154 52 18", hsl: "15 79% 34%" },
      { weight: 900, hex: "#7c2d12", rgb: "124 45 18", hsl: "15 75% 28%" },
      { weight: 950, hex: "#431407", rgb: "67 20 7", hsl: "13 81% 15%" },
    ],
  },
  {
    name: "amber",
    colors: [
      { weight: 50, hex: "#fffbeb", rgb: "255 251 235", hsl: "48 100% 96%" },
      { weight: 100, hex: "#fef3c7", rgb: "254 243 199", hsl: "48 97% 89%" },
      { weight: 200, hex: "#fde68a", rgb: "253 230 138", hsl: "48 97% 77%" },
      { weight: 300, hex: "#fcd34d", rgb: "252 211 77", hsl: "46 97% 65%" },
      { weight: 400, hex: "#fbbf24", rgb: "251 191 36", hsl: "43 96% 56%" },
      { weight: 500, hex: "#f59e0b", rgb: "245 158 11", hsl: "38 92% 50%" },
      { weight: 600, hex: "#d97706", rgb: "217 119 6", hsl: "32 95% 44%" },
      { weight: 700, hex: "#b45309", rgb: "180 83 9", hsl: "26 90% 37%" },
      { weight: 800, hex: "#92400e", rgb: "146 64 14", hsl: "23 83% 31%" },
      { weight: 900, hex: "#78350f", rgb: "120 53 15", hsl: "22 78% 26%" },
      { weight: 950, hex: "#451a03", rgb: "69 26 3", hsl: "21 89% 14%" },
    ],
  },
  {
    name: "yellow",
    colors: [
      { weight: 50, hex: "#fefce8", rgb: "254 252 232", hsl: "55 92% 95%" },
      { weight: 100, hex: "#fef9c3", rgb: "254 249 195", hsl: "55 97% 88%" },
      { weight: 200, hex: "#fef08a", rgb: "254 240 138", hsl: "53 98% 77%" },
      { weight: 300, hex: "#fde047", rgb: "253 224 71", hsl: "50 98% 64%" },
      { weight: 400, hex: "#facc15", rgb: "250 204 21", hsl: "48 96% 53%" },
      { weight: 500, hex: "#eab308", rgb: "234 179 8", hsl: "45 93% 47%" },
      { weight: 600, hex: "#ca8a04", rgb: "202 138 4", hsl: "41 96% 40%" },
      { weight: 700, hex: "#a16207", rgb: "161 98 7", hsl: "36 91% 33%" },
      { weight: 800, hex: "#854d0e", rgb: "133 77 14", hsl: "32 81% 29%" },
      { weight: 900, hex: "#713f12", rgb: "113 63 18", hsl: "28 73% 26%" },
      { weight: 950, hex: "#422006", rgb: "66 32 6", hsl: "26 83% 14%" },
    ],
  },
  {
    name: "lime",
    colors: [
      { weight: 50, hex: "#f7fee7", rgb: "247 254 231", hsl: "78 92% 95%" },
      { weight: 100, hex: "#ecfccb", rgb: "236 252 203", hsl: "79 61% 89%" },
      { weight: 200, hex: "#d9f99d", rgb: "217 249 157", hsl: "81 88% 80%" },
      { weight: 300, hex: "#bef264", rgb: "190 242 100", hsl: "82 84% 67%" },
      { weight: 400, hex: "#a3e635", rgb: "163 230 53", hsl: "82 78% 55%" },
      { weight: 500, hex: "#84cc16", rgb: "132 204 22", hsl: "84 81% 44%" },
      { weight: 600, hex: "#65a30d", rgb: "101 163 13", hsl: "83 80% 35%" },
      { weight: 700, hex: "#4d7c0f", rgb: "77 124 15", hsl: "82 69% 27%" },
      { weight: 800, hex: "#3f6212", rgb: "63 98 18", hsl: "82 69% 23%" },
      { weight: 900, hex: "#365314", rgb: "54 83 20", hsl: "82 61% 20%" },
      { weight: 950, hex: "#1a2e05", rgb: "26 46 5", hsl: "79 89% 10%" },
    ],
  },
  {
    name: "green",
    colors: [
      { weight: 50, hex: "#f0fdf4", rgb: "240 253 244", hsl: "138 76% 97%" },
      { weight: 100, hex: "#dcfce7", rgb: "220 252 231", hsl: "141 84% 93%" },
      { weight: 200, hex: "#bbf7d0", rgb: "187 247 208", hsl: "141 79% 85%" },
      { weight: 300, hex: "#86efac", rgb: "134 239 172", hsl: "142 77% 73%" },
      { weight: 400, hex: "#4ade80", rgb: "74 222 128", hsl: "142 69% 58%" },
      { weight: 500, hex: "#22c55e", rgb: "34 197 94", hsl: "142 71% 45%" },
      { weight: 600, hex: "#16a34a", rgb: "22 163 74", hsl: "142 76% 36%" },
      { weight: 700, hex: "#15803d", rgb: "21 128 61", hsl: "142 72% 29%" },
      { weight: 800, hex: "#166534", rgb: "22 101 52", hsl: "143 64% 24%" },
      { weight: 900, hex: "#14532d", rgb: "20 83 45", hsl: "144 61% 20%" },
      { weight: 950, hex: "#052e16", rgb: "5 46 22", hsl: "145 80% 10%" },
    ],
  },
  {
    name: "emerald",
    colors: [
      { weight: 50, hex: "#ecfdf5", rgb: "236 253 245", hsl: "152 81% 96%" },
      { weight: 100, hex: "#d1fae5", rgb: "209 250 229", hsl: "149 80% 90%" },
      { weight: 200, hex: "#a7f3d0", rgb: "167 243 208", hsl: "152 76% 80%" },
      { weight: 300, hex: "#6ee7b7", rgb: "110 231 183", hsl: "156 73% 67%" },
      { weight: 400, hex: "#34d399", rgb: "52 211 153", hsl: "158 64% 52%" },
      { weight: 500, hex: "#10b981", rgb: "16 185 129", hsl: "160 84% 39%" },
      { weight: 600, hex: "#059669", rgb: "5 150 105", hsl: "161 94% 30%" },
      { weight: 700, hex: "#047857", rgb: "4 120 87", hsl: "163 94% 24%" },
      { weight: 800, hex: "#065f46", rgb: "6 95 70", hsl: "163 88% 20%" },
      { weight: 900, hex: "#064e3b", rgb: "6 78 59", hsl: "164 86% 16%" },
      { weight: 950, hex: "#022c22", rgb: "2 44 34", hsl: "164 91% 9%" },
    ],
  },
  {
    name: "teal",
    colors: [
      { weight: 50, hex: "#f0fdfa", rgb: "240 253 250", hsl: "166 76% 97%" },
      { weight: 100, hex: "#ccfbf1", rgb: "204 251 241", hsl: "167 85% 89%" },
      { weight: 200, hex: "#99f6e4", rgb: "153 246 228", hsl: "168 84% 78%" },
      { weight: 300, hex: "#5eead4", rgb: "94 234 212", hsl: "171 77% 64%" },
      { weight: 400, hex: "#2dd4bf", rgb: "45 212 191", hsl: "172 66% 50%" },
      { weight: 500, hex: "#14b8a6", rgb: "20 184 166", hsl: "173 80% 40%" },
      { weight: 600, hex: "#0d9488", rgb: "13 148 136", hsl: "175 84% 32%" },
      { weight: 700, hex: "#0f766e", rgb: "15 118 110", hsl: "175 77% 26%" },
      { weight: 800, hex: "#115e59", rgb: "17 94 89", hsl: "176 69% 22%" },
      { weight: 900, hex: "#134e4a", rgb: "19 78 74", hsl: "176 61% 19%" },
      { weight: 950, hex: "#042f2e", rgb: "4 47 46", hsl: "179 84% 10%" },
    ],
  },
  {
    name: "cyan",
    colors: [
      { weight: 50, hex: "#ecfeff", rgb: "236 254 255", hsl: "183 100% 96%" },
      { weight: 100, hex: "#cffafe", rgb: "207 250 254", hsl: "185 96% 90%" },
      { weight: 200, hex: "#a5f3fc", rgb: "165 243 252", hsl: "186 94% 82%" },
      { weight: 300, hex: "#67e8f9", rgb: "103 232 249", hsl: "187 85% 69%" },
      { weight: 400, hex: "#22d3ee", rgb: "34 211 238", hsl: "188 83% 53%" },
      { weight: 500, hex: "#06b6d4", rgb: "6 182 212", hsl: "189 94% 43%" },
      { weight: 600, hex: "#0891b2", rgb: "8 145 178", hsl: "192 91% 36%" },
      { weight: 700, hex: "#0e7490", rgb: "14 116 144", hsl: "193 82% 31%" },
      { weight: 800, hex: "#155e75", rgb: "21 94 117", hsl: "194 70% 27%" },
      { weight: 900, hex: "#164e63", rgb: "22 78 99", hsl: "196 64% 24%" },
      { weight: 950, hex: "#083344", rgb: "8 51 68", hsl: "197 78% 15%" },
    ],
  },
  {
    name: "sky",
    colors: [
      { weight: 50, hex: "#f0f9ff", rgb: "240 249 255", hsl: "204 100% 97%" },
      { weight: 100, hex: "#e0f2fe", rgb: "224 242 254", hsl: "204 94% 94%" },
      { weight: 200, hex: "#bae6fd", rgb: "186 230 253", hsl: "201 94% 86%" },
      { weight: 300, hex: "#7dd3fc", rgb: "125 211 252", hsl: "199 89% 74%" },
      { weight: 400, hex: "#38bdf8", rgb: "56 189 248", hsl: "198 93% 60%" },
      { weight: 500, hex: "#0ea5e9", rgb: "14 165 233", hsl: "198 89% 48%" },
      { weight: 600, hex: "#0284c7", rgb: "2 132 199", hsl: "200 98% 39%" },
      { weight: 700, hex: "#0369a1", rgb: "3 105 161", hsl: "201 96% 32%" },
      { weight: 800, hex: "#075985", rgb: "7 89 133", hsl: "201 90% 27%" },
      { weight: 900, hex: "#0c4a6e", rgb: "12 74 110", hsl: "202 80% 24%" },
      { weight: 950, hex: "#082f49", rgb: "8 47 73", hsl: "204 80% 16%" },
    ],
  },
  {
    name: "blue",
    colors: [
      { weight: 50, hex: "#eff6ff", rgb: "239 246 255", hsl: "214 100% 97%" },
      { weight: 100, hex: "#dbeafe", rgb: "219 234 254", hsl: "214 95% 93%" },
      { weight: 200, hex: "#bfdbfe", rgb: "191 219 254", hsl: "213 97% 87%" },
      { weight: 300, hex: "#93c5fd", rgb: "147 197 253", hsl: "212 96% 78%" },
      { weight: 400, hex: "#60a5fa", rgb: "96 165 250", hsl: "213 93% 68%" },
      { weight: 500, hex: "#3b82f6", rgb: "59 130 246", hsl: "217 91% 60%" },
      { weight: 600, hex: "#2563eb", rgb: "37 99 235", hsl: "221 83% 53%" },
      { weight: 700, hex: "#1d4ed8", rgb: "29 78 216", hsl: "224 76% 48%" },
      { weight: 800, hex: "#1e40af", rgb: "30 64 175", hsl: "226 71% 40%" },
      { weight: 900, hex: "#1e3a8a", rgb: "30 58 138", hsl: "224 64% 33%" },
      { weight: 950, hex: "#172554", rgb: "23 37 84", hsl: "226 62% 21%" },
    ],
  },
  {
    name: "indigo",
    colors: [
      { weight: 50, hex: "#eef2ff", rgb: "238 242 255", hsl: "226 100% 97%" },
      { weight: 100, hex: "#e0e7ff", rgb: "224 231 255", hsl: "226 100% 94%" },
      { weight: 200, hex: "#c7d2fe", rgb: "199 210 254", hsl: "228 96% 89%" },
      { weight: 300, hex: "#a5b4fc", rgb: "165 180 252", hsl: "230 87% 82%" },
      { weight: 400, hex: "#818cf8", rgb: "129 140 248", hsl: "234 89% 74%" },
      { weight: 500, hex: "#6366f1", rgb: "99 102 241", hsl: "239 84% 67%" },
      { weight: 600, hex: "#4f46e5", rgb: "79 70 229", hsl: "243 75% 59%" },
      { weight: 700, hex: "#4338ca", rgb: "67 56 202", hsl: "245 58% 51%" },
      { weight: 800, hex: "#3730a3", rgb: "55 48 163", hsl: "244 55% 41%" },
      { weight: 900, hex: "#312e81", rgb: "49 46 129", hsl: "242 47% 34%" },
      { weight: 950, hex: "#1e1b4b", rgb: "30 27 75", hsl: "244 39% 20%" },
    ],
  },
  {
    name: "violet",
    colors: [
      { weight: 50, hex: "#f5f3ff", rgb: "245 243 255", hsl: "250 100% 98%" },
      { weight: 100, hex: "#ede9fe", rgb: "237 233 254", hsl: "251 91% 95%" },
      { weight: 200, hex: "#ddd6fe", rgb: "221 214 254", hsl: "251 95% 92%" },
      { weight: 300, hex: "#c4b5fd", rgb: "196 181 253", hsl: "252 87% 85%" },
      { weight: 400, hex: "#a78bfa", rgb: "167 139 250", hsl: "255 86% 76%" },
      { weight: 500, hex: "#8b5cf6", rgb: "139 92 246", hsl: "258 90% 66%" },
      { weight: 600, hex: "#7c3aed", rgb: "124 58 237", hsl: "262 83% 58%" },
      { weight: 700, hex: "#6d28d9", rgb: "109 40 217", hsl: "263 70% 50%" },
      { weight: 800, hex: "#5b21b6", rgb: "91 33 182", hsl: "263 69% 42%" },
      { weight: 900, hex: "#4c1d95", rgb: "76 29 149", hsl: "263 61% 35%" },
      { weight: 950, hex: "#2e1065", rgb: "46 16 101", hsl: "261 73% 23%" },
    ],
  },
  {
    name: "purple",
    colors: [
      { weight: 50, hex: "#faf5ff", rgb: "250 245 255", hsl: "270 100% 98%" },
      { weight: 100, hex: "#f3e8ff", rgb: "243 232 255", hsl: "269 100% 95%" },
      { weight: 200, hex: "#e9d5ff", rgb: "233 213 255", hsl: "269 100% 92%" },
      { weight: 300, hex: "#d8b4fe", rgb: "216 180 254", hsl: "267 85% 85%" },
      { weight: 400, hex: "#c084fc", rgb: "192 132 252", hsl: "270 95% 75%" },
      { weight: 500, hex: "#a855f7", rgb: "168 85 247", hsl: "271 81% 65%" },
      { weight: 600, hex: "#9333ea", rgb: "147 51 234", hsl: "271 76% 56%" },
      { weight: 700, hex: "#7e22ce", rgb: "126 34 206", hsl: "272 72% 47%" },
      { weight: 800, hex: "#6b21a8", rgb: "107 33 168", hsl: "272 67% 39%" },
      { weight: 900, hex: "#581c87", rgb: "88 28 135", hsl: "273 61% 32%" },
      { weight: 950, hex: "#3b0764", rgb: "59 7 100", hsl: "274 87% 21%" },
    ],
  },
  {
    name: "fuchsia",
    colors: [
      { weight: 50, hex: "#fdf4ff", rgb: "253 244 255", hsl: "289 100% 98%" },
      { weight: 100, hex: "#fae8ff", rgb: "250 232 255", hsl: "287 100% 95%" },
      { weight: 200, hex: "#f5d0fe", rgb: "245 208 254", hsl: "288 96% 91%" },
      { weight: 300, hex: "#f0abfc", rgb: "240 171 252", hsl: "291 93% 83%" },
      { weight: 400, hex: "#e879f9", rgb: "232 121 249", hsl: "292 84% 73%" },
      { weight: 500, hex: "#d946ef", rgb: "217 70 239", hsl: "292 76% 61%" },
      { weight: 600, hex: "#c026d3", rgb: "192 38 211", hsl: "293 69% 49%" },
      { weight: 700, hex: "#a21caf", rgb: "162 28 175", hsl: "295 72% 40%" },
      { weight: 800, hex: "#86198f", rgb: "134 25 143", hsl: "295 70% 33%" },
      { weight: 900, hex: "#701a75", rgb: "112 26 117", hsl: "297 61% 28%" },
      { weight: 950, hex: "#4a044e", rgb: "74 4 78", hsl: "297 90% 16%" },
    ],
  },
  {
    name: "pink",
    colors: [
      { weight: 50, hex: "#fdf2f8", rgb: "253 242 248", hsl: "327 73% 97%" },
      { weight: 100, hex: "#fce7f3", rgb: "252 231 243", hsl: "326 78% 95%" },
      { weight: 200, hex: "#fbcfe8", rgb: "251 207 232", hsl: "326 85% 90%" },
      { weight: 300, hex: "#f9a8d4", rgb: "249 168 212", hsl: "327 73% 82%" },
      { weight: 400, hex: "#f472b6", rgb: "244 114 182", hsl: "329 69% 70%" },
      { weight: 500, hex: "#ec4899", rgb: "236 72 153", hsl: "330 81% 60%" },
      { weight: 600, hex: "#db2777", rgb: "219 39 119", hsl: "333 71% 51%" },
      { weight: 700, hex: "#be185d", rgb: "190 24 93", hsl: "335 78% 42%" },
      { weight: 800, hex: "#9d174d", rgb: "157 23 77", hsl: "336 75% 35%" },
      { weight: 900, hex: "#831843", rgb: "131 24 67", hsl: "336 69% 30%" },
      { weight: 950, hex: "#500724", rgb: "80 7 36", hsl: "336 84% 17%" },
    ],
  },
  {
    name: "rose",
    colors: [
      { weight: 50, hex: "#fff1f2", rgb: "255 241 242", hsl: "356 100% 97%" },
      { weight: 100, hex: "#ffe4e6", rgb: "255 228 230", hsl: "356 100% 95%" },
      { weight: 200, hex: "#fecdd3", rgb: "254 205 211", hsl: "353 96% 90%" },
      { weight: 300, hex: "#fda4af", rgb: "253 164 175", hsl: "353 95% 82%" },
      { weight: 400, hex: "#fb7185", rgb: "251 113 133", hsl: "351 95% 71%" },
      { weight: 500, hex: "#f43f5e", rgb: "244 63 94", hsl: "350 89% 60%" },
      { weight: 600, hex: "#e11d48", rgb: "225 29 72", hsl: "347 77% 50%" },
      { weight: 700, hex: "#be123c", rgb: "190 18 60", hsl: "345 82% 41%" },
      { weight: 800, hex: "#9f1239", rgb: "159 18 57", hsl: "343 81% 35%" },
      { weight: 900, hex: "#881337", rgb: "136 19 55", hsl: "341 75% 30%" },
      { weight: 950, hex: "#4c0519", rgb: "76 5 25", hsl: "337 87% 16%" },
    ],
  },
];

// Utility functions for working with colors
export const getColorByName = (name: ColorName): ColorFamily | undefined => {
  return colorPalette.find((color) => color.name === name);
};

export const getColorByWeight = (
  name: ColorName,
  weight: ColorWeight
): ColorValue | undefined => {
  const colorFamily = getColorByName(name);
  return colorFamily?.colors.find((color) => color.weight === weight);
};

export const getColorHex = (
  name: ColorName,
  weight: ColorWeight
): string | undefined => {
  return getColorByWeight(name, weight)?.hex ?? "#000";
};

export const getColorNames = (): ColorName[] => {
  return colorPalette.map((color) => color.name);
};

export const getColorWeights = (name: ColorName): ColorWeight[] => {
  const colorFamily = getColorByName(name);
  return colorFamily?.colors.map((color) => color.weight) || [];
};

// Get all colors as a flat array with name and weight
export const getAllColors = (): Array<{
  name: ColorName;
  weight: ColorWeight;
  hex: string;
  rgb: string;
  hsl: string;
}> => {
  return colorPalette.flatMap((family) =>
    family.colors.map((color) => ({
      name: family.name,
      ...color,
    }))
  );
};
