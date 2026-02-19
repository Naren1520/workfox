export default function Developers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Developer Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Build on WorkFox with our comprehensive APIs and smart contracts
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  npm install @algorand/algosdk<br />
                  npm install @perawallet/connect
                </code>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect Wallet</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  const peraWallet = new PeraWalletConnect();<br />
                  await peraWallet.connect();
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contract Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Smart Contract</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contract Methods</h3>
                <ul className="space-y-3">
                  {[
                    'create_task(title, description, deadline)',
                    'claim_task(task_id)',
                    'submit_work(task_id, proof_hash)',
                    'approve_task(task_id)',
                    'reject_task(task_id)',
                    'refund_task(task_id)',
                  ].map((method, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <code className="text-sm bg-white px-3 py-1 rounded">{method}</code>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Task States</h3>
                <div className="space-y-3">
                  {[
                    { state: 'OPEN', color: 'bg-green-100 text-green-800' },
                    { state: 'CLAIMED', color: 'bg-blue-100 text-blue-800' },
                    { state: 'SUBMITTED', color: 'bg-yellow-100 text-yellow-800' },
                    { state: 'APPROVED', color: 'bg-purple-100 text-purple-800' },
                    { state: 'REJECTED', color: 'bg-red-100 text-red-800' },
                    { state: 'REFUNDED', color: 'bg-gray-100 text-gray-800' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}>
                        {item.state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">API Reference</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'BountyBoard Class',
                description: 'Main interface for interacting with the smart contract',
                methods: ['getTask()', 'getAllTasks()', 'createTask()'],
              },
              {
                title: 'Task Management',
                description: 'Methods for managing task lifecycle',
                methods: ['claimTask()', 'submitWork()', 'approveTask()'],
              },
              {
                title: 'Utilities',
                description: 'Helper functions for common operations',
                methods: ['microToAlgo()', 'formatDeadline()', 'getStatusLabel()'],
              },
            ].map((section, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{section.description}</p>
                <ul className="space-y-2">
                  {section.methods.map((method, j) => (
                    <li key={j} className="text-sm text-indigo-600 font-mono">
                      • {method}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Example Usage</h2>
          <div className="bg-gray-800 rounded-xl p-8 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Initialize BountyBoard
import { BountyBoard } from './frontend-integration';
import contractInfo from './contract.json';

const bountyBoard = new BountyBoard(contractInfo);

// Get all tasks
const tasks = await bountyBoard.getAllTasks();

// Create a new task
const txns = await bountyBoard.createTask(
  senderAddress,
  "Build a Website",
  "Need a responsive landing page",
  10, // 10 ALGO bounty
  7   // 7 days deadline
);

// Sign and send transactions
const signedTxns = await peraWallet.signTransaction([txns]);
await algodClient.sendRawTransaction(signedTxns).do();`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'GitHub', icon: '📦', link: '#' },
              { title: 'Documentation', icon: '📚', link: '#' },
              { title: 'Discord', icon: '💬', link: '#' },
              { title: 'Algorand Docs', icon: '🔗', link: 'https://developer.algorand.org' },
            ].map((resource, i) => (
              <a
                key={i}
                href={resource.link}
                className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl mb-8">
            Join our developer community for support and collaboration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Discord
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-transparent border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              View Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
