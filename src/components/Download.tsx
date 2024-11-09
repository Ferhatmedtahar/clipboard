import Button from "./Button";

export default function Download() {
  return (
    <div className="flexCenter mx-auto max-w-6xl flex-col gap-8 px-10 pt-12 font-bai">
      <h1>Clioboard for iOS and Mac OS</h1>
      <p className="max-w-3xl text-center text-base font-medium text-gray-400">
        Available for free on the App Store . Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>

      <div className="flex w-full flex-row items-center justify-center gap-4">
        <Button variant="primary">Download for iOS</Button>
        <Button variant="secondary">Download for Mac</Button>
      </div>
    </div>
  );
}
