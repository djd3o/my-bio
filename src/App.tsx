import { Card, CardContent } from "./components/ui/card";
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
            djÐ3ø
          </h1>

          <div className="mt-8 flex w-full items-center justify-center gap-2 sm:gap-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="
                    rounded-full
                    bg-zinc-900
                    p-2
                    text-zinc-400
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:text-white
                    sm:p-3
                  "
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
