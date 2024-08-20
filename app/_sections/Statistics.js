import { getMetricsFromApi } from "../_lib/helperFunctions";

function convertMetricValue(value) {
  return value.toLocaleString("en-US");
}
function convertMetricName(name) {
  const nameTitled = name.replace(name[0], name[0].toUpperCase());
  if (nameTitled.includes("images")) return "Images in library";
  if (nameTitled.includes("_")) return nameTitled.replace("_", " ");
  return nameTitled;
}

async function Statistics() {
  const metrics = await getMetricsFromApi();
  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex flex-col gap-12 md:gap-16">
      <header className="text-center">
        <h3 className="text-base font-semibold text-indigo-700">Statistics</h3>
        <h1 className="text-3xl font-semibold text-neutral-900 md:text-5xl mt-3 mb-5">More than premium abstract imagery</h1>
        <p className="text-xl text-neutral-600 md:text-xl">
          Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery.
        </p>
      </header>
      {/* grid */}
      <div className="grid grid-cols-4 gap-y-8 gap-x-4 md:grid-cols-6 md:gap-8 min-[1440px]:grid-cols-12 min-[1440px]:gap-y-12 min-[1440px]:gap-x-8">
        <div className="col-span-4 md:col-span-6 bg-[url('/white-blocks.png')] bg-center bg-cover h-[311px] md:h-[656px] min-[1440px]:h-auto"></div>
        <div className="col-span-4 md:col-span-6">
          <p className="text-lg text-neutral-600 mb-6 md:mb-8">Our mission, in numbers</p>
          <ul className="flex flex-col gap-6 md:gap-8">
            {metrics.map((metric, index) => {
              const value = convertMetricValue(metric.value);
              const name = convertMetricName(metric.metric);
              return (
                <li key={index} className="flex flex-col items-center gap-4 py-[23px] shadow border border-neutral-200 rounded-lg">
                  <span className="text-4xl font-bold text-indigo-700 md:text-5xl">{value}</span>
                  <span className="text-xl text-neutral-600">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
