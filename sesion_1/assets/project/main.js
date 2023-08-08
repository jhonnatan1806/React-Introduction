function App() {

    return (
        <div className="flex flex-col p-4 gap-4 max-w-300 rounded-md bg-slate-50">
            <div className="flex gap-4">
                <img src="http://placekitten.com/48/48" alt="profile" className="rounded-full"/>
                <h1 className="text-base">@jhonnatanER</h1>
            </div>
            <img src="http://placekitten.com/300/300" alt="imagen" className="rounded-md"/>
            <button className="w-fit-content text-red-500">&#10084;</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum nisl at ipsum tincidunt malesuada ...</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

