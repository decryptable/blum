export interface BalanceResponse {
  availableBalance: string;
  playPasses: number;
  isFastFarmingEnabled: boolean;
  timestamp: number;
}

/**
 * Retrieves the user's balance and play passes from the game's API.
 *
 * @param authToken - The user's authentication token.
 * @returns A Promise that resolves to a {@link BalanceResponse} object containing the user's balance, play passes,
 *          fast farming status, and timestamp.
 * @throws Will throw an error if the API request fails or returns a non-200 status code.
 */
const getBalance = async (authToken: string): Promise<BalanceResponse> => {
  try {
    const response = await fetch(
      "https://game-domain.blum.codes/api/v1/user/balance",
      {
        headers: {
          authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json"
        },
        method: "GET",
      }
    );

    if (response.status !== 200)
      throw new Error(
        `Error when getting balance & play passes with code: ${response.status} - ${response.statusText}`
      );

    const data = await response.json();

    return <BalanceResponse>data;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

export default getBalance;
