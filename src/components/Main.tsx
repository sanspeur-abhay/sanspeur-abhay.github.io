const Main = () => {
  return (
    <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
    <div className="flow-root">
      <img
        src="https://picsum.photos/400/300"
        alt="Sample image"
        className="float-left mr-6 mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">
      Leading Expert in Environmental Engineering and Waste Management
      </p>
      <br/>
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
  );
};

export default Main; 