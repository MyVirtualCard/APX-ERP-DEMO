import { google } from "googleapis";

import credentials from "../credentials.json" with {
  type: "json",
};

const auth = new google.auth.GoogleAuth({
  credentials,

  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

export default auth;