function solve(input) {
    let serialName = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let episodeTimeline = Number(input[3]);

    let adTimeline = episodeTimeline * 0.20;
    let epTimelineWithAds = adTimeline + episodeTimeline;

    let sepcialEpisodes = seasons * 10;
    let seraialTime = epTimelineWithAds * episodes * seasons + sepcialEpisodes;

    console.log(`Total time needed to watch the ${serialName} series is ${Math.floor(seraialTime)} minutes.`);
}
solve(["Lucifer",

    "3",

    "18",

    "55"
]);