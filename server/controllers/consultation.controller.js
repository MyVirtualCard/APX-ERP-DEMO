import { google } from "googleapis";
import auth from "../config/googleSheet.js";

export const consultationController = async (
  req,
  res
) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      businessType,
      challenges,
    } = req.body;

    /* VALIDATION */

    if (
      !fullName ||
      !companyName ||
      !email ||
      !phone
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields needed",
      });
    }

    const client = await auth.getClient();

    const googleSheets = google.sheets({
      version: "v4",
      auth: client,
    });

    await googleSheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,

      range: "Sheet1!A:G",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            fullName,
            companyName,
            email,
            phone,
            businessType,
            challenges,
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    return res.status(200).json({
      success: true,
      message: "Lead stored successfully",
    });
  } catch (error) {

  console.log(error);

  return res.status(500).json({
    success: false,

    message: error.message,
  });
}
};