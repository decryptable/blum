import queryString from "query-string";

/**
 * Parses the initial data string and returns a specific value based on certain conditions.
 *
 * @param initData - The initial data string to be parsed.
 * @returns A string value based on the parsed data. If the "tgWebAppData" key is present and its value is a string, it is returned.
 *          If no "tgWebAppData" key is found, the function looks for a key with a length greater than 50 and returns the first one found.
 *          If any error occurs during parsing, an empty string is returned.
 */
export const parseInitData = (initData: string): string => {
  try {
    const parsed = queryString.parse(initData);
    const keys = Object.keys(parsed);

    if (keys.includes("tgWebAppData")) {
      if (typeof parsed.tgWebAppData === "string") {
        return parsed.tgWebAppData;
      } else {
        return "";
      }
    }

    const init_data = keys.filter((key) => key.length > 50)[0];

    return init_data;
  } catch (error) {
    return "";
  }
};
