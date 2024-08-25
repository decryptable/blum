import { number } from "@inquirer/prompts";
import { type Ora } from "ora";


const getTargetPoints = async (
  spinner: Ora
): Promise<number> => {
  spinner.stop();
  const targetPoints = await number({
    message: "Enter the total points you want to earn for this game:",
    min: 1,
    max: 280,
    default: 280
  });

  spinner.start();

  return targetPoints ?? 280;
};

export default getTargetPoints;
