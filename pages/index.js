// https://play.tailwindcss.com/mgHvoevKFc

export default function Home() {
  return (
    <div class="flex items-center justify-center w-screen h-screen bg-black">
      <div class="relative flex h-96 w-96">
        <div class="z-10 absolute w-full h-full flex justify-center items-center bg-gradient-to-br from-gray-900 to-black">
          <h1 class="-mt-2 -ml-4 font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-white text-8xl">
            <span class="inline-flex -mr-5">
              <svg
                class="w-24 h-24 text-gray-400"
                fill="currentColor"
                viewBox="0 0 256 315"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M214 167c0 48 42 63 42 64s-7 22-22 44c-13 20-26 39-48 39-21 0-28-12-52-12s-31 12-51 12c-21 1-37-20-50-39-27-39-48-111-20-159 14-24 39-39 65-39 21-1 40 13 52 13s36-16 60-14c11 0 39 4 58 31-2 1-35 20-34 60M174 50c11-13 19-32 17-50-16 1-35 11-47 24a66 66 0 00-16 48c17 2 35-9 46-22" />
              </svg>
            </span>
            M1
          </h1>
        </div>
        <div class="absolute w-full h-full bg-conic-gradient filter blur-xl"></div>
        <div class="absolute w-full h-full bg-conic-gradient filter blur-3xl opacity-60 animate-pulse"></div>
        <div class="absolute -inset-0.5 rounded-sm bg-conic-gradient"></div>
      </div>
    </div>
  );
}
