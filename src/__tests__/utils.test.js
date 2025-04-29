import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const birthYear = 1984;
    const expectedAge = new Date().getFullYear() - birthYear;

    // Act
    const age = currentAgeForBirthYear(birthYear);

    // Assert
    expect(age).toBe(expectedAge);
  });

  it("returns the current year for a person born in year 0", () => {
    // Arrange
    const birthYear = 0;
    const expectedAge = new Date().getFullYear();

    // Act
    const age = currentAgeForBirthYear(birthYear);

    // Assert
    expect(age).toBe(expectedAge);
  });
});
