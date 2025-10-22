export default async function handler(req, res) {
  if (req.method === 'POST') {
    const recaptchaToken = req.body;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const verificationURrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    try {
      const response = await fetch(verificationURrl, { method: 'POST' });
      const data = await response.json();

      if (data.success) {
        res.status(200).json({ success: true, message: 'reCAPTCHA verified' });
      } else {
        res
          .status(400)
          .json({ success: false, message: 'reCAPTCHA verification failed' });
      }
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
