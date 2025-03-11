import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Main content section (2/3) */}
          <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Main Content</h2>
            <div className="flow-root">
              <img
                src="https://picsum.photos/400/300"
                alt="Sample image"
                className="float-left mr-6 mb-4 rounded-lg"
              />
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-700 mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-gray-700">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>

          {/* Sidebar section (1/3) */}
          <div className="w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Updates</h3>
              <ul className="space-y-4">
                <li className="border-b pb-2">
                  <h4 className="font-medium text-gray-800">New Feature Release</h4>
                  <p className="text-sm text-gray-600">Exciting new capabilities added to the platform</p>
                </li>
                <li className="border-b pb-2">
                  <h4 className="font-medium text-gray-800">Community Spotlight</h4>
                  <p className="text-sm text-gray-600">Meet our most active contributors</p>
                </li>
                <li>
                  <h4 className="font-medium text-gray-800">Upcoming Events</h4>
                  <p className="text-sm text-gray-600">Mark your calendar for these special dates</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-blue-600 hover:text-blue-800">Documentation</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Resources</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Support</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Community</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;