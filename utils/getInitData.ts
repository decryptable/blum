import { input } from "@inquirer/prompts";
import { type Ora } from "ora";
import { parseInitData } from "./parseInitData";

/**
 * Function to get init data from user input.
 *
 * @remarks
 * This function prompts the user to enter init data using the `input` function from `@inquirer/prompts`.
 * It then validates the input using the `parseInitData` function.
 * If the input is valid, it returns the parsed init data.
 * If the input is invalid, it prompts the user again until a valid input is provided.
 *
 * @returns {Promise<string>} - A promise that resolves with the parsed init data.
 */
const inputInitData = async () => {
  const initData = await input({
    message: "Enter your init data:",
    required: true,
    validate: (input) => {
      const parsedData = parseInitData(input);

      if (typeof parsedData !== "string") return "Invalid init data";

      if (parsedData?.length < 0) return "Invalid init data";

      return true;
    },
  });

  return parseInitData(initData);
};

/**
 * Function to get init data and handle the spinner.
 *
 * @remarks
 * This function stops the provided spinner, calls `inputInitData` to get the init data,
 * and then starts the spinner again.
 *
 * @param {Ora} spinner - The spinner to be used for indicating progress.
 *
 * @returns {Promise<string>} - A promise that resolves with the parsed init data.
 */
const getInitData = async (spinner: Ora): Promise<string> => {
  spinner.stop();

  const initData = await inputInitData();

  spinner.start();

  return initData;
};

export default getInitData;
