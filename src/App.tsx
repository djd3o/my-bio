import { Card, CardContent } from "@/components/ui/card";
import { links } from "./data/links";
import profileImage from "./assets/f-3-bandcamp.jpg";

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <Card className="w-full max-w-md rounded-3xl border-zinc-800 bg-zinc-950 shadow-2xl">
        <CardContent className="flex flex-col items-center p-10">
          <img
            src={profileImage}
            alt="djd3o"
            className="h-40 w-40 rounded-full border-4 border-zinc-800 object-cover shadow-xl"
          />

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white [font-family:'Helvetica']">
            djD3o
          </h1>

          <div className="mt-8 flex items-center justify-center gap-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="rounded-full bg-zinc-900 p-3 text-zinc-400 transition hover:scale-110 hover:text-white"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
