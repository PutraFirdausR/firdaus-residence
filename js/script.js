const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnid = document.getElementById("close_btn");

// SHOW MENU
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});
// CLOSE MENU
CloseBtnid.addEventListener("click", () => {
  navId.classList.remove("show");
});

AOS.init();

// Logo
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// nav menu
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});

// toggle btn
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// main heading
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2,
  duration: 0.5,
});

// btn
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".fasilitas", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// tentang kami
gsap.from(".tentang", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// kontak
gsap.from(".kontak", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".title_tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".detail_tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".blog", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".detail_blog", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// menambah box shadow saat scroll
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".header");
  if (window.pageYOffset >= 30) {
    nav.classList.add("shadow-header");
  } else {
    nav.classList.remove("shadow-header");
  }
});

// Load all tipe rumah
const jsonData = {
  rumah: [
    {
      tipe: "A",
      gambar_rumah: "./img/house-1.png",
      nama: "Casa Verde",
      luas_bangunan: 120,
      luas_tanah: 200,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi:
        "Casa Verde, rumah tipe A yang menawan, hadir dengan desain modern minimalis. Terletak di atas lahan seluas 200 m², rumah ini menawarkan kenyamanan hidup dengan luas bangunan 120 m². Dilengkapi dengan 3 kamar tidur dan 2 kamar mandi, Casa Verde adalah pilihan ideal untuk keluarga kecil yang menginginkan hunian asri dan fungsional.",
      harga: "700Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
    {
      tipe: "B",
      gambar_rumah: "./img/house-2.png",
      nama: "Sky Villa",
      luas_bangunan: 100,
      luas_tanah: 250,
      kamar_mandi: 3,
      kamar_tidur: 4,
      deskripsi:
        "Sky Villa, rumah tipe B dengan desain modern minimalis, menawarkan kenyamanan tinggal dalam luas bangunan 100 m² di atas lahan seluas 250 m². Dilengkapi 4 kamar tidur dan 3 kamar mandi, rumah ini sangat cocok untuk keluarga yang menginginkan privasi dan ruang gerak yang luas. ",
      harga: "800Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
    {
      tipe: "C",
      gambar_rumah: "./img/house-3.png",
      nama: "Versatile Villa",
      luas_bangunan: 220,
      luas_tanah: 300,
      kamar_mandi: 4,
      kamar_tidur: 5,
      deskripsi:
        "Versatile Villa adalah pilihan sempurna bagi keluarga besar yang menginginkan hunian nyaman dan luas. Dengan desain modern yang elegan, rumah tipe C ini menawarkan 5 kamar tidur dan 4 kamar mandi, serta luas bangunan 220 m² di atas lahan seluas 300 m². Nikmati kenyamanan hidup di rumah impian Anda!",
      harga: "900Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
    {
      tipe: "D",
      gambar_rumah: "./img/house-4.png",
      nama: "Garden Mansion",
      luas_bangunan: 150,
      luas_tanah: 100,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi:
        "Garden Mansion adalah pilihan tepat bagi Anda yang mencari rumah dengan desain modern dan fungsional. Dengan luas bangunan 150 m² dan luas tanah 100 m², rumah tipe D ini menawarkan tata ruang yang efisien. ",
      harga: "950Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
  ],
};

// function dynamic create html for each house
function createHouseCard(house, index, isMobileView) {
  const isOdd = index % 2 === 1;

  const penjelasan = `
    <div class="col-md-6 mt-4 mb-4">
      <h2>${house.nama}</h2>
      <p>${house.deskripsi}</p>
      <div class="row">
        <div class="col-md-5 mb-3">
          <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
            <i class="fa fa-briefcase"></i>
            <h3>${house.luas_bangunan}</h3>
            <p>Luas Bangunan</p>
          </div>
        </div>
        <div class="col-md-5 mb-3">
          <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
            <i class="fa fa-briefcase"></i>
            <h3>${house.luas_tanah}</h3>
            <p>Luas Tanah</p>
          </div>
        </div>
        <div class="col-md-5 mb-3">
          <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
            <i class="fa fa-shower"></i>
            <h3>${house.kamar_mandi}</h3>
            <p>Kamar Mandi</p>
          </div>
        </div>
        <div class="col-md-5 mb-3">
        <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
          <i class="fa fa-bed"></i>
          <h3>${house.kamar_tidur}</h3>
          <p>Kamar Tidur</p>
        </div>
      </div>
      </div>
      <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn_home view_more_btn mt-1" style="text-decoration:none;">
          Selengkapnya
      </a>
    </div>
  `;

  const gambar_rumah = `
      <div class="col-md-6 mt-4 mb-4">
          <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid" />
      </div>
  `;

  let html = ``;
  if (isOdd) {
    html = gambar_rumah + penjelasan;
  } else {
    html = penjelasan + gambar_rumah;
  }

  // handle mobile view
  if (isMobileView) {
    html = gambar_rumah + penjelasan;
  }

  return html;
}

function createTipeLain(house) {
  const item = `
   <div class="col-md-6 mt-4 mb-4">
     <img src="${house.gambar_rumah}" class="w-100" style="max-height:200px; object-fit:cover; object-position:button">
     <br><br>
     <a href= "./detail_rumah.html?tipe_rumah=${house.tipe}">
       <h3 class="text-center">Rumah ${house.nama}</h3>
     </a> 
   </div>
  `;

  return item;
}

// load data into html (web view)
const rumahContainer = document.getElementById("rumahContainer");
if (rumahContainer != null) {
  jsonData.rumah.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, false);
    rumahContainer.innerHTML += houseCard;
  });
}

// load data into html (mobile view)
const rumahContainerMobile = document.getElementById("rumahContainerMobile");
if (rumahContainerMobile != null) {
  jsonData.rumah.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, true);
    rumahContainerMobile.innerHTML += houseCard;
  });
}

// load data tipe lain
const lihatTipeLain = document.getElementById("lihatTipeLain");
if (lihatTipeLain != null) {
  jsonData.rumah.forEach((house) => {
    const tipeCard = createTipeLain(house);
    lihatTipeLain.innerHTML += tipeCard;
  });
}

// load detail rumah
function filterRumahByTipe(tipe) {
  const filteredRumah = jsonData.rumah.find((rumah) => rumah.tipe == tipe);
  return filteredRumah || null;
}

let queryString = window.location.search;
let searchParams = new URLSearchParams(queryString);
let tipeRumahValue = searchParams.get("tipe_rumah");

// load data to view html
if (tipeRumahValue != null && tipeRumahValue != "") {
  const filteredRumah = filterRumahByTipe(tipeRumahValue.toLocaleUpperCase());

  if (filteredRumah == null) {
    console.log("rumah not found");
  } else {
    document.getElementById("title-nama-rumah").innerText =
      "Rumah " + filteredRumah.nama;
    document.getElementById("gambar-rumah").src = filteredRumah.gambar_rumah;
    document.getElementById("nama-rumah").innerText = filteredRumah.nama;
    document.getElementById("deskripsi-rumah").innerText =
      filteredRumah.deskripsi;
    document.getElementById("harga-rumah").innerText = filteredRumah.harga;
    document.getElementById("luas-bangunan-rumah").innerText =
      filteredRumah.luas_bangunan + "m²";
    document.getElementById("luas-tanah-rumah").innerText =
      filteredRumah.luas_tanah + "m²";
    document.getElementById("kamar-mandi-rumah").innerText =
      filteredRumah.kamar_mandi;
    document.getElementById("kamar-tidur-rumah").innerText =
      filteredRumah.kamar_tidur;
    document.getElementById("carpot-rumah").innerText = filteredRumah.carpot;
    document.getElementById("denah-rumah").src = filteredRumah.denah_rumah;
  }
}

// for blog load data
const blogData = [
  {
    id: 1,
    title: "Casa Verde di Firdaus Residence Hunian Nyaman Impian Keluarga",
    date: "28 September 2024, 19.11",
    description:
      "Casa Verde di Firdaus Residence adalah pilihan tepat bagi Anda yang menginginkan hunian nyaman dan berkualitas. Dengan lokasi strategis, desain modern, fasilitas lengkap, dan lingkungan asri, perumahan ini akan memberikan kenyamanan dan kebahagiaan bagi Anda dan keluarga.",
    detail_blog: "./content/blog-1.html",
    image_blog: "./img/house-1.png",
  },
  {
    id: 2,
    title:
      "Firdaus Residence Hunian Mewah dengan Konsep Sky Villa yang Memanjakan",
    date: "28 September 2024, 20.19",
    description:
      "Mimpikan hunian yang memberikan kenyamanan dan kemewahan layaknya tinggal di sebuah sky villa? Firdaus Residence hadir dengan konsep unik yang menggabungkan keindahan alam dan fasilitas modern. Setiap rumah dirancang dengan cermat untuk memberikan pengalaman tinggal yang tak terlupakan.",
    detail_blog: "./content/blog-2.html",
    image_blog: "./img/house-2.png",
  },
];

function generateBlogHTML(blogPost) {
  return `
      <div class="card mb-4">
          <div class="row">
              <div class="col-md-4">
                  <img src="${blogPost.image_blog}" width="100%" height="100%" />
              </div>
              <div class="col-md-8 p-4">
                  <div>
                      <h5>${blogPost.title}</h5>
                      <div class="blog-date d-flex mt-1">
                          <i class="fa fa-calendar me-2 mt-1"></i>
                          <p>${blogPost.date}</p>
                      </div>
                      <p class="description-blog mt-1">${blogPost.description}</p>
                      <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-primary btn-readmore">
                         <i class="fa fa-book me-1"></i>
                         read more
                      </a
                  </div>
              </div>
          </div>
      </div>
  `;
}

function generateLatestBlogHTML(blogPost) {
  return `
      <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-items">
          <p>${blogPost.title}</p>
          <div class="blog-date d-flex mt-1">
              <i class="fa fa-calendar me-2 mt-1"></i>
              <p>${blogPost.date}</p>
          </div>
          <hr>
      </a>
  `;
}

function renderBlogPosts(filteredBlogData, isFiltered) {
  const blogContainer = document.getElementById("blogContainer");
  const latestBlogContent = document.getElementById("latestBlogContent");

  // render latest blog
  if (latestBlogContent != null) {
    //clear previous content
    latestBlogContent.innerHTML = "";

    const lastTwoBlogPosts = blogData.slice(-2);
    lastTwoBlogPosts.forEach((blogPost) => {
      latestBlogContent.innerHTML += generateLatestBlogHTML(blogPost);
    });
  }

  if (blogContainer == null) {
    return; // skipped
  }

  // clear previous content
  blogContainer.innerHTML = "";

  // check filtering data
  if (isFiltered) {
    if (filteredBlogData.length == 0) {
      const emptyStateDiv = document.createElement("div");
      emptyStateDiv.textContent = "No blog posts available";
      blogContainer.appendChild(emptyStateDiv);
    }
    filteredBlogData.forEach((blogPost) => {
      blogContainer.innerHTML = generateBlogHTML(blogPost);
    });
  } else {
    blogData.forEach((blogPost) => {
      blogContainer.innerHTML += generateBlogHTML(blogPost);
    });
  }
}

function searchBlog(input) {
  const searchTerm = input.value.toLowerCase();
  const filteredBlogData = [];
  blogData.forEach((blogPost) => {
    if (blogPost.title.toLowerCase().includes(searchTerm)) {
      filteredBlogData.push(blogPost);
    }
  });
  console.log("blogData", blogData);
  console.log("searchTerm", searchTerm);
  console.log("filteredBlogData", filteredBlogData);

  if (searchTerm != null && searchTerm != "" && searchTerm != undefined) {
    renderBlogPosts(filteredBlogData, true);
  } else {
    renderBlogPosts([], false);
  }
}

// render blog posts when page loads
window.onload = renderBlogPosts([], false);

// get value params query id
var idBlogValue = searchParams.get("id");

if (idBlogValue != null && idBlogValue != "") {
  const filteredBlogData = getBlogById(parseInt(idBlogValue, 10));
  if (filteredBlogData != null && filteredBlogData != undefined) {
    document.getElementById("cardDetailImg").src = filteredBlogData.image_blog;
    document.getElementById("tgl-blog").innerText = filteredBlogData.date;
    document.getElementById("title-blog").innerText = filteredBlogData.title;
    loadDetailBlog(filteredBlogData.detail_blog);
  } else {
    console.log("error on data id parameter: " + idBlogValue);
  }
}

function getBlogById(blogId) {
  return blogData.filter((blog) => blog.id === blogId)[0]; // assuming that id is unique
}

// function for load detail blog data
function loadDetailBlog(detailBlogURL) {
  const cardDetailBlog = document.getElementById("cardDetailBlog");
  if (cardDetailBlog == null || cardDetailBlog == undefined) {
    console.log("no element has id cardDetailBlog");
    return;
  }

  document.getElementById("cardDetailBlog").src = detailBlogURL;
}
