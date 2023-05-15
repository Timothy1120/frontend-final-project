export default function Unauthorized() {
  return (
    <section className="font-poppins flex items-center h-screen p-16 bg-darkblue-02">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-neutral-03 ">
            <span className="sr-only">Error</span>403
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Maaf, anda tidak memiliki hak akses
          </p>
        </div>
      </div>
    </section>
  );
}
