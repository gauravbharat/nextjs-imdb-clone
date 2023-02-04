import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import { FeaturedMovie, TopRatedMovie } from "@/helpers/app.model";
import navbarRequests, { genres } from "@/utils/navbar-requests";

const Home = (props: any) => {
  console.log({ props });

  return (
    <>
      <Navbar />

      {!!props.error && (
        <div className="p-6 text-red-700">
          <h1>{props.error}</h1>
        </div>
      )}

      {!!props.results && (
        <Results results={props.results} imageUrl={props.imageUrl} />
      )}
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const genre = context.query.genre ?? genres[0];
  const imageUrl = process.env.IMDB_IMG_URL;

  // console.log("RETURN MOCK DATA");

  // return {
  //   props: { results: mockResults, imageUrl },
  // };

  try {
    const request = await fetch(
      `${process.env.IMDB_URL}${navbarRequests[genre].url}`
    );

    console.log({
      // request,
      status: request.status,
      statusText: request.statusText,
      ok: request.ok,
      imageUrl,
    });

    if (request.status !== 200) {
      throw new Error(request.statusText);
    }

    const data = await request.json();

    if (!data) {
      throw new Error("Error getting movie data");
    }

    return {
      props: {
        results: data.results as FeaturedMovie[] | TopRatedMovie[],
        imageUrl,
      },
    };
  } catch (error) {
    console.log({ error: (error as any)?.message });

    return {
      props: {
        error: `Error getting movie data for genre ${genre}. The server may be down or under routine maintenance. Please try again after some time.`,
      },
    };
  }
};

export default Home;

const mockResults = [
  {
    adult: false,
    backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    id: 505642,
    title: "Black Panther: Wakanda Forever",
    original_language: "en",
    original_title: "Black Panther: Wakanda Forever",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 878],
    popularity: 3907.516,
    release_date: "2022-11-09",
    video: false,
    vote_average: 7.546,
    vote_count: 2176,
  },
  {
    adult: false,
    backdrop_path: "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    id: 100088,
    name: "The Last of Us",
    original_language: "en",
    original_name: "The Last of Us",
    overview:
      "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
    poster_path: "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    media_type: "tv",
    genre_ids: [18, 10765, 10759],
    popularity: 4279.101,
    first_air_date: "2023-01-15",
    vote_average: 8.875,
    vote_count: 1302,
    origin_country: ["US"],
  },
  {
    adult: false,
    backdrop_path: "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
    id: 536554,
    title: "M3GAN",
    original_language: "en",
    original_title: "M3GAN",
    overview:
      "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
    poster_path: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    media_type: "movie",
    genre_ids: [878, 27, 35],
    popularity: 3138.271,
    release_date: "2022-12-28",
    video: false,
    vote_average: 7.543,
    vote_count: 1185,
  },
  {
    adult: false,
    backdrop_path: "/1RZlwRdVbKav9O153vWbYCn54Nk.jpg",
    id: 615777,
    title: "Babylon",
    original_language: "en",
    original_title: "Babylon",
    overview:
      "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
    poster_path: "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
    media_type: "movie",
    genre_ids: [18, 35],
    popularity: 898.717,
    release_date: "2022-12-22",
    video: false,
    vote_average: 7.742,
    vote_count: 675,
  },
  {
    adult: false,
    backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    id: 76600,
    title: "Avatar: The Way of Water",
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 1751.144,
    release_date: "2022-12-14",
    video: false,
    vote_average: 7.744,
    vote_count: 4938,
  },
  {
    adult: false,
    backdrop_path: "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    original_language: "en",
    original_title: "Puss in Boots: The Last Wish",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    media_type: "movie",
    genre_ids: [16, 12, 35, 10751, 14],
    popularity: 4239.37,
    release_date: "2022-12-07",
    video: false,
    vote_average: 8.555,
    vote_count: 3136,
  },
  {
    adult: false,
    backdrop_path: "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
    id: 758009,
    title: "Shotgun Wedding",
    original_language: "en",
    original_title: "Shotgun Wedding",
    overview:
      "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
    poster_path: "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
    media_type: "movie",
    genre_ids: [28, 10749, 35],
    popularity: 1199.551,
    release_date: "2022-12-28",
    video: false,
    vote_average: 6.362,
    vote_count: 177,
  },
  {
    adult: false,
    backdrop_path: "/96SADhPnkXnVN3KaRKsDeBovLcm.jpg",
    id: 877703,
    title: "Teen Wolf: The Movie",
    original_language: "en",
    original_title: "Teen Wolf: The Movie",
    overview:
      "The wolves are howling once again, as a terrifying ancient evil emerges in Beacon Hills. Scott McCall, no longer a teenager yet still an Alpha, must gather new allies and reunite trusted friends to fight back against this powerful and deadly enemy.",
    poster_path: "/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg",
    media_type: "movie",
    genre_ids: [28, 14, 10770],
    popularity: 2040.292,
    release_date: "2023-01-18",
    video: false,
    vote_average: 8.339,
    vote_count: 267,
  },
  {
    adult: false,
    backdrop_path: "/qHdPNd1cUaSNYLLNgt1Pv3LVd0T.jpg",
    id: 843794,
    title: "JUNG_E",
    original_language: "ko",
    original_title: "정이",
    overview:
      "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
    poster_path: "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
    media_type: "movie",
    genre_ids: [878, 28, 12],
    popularity: 2250.255,
    release_date: "2023-01-20",
    video: false,
    vote_average: 6.3,
    vote_count: 207,
  },
  {
    adult: false,
    backdrop_path: "/lKK5OrmQHGPrPE1k1vebT7Af2hl.jpg",
    id: 210757,
    name: "The Knockout",
    original_language: "zh",
    original_name: "狂飙",
    overview:
      "20 years of perseverance, hot-blooded teenagers finally become the people's hero.",
    poster_path: "/SIY6lVRZ9W1C4GU3Dvi3l4MSFs.jpg",
    media_type: "tv",
    genre_ids: [80, 9648, 18, 10759],
    popularity: 711.685,
    first_air_date: "2023-01-14",
    vote_average: 8.6,
    vote_count: 20,
    origin_country: ["CN"],
  },
  {
    adult: false,
    backdrop_path: "/mSyQoValhBsJdq3JNGXJww2Q5yL.jpg",
    id: 593643,
    title: "The Menu",
    original_language: "en",
    original_title: "The Menu",
    overview:
      "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    poster_path: "/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg",
    media_type: "movie",
    genre_ids: [27, 53, 35],
    popularity: 211.08,
    release_date: "2022-11-17",
    video: false,
    vote_average: 7.285,
    vote_count: 2111,
  },
  {
    adult: false,
    backdrop_path: "/c9yVIqnrD6fyYhNzNcvAoU6CFG.jpg",
    id: 866413,
    title: "You People",
    original_language: "en",
    original_title: "You People",
    overview:
      "A new couple and their families reckon with modern love amid culture clashes, societal expectations and generational differences.",
    poster_path: "/x5E4TndwASNkaK2hwgeYfsIVo2x.jpg",
    media_type: "movie",
    genre_ids: [10749, 35],
    popularity: 414.462,
    release_date: "2023-01-20",
    video: false,
    vote_average: 5.977,
    vote_count: 171,
  },
  {
    adult: false,
    backdrop_path: "/zxfBtHz5UmSTfIEC4O4GngyjHwa.jpg",
    id: 204541,
    name: "Three-Body",
    original_language: "zh",
    original_name: "三体",
    overview:
      "Nanotechnology researcher Wang Miao is taken to the Joint Operations Center by police officer Shi Qiang, who's investigating the mysterious suicide wave among scientists worldwide,  and recruited to sneak into an organization called the Frontiers of Science to help the investigation. When Wang Miao is contacted by the leader of the organization, Shen Yufei, she introduces him to a sophisticated VR video game called Three-Body, but soon he discovers that it's more than just a game.",
    poster_path: "/vvKuYw2vmaBbWNgNxEQkuYYpX2l.jpg",
    media_type: "tv",
    genre_ids: [18, 10765],
    popularity: 1459.499,
    first_air_date: "2023-01-15",
    vote_average: 8.211,
    vote_count: 58,
    origin_country: ["CN"],
  },
  {
    adult: false,
    backdrop_path: "/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg",
    id: 545611,
    title: "Everything Everywhere All at Once",
    original_language: "en",
    original_title: "Everything Everywhere All at Once",
    overview:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    poster_path: "/rKvCys0fMIIi1X9rmJBxTPLAtoU.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 878],
    popularity: 170.462,
    release_date: "2022-03-24",
    video: false,
    vote_average: 8.041,
    vote_count: 2945,
  },
  {
    adult: false,
    backdrop_path: "/2KVXWp6pEtnhwafW5itvct35yCf.jpg",
    id: 640146,
    title: "Ant-Man and the Wasp: Quantumania",
    original_language: "en",
    original_title: "Ant-Man and the Wasp: Quantumania",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    poster_path: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    media_type: "movie",
    genre_ids: [12, 878, 35],
    popularity: 197.077,
    release_date: "2023-02-15",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: "/1vXD5HXqkhvsXFHE7KmCPZGPR1e.jpg",
    id: 674324,
    title: "The Banshees of Inisherin",
    original_language: "en",
    original_title: "The Banshees of Inisherin",
    overview:
      "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
    poster_path: "/dpeR3ue0Q93Rk8jhE2DzVPMRGIm.jpg",
    media_type: "movie",
    genre_ids: [18, 35],
    popularity: 162.375,
    release_date: "2022-10-21",
    video: false,
    vote_average: 7.5,
    vote_count: 757,
  },
  {
    adult: false,
    backdrop_path: "/tcF46ItZ4aVsUlkTal5ZKeYukNj.jpg",
    id: 213241,
    name: "Lockwood & Co.",
    original_language: "en",
    original_name: "Lockwood & Co.",
    overview:
      "A girl with extraordinary psychic abilities joins two gifted teen boys at a small ghost-hunting agency to fight the many deadly spirits haunting London.",
    poster_path: "/lxWSGo8D6MbFbQmM9tqhbaG80TP.jpg",
    media_type: "tv",
    genre_ids: [10765],
    popularity: 132.06,
    first_air_date: "2023-01-27",
    vote_average: 8.1,
    vote_count: 57,
    origin_country: ["GB"],
  },
  {
    adult: false,
    backdrop_path: "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    id: 361743,
    title: "Top Gun: Maverick",
    original_language: "en",
    original_title: "Top Gun: Maverick",
    overview:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    media_type: "movie",
    genre_ids: [28, 18],
    popularity: 374.687,
    release_date: "2022-05-24",
    video: false,
    vote_average: 8.326,
    vote_count: 5900,
  },
  {
    adult: false,
    backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    id: 436270,
    title: "Black Adam",
    original_language: "en",
    original_title: "Black Adam",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    media_type: "movie",
    genre_ids: [14, 28, 878],
    popularity: 1154.673,
    release_date: "2022-10-19",
    video: false,
    vote_average: 7.203,
    vote_count: 4003,
  },
  {
    adult: false,
    backdrop_path: "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
    id: 661374,
    title: "Glass Onion: A Knives Out Mystery",
    original_language: "en",
    original_title: "Glass Onion: A Knives Out Mystery",
    overview:
      "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
    poster_path: "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    media_type: "movie",
    genre_ids: [35, 80, 9648],
    popularity: 712.876,
    release_date: "2022-11-23",
    video: false,
    vote_average: 7.096,
    vote_count: 3146,
  },
];
