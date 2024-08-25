export interface RequestLogin {
  query: string;
}

export interface ResponseLogin {
  token: Token;
  justCreated: boolean;
}

export interface Token {
  access: string;
  refresh: string;
  user: User;
}

export interface User {
  id: ID;
  username: string;
  avatarFileKey: string;
}

export interface ID {
  id: string;
}

/**
 * This function is responsible for logging in a user using a specific login method.
 * It sends a POST request to the specified endpoint with the provided `initData` as the request body.
 * The function expects a JSON response containing a `ResponseLogin` object.
 *
 * @param initData - A string representing the initial data required for the login process.
 * @returns A Promise that resolves to a `ResponseLogin` object if the login is successful.
 *          If the login fails, the Promise will reject with an error message.
 *
 * @throws Will throw an error if the HTTP response status is not 200.
 * @throws Will throw an error if there is an error during the fetch or JSON parsing process.
 */
const userLogin = async (initData: string): Promise<ResponseLogin> => {
  try {
    const response = await fetch(
      "https://gateway.blum.codes/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP",
      {
        body: JSON.stringify(<RequestLogin>{
          query: initData,
        }),
        method: "POST",
      }
    );

    if (response.status !== 200)
      throw new Error(
        `Error when login with code: ${response.status} - ${response.statusText}`
      );

    const data = await response.json();

    return <ResponseLogin>data;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

export default userLogin;
