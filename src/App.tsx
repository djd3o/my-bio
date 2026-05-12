import { Card, CardContent } from "./components/ui/card";
import { socialLinks } from "./data/socialLinks";
import { recentLinks } from "./data/recentLinks";
import profileImage from "./assets/f-3-bandcamp.jpg";

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <Card className="w-full max-w-md rounded-3xl border-zinc-800 bg-zinc-950 shadow-2xl">
        <CardContent className="flex flex-col items-center p-6 sm:p-10">
          <img
            src={profileImage}
            alt="djd3o"
            className="h-40 w-40 rounded-full border-4 border-zinc-800 object-cover shadow-xl"
          />

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white [font-family:'Inter']">
            djÐ3ø
          </h1>

          <p className="mt-2 text-sm font-medium tracking-[0.2em] text-zinc-400 [font-family:'Inter']">
            @djd3o
          </p>

          <div className="mt-8 flex w-full items-center justify-center gap-2 px-4 sm:gap-4 sm:px-0">
            {socialLinks.map((link) => {
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

          <div className="mt-10 flex w-full flex-col gap-3">
            {recentLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  px-4
                  transition-all
                  duration-300
                  hover:border-zinc-600
                  hover:bg-zinc-800
                "
              >
                <div className="text-center text-base font-semibold text-white [font-family:'Inter']">
                  {item.label}
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
