export const requiredText = "This is required";

export type FormValuesStrings = "First name" | "Last name" | "Email" | "Phone";
export type FormValuesTypes = "firstName" | "lastName" | "email" | "phone";

export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
