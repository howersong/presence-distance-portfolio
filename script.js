const chapters = [
  {
    id: "light",
    number: "01",
    title: "光的温度",
    english: "The temperature of light",
    description: "光落在雾、屋脊与城市边缘，也留下时间的颜色。",
    theme: "dark",
    photos: [
      ["digital-01", "夕阳停驻 / A pause in amber", "夕阳下，一排鸟停在路灯的剪影上", "narrow"],
      ["digital-02", "桥下的色块 / Chromatic city", "青绿色灯光下停放在桥下的自行车", "offset"],
      ["digital-11", "雾中的道路 / The road in orange", "橙色浓雾笼罩的夜间道路", "wide"],
      ["digital-12", "入城 / Entering", "暖光中的宫殿与人群剪影", ""],
      ["digital-13", "金色屋脊 / Golden eaves", "夕阳照亮传统建筑的金色屋脊", "offset"],
      ["digital-14", "宫墙之内 / Within the palace", "树影与夕阳中的宫殿建筑", "wide"],
      ["digital-15", "被松枝框住的时间 / Framed light", "松枝之间的宫殿屋顶与长墙", ""],
    ],
  },
  {
    id: "coast",
    number: "02",
    title: "海岸与留白",
    english: "Coastlines and silence",
    description: "潮线划出边界，人物与建筑在辽阔的蓝色里显出距离。",
    theme: "light",
    photos: [
      ["digital-03", "风暴之前 / Before the weather", "阴云下，两个人站在翻涌的海浪中", "wide"],
      ["digital-04", "岸边的空椅 / An empty chair", "长栈桥与空旷沙滩上的一把椅子", ""],
      ["digital-05", "潮线上的车 / The tideline", "平静海岸边停靠的车辆与散步的人", "offset"],
      ["digital-07", "沙滩与城市 / Beach, city", "云层下的城市海滩与远处建筑", "wide"],
      ["digital-16", "暮色中的渡口 / Evening shore", "暮色海面前站立的人与小船", ""],
      ["digital-17", "垂直的海 / A vertical sea", "从高处俯瞰蓝绿色海浪与沙岸", "narrow offset"],
      ["digital-18", "海岸上的相遇 / Shore encounters", "绿树环绕的海滩与散步的人", "wide"],
      ["film-07", "礁石与栈桥 / Rocks, pier", "胶片拍摄的礁石海岸与木栈桥", ""],
      ["film-08", "海天之间 / Between sea and sky", "胶片拍摄的蓝色海面和长云", "offset"],
      ["film-09", "静水 / Still water", "静谧蓝色海面上的细长栈桥", "wide"],
      ["film-11", "远眺 / Looking out", "从高处看向海滩与微小的人群", ""],
      ["film-12", "窗后的海 / Sea through a window", "黑色窗框之后的海岸与天空", "offset"],
    ],
  },
  {
    id: "human",
    number: "03",
    title: "人的尺度",
    english: "The human scale",
    description: "人在观看，也被观看。短暂的相遇让空间获得比例。",
    theme: "dark",
    photos: [
      ["digital-06", "桥下的人 / The human scale", "桥梁与城市天际线前站立的背影", "wide"],
      ["digital-08", "穿过玻璃 / Seen through glass", "从车内玻璃看向街口行人", ""],
      ["digital-09", "角色 / Performance", "户外表演现场身穿戏服的人", "offset"],
      ["digital-10", "观看者 / Spectator", "前景观众望向林中骑士表演", "wide"],
      ["digital-19", "同行片刻 / A brief encounter", "海边与动物相伴的旅行者肖像", ""],
      ["digital-20", "相视 / Eye contact", "木栈桥下看向镜头的鹿", "offset"],
      ["film-13", "午后的聚集 / Afternoon gathering", "海边公园里围坐的人群与狗", "wide"],
      ["film-14", "后视镜里的远方 / The rear-view", "车内后视镜框住经过的草地", ""],
      ["film-15", "训练场 / Repetition", "室内羽毛球训练场上的人群", "offset"],
      ["film-16", "抵达 / Arrival", "公交车内乘客望向中央车站", "wide"],
    ],
  },
  {
    id: "city",
    number: "04",
    title: "城市在移动",
    english: "The city in transit",
    description: "站台、橱窗与夜色反复掠过，城市在移动中显影。",
    theme: "light",
    photos: [
      ["film-01", "跨城一瞥 / Circular Quay", "夜色站台之后的海港大桥", "wide"],
      ["film-02", "中央站 / Central", "胶片拍摄的中央车站空旷站台", ""],
      ["film-03", "港湾地标 / Harbour", "海港边被阳光照亮的歌剧院", "offset"],
      ["film-05", "城市的纪念碑 / Monument", "薄雾与喷泉前的教堂建筑", "wide"],
      ["film-06", "霓虹通道 / Neon passage", "夜间街道上的红色商店霓虹", ""],
      ["film-17", "仍在营业 / Still open", "施工围栏与夜色中的麦当劳招牌", "offset"],
      ["film-18", "园中建筑 / Pavilion", "树木之间的中式亭台与草地", "wide"],
      ["film-19", "记忆的层叠 / Palaces", "从高处远望层叠的宫殿屋顶", ""],
      ["film-20", "街道与宫墙 / Street, palace", "宫墙前穿行的车辆与骑行者", "offset"],
    ],
  },
  {
    id: "distance",
    number: "05",
    title: "远方的地形",
    english: "Distant forms",
    description: "道路向开阔处延伸，地貌把遥远变成可以凝视的形状。",
    theme: "dark",
    photos: [
      ["film-04", "天际线之后 / Beyond the skyline", "暮色天空与低矮树林构成的天际线", "wide"],
      ["digital-21", "岛屿 / Island", "高处俯瞰层叠山脊与蓝色海湾", ""],
      ["digital-22", "通向旷野的路 / Road into open space", "道路穿过草原通向远方的白色房屋", "offset"],
      ["digital-23", "沙丘上的队列 / Across the dunes", "骆驼队伍穿过浅色沙丘", "wide"],
      ["digital-24", "山谷的褶皱 / Folded land", "绿色山谷间蜿蜒的道路", ""],
      ["film-10", "一片微光 / A field of small light", "淡紫色花朵铺满画面", "narrow offset"],
    ],
  },
];

const photoPath = (id) => `./public/photographs/${id}.webp`;

const chaptersRoot = document.querySelector("#chapters");

for (const chapter of chapters) {
  const section = document.createElement("section");
  section.className = `chapter chapter--${chapter.theme}`;
  section.id = chapter.id;
  section.setAttribute("aria-labelledby", `${chapter.id}-title`);

  const header = document.createElement("header");
  header.className = "chapter-header";
  header.innerHTML = `
    <p class="chapter-number">${chapter.number}</p>
    <div>
      <p class="chapter-english">${chapter.english}</p>
      <h2 class="chapter-title" id="${chapter.id}-title">${chapter.title}</h2>
    </div>
    <p class="chapter-description">${chapter.description}</p>
  `;

  const gallery = document.createElement("div");
  gallery.className = "chapter-gallery";

  chapter.photos.forEach(([id, title, alt, layout], index) => {
    const figure = document.createElement("figure");
    figure.className = `chapter-figure ${layout}`.trim();
    figure.innerHTML = `
      <a class="photo-link" href="${photoPath(id)}" data-lightbox aria-label="放大查看：${title.split(" / ")[0]}">
        <img src="${photoPath(id)}" alt="${alt}" loading="lazy" decoding="async" />
      </a>
      <figcaption>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <span>${title}</span>
      </figcaption>
    `;
    gallery.append(figure);
  });

  section.append(header, gallery);
  chaptersRoot.append(section);
}

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const closeButton = lightbox.querySelector(".lightbox-close");

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-lightbox]");
  if (!link || typeof lightbox.showModal !== "function") return;
  event.preventDefault();
  const figure = link.closest("figure");
  const image = link.querySelector("img");
  lightboxImage.src = link.href;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = figure.querySelector("figcaption span:last-child").textContent;
  lightbox.showModal();
});

closeButton.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
