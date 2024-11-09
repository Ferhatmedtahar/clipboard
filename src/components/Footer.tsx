export default function Footer() {
  return (
    <div className="mx-auto flex max-w-6xl flex-row items-center justify-evenly gap-12 px-10 pb-6 pt-12 font-bai">
      <svg
        className="h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 125 125"
      >
        <g stroke="#26BBA4" strokeWidth="10" fill="none" fillRule="evenodd">
          <circle cx="62.5" cy="62.5" r="57.5" />
          <path
            d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <div className="grid grid-cols-2 gap-x-12 gap-y-2 md:grid-cols-3">
        <a
          href="#"
          className="max-w-3xl text-sm font-medium text-gray-400 md:text-base"
        >
          FAQs
        </a>
        <a
          href="#"
          className="max-w-3xl text-sm font-medium text-gray-400 md:text-base"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="max-w-3xl text-sm font-medium text-gray-400 md:text-base"
        >
          Install Guide
        </a>
        <a
          href="#"
          className="max-w-3xl text-sm font-medium text-gray-400 md:text-base"
        >
          Contant us
        </a>
        <a
          href="#"
          className="max-w-3xl text-sm font-medium text-gray-400 md:text-base"
        >
          Press Kit
        </a>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <img
          src="public/icon-facebook.svg"
          alt="facebook icon"
          className="xs:h-5 xs:w-10 h-full"
        />
        <img
          src="public/icon-twitter.svg"
          alt="twitter icon"
          className="xs:h-5 xs:w-10 h-full"
        />
        <img
          src="public/icon-instagram.svg"
          alt="instagram icon"
          className="xs:h-5 xs:w-10 h-full"
        />
      </div>
    </div>
  );
}
