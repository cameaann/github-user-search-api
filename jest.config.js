module.exports = {
	transform: {
	  "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
	},
	transformIgnorePatterns: [
	  "/node_modules/(?!(usehooks-ts)/)", // Add any other ESM libraries here
	],
	testEnvironment: "jsdom",
  };
