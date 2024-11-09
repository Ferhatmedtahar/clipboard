export default function Features() {
  return (
    <section className="relative mx-auto my-16 flex flex-col items-center space-x-28 font-bai md:flex-row md:items-start">
      <div className="md:w-1/2">
        <img
          src="public/image-computer.png"
          alt="computer image"
          className="right-[50%] top-0 md:absolute lg:right-[50%]"
        />
      </div>

      <div className="mt-16 flex flex-col items-start gap-12">
        <div className="flex max-w-xs flex-col items-start gap-3">
          <h2>Quick Search</h2>
          <p className="max-w-3xl text-start text-base font-medium leading-6 text-gray-400">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div className="flex max-w-sm flex-col items-start gap-3">
          <h2>iCloud Sync</h2>
          <p className="max-w-3xl text-start text-base font-medium leading-6 text-gray-400">
            Instantly saves and syncs snippets across all your devices.
          </p>
        </div>
        <div className="flex max-w-sm flex-col items-start gap-3">
          <h2>Completely History</h2>
          <p className="max-w-3xl text-start text-base font-medium leading-6 text-gray-400">
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </section>
  );
}
