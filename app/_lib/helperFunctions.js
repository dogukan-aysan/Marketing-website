export function validateEmail(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

export async function getMetricsFromApi() {
  const res = await fetch("https://www.greatfrontend.com/api/projects/challenges/statistics-metrics");
  const returnedObject = await res.json();
  return returnedObject.data;
}

export async function dummyWait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
