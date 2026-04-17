import React from "react";

const featured = [
  {
    title: "The Silent Patient",
    description: "A must-read psychological thriller with a shocking twist.",
    link: "https://www.amazon.com/dp/1250301696?tag=youraffiliatetag"
  },
  {
    title: "Gone Girl",
    description: "A bestselling crime thriller full of manipulation and secrets.",
    link: "https://www.amazon.com/dp/0307588378?tag=youraffiliatetag"
  }
];

const bestList = [
  { title: "Verity", description: "Dark romance meets psychological suspense.", link: "#" },
  { title: "The Housemaid", description: "A gripping thriller with nonstop twists.", link: "#" },
  { title: "Behind Closed Doors", description: "A disturbing look at the perfect marriage.", link: "#" },
  { title: "The Girl on the Train", description: "An unreliable narrator uncovers a chilling truth.", link: "#" },
  { title: "Sharp Objects", description: "A journalist returns home to cover brutal murders.", link: "#" },
  { title: "The Couple Next Door", description: "A missing baby and secrets next door.", link: "#" },
  { title: "Then She Was Gone", description: "A mother’s search for her missing daughter.", link: "#" },
  { title: "Rock Paper Scissors", description: "A tense marriage thriller with a killer twist.", link: "#" },
  { title: "The Therapist", description: "A woman discovers dark secrets in her new home.", link: "#" },
  { title: "Before I Go to Sleep", description: "A woman loses her memory every day.", link: "#" },
  { title: "The Wife Between Us", description: "A twisted love triangle full of deception.", link: "#" },
  { title: "Local Woman Missing", description: "Disappearances that shake a quiet town.", link: "#" },
  { title: "The Perfect Marriage", description: "A defense attorney must defend her own husband.", link: "#" },
  { title: "Sometimes I Lie", description: "A woman in a coma hears everything.", link: "#" },
  { title: "The Last Thing He Told Me", description: "A woman uncovers her husband’s secrets.", link: "#" },
  { title: "In a Dark, Dark Wood", description: "A bachelorette party turns deadly.", link: "#" },
  { title: "The Guest List", description: "A wedding on an island ends in murder.", link: "#" },
  { title: "The Night She Disappeared", description: "A couple vanishes without a trace.", link: "#" },
  { title: "Hidden Pictures", description: "A child’s drawings reveal something sinister.", link: "#" },
  { title: "The Push", description: "A chilling story of motherhood and doubt.", link: "#" }
];

export default function CrimeThrillerSite() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* HEADER */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold">Crime & Thriller Book Vault</h1>
        <p className="text-gray-400 mt-2">
          Discover addictive psychological thrillers & crime novels
        </p>
      </header>

      {/* FEATURED SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔥 Trending Now</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((book, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-gray-400 mb-4">{book.description}</p>
              <a
                href={book.link}
                target="_blank"
                className="bg-red-600 px-4 py-2 rounded-xl"
              >
                Buy on Amazon
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BEST LIST (HIGH CONVERSION) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          🧠 Best Psychological Thriller Books
        </h2>
        <div className="space-y-4">
          {bestList.map((book, i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 rounded-xl flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-gray-400 text-sm">{book.description}</p>
              </div>
              <a
                href={book.link}
                className="bg-red-600 px-3 py-1 rounded-lg text-sm"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE (IMPORTANT FOR PROFIT) */}
      <section className="bg-gray-900 p-6 rounded-2xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          📚 Get Free Thriller Book Lists
        </h2>
        <p className="text-gray-400 mb-4">
          Join and get weekly recommendations of the best crime novels
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-lg text-black w-64 mr-2"
        />
        <button className="bg-red-600 px-4 py-2 rounded-lg">
          Subscribe
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm">
        <p>
          Disclaimer: As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </footer>
    </div>
  );
}
