import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Skills} from './layout/sections/skills/Skills';
import {Projects} from './layout/sections/projects/Projects';
import {Contact} from './layout/sections/contact/Contact';
import {Footer} from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
