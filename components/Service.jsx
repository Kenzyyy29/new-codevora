import Link from "next/link";
const Service = () => {
 return (
  <div className="w-96 bg-white p-6 shadow-xl">
   <div className="my-auto space-y-10">
    <h3 className="font-bold text-2xl mb-8 text-gray-400">Offline Sale</h3>
    <Link href="/cekatan-pos">
     <h1 className="block text-xl font-semibold hover:underline mb-3 text-hitam">
        Website Creation
     </h1>
    </Link>
    <Link href="/cekatan-order">
     <h1 className="block text-xl font-semibold hover:underline text-hitam">
      App Creation
     </h1>
    </Link>
   </div>
  </div>
 );
};

export default Service;
