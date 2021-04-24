export default function Home() {
  return (
    <div class="flex items-center justify-center w-screen h-screen bg-white">
      <div class="relative flex h-96 w-96">
        <div class="z-10 absolute w-full h-full flex justify-center items-center bg-gradient-to-br from-gray-900 to-black">
          <h1 class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 text-16xl">
            SS
          </h1>
        </div>
        <div class="absolute w-full h-full bg-conic-gradient filter blur-xl"></div>
        <div class="absolute w-full h-full bg-conic-gradient filter blur-3xl opacity-60 animate-pulse"></div>
        <div class="absolute -inset-0.5 rounded-sm bg-conic-gradient"></div>
      </div>
    </div>
  );
}
