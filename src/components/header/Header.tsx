import type { PageInformation } from "../../pages/PageConfig";

interface HeaderProps {
  pages: PageInformation[];
}

function Header({ pages }: HeaderProps) {
  const appTitle = "Job Skill Analyzer";

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-extrabold text-indigo-700">
            {appTitle}
          </div>
          <ul className="flex items-center gap-6">
            {pages.map((page) => {
              return (
                <>
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 rounded-lg font-semibold text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 transition"
                    >
                      {page.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
