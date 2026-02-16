// import Image from "next/image";

// const clients = [
//   { src: "/images/clients/radisson.png", alt: "Radisson" },
//   { src: "/images/clients/ramada.png", alt: "Ramada" },
//   { src: "/images/clients/marriott.png", alt: "Marriott" },
//   { src: "/images/clients/hilton.png", alt: "Hilton" },
// ];

// export default function Clients() {
//   return (
//     <section className="bg-[#f3efe7] py-10 border-y">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h4 className="text-accent-brown text-xs font-bold tracking-widest uppercase mb-8">
//           Trusted by leading hotels worldwide
//         </h4>
//         <div className="flex flex-wrap justify-center gap-16 opacity-70 grayscale hover:grayscale-0 transition">
//           {clients.map((c) => (
//             <div key={c.alt} className="relative w-32 h-10">
//               <Image src={c.src} alt={c.alt} fill className="object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
