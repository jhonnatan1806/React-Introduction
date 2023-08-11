import './App.css';
import Sidebar from './components/layout/Sidebar';
import About from './components/pages/About';
import Home from './components/pages/home';

function App() {
	return (
		<main>
            <Sidebar />
            <section className='ml-72'>
                <Home />
                <About />
            </section>
		</main>
	);
}

export default App;
