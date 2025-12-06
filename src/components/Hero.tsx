export default function Hero() {
  return (
    <section className="text-center py-20">
      <div>
        <img
          src="/vite.svg"
          className="w-32 h-32 mx-auto rounded-full shadow-sm object-cover"
        />
        <h1 className="mt-6 text-3xl font-light text-gray-900">
          <b>
            Soda
          </b>
        </h1>
        <p className="mt-2 text-gray-600">
          工学系大学3年生
        </p>
      </div>

      {/* ソーシャルリンク */}
      <div className="mt-2 flex flex-col items-center gap-4">
        {/* X/Twitter */}
        {/* <div className="flex gap-2">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.647l-5.207-6.802-5.974 6.802H2.423l7.723-8.835L1.029 2.25h6.847l4.995 6.558 5.55-6.558zM16.5 19.5h1.828L7.187 4.05H5.221l11.279 15.45z" />
          </svg>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
            aria-label="X"
          >

            <span>https://twitter.com</span>
          </a>
        </div> */}


        {/* GitHub */}
        <div className="flex gap-2">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>

          <a
            href="https://github.com/sodahub99k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
            aria-label="GitHub"
          >
            <span>https://github.com/sodahub99k</span>
          </a>
        </div>
      </div>
    </section>
  );
}
