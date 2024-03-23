export function generateTwoFactorEmail(name: string, code: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Two-Factor Authentication Code</title>
      </head>
      <body
        style="
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          padding: 20px;
        "
      >
        <div
          style="
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          "
        >

          <h1 style="text-align: center; color: #333">Hi ${name}</h1>
          <h1 style="text-align: center; color: #333">Here is your Two-Factor Code for Sum AI login:</h1>

          <div style="text-align: center; margin-top: 16px; font-size: 44px; color: #333;">
            <strong>${code}</strong>
          </div>

          <p style="text-align: center; color: #666; margin-top: 16px;">
          Please use the code above to complete the two-factor authentication process. This code is valid for 5 minutes.
          </p>
        </div>
      </body>
    </html>
  `;
}
