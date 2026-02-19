export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              About WorkFox
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Building the future of decentralized work, one task at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                WorkFox is revolutionizing the freelance economy by leveraging blockchain technology to create a transparent, secure, and efficient marketplace for digital work.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe in empowering individuals worldwide to connect, collaborate, and transact without intermediaries, reducing costs and increasing trust through smart contracts.
              </p>
              <p className="text-lg text-gray-600">
                Built on the Algorand blockchain, we provide instant, low-cost transactions while maintaining the highest standards of security and decentralization.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-white/80">Decentralized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">0%</div>
                    <div className="text-white/80">Platform Fees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">&lt;3s</div>
                    <div className="text-white/80">Transaction Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-white/80">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔒',
                title: 'Trust & Security',
                description: 'Smart contracts ensure transparent and secure transactions for all parties.',
              },
              {
                icon: '🌍',
                title: 'Global Accessibility',
                description: 'Breaking down barriers to enable worldwide collaboration and opportunity.',
              },
              {
                icon: '⚡',
                title: 'Innovation',
                description: 'Continuously improving and adopting cutting-edge blockchain technology.',
              },
              {
                icon: '🤝',
                title: 'Fair Compensation',
                description: 'Ensuring freelancers receive full payment without hidden fees or delays.',
              },
              {
                icon: '🎯',
                title: 'Transparency',
                description: 'All transactions and agreements are recorded on the blockchain.',
              },
              {
                icon: '💡',
                title: 'Empowerment',
                description: 'Giving control back to freelancers and clients through decentralization.',
              },
            ].map((value, i) => (
              <div key={i} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            Powered by Algorand
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We chose Algorand for its speed, security, and sustainability
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Transaction Speed', value: '< 3 seconds' },
              { label: 'Transaction Cost', value: '~$0.001' },
              { label: 'Carbon Negative', value: 'Yes' },
              { label: 'Finality', value: 'Instant' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're building the future of work. Be part of the revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              View on GitHub
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
