const ProductPage = () => {
  return (
   <div className="bg-hitam min-h-screen items-center">
     <section className="bg-trasparent rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-tulang mb-4">
       About Sellaris
      </h2>
      <p className="text-tulang mb-4">
       Sellaris is a platform focused on sales assistance for businesses (Point
       of Sale, Order Table, Cashier). Sellaris helps all types of businesses,
       from restaurants, coffee shops, retail, services, etc., in managing
       income, expenses, financial reports, etc.
      </p>
      <img
       src="/Logos/2.png"
       alt="Sellaris App"
       className="w-[500px] h-auto rounded-lg mb-4"
      />
     </section>

     <section className="bg-transparent rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-tulang mb-4">Fitur Utama</h2>
      <ul className="list-disc list-inside text-tulang">
       <li>Transaksi Cepat dan Mudah</li>
       <li>Manajemen Inventaris yang Efisien</li>
       <li>Laporan Penjualan Real-time</li>
       <li>Integrasi Pembayaran Digital</li>
       <li>Antarmuka Pengguna yang Ramah</li>
      </ul>
     </section>

     <section className="bg-transparent rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-tulang mb-4">
       Coba Sekarang!
      </h2>
      <p className="text-tulang mb-4">
       Bergabunglah dengan ribuan pengguna yang telah merasakan kemudahan
       menggunakan Sellaris. Coba gratis selama 14 hari tanpa biaya!
      </p>
      <a
       href="/download"
       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
       Unduh Sekarang
      </a>
     </section>

    <footer className="bg-transparent shadow w-full">
     <div className="max-w-7xl mx-auto px-4 py-6 text-center">
      <p className="text-tulang">&copy; 2023 Sellaris. Semua hak dilindungi.</p>
     </div>
    </footer>
   </div>
  );
};

export default ProductPage;