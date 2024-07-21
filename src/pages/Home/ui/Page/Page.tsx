import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to CluTik</h1>
              <p className="md:text-xl mb-5">
                Di Clutik, kamu akan belajar banyak hal tentang TIK dengan cara
                yang seru dan menyenangkan. Kamu bisa mengikuti pelatihan,
                workshop, dan proyek bareng teman-teman.
              </p>
              <a href="/register">
              <button className="btn-primary btn">Register</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-[calc(80vh-64px)] bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
            <img src="/images/map.png" className="mr-20 w-64 max-w-sm " />
            <div>
              <h1 className="text-4xl font-bold hover:underline md:text-6xl lg:text-8xl">
                Locations
              </h1>
              <p className="py-6 text-xl font-thin md:text-2xl lg:text-4xl">
                Extrakulikuler CluTik berlokasi di Labkom 2 SMA Negeri 2 Kota
                Mojokerto
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-[calc(80vh-64px)] bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/images/calendar.png" className="ml-20 w-64 max-w-sm" />
            <div>
              <h1 className="text-4xl font-bold hover:underline md:text-6xl lg:text-8xl">
                Time
              </h1>
              <p className="py-6 text-xl font-thin md:text-2xl lg:text-4xl">
                Jadwal ekstrakulikuler CluTik yaitu setiap hari senin setelah
                pulang sekolah <b>(15:15)</b> sampai selesai <b>(16:30)</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
