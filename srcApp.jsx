import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Head() {
  return (
    <header className="head">
      <nav>
        <Link to="/news">Новости</Link>
        <Link to="/about">О проекте</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}

function Section() {
  return (
    <section className="section">
      <img src="https://после-уроков.рф/wp-content/uploads/2022/08/bilet.jpg" alt="Пример" />
    </section>
  );
}

function Article() {
  return (
    <article className="article">
      <Outlet />
    </article>
  );
}

function Aside() {
  return (
    <aside className="aside">
      <p>Кудинов Владислав Александрович</p>
    </aside>
  );
}

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {date} — Кудинов Владислав Александрович</p>
    </footer>
  );
}

function News() {
  return (
    <>
      <h1>Новости дня</h1>
      <p>Сегодня отличная погода и много возможностей для развития.</p>
    </>
  );
}

function About() {
  return <h1>Южный федеральный университет</h1>;
}

function Contacts() {
  return <h1>+7 (999) 123-45-67</h1>;
}

function NotFound() {
  return <h1>Ошибка 404: страница не найдена</h1>;
}

function Main() {
  return (
    <main className="main">
      <Section />
      <Article>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Article>
      <Aside />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Head />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;