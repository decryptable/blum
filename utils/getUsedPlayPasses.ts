import { number } from "@inquirer/prompts";
import { type Ora } from "ora";

/**
 * This function retrieves the number of used play passes from the user.
 * It stops the provided spinner, prompts the user for input, and then starts the spinner again.
 *
 * @param currentPlayPasses - The total number of available play passes.
 * @param spinner - The spinner to be stopped and started during the user input.
 * @returns A promise that resolves to the number of used play passes.
 *          If the user does not provide a valid input, the promise resolves to 0.
 */
const getUsedPlayPasses = async (
  currentPlayPasses: number,
  spinner: Ora
): Promise<number> => {
  spinner.stop();
  const usedPlayPasses = await number({
    message: "Enter the total tickets you want to use:",
    required: true,
    min: 1,
    max: currentPlayPasses,
  });

  spinner.start();

  return usedPlayPasses ?? 0;
};

export default getUsedPlayPasses;
