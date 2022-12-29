export const AJAX = async function (url, ipAddress) {
  try {
    const response = await fetch(`${url}${ipAddress}/json/`);

    if (!response.ok) {
      throw new error("Cannot find that IP Address. Please try again.");
    }

    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
