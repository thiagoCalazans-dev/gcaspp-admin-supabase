export function Pagination() {
  return (
    <nav className="bg-zinc-800 py-3 h-fit flex  justify-center">
      <a
        href="#"
        className="underline underline-offset-4 px-3 py-2  text-zinc-500 bg-white  border-zinc-300  hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-emerald-800 dark:hover:bg-zinc-700 dark:hover:text-white"
      >
        Previous
      </a>

      <a
        href="#"
        className="px-3 py-2  text-zinc-500 bg-white  border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
      >
        1
      </a>

      <a
        href="#"
        className="px-3 py-2  text-zinc-500 bg-white  border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
      >
        2
      </a>

      <a
        href="#"
        aria-current="page"
        className="px-3 py-2 text-zinc-50  border-emerald-800 hover:bg-blue-100 hover:text-emerald-800 dark:border-emerald-800 dark:bg-emerald-800"
      >
        3
      </a>

      <a
        href="#"
        className="px-3 py-2  text-zinc-500 bg-white b border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
      >
        4
      </a>

      <a
        href="#"
        className="px-3 py-2  text-zinc-500 bg-white  border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
      >
        5
      </a>
      <a
        href="#"
        className=" underline underline-offset-4 px-3 py-2  text-emerald-800 bg-white      border-zinc-300  hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700  dark:hover:bg-zinc-700 dark:hover:text-white"
      >
        Next
      </a>
    </nav>
  );
}
