"use strict";

const colors = {
  foreground: "#a2aabc",
  background: "#1d2433",
  cursor: "#cfbafa",
  cursorAccent: "#cfbafa",
  selection: "rgba(38, 51, 76, 0.2)",
  border: "#171c28",
};

const terminalColors = {
  black: "#2f3b54",
  blue: "#b8c5e2",
  cyan: "#b8c5e2",
  green: "#c4dea0",
  magenta: "#cfbafa",
  red: "#ef6b73",
  white: "#a2aabc",
  yellow: "#ffdd99",
  lightBlue: "#b8c5e2",
  lightCyan: "#b8c5e2",
  lightGreen: "#c4dea0",
  lightBlack: "#444a5e",
  lightMagenta: "#cfbafa",
  lightRed: "#ef6b73",
  lightWhite: "#a2aabc",
  lightYellow: "#ffdd99",
};

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor: colors.background,
    foregroundColor: colors.foreground,
    borderColor: colors.border,
    cursorColor: colors.cursor,
    cursorAccentColor: colors.cursorAccent,
    selectionColor: colors.selection,
    colors: terminalColors,
    css: `
		/* Hide title when only one tab */
		.tabs_title {
      display: none !important;
    }
    .tab_tab {
      background-color: ${colors.border};
    }
    .tab_tab.tab_active {
      background: ${colors.background};
    }
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
      opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
      opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		/* Allow custom css / overrides */
		${config.css}
	`,
  });
