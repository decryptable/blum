import chalk from "chalk";
import clear from "console-clear";
import ora, { type Ora } from "ora";
import claimGamePoint from "./utils/claimGamePoint";
import getBalance from "./utils/getBalance";
import getGameId from "./utils/getGameId";
import getInitData from "./utils/getInitData";
import getTargetPoints from "./utils/getTargetPoints";
import getUsedPlayPasses from "./utils/getUsedPlayPasses";
import userLogin from "./utils/userLogin";

const spinner = ora(chalk.gray("Starting..."));
spinner.start();

interface User {
  username: string;
  balance: number;
  playPasses: number;
  token: string;
}

const sleep1s = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

const showAccountInfo = (spinner: Ora, user: User) => {
  clear();

  let msg = chalk.yellow("Account info:\n");

  msg += chalk.green.bold("Username: ") + chalk.greenBright(user.username);
  msg += "\n";
  msg +=
    chalk.green.bold("Balance: ") +
    chalk.greenBright(Intl.NumberFormat("en-US").format(user.balance));
  msg += "\n";
  msg += chalk.green.bold("Play passes: ") + chalk.greenBright(user.playPasses);
  msg += "\n";

  if (user.playPasses === 0) {
    msg += chalk.red.bold("You don't have any play passes.");
    spinner.succeed(msg);
    process.exit(0);
  }

  spinner.info(msg).start(chalk.gray("Setting up play passes..."));
};

const showBanner = () => {
  clear();
  const programName = chalk.greenBright("BLUM AUTO-PLAY\n");
  const version = chalk.greenBright("2.0.0-release\n");
  const author = chalk.greenBright("@decryptable\n");
  const source = chalk.greenBright.underline("https://discord.gg/ueCy4vyJ4y\n\n");

  const note = chalk.yellowBright(
    `Interested in supporting me through donations? You can send it through ${chalk.greenBright.underline(
      "https://saweria.co/decryptable"
    )}.\n\n\n`
  );

  const msg = chalk.yellow("Program Name:") + programName +
  chalk.yellow("Version:") + version +
  chalk.yellow("Author:") + author +
  chalk.yellow("Source:") + source +
  note

  console.log(
    msg
  );
};

const main = async () => {
  try {
    showBanner();

    const init_data = await getInitData(spinner);

    spinner.text = chalk.gray("Validating init data...");

    const userData = await userLogin(init_data);

    spinner.text = chalk.gray("Getting balance & play passes...");

    const balanceData = await getBalance(userData.token.access);

    let user: User = {
      username: userData.token.user.username,
      balance: parseInt(balanceData.availableBalance),
      playPasses: balanceData.playPasses,
      token: userData.token.access,
    };

    showAccountInfo(spinner, user);

    const usedPlayPasses = await getUsedPlayPasses(user.playPasses, spinner);

    if (usedPlayPasses === 0) {
      spinner.fail(chalk.redBright("No play passes available"));
      return;
    }

    spinner.info(
      chalk.greenBright(`Using ${chalk.bold(usedPlayPasses)} play passes`)
    );

    // for loop for each play pass
    for (
      let currentTicket = 0;
      currentTicket < usedPlayPasses;
      currentTicket++
    ) {
      try {
        const targetPoints = await getTargetPoints(spinner);

        spinner
          .info(chalk.magentaBright(`Game ${currentTicket + 1} played`))
          .start(chalk.gray("Wait 3 seconds before continuing..."));

        for (let s = 0; s <= 3; s++) {
          await sleep1s();
          spinner.text = chalk.gray(
            `Wait ${3 - s} seconds before continuing...`
          );
        }

        spinner.text = chalk.yellow("Playing game...");

        const gameId = await getGameId(user.token);

        // wait 32 seconds before claiming
        for (let s = 0; s <= 32; s++) {
          spinner.text = chalk.yellow(
            `Wait ${33 - s} seconds before claiming points...`
          );

          if (s === 30 || s === 20 || s === 10) {
            getBalance(user.token);
          }

          await sleep1s();
        }

        spinner.text = chalk.yellow("Claiming points...");

        await claimGamePoint(user.token, gameId.gameId, targetPoints);

        const currentBalance = await getBalance(user.token);

        user = {
          username: user.username,
          balance: parseInt(currentBalance.availableBalance),
          playPasses: currentBalance.playPasses,
          token: user.token,
        };
        showAccountInfo(spinner, user);

        spinner.succeed(
          chalk.greenBright(
            `Successfully claimed ${chalk.underline(
              targetPoints
            )} points for the game with ID: ${chalk.underline(gameId.gameId)}`
          )
        );
      } catch (error) {
        spinner.fail(
          chalk.redBright("Error: ") + chalk.yellow((error as any).message)
        );
        continue;
      }
    }
  } catch (error) {
    spinner.fail(
      chalk.redBright("Error: ") + chalk.yellow((error as any).message)
    );
  }
};

main();
