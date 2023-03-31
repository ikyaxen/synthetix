type Props = {
  modes: string[];
  currentMode: string;
  changeCurrentMode: any;
};

function RenderModeIcon(props: { mode: string }) {
  let { mode } = props;
  if (mode == "text") {
    return <span className="material-symbols-rounded">article</span>;
  } else if (mode == "chat") {
    return <span className="material-symbols-rounded">chat</span>;
  } else {
    return <span className="material-symbols-rounded">image</span>;
  }
}

function NavBar(props: Props) {
  const { modes, currentMode, changeCurrentMode } = props;
  return (
    <div className="bg-slate-300 text-slate-600 h-full w-fit p-5 max-sm:py-2 max-sm:h-fit max-sm:w-full">
      <div className="flex sm:flex-col sm:gap-5 max-sm:justify-between max-sm:items-center">
        <a href="/" className="text-2xl font-medium uppercase flex items-center bg-white overflow-hidden rounded-xl">
          <img className="w-20 h-20" src="https://cdn.dribbble.com/userupload/3382007/file/original-ea69628de19037736ba1298829c6b44d.gif" alt="" />
          <span className="pr-5">Synthetix</span>
        </a>
        <nav>
          <ul className="grid gap-5 max-sm:grid-cols-3">
            {modes.map((mode, index) =>
              mode == currentMode ? (
                <li key={index}>
                  <button className="capitalize bg-slate-500 text-slate-200 w-full rounded-xl p-2 text-base shadow-md flex justify-center gap-2">
                    <RenderModeIcon mode={mode} />
                    <p className="max-sm:hidden">{mode}</p>
                  </button>
                </li>
              ) : (
                <li key={index}>
                  <button
                    onClick={() => changeCurrentMode(mode)}
                    className="capitalize bg-slate-200 w-full rounded-xl p-2 text-base flex justify-center gap-2"
                  >
                    <RenderModeIcon mode={mode} />
                    <p className="max-sm:hidden">{mode}</p>
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
