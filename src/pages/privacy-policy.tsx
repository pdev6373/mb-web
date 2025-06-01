export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Privacy Policy for MB EXCHANGE
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Effective Date: 5th June 2025
      </p>

      <p className="mb-6">
        At <span className="font-semibold">MB EXCHANGE</span>, your privacy is
        important to us. This Privacy Policy explains how we collect, use, and
        protect your personal information when you use our Android mobile
        application and services.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-medium">Personal Information:</span> Name,
            email address, phone number, bank account details (for payouts), and
            identification documents (for verification).
          </li>
          <li>
            <span className="font-medium">Transaction Data:</span>{' '}
            Cryptocurrency and gift card transactions, payment history, and
            wallet balances.
          </li>
          <li>
            <span className="font-medium">Device Information:</span> IP address,
            device type, operating system, and app usage data.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Process crypto and gift card transactions</li>
          <li>Verify identity and ensure security</li>
          <li>Provide customer support</li>
          <li>Improve app performance and user experience</li>
          <li>
            Comply with legal obligations (e.g. anti-money laundering laws)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
        <p>
          We use encryption, firewalls, and other security measures to protect
          your data. Access is limited to authorized personnel only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          4. Sharing of Information
        </h2>
        <p className="mb-2">
          We do not sell or rent your personal information. We may share data
          with trusted service providers or regulatory authorities only when
          necessary to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Process transactions</li>
          <li>Detect and prevent fraud</li>
          <li>Comply with legal requirements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <p>
          You may access, correct, or delete your personal information at any
          time by contacting us at{' '}
          <a
            href="mailto:info@mbexchangehub.com"
            className="text-blue-600 underline"
          >
            info@mbexchangehub.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
        <p>
          Our app may contain links to external websites or services. We are not
          responsible for their privacy practices. Always read their policies
          before sharing your data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Updates</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of
          any material changes through the app or via email.
        </p>
      </section>
    </div>
  );
}
