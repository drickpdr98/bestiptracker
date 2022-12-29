import { AJAX } from "./helpers";
import { AJAXISP } from "./helpers";
import { API_URL } from "./ config";
import { API_KEY } from "./ config";
import { GOOGLE_API_URL } from "./ config";
import { GOOGLE_API_KEY } from "./ config";

export const state = {
  ip: {},
};

export const ipAddress = function (ip) {
  return ip;
};

export const getIp = async function (ipAddress) {
  const getLocation = await AJAX(API_URL, ipAddress);

  state.ip = {
    ip: getLocation.ip,
    ipVersion: getLocation.version,
    ispProvider: getLocation.org,
    timezone: getLocation.timezone,
    zipcode: getLocation.postal,
    city: getLocation.city,
    latitude: getLocation.latitude,
    longitude: getLocation.longitude,
    country: getLocation.country_name,
    continent: getLocation.continent_code,
  };
};
