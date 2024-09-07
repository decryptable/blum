export interface GameIDResponse {
  gameId: string;
}

/**
 * This function is responsible for making a POST request to the game server to generate a new game ID.
 *
 * @param authToken - The authentication token required for the request.
 * @returns A Promise that resolves to a {@link GameIDResponse} object containing the generated game ID.
 * @throws Will throw an error if the request fails or if the server returns a non-200 status code.
 *
 * @example
 * ```typescript
 * const authToken = "your_authentication_token";
 * getGameId(authToken)
 *   .then((response) => {
 *     console.log("Generated game ID:", response.gameId);
 *   })
 *   .catch((error) => {
 *     console.error("Error generating game ID:", error.message);
 *   });
 * ```
 */
const getGameId = async (authToken: string) => {
  try {
    const response = await fetch(
      "https://game-domain.blum.codes/api/v1/game/play",
      {
        headers: {
          authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        method: "POST",
      }
    );

    if (response.status !== 200)
      throw new Error(
        `Error when generating game ID with code: ${response.status} - ${response.statusText}`
      );

    const data = await response.json();

    return <GameIDResponse>data;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

export default getGameId;
