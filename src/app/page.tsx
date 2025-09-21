import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Temukan & Pesan Tiket Event Favoritmu 🎟️
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          Dari konser musik, konferensi, hingga workshop seru.  
          Semua tiket ada di satu tempat.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow hover:bg-gray-200 transition">
            Jelajahi Event
          </button>
          <button className="px-6 py-3 bg-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-900 transition">
            Buat Event
          </button>
        </div>
      </section>

      {/* Featured Events */}
      <section className="flex-1 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Event Populer 🔥</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Concert"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Live Music Festival</h3>
              <p className="text-gray-600 text-sm mt-2">
                Jakarta · 30 Sept 2025
              </p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition">
                Pesan Tiket
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Conference"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Tech Conference 2025</h3>
              <p className="text-gray-600 text-sm mt-2">
                Bandung · 15 Okt 2025
              </p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition">
                Pesan Tiket
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Workshop"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">UI/UX Design Workshop</h3>
              <p className="text-gray-600 text-sm mt-2">
                Surabaya · 5 Nov 2025
              </p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition">
                Pesan Tiket
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
