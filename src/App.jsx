import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import AxolotlsSlider from './components/AxolotlsSlider';
import AxolotlsClasses from './components/AxolotlsClasses';
import Roadmap from './components/Roadmap';
import JoinOurCommunity from './components/JoinOurCommunity';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Lore from "./components/Lore";
import Notes from './components/Notes';

function App() {

  const [page, setPage] = useState('main');

  const [isLorePage, setIsLorePage] = useState(false);
  const [classesPage, setIsClassesPage] = useState(false);
  const [notesPage, setIsNotesPage] = useState(false);

  useEffect(() => {
    isLorePage && setPage('lore');
    classesPage && setPage('classes');
    notesPage && setPage('notes');
    !isLorePage && !classesPage && !notesPage && setPage('main');
  }, [isLorePage, classesPage, notesPage])

  const mainContent = <>
    <Main />
    <AxolotlsSlider />
    <Roadmap />
    <JoinOurCommunity />
    <Faq />
  </>

  const loreContent = <Lore />;

  const classesContent = <AxolotlsClasses />

  const notesContent = <Notes />;

  let content;
  switch (page) {
    case 'main': {
      content = mainContent;
      break;
    }
    case 'lore': {
      content = loreContent;
      break;
    }
    case 'classes': {
      content = classesContent;
      break;
    }
    case 'notes': {
      content = notesContent;
      break;
    }
    default: {
      content = mainContent;
      break;
    }
  }

  return (
    <div className="App">
      <Header setIsLorePage={setIsLorePage} isLorePage={isLorePage} classesPage={classesPage} setIsClassesPage={setIsClassesPage} page={page} notesPage={notesPage} setIsNotesPage={setIsNotesPage} />
      <main>
        { content }
      </main>
      <Footer />
    </div>
  )
}

export default App
