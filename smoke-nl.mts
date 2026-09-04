import { manifest } from "./visa-sponsor-providers/nl/manifest";

const t0 = Date.now();
try {
  const sponsors = await manifest.fetchSponsors();
  const adyen = sponsors.find((s) => s.organisationName.includes("Adyen"));
  console.log("LIVE OK sponsors:", sponsors.length, "ms:", Date.now() - t0);
  console.log("adyen:", JSON.stringify(adyen));
} catch (e) {
  console.error("LIVE FAIL:", (e as Error).message);
  process.exit(1);
}
