import Button from "./Button";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="font-bai flexCenter h-[80vh] flex-col gap-12 px-10 pt-12">
      <Logo />
      <div className="mt-1 flex flex-col items-center gap-4">
        <h1>A history of everything you copy</h1>
        <p className="max-w-3xl text-center text-2xl font-medium text-gray-400">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <Button variant="primary">Download for iOS</Button>
        <Button variant="secondary">Download for Mac</Button>
      </div>
    </section>
  );
}
