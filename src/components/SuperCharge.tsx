export default function SuperCharge() {
  return (
    <div className="flexCenter mx-auto max-w-6xl flex-col gap-5 font-bai">
      <h1 className="text-5xl">Supercharge your workflow</h1>
      <p className="max-w-3xl text-base font-medium text-gray-400 md:text-center">
        We’ve got the tools to boost your productivity.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="flexCenter max-w-xs flex-col gap-5">
          <img
            src="public/icon-blacklist.svg"
            alt="blacklist icon"
            className="mb-1 h-10 w-10"
          />
          <h2> Create blacklists</h2>
          <p className="max-w-3xl text-center text-base font-medium text-gray-400">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>

        {/* second column */}
        <div className="flexCenter max-w-xs flex-col gap-5">
          <img
            src="public/icon-text.svg"
            alt="blacklist icon"
            className="mb-1 h-10 w-10"
          />
          <h2> Plain text snippets</h2>
          <p className="max-w-3xl text-center text-base font-medium text-gray-400">
            Remove unexpected formatting from copied text for a consistent look.
          </p>
        </div>
        {/* third column */}
        <div className="flexCenter max-w-xs flex-col gap-5">
          <img
            src="public/icon-preview.svg"
            alt="blacklist icon"
            className="mb-1 h-8 w-12"
          />
          <h2> Sneak preview</h2>
          <p className="max-w-3xl text-center text-base font-medium text-gray-400">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
    </div>
  );
}
