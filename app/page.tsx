
"use client";

import { useState } from "react";

const desks = [
  { name: "Oak Studio", price: 35, color: "#c99a65", description: "Warm natural wood" },
  { name: "Nordic White", price: 40, color: "#e9e4d9", description: "Clean and minimal" },
  { name: "Midnight Pro", price: 48, color: "#55565a", description: "Modern dark finish" },
];

const chairs = [
  { name: "Ergo Mesh", price: 25, color: "#333638", description: "Breathable support" },
  { name: "Cloud Chair", price: 30, color: "#d8cbbb", description: "Soft neutral comfort" },
  { name: "Forest Seat", price: 28, color: "#526b59", description: "A touch of nature" },
];

const accessories = [
  { name: "Monitor", price: 18, icon: "🖥️" },
  { name: "Desk lamp", price: 7, icon: "💡" },
  { name: "Indoor plant", price: 5, icon: "🪴" },
  { name: "Keyboard", price: 6, icon: "⌨️" },
  { name: "Laptop stand", price: 8, icon: "💻" },
];

export default function Home() {
  const [desk, setDesk] = useState(0);
  const [chair, setChair] = useState(0);
  const [selected, setSelected] = useState<string[]>(["Monitor", "Indoor plant"]);
  const [days, setDays] = useState(7);
  const [checkout, setCheckout] = useState(false);

  const extras = accessories.filter((item) => selected.includes(item.name));
  const dailyTotal = desks[desk].price + chairs[chair].price +
    extras.reduce((sum, item) => sum + item.price, 0);
  const total = dailyTotal * days;

  function toggleAccessory(name: string) {
    setSelected((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#242b24]">
      <header className="flex items-center justify-between border-b border-[#e7e5dd] bg-white px-5 py-5 sm:px-10">
        <a href="#" className="text-xl font-black tracking-tight">
          monis<span className="text-[#64816a]">.</span>studio
        </a>
        <div className="hidden text-sm text-gray-500 sm:block">
          Thoughtfully designed workspaces · Bali
        </div>
        <button
          onClick={() => setCheckout(!checkout)}
          className="rounded-full bg-[#344d39] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#263b2b]"
        >
          {checkout ? "← Designer" : "Review setup ↗"}
        </button>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-9 sm:px-10 sm:py-12">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#64816a]">
              YOUR SPACE, YOUR WAY
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Build your perfect <span className="text-[#64816a]">workday.</span>
            </h1>
            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Your Bali workspace, made yours. Pick your furniture, add your
              essentials, and create a space that inspires you.
            </p>
          </div>
          <div className="rounded-2xl border border-[#e5e3da] bg-white px-5 py-4">
            <p className="text-xs text-gray-500">YOUR SETUP FROM</p>
            <p className="mt-1 text-2xl font-bold">
              €{dailyTotal}<span className="text-sm font-normal text-gray-500"> / day</span>
            </p>
          </div>
        </div>

        {checkout ? (
          <section className="mx-auto max-w-2xl rounded-3xl border border-[#e7e5dd] bg-white p-6 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-widest text-[#64816a]">
              YOUR WORKSPACE
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Your rental summary</h2>
            <p className="mt-2 text-sm text-gray-500">
              Review your selections before continuing.
            </p>

            <div className="mt-7 divide-y divide-gray-100">
              <div className="flex justify-between gap-4 py-4">
                <span>{desks[desk].name} desk</span>
                <span>€{desks[desk].price}/day</span>
              </div>
              <div className="flex justify-between gap-4 py-4">
                <span>{chairs[chair].name} chair</span>
                <span>€{chairs[chair].price}/day</span>
              </div>
              {extras.map((item) => (
                <div key={item.name} className="flex justify-between gap-4 py-4">
                  <span>{item.icon} {item.name}</span>
                  <span>€{item.price}/day</span>
                </div>
              ))}
            </div>

            <label className="mt-5 block text-sm font-semibold">
              Rental duration
              <select
                value={days}
                onChange={(event) => setDays(Number(event.target.value))}
                className="mt-2 block w-full rounded-xl border border-gray-200 bg-white p-3"
              >
                <option value={1}>1 day</option>
                <option value={7}>7 days</option>
                <option value={14}>14 days</option>
                <option value={30}>30 days</option>
              </select>
            </label>

            <div className="mt-6 flex items-end justify-between border-t border-gray-200 pt-5">
              <div>
                <p className="text-sm text-gray-500">Estimated total · {days} days</p>
                <p className="mt-1 text-3xl font-bold">€{total}</p>
              </div>
              <span className="text-xs text-gray-500">Illustrative pricing</span>
            </div>
            <p className="mt-5 rounded-xl bg-[#f4f6f1] p-4 text-sm leading-6 text-gray-600">
              This is a project demo. No real booking or payment will be made.
            </p>
            <button
              onClick={() => window.alert("Thanks for trying Monis Studio! This demo does not create real bookings.")}
              className="mt-5 w-full rounded-full bg-[#344d39] px-6 py-4 font-semibold text-white hover:bg-[#263b2b]"
            >
              Continue to rental enquiry ↗
            </button>
          </section>
        ) : (
          <div className="grid items-start gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="overflow-hidden rounded-3xl border border-[#e5e3da] bg-white">
              <div className="flex items-center justify-between border-b border-[#e5e3da] px-5 py-4">
                <div>
                  <p className="font-semibold">Your workspace</p>
                  <p className="mt-1 text-xs text-gray-500">Live preview · Updates as you design</p>
                </div>
                <span className="rounded-full bg-[#eef3eb] px-3 py-1.5 text-xs font-semibold text-[#45634a]">
                  ● Live
                </span>
              </div>

              <div className="relative flex min-h-[370px] flex-col items-center justify-end overflow-hidden bg-[#f0eee6] px-5 pb-8 pt-8 sm:min-h-[440px]">
                <div className="absolute left-0 right-0 top-0 h-2/3 bg-gradient-to-b from-[#e8e4d8] to-[#f0eee6]" />
                <div className="absolute right-[12%] top-8 h-32 w-24 rounded-t-full border-[7px] border-white/70 bg-[#d5ded0] sm:h-40 sm:w-32" />
                <div className="absolute left-[12%] top-12 h-20 w-20 rounded-full bg-[#d9cdb7]/50 blur-xl" />

                <div className="relative z-10 flex w-full max-w-md flex-col items-center">
                  <div className="mb-[-2px] flex items-end justify-center gap-3">
                    {selected.includes("Monitor") && (
                      <div className="flex flex-col items-center">
                        <div className="flex h-20 w-32 items-center justify-center rounded-lg border-[5px] border-[#363a38] bg-[#d7e2dc] shadow-lg sm:h-28 sm:w-44">
                          <div className="h-full w-full bg-gradient-to-br from-[#c8d9cf] via-[#8ba995] to-[#435f4b]" />
                        </div>
                        <div className="h-4 w-2 bg-[#555955]" />
                        <div className="h-1.5 w-10 rounded-full bg-[#555955]" />
                      </div>
                    )}
                    {selected.includes("Laptop stand") && (
                      <div className="flex h-12 w-16 items-center justify-center rounded-t-md border-4 border-[#707771] bg-[#d5d9d2] text-xl">💻</div>
                    )}
                    {selected.includes("Desk lamp") && (
                      <div className="flex flex-col items-center">
                        <span className="text-4xl">💡</span>
                        <div className="h-8 w-1 bg-[#77796f]" />
                        <div className="h-1.5 w-7 rounded-full bg-[#77796f]" />
                      </div>
                    )}
                  </div>

                  <div
                    className="relative z-10 flex h-5 w-full items-center justify-center rounded-sm shadow-md"
                    style={{ backgroundColor: desks[desk].color }}
                  >
                    <div className="absolute -bottom-24 left-[12%] h-24 w-3 rounded-b-md" style={{ backgroundColor: desks[desk].color }} />
                    <div className="absolute -bottom-24 right-[12%] h-24 w-3 rounded-b-md" style={{ backgroundColor: desks[desk].color }} />
                    {selected.includes("Keyboard") && (
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded border border-gray-300 bg-gray-100 px-4 py-1 text-xs text-gray-600">⌨️</span>
                    )}
                  </div>

                  <div className="mt-5 flex w-full items-center justify-center gap-8">
                    <div className="relative flex flex-col items-center">
                      <div className="h-16 w-20 rounded-t-2xl border-4 border-black/10 shadow-sm" style={{ backgroundColor: chairs[chair].color }} />
                      <div className="h-7 w-24 rounded-xl shadow-md" style={{ backgroundColor: chairs[chair].color }} />
                      <div className="h-8 w-2 bg-[#77796f]" />
                      <div className="h-2 w-20 rounded-full bg-[#77796f]" />
                    </div>
                    {selected.includes("Indoor plant") && (
                      <div className="flex flex-col items-center">
                        <span className="text-5xl">🪴</span>
                        <div className="h-6 w-10 rounded-b-lg bg-[#c48d64]" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-7 border-t border-[#ddd7c9] bg-[#e7e0d3]" />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <div>
                  <p className="text-xs text-gray-500">CURRENT DESIGN</p>
                  <p className="mt-1 font-semibold">{desks[desk].name} + {chairs[chair].name}</p>
                </div>
                <p className="text-sm font-semibold text-[#64816a]">{selected.length + 2} items selected</p>
              </div>
            </section>

            <section className="space-y-7">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">01. Pick your desk</h2>
                  <span className="text-xs text-gray-500">Choose one</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {desks.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => setDesk(index)}
                      className={`rounded-2xl border-2 p-3 text-left transition ${desk === index ? "border-[#64816a] bg-[#eef3eb]" : "border-[#e5e3da] bg-white hover:border-gray-400"}`}
                    >
                      <div className="mb-3 flex h-14 items-center justify-center rounded-xl bg-[#f0eee8]">
                        <div className="relative h-3 w-12 rounded-sm" style={{ backgroundColor: item.color }}>
                          <span className="absolute left-1 top-2 h-8 w-1" style={{ backgroundColor: item.color }} />
                          <span className="absolute right-1 top-2 h-8 w-1" style={{ backgroundColor: item.color }} />
                        </div>
                      </div>
                      <p className="text-xs font-semibold">{item.name}</p>
                      <p className="mt-1 text-xs text-gray-500">€{item.price}/day</p>
                      {desk === index && <p className="mt-2 text-xs font-bold text-[#45634a]">✓ Selected</p>}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">02. Find your chair</h2>
                  <span className="text-xs text-gray-500">Choose one</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {chairs.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => setChair(index)}
                      className={`rounded-2xl border-2 p-3 text-left transition ${chair === index ? "border-[#64816a] bg-[#eef3eb]" : "border-[#e5e3da] bg-white hover:border-gray-400"}`}
                    >
                      <div className="mb-3 flex h-14 items-center justify-center rounded-xl bg-[#f0eee8]">
                        <div className="flex flex-col items-center">
                          <div className="h-6 w-7 rounded-t-xl border-2 border-black/10" style={{ backgroundColor: item.color }} />
                          <div className="h-3 w-9 rounded-md" style={{ backgroundColor: item.color }} />
                          <div className="h-2 w-1 bg-gray-500" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold">{item.name}</p>
                      <p className="mt-1 text-xs text-gray-500">€{item.price}/day</p>
                      {chair === index && <p className="mt-2 text-xs font-bold text-[#45634a]">✓ Selected</p>}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">03. Make it yours</h2>
                  <span className="text-xs text-gray-500">Add or remove</span>
                </div>
                <div className="space-y-2">
                  {accessories.map((item) => {
                    const active = selected.includes(item.name);
                    return (
                      <button
                        key={item.name}
                        onClick={() => toggleAccessory(item.name)}
                        className={`flex w-full items-center gap-3 rounded-2xl border-2 p-3 text-left transition ${active ? "border-[#64816a] bg-[#eef3eb]" : "border-[#e5e3da] bg-white hover:border-gray-400"}`}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl">{item.icon}</span>
                        <span className="flex-1">
                          <span className="block text-sm font-semibold">{item.name}</span>
                          <span className="mt-1 block text-xs text-gray-500">€{item.price}/day</span>
                        </span>
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-sm ${active ? "border-[#64816a] bg-[#64816a] text-white" : "border-gray-300 text-gray-400"}`}>
                          {active ? "✓" : "+"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl bg-[#344d39] p-6 text-white">
                <p className="text-sm text-white/70">YOUR CUSTOM WORKSPACE</p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-3xl font-semibold">€{dailyTotal}<span className="text-sm font-normal text-white/70"> / day</span></p>
                    <p className="mt-2 text-xs text-white/70">{selected.length + 2} items · Flexible rental demo</p>
                  </div>
                  <button
                    onClick={() => setCheckout(true)}
                    className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#344d39] transition hover:bg-[#e7eee3]"
                  >
                    Review setup →
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </section>

      <footer className="border-t border-[#e5e3da] px-5 py-7 text-center text-xs text-gray-500">
        Monis Workspace Studio · A workspace rental concept for Bali · Demo project
      </footer>
    </main>
  );
}
