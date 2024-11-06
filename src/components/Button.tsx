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
      className={`w-full rounded-full text-xl font-medium transition-colors duration-200 md:max-w-sm ${styles} border px-8 py-4 text-center`}
    >
      {children}
    </button>
  );
}
