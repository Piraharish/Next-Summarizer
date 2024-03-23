export function generateActivationEmail(name: string, url: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Activation Email</title>
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
          <h1 style="text-align: center; color: #333">Welcome to Sum AI</h1>

          <p style="text-align: center; color: #666">
            Thank you for signing up. To activate your account, please click the
            button below:
          </p>

          <div style="text-align: center; margin-top: 20px">
            <a
              href="${url}"
              style="
                display: inline-block;
                background-color: #000;
                color: #fff;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
              "
              >Activate Account</a
            >
          </div>

          <p style="text-align: center; color: #666; margin-top: 20px">
            If you didn't create an account with us, please ignore this email.
          </p>
        </div>
      </body>
    </html>
  `;
}
