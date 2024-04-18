
export default async function Begin() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pt-14 border border-red-600">
      <div className="mx-auto max-w-5xl px-32 border border-red-600">
        <div className="text-left">

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Games in Lviv
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Page for begginers
          </h1>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
