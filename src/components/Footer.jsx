import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap p-10 justify-center gap-12 bg-[#032541] text-white text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg"
            alt=""
            width={130}
            height={94}
          />
          <a
            href="#"
            className="bg-white text-cyan-500 font-bold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
          >
            Join the community
          </a>
        </div>

        <div className="flex flex-col min-w-[150px]">
          <h1 className="font bold mb-2 uppercase">THE BASICS</h1>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                About TMDB
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Support Forums
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Api Documentation
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                System Status
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col min-w-[150px]">
          <h1 className="font bold mb-2 uppercase">Get Involved</h1>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Support Forums
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Api Documentation
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col min-w-[150px]">
          <h1 className="font bold mb-2 uppercase">Community</h1>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Support Forums
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Api Documentation
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col min-w-[150px]">
          <h1 className="font bold mb-2 uppercase">Legal</h1>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Support Forums
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Api Documentation
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                System Status
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
