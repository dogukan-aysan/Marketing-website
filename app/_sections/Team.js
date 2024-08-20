import Image from "next/image";

const team = [
  {
    name: "Joe Jackson",
    title: "Founder & CEO",
    description:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
  },
  {
    name: "Ash Karter",
    title: "Founder & CFO",
    description:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
  },
  {
    name: "Farias Amed",
    title: "Front End AI Engineer",
    description:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
  },
  {
    name: "Sarah Haust",
    title: "Dev Ops",
    description: "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
  },
];

function Team() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex flex-col gap-12 md:gap-16">
      <header className="text-center">
        <h3 className="text-base font-semibold text-indigo-700">Team</h3>
        <h1 className="text-3xl font-semibold text-neutral-900 md:text-5xl mt-3 mb-5">Meet our team</h1>
        <p className="text-lg text-neutral-600 md:text-xl">
          From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table.
        </p>
      </header>
      {/* grid */}
      <ul className="grid grid-cols-4 gap-y-12 gap-x-4 md:grid-cols-6 md:gap-x-8 md:gap-y-16 min-[1440px]:grid-cols-12 min-[1440px]:gap-y-12 min-[1440px]:gap-x-8">
        {team.map((item, index) => {
          return (
            <li key={index} className="col-span-4 md:col-span-3">
              <div className="md:w-[336px] min-[1440px]:w-[280px] flex flex-col gap-6">
                <div className="h-[296px] relative aspect-square">
                  <Image
                    className="object-cover"
                    fill={true}
                    src={`https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/team-section/starter/img/${item.name
                      .split(" ")[0]
                      .toLowerCase()}.jpg`}
                    alt={`image of ${item.name}`}
                    sizes="auto"
                  />
                </div>
                <div className="flex flex-col gap-6 self-stretch">
                  <div className="flex flex-col gap-4 self-stretch">
                    <div className="flex flex-col gap-1 self-stretch">
                      <span className="font-semibold text-xl text-neutral-900">{item.name}</span>
                      <span className="font-medium text-lg text-indigo-700">{item.title}</span>
                    </div>
                    <span className="font-normal text-base text-neutral-600">{item.description}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Team;
