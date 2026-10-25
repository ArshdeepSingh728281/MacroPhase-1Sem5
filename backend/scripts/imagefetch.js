const fs = require("fs");

const FILE_PATH = "./data.json";
const API_URL = "https://api.openverse.org/v1/images/";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getImageUrl(foodName) {
    try {
        const url =
            API_URL +
            "?q=" +
            encodeURIComponent(foodName) +
            "&page_size=1";

        console.log("Fetching:", url);

        const response = await fetch(url);

        console.log("Status:", response.status);

        if (response.status === 429) {
            console.log("⚠️ Openverse rate limited");
            return null;
        }

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            console.log("❌ No image found");
            return null;
        }

        // First result
        const image = data.results[0];

        console.log("✅ Found:", image.url);

        return image.url;

    } catch (error) {
        console.log("❌ ERROR:", error.message);
        return null;
    }
}


async function main() {

    const data = JSON.parse(
        fs.readFileSync(FILE_PATH, "utf8")
    );

    console.log(`Found ${data.length} foods`);

    let updated = 0;
    let failed = 0;

    for (let i = 0; i < data.length; i++) {

        const food = data[i];

        console.log(
            `\n[${i + 1}/${data.length}] ${food.name}`
        );

        /*
         * Skip foods that already have a real image URL.
         *
         * This means you can stop the script and
         * run it again later.
         */
        if (
            food.image_url &&
            !food.image_url.includes("MediaSearch")
        ) {
            console.log("⏭️ Already processed");
            continue;
        }

        const imageUrl = await getImageUrl(
            food.name
        );

        if (imageUrl) {

            // Replace image_url
            data[i].image_url = imageUrl;

            updated++;

            // Save immediately
            fs.writeFileSync(
                FILE_PATH,
                JSON.stringify(data, null, 2),
                "utf8"
            );

            console.log("💾 Saved to data.json");

        } else {

            failed++;

            console.log("❌ Failed");
        }

        // Wait before next request
        await sleep(1500);
    }

    console.log("\n======================");
    console.log("DONE");
    console.log("======================");
    console.log("Updated:", updated);
    console.log("Failed:", failed);
}


main();