import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Main content section (2/3) */}
          <Main />

          {/* Sidebar section (1/3) */}
          <div className="w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className='border-b-4 border-b-black-800 border-t-4 border-t-black-800 py-4'>
                Bio in brief: Prof. Arpan K. Kar is Professor and Endowed Chair Professor in Information Systems in Indian Institute of Technology Delhi, India. Administratively he chairs Information Systems group and Corporate Affairs, and is a member of few other administrative committees. He works on the adoption, appropriation and user experiences of emerging ICTs, using mixed research and ML based methods. He has authored over 200 publications and edited 15 books, of which over 90 publications are ABDC A, ABS 3 and WoS Q1 level journals, and 17 publications are in ABDC A* journals. As of 2024, his research has been cited over 20,000 times with an H index of 65. He is an Associate Editor in Communications of the AIS (ABDC A), Journal of Computer Information Systems (ABDC A), Global Journal of Flexible Systems Management (ABDC A), Applied Operations and Analytics (T&F), International Journal of Electronic Government Research (IGI), etc. He has been a Guest Editor for top journals like Journal of the Association for Information Systems, Decision Support Systems, Industrial Marketing Management, International Journal of Information Management, Information Systems Frontiers, etc. He was the Founding Editor in Chief of International Journal of Information Management Data Insights, published by Elsevier. He was earlier Senior Editor in Decision Support Systems, Associate Editor in International Journal of Information Management, Journal of Public Affairs and Sage Open. He has undertaken over 25 sponsored projects from national and international organizations and over 20 long duration executive education programmes. He received the Research Excellence Award by Clarivate Analytics for highest individual Web of Science citations from 2015-2020. He received the 2020 BK Birla Distinguished Researcher Award for the count of ABDC A* publications over 5 years. He has received three Best Seller Awards from Ivey / Harvard / Case Center his authored teaching cases. He has received over 20 other awards for his research, teaching and services from national and international organizations.


              </div>
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