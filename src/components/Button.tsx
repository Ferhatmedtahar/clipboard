export default function Button({
  children,
  variant,
}: {
  children: string;
  variant: "primary" | "secondary";
}) {
  var styles =
    variant === "primary"
      ? "bg-primaryDark text-white  hover:bg-primary"
      : "bg-secondary1 text-white hover:bg-secondary2";
  return (
    <button
      className={`rounded-full text-lg font-medium transition-colors duration-200 sm:text-xl md:w-full md:max-w-sm ${styles} border px-5 py-3 text-center sm:px-8 sm:py-4`}
    >
      {children}
    </button>
  );
}
