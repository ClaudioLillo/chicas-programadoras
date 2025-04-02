import { describe, it } from "node:test";
import { equal } from "node:assert/strict";
import { organizeByAge, organizeByHobby, sumByAge } from "./challenge.js";
import { testData } from "./data.js";

describe("organizeByAge", () => {
	const resp = organizeByAge(testData);
	const keyList = Object.keys(resp);

	it("should obtain the correct keys", () => {
		equal(keyList.length, 5);
	});

	it("should group the correct amount of people by age", () => {
		equal(keyList["1"].length, 1);
		equal(keyList["2"].length, 3);
		equal(keyList["3"].length, 2);
		equal(keyList["4"].length, 1);
		equal(keyList["5"].length, 2);
	});
});

describe("organizeByHobby", () => {
	const resp = organizeByHobby(testData);
	const keyList = Object.keys(resp);

	it("should get correct amount of keys", () => {
		equal(keyList.length, 3);
	});

	it("should group the correct amount of people by hobby", () => {
		equal(resp["movies"].length, 5);
		equal(resp["photography"].length, 3);
		equal(resp["cars"].length, 2);
	});
});

describe("sumByAge", () => {
	const resp = sumByAge(testData);
	const keyList = Object.keys(resp);

	it("should obtain the correct keys", () => {
		equal(keyList.length, 5);
	});

	it("should group the correct sum of ages by age", () => {
		equal(keyList["1"], 1);
		equal(keyList["2"], 6);
		equal(keyList["3"], 6);
		equal(keyList["4"], 4);
		equal(keyList["5"], 10);
	});
});
