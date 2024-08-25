/**
 * Claims game points for a specific game using the provided authentication token.
 *
 * @param authToken - The authentication token for the user claiming the points.
 * @param gameId - The ID of the game for which the points are being claimed.
 *
 * @throws Will throw an error if the claiming process fails, including HTTP errors.
 *
 * @returns Returns `true` if the points are successfully claimed, otherwise throws an error.
 */
const claimGamePoint = async (
  authToken: string,
  gameId: string,
  totalPoints: number = 280
) => {
  try {
    const response = await fetch(
      "https://game-domain.blum.codes/api/v1/game/claim",
      {
        headers: {
          authorization: `Bearer ${authToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          gameId,
          points: totalPoints,
        }),
        method: "POST",
      }
    );

    if (response.status !== 200)
      throw new Error(
        `Error when claiming point with game ID: ${gameId} with code: ${response.status} - ${response.statusText}`
      );

    return true;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

export default claimGamePoint;
