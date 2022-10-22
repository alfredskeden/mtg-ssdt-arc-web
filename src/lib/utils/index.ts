export const requiredText = "This is required";

export type FormValuesStrings = "name" | "email";

export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
