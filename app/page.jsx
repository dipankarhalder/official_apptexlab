"use client";

export default function Home() {
  return (
    <>
      <div className="page">
        <main className="main">
          <div className="intro">
            <h1>To get started, edit the page.js file.</h1>
          </div>
        </main>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .main {
          text-align: center;
        }
        .intro h1 {
          color: blue;
        }
      `}</style>
    </>
  );
}
