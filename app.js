/**
 * Pizza Hot - Interactive Menu Engine
 * Built for a professional, premium experience.
 */

const menuData = [
  // Categories: vegetables, chicken, hot_meats, cold_meats, choice, appetizers, salads, sauces, drinks

  // -- Vegetables --
  {
    id: 1,
    category: "vegetables",
    name_ar: "الفصول الأربعة",
    name_en: "Four Seasons",
    desc_ar: "فليفلة، بندورة، زيتون، فطر",
    desc_en: "Peppers, Tomatoes, Olives, Mushrooms",
    prices: { xsmall: "--", small: 600, medium: 850, large: 1200 },
    image: "images/pizzas/فصول.jpg"
  },
  {
    id: 2,
    category: "vegetables",
    name_ar: "فطر",
    name_en: "Mushroom",
    desc_ar: "صوص، جبنة، فطر",
    desc_en: "Sauce, Cheese, Mushroom",
    prices: { xsmall: "--", small: 600, medium: 850, large: 1200 },
    image: "images/pizzas/mushroom.png"
  },
  {
    id: 3,
    category: "vegetables",
    name_ar: "ذرة",
    name_en: "Corn",
    desc_ar: "صوص، جبنة، ذرة",
    desc_en: "Sauce, Cheese, Corn",
    prices: { xsmall: "--", small: 600, medium: 850, large: 1200 },
    image: "images/pizzas/ذرة.jpg"
  },
  {
    id: 4,
    category: "vegetables",
    name_ar: "مارغريتا",
    name_en: "Margherita",
    desc_ar: "صوص، جبنة",
    desc_en: "Sauce, Cheese",
    prices: { xsmall: "--", small: 600, medium: 850, large: 1200 },
    image: "images/pizzas/مرغريتا.jpg"
  },
  {
    id: 5,
    category: "vegetables",
    name_ar: "فور تشيز",
    name_en: "Four Cheese",
    desc_ar: "أربع أنواع جبنة (بلو تشيز، بارميزان، تشيدر، موزاريلا)",
    desc_en: "Four types of cheese (Blue cheese, Parmesan, Cheddar, Mozzarella)",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/فورتشيز.jpg"
  },

  // -- Chicken --
  {
    id: 6,
    category: "chicken",
    name_ar: "شيش طاووق",
    name_en: "Shish Taouk",
    desc_ar: "صوص، جبنة، شيش طاووق",
    desc_en: "Sauce, Cheese, Shish Taouk",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/شيش.jpg"
  },
  {
    id: 7,
    category: "chicken",
    name_ar: "باربيكيو",
    name_en: "BBQ",
    desc_ar: "صوص الباربيكيو، جبنة، قطع دجاج، فطر",
    desc_en: "BBQ Sauce, Cheese, Chicken chunks, Mushroooms",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/باربكيو.jpg"
  },
  {
    id: 8,
    category: "chicken",
    name_ar: "مكسيكي",
    name_en: "Mexican",
    desc_ar: "صوص، جبنة، قطع دجاج حارة، فليفلة، بصل، بهارات مكسيكي",
    desc_en: "Sauce, Cheese, Spicy chicken, Peppers, Onions, Mexican spices",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/مكسيكي.jpg"
  },
  {
    id: 9,
    category: "chicken",
    name_ar: "رانش (عادي أو سبايسي)",
    name_en: "Ranch (Normal or Spicy)",
    desc_ar: "صوص الرانش، جبنة، قطع دجاج، حبش مدخن",
    desc_en: "Ranch Sauce, Cheese, Chicken chunks, Smoked Turkey",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/ranch pizza.png"
  },

  // -- Hot Meats --
  {
    id: 10,
    category: "hot_meats",
    name_ar: "سجق",
    name_en: "Sausage",
    desc_ar: "صوص، جبنة، فطر، سجق",
    desc_en: "Sauce, Cheese, Mushroom, Sausage",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/سجق.jpg"
  },
  {
    id: 11,
    category: "hot_meats",
    name_ar: "فيلادلفيا ستيك",
    name_en: "Philadelphia Steak",
    desc_ar: "صوص الفيلادلفيا، جبنة، بصل، شرائح لحمة، فطر فريش، فليفلة",
    desc_en: "Philadelphia Sauce, Cheese, Onion, Meat slices, Fresh Mushroom, Peppers",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/philadelphia.png"
  },
  {
    id: 12,
    category: "hot_meats",
    name_ar: "سوبريم",
    name_en: "Supreme",
    desc_ar: "صوص، جبنة، لحم مفروم، بيبيروني، فطر، فليفلة، زيتون",
    desc_en: "Sauce, Cheese, Minced meat, Pepperoni, Mushroom, Peppers, Olives",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/سوبريم.jpg"
  },

  // -- Cold Meats --
  {
    id: 13,
    category: "cold_meats",
    name_ar: "سلامي",
    name_en: "Salami",
    desc_ar: "صوص، جبنة، سلامي",
    desc_en: "Sauce, Cheese, Salami",
    prices: { xsmall: "--", small: 700, medium: 1050, large: 1400 },
    image: "images/pizzas/سلامي.jpg"
  },
  {
    id: 14,
    category: "cold_meats",
    name_ar: "بيبيروني",
    name_en: "Pepperoni",
    desc_ar: "صوص، جبنة، بيبيروني",
    desc_en: "Sauce, Cheese, Pepperoni",
    prices: { xsmall: "--", small: 700, medium: 1050, large: 1400 },
    image: "images/pizzas/ببروني.jpg"
  },
  {
    id: 15,
    category: "cold_meats",
    name_ar: "هوت دوغ",
    name_en: "Hot Dog",
    desc_ar: "صوص، جبنة، هوت دوغ",
    desc_en: "Sauce, Cheese, Hot Dog",
    prices: { xsmall: "--", small: 700, medium: 1050, large: 1400 },
    image: "images/pizzas/هةت دوغ.jpg"
  },
  {
    id: 16,
    category: "cold_meats",
    name_ar: "حبش مدخن",
    name_en: "Smoked Turkey",
    desc_ar: "صوص، جبنة، حبش مدخن",
    desc_en: "Sauce, Cheese, Smoked Turkey",
    prices: { xsmall: "--", small: 700, medium: 1050, large: 1400 },
    image: "images/pizzas/حبش.jpg"
  },
  {
    id: 17,
    category: "cold_meats",
    name_ar: "روستو بقر مدخن",
    name_en: "Smoked Beef Roast",
    desc_ar: "صوص، جبنة، روستو بقر",
    desc_en: "Sauce, Cheese, Smoked Beef Roast",
    prices: { xsmall: "--", small: 700, medium: 1050, large: 1400 },
    image: "images/pizzas/سلامي.jpg"
  },
  {
    id: 18,
    category: "cold_meats",
    name_ar: "لحومات باردة",
    name_en: "Mixed Cold Meats",
    desc_ar: "صوص، جبنة، سلامي، بيبيروني، هوت دوغ، حبش مدخن",
    desc_en: "Sauce, Cheese, Salami, Pepperoni, Hot Dog, Smoked Turkey",
    prices: { xsmall: "--", small: 800, medium: 1200, large: 1600 },
    image: "images/pizzas/لحومات باردة.jpg"
  },

  // -- Choice --
  {
    id: 19,
    category: "choice",
    name_ar: "بيتزا كل نصف شكل",
    name_en: "Half and Half Pizza",
    desc_ar: "حسب الطلب",
    desc_en: "As per order",
    prices: { xsmall: "--", small: 750, medium: 1100, large: 1500 },
    image: "images/pizzas/مشكلة.jpg"
  },
  {
    id: 20,
    category: "choice",
    name_ar: "بيتزا كل ثلث شكل",
    name_en: "Third and Third Pizza",
    desc_ar: "صوص، جبنة، هوت دوغ، شيش، سجق",
    desc_en: "Sauce, Cheese, Hot Dog, Shish, Sausage",
    prices: { xsmall: "--", small: 800, medium: 1200, large: 1600 },
    image: "images/pizzas/كل تلت شكل.jpg"
  },
  {
    id: 21,
    category: "choice",
    name_ar: "بيتزا كل ربع شكل",
    name_en: "Quarter and Quarter Pizza",
    desc_ar: "صوص، جبنة، هوت دوغ، حبش، بيبيروني، ذرة",
    desc_en: "Sauce, Cheese, Hot Dog, Turkey, Pepperoni, Corn",
    prices: { xsmall: "--", small: 800, medium: 1200, large: 1600 },
    image: "images/pizzas/مشكلة.jpg"
  },
  {
    id: 22,
    category: "choice",
    name_ar: "لحومات ساخنة كل ثلث شكل",
    name_en: "Hot Meats (Third and Third)",
    desc_ar: "حسب الطلب",
    desc_en: "As per order",
    prices: { xsmall: "--", small: 850, medium: 1300, large: 1700 },
    image: "images/pizzas/كل تلت شكل.jpg"
  },

  // -- Appetizers --
  {
    id: 23,
    category: "appetizers",
    name_ar: "بطاطا بالجبنة",
    name_en: "Cheese Fries",
    desc_ar: "بطاطا، جبنة موزاريلا، صوص أبيض، بهارات",
    desc_en: "Fries, Mozzarella, White sauce, Spices",
    price: 400,
    image: "images/pizzas/بطاطا بالجبنة.JPG"
  },
  {
    id: 24,
    category: "appetizers",
    name_ar: "بطاطا بالباربيكيو",
    name_en: "BBQ Fries",
    desc_ar: "بطاطا، جبنة موزاريلا، صوص باربيكيو، صوص أبيض",
    desc_en: "Fries, Mozzarella, BBQ sauce, White sauce",
    price: 450,
    image: "images/pizzas/بطاطا باربكيو.png"
  },
  {
    id: 25,
    category: "appetizers",
    name_ar: "بطاطا سادة",
    name_en: "Plain Fries",
    desc_ar: "بطاطا مقلية",
    desc_en: "Fried potatoes",
    price: 300,
    image: "images/pizzas/بطاطا.JPG"
  },
  {
    id: 36,
    category: "appetizers",
    name_ar: "خبز بالتوم",
    name_en: "Garlic Bread",
    desc_ar: "خبز طازج محمص مع زبدة الثوم والأعشاب.",
    desc_en: "Fresh bread baked with garlic butter and herbs.",
    price: "--",
    image: "images/pizzas/garlic-bread.jpg"
  },

  // -- Salads --
  {
    id: 26,
    category: "salads",
    name_ar: "سلطة ذرة",
    name_en: "Corn Salad",
    desc_ar: "ذرة، فطر، فليفلة، صوص أبيض",
    desc_en: "Corn, Mushroom, Peppers, White sauce",
    price: 200,
    image: "images/pizzas/سلطة ذرة.jpg"
  },
  {
    id: 27,
    category: "salads",
    name_ar: "سلطة سيزر",
    name_en: "Caesar Salad",
    desc_ar: "خس، توست، دجاج، صوص سيزر، جبنة بارميزان",
    desc_en: "Lettuce, Toast, Chicken, Caesar sauce, Parmesan cheese",
    price: 450,
    image: "images/pizzas/سيزر.jpg"
  },

  // -- Sauces --
  {
    id: 28,
    category: "sauces",
    name_ar: "صوص أبيض",
    name_en: "White Sauce",
    desc_ar: "",
    desc_en: "",
    price: 30,
    image: "images/pizzas/صوص ابيض.jpg"
  },
  {
    id: 29,
    category: "sauces",
    name_ar: "صوص باربيكيو",
    name_en: "BBQ Sauce",
    desc_ar: "",
    desc_en: "",
    price: 70,
    image: "images/pizzas/صوص باربكيو.jpg"
  },
  {
    id: 30,
    category: "sauces",
    name_ar: "صوص رانش",
    name_en: "Ranch Sauce",
    desc_ar: "",
    desc_en: "",
    price: 70,
    image: "images/pizzas/ranch.jpg"
  },
  {
    id: 31,
    category: "sauces",
    name_ar: "صوص بوفالو",
    name_en: "Buffalo Sauce",
    desc_ar: "",
    desc_en: "",
    price: 70,
    image: "images/pizzas/buffalo.png"
  },
  {
    id: 32,
    category: "sauces",
    name_ar: "صوص سيزر",
    name_en: "Caesar Sauce",
    desc_ar: "",
    desc_en: "",
    price: 70,
    image: "images/pizzas/caesar.jpg"
  },

  // -- Drinks --
  {
    id: 33,
    category: "drinks",
    name_ar: "مشروبات غازية 330 مل",
    name_en: "Soft Drink 330ml",
    desc_ar: "كوكاكولا، فانتا، سبرايت",
    desc_en: "Coca Cola, Fanta, Sprite",
    price: 80,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 34,
    category: "drinks",
    name_ar: "مياه صغيرة",
    name_en: "Small Water",
    desc_ar: "",
    desc_en: "",
    price: 50,
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 35,
    category: "drinks",
    name_ar: "مياه كبيرة",
    name_en: "Large Water",
    desc_ar: "",
    desc_en: "",
    price: 100,
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// State Management
let currentLang = 'ar';
let currentCategory = 'all';
let categoryObserver = null;

const categoryConfig = {
  vegetables: { ar: "بيتزا الخضار", en: "Vegetables" },
  chicken: { ar: "بيتزا الدجاج", en: "Chicken" },
  hot_meats: { ar: "بيتزا اللحومات الساخنة", en: "Hot Meats" },
  cold_meats: { ar: "بيتزا اللحومات الباردة", en: "Cold Meats" },
  choice: { ar: "بيتزا حسب الطلب", en: "Choice Pizza" },
  appetizers: { ar: "المقبلات", en: "Appetizers" },
  salads: { ar: "السلطات", en: "Salads" },
  sauces: { ar: "الصوصات", en: "Sauces" },
  drinks: { ar: "المشروبات", en: "Drinks" }
};

// DOM Elements
const pizzaGrid = document.getElementById('pizzaGrid');
const filterTabs = document.querySelectorAll('.filter-tab');
const langButtons = document.querySelectorAll('.lang-btn');
const modal = document.getElementById('pizzaModal');
const closeModal = document.getElementById('closeModal');

/**
 * Format price with thousands separator
 */
function formatPrice(val) {
  if (val === '--') return '--';
  return new Intl.NumberFormat().format(val);
}

/**
 * Initialize Application
 */
function init() {
  renderPizzas();
  setupEventListeners();
  setupFloatingBackground();
}

/**
 * Dynamically generate high-density floating background elements
 */
function setupFloatingBackground() {
  const container = document.getElementById('floatingBg');
  if (!container) return;

  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 12 : 25;
  const fragments = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    const isMushroom = Math.random() > 0.5;

    item.src = isMushroom ? 'images/bg/mushroom.png' : 'images/bg/pepper.png';
    item.className = `floating-item ${isMushroom ? 'mushroom' : 'pepper'}`;

    // Randomize positioning
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * -20; // Negative delay so they start at different states
    const duration = 15 + Math.random() * 20; // 15s to 35s

    item.style.top = `${top}%`;
    item.style.left = `${left}%`;
    item.style.animationDelay = `${delay}s`;
    item.style.animationDuration = `${duration}s`;

    fragments.appendChild(item);
  }

  container.appendChild(fragments);
}


/**
 * Render Pizza Cards
 */
function renderPizzas() {
  pizzaGrid.innerHTML = '';

  const filteredItems = menuData.filter(item =>
    currentCategory === 'all' || item.category === currentCategory
  );

  // Group items by category if "All" is selected
  const groups = {};
  if (currentCategory === 'all') {
    filteredItems.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
  } else {
    groups[currentCategory] = filteredItems;
  }

  // Iterate through groups and render
  Object.keys(groups).forEach((catKey) => {
    const groupItems = groups[catKey];
    if (groupItems.length === 0) return;

    // Add Category Header (Only if multiple categories are visible or if filtered)
    const header = document.createElement('div');
    header.className = 'category-group-header animate-fade-in category-section';
    header.id = `cat-${catKey}`; // Anchor for ScrollSpy
    const catName = categoryConfig[catKey] ?
      (currentLang === 'ar' ? categoryConfig[catKey].ar : categoryConfig[catKey].en) :
      catKey;
    header.innerHTML = `<h2>${catName}</h2><div class="header-line"></div>`;
    pizzaGrid.appendChild(header);

    groupItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'pizza-card animate-fade-in';
      card.style.animationDelay = `${index * 0.05}s`;

      const name = currentLang === 'ar' ? item.name_ar : item.name_en;
      const desc = currentLang === 'ar' ? item.desc_ar : item.desc_en;

      let priceDisplay = '';
      if (item.prices) {
        const sizeOrder = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
        let minPrice = null;
        for (const sz of sizeOrder) {
          if (item.prices[sz] !== undefined && item.prices[sz] !== '--') {
            minPrice = item.prices[sz];
            break;
          }
        }
        const fromLabel = currentLang === 'ar' ? 'بدءاً من' : 'From';
        priceDisplay = minPrice !== null ? `${fromLabel} ${formatPrice(minPrice)}` : '--';
      } else {
        priceDisplay = formatPrice(item.price);
      }

      card.innerHTML = `
              <div class="pizza-img-box" onclick="openItemDetails(${item.id})">
                  <img src="${item.image}" alt="${name}" class="pizza-img" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000'">
              </div>
              <div class="pizza-content">
                  <h3 class="pizza-title">${name}</h3>
                  <p class="pizza-desc">${desc}</p>
                  <div class="pizza-footer">
                      <span class="pizza-price">${priceDisplay}</span>
                      <button class="btn-order" onclick="openItemDetails(${item.id})">
                          ${currentLang === 'ar' ? 'التفاصيل' : 'Details'}
                      </button>
                  </div>
              </div>
          `;

      pizzaGrid.appendChild(card);
    });
  });

  // Re-initialize ScrollSpy after rendering
  setupCategoryScrollSpy();
}

/**
 * Open Modal with Item Details
 */
window.openItemDetails = function (id) {
  const item = menuData.find(p => p.id === id);
  if (!item) return;

  const name = currentLang === 'ar' ? item.name_ar : item.name_en;
  const desc = currentLang === 'ar' ? item.desc_ar : item.desc_en;

  document.getElementById('modalPizzaImg').src = item.image;
  document.getElementById('modalPizzaName').innerText = name;
  document.getElementById('modalPizzaDesc').innerText = desc;

  const priceContainer = document.getElementById('modalPizzaPrice');
  const crustContainer = document.getElementById('modalPizzaCrust');

  // Reset crust container
  crustContainer.innerHTML = '';

  function getPriceHtml(price) {
    if (price === '--') {
      return `
        <div class="dual-price-wrapper">
          <div class="price-box new">
            <span class="price-label">${currentLang === 'ar' ? 'السعر الجديد' : 'New SYP'}</span>
            <span class="price-value price-placeholder">--</span>
          </div>
          <div class="price-box old">
            <span class="price-label">${currentLang === 'ar' ? 'السعر القديم' : 'Old SYP'}</span>
            <span class="price-value price-placeholder">--</span>
          </div>
        </div>
      `;
    }
    const oldSyp = price * 100;
    return `
      <div class="dual-price-wrapper">
        <div class="price-box new">
          <span class="price-label">${currentLang === 'ar' ? 'السعر الجديد' : 'New SYP'}</span>
          <span class="price-value">${formatPrice(price)}</span>
        </div>
        <div class="price-box old">
          <span class="price-label">${currentLang === 'ar' ? 'السعر القديم' : 'Old SYP'}</span>
          <span class="price-value">${formatPrice(oldSyp)}</span>
        </div>
      </div>
    `;
  }

  if (item.prices) {
    // Build price argument safely for onclick (handles '--' placeholder)
    const pa = (p) => p === '--' ? `'--'` : p;
    const xsPrice = item.prices.xsmall !== undefined ? item.prices.xsmall : '--';
    priceContainer.innerHTML = `
        ${getPriceHtml(xsPrice)}
        <div class="size-selector">
            <button class="size-btn active" data-size="xsmall" onclick="updatePrice(${item.id}, 'xsmall', ${pa(xsPrice)}, this)">${currentLang === 'ar' ? 'صغير جداً' : 'X Small'}</button>
            <button class="size-btn" data-size="small" onclick="updatePrice(${item.id}, 'small', ${item.prices.small}, this)">${currentLang === 'ar' ? 'صغير' : 'Small'}</button>
            <button class="size-btn" data-size="medium" onclick="updatePrice(${item.id}, 'medium', ${item.prices.medium}, this)">${currentLang === 'ar' ? 'وسط' : 'Medium'}</button>
            <button class="size-btn" data-size="large" onclick="updatePrice(${item.id}, 'large', ${item.prices.large}, this)">${currentLang === 'ar' ? 'كبير' : 'Large'}</button>
        </div>
    `;

    // Add Crust Options for Pizzas
    crustContainer.innerHTML = `
        <span class="modal-info-label">${currentLang === 'ar' ? 'نوع العجينة' : 'Crust Type'}</span>
        <div class="crust-selector">
            <button class="crust-btn active" onclick="selectCrust(this)">
                <img src="images/pizzas/عجينة اورجينال.png" alt="${currentLang === 'ar' ? 'اورجينال' : 'Original'}" class="crust-img">
                <span>${currentLang === 'ar' ? 'اورجينال' : 'Original'}</span>
            </button>
            <button class="crust-btn" onclick="selectCrust(this)">
                <img src="images/pizzas/عجينة رقيقة.png" alt="${currentLang === 'ar' ? 'رقيقة' : 'Thin'}" class="crust-img">
                <span>${currentLang === 'ar' ? 'رقيقة' : 'Thin'}</span>
            </button>
        </div>
    `;
  } else {
    priceContainer.innerHTML = getPriceHtml(item.price);
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

/**
 * Handle Crust Selection
 */
window.selectCrust = function (btn) {
  const container = btn.closest('.crust-selector');
  container.querySelectorAll('.crust-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

window.updatePrice = function (id, size, price, button) {
  const item = menuData.find(p => p.id === id);
  if (!item || !item.prices) return;

  // Update active class
  const selectedButton = button || document.querySelector(`.size-btn[data-size="${size}"]`);
  const selector = selectedButton ? selectedButton.closest('.size-selector') : null;
  if (selector) {
    selector.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    selectedButton.classList.add('active');
  }

  // Update Dual Price Display
  const wrapper = document.querySelector('.dual-price-wrapper');
  if (wrapper) {
    if (price === '--') {
      wrapper.innerHTML = `
        <div class="price-box new">
          <span class="price-label">${currentLang === 'ar' ? 'السعر الجديد' : 'New SYP'}</span>
          <span class="price-value price-placeholder">--</span>
        </div>
        <div class="price-box old">
          <span class="price-label">${currentLang === 'ar' ? 'السعر القديم' : 'Old SYP'}</span>
          <span class="price-value price-placeholder">--</span>
        </div>
      `;
    } else {
      const oldSyp = price * 100;
      wrapper.innerHTML = `
        <div class="price-box new">
          <span class="price-label">${currentLang === 'ar' ? 'السعر الجديد' : 'New SYP'}</span>
          <span class="price-value">${formatPrice(price)}</span>
        </div>
        <div class="price-box old">
          <span class="price-label">${currentLang === 'ar' ? 'السعر القديم' : 'Old SYP'}</span>
          <span class="price-value">${formatPrice(oldSyp)}</span>
        </div>
      `;
    }
  }
};


/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  // Language Toggle
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.dataset.lang;
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
      updateStaticText();
      renderPizzas();
    });
  });

  // Category Filter
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // If already in 'all' mode and clicking a category, scroll to it
      if (currentCategory === 'all' && category !== 'all') {
        const targetSection = document.getElementById(`cat-${category}`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = category;
      renderPizzas();

      // If switched to 'all', scroll to top of menu
      if (category === 'all') {
        const menuTop = document.querySelector('.menu-section').offsetTop;
        window.scrollTo({
          top: menuTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Close Modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  // Header Location Shortcut
  const headerLocationBtn = document.getElementById('headerLocationBtn');
  if (headerLocationBtn) {
    headerLocationBtn.addEventListener('click', () => {
      const locationSection = document.getElementById('location');
      if (locationSection) {
        locationSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/**
 * Update non-dynamic UI text based on language
 */
function updateStaticText() {
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.innerText = el.getAttribute(`data-${currentLang}`);
  });
}

/**
 * Pro Pizza Scroll Animation Logic (Canvas Sequence Player)
 * Features: High-performance Canvas, Smooth Interpolation, and Unified UI Sync
 */
function setupProScrollAnimation() {
  const container = document.querySelector('.pizza-scroll-container');
  const canvas = document.getElementById('pizzaCanvas');
  const ctx = canvas?.getContext('2d');
  const animationBox = document.getElementById('pizzaAnimationBox');
  const menuSection = document.querySelector('.menu-section');
  const pillLeft = document.getElementById('sidePillLeft');
  const pillRight = document.getElementById('sidePillRight');

  if (!container || !canvas || !ctx || !animationBox || !menuSection || !pillLeft || !pillRight) return;

  const frameCount = 56;
  const framePath = 'images/pizza cut in half/ezgif-frame-';
  const frames = []; // Stores processed transparent canvases
  let imagesLoaded = 0;

  // Optimized smoothing state
  let scrollProgress = 0;
  let smoothedProgress = 0;
  let currentFrameIndex = -1;

  // Smoothing constant (0.1 for high-end inertia)
  const lerpFactor = 0.1;

  // Chroma Key processing
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tCtx = tempCanvas.getContext('2d');

  // 1. Preload and Process frames
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const frameNum = i.toString().padStart(3, '0');
    const index = i - 1;

    img.onload = () => {
      try {
        tCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        tCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);

        const imageData = tCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;

        // Chroma Key: Black to Transparent
        for (let j = 0; j < data.length; j += 4) {
          if (data[j] < 20 && data[j + 1] < 20 && data[j + 2] < 20) {
            data[j + 3] = 0;
          }
        }
        tCtx.putImageData(imageData, 0, 0);

        const offscreen = document.createElement('canvas');
        offscreen.width = canvas.width;
        offscreen.height = canvas.height;
        offscreen.getContext('2d').drawImage(tempCanvas, 0, 0);
        frames[index] = offscreen;
      } catch (e) {
        console.warn("Falling back to CSS blending.");
        canvas.style.mixBlendMode = 'screen';
        frames[index] = img;
      }

      imagesLoaded++;
      if (imagesLoaded === frameCount) {
        startAnimationLoop();
      }
    };
    img.src = `${framePath}${frameNum}.jpg`;
  }

  // 2. RAF handle — shared between scroll listener and animation loop
  let rafId = null;

  // 3. Render function — self-pauses when smoothedProgress has caught up
  function render() {
    const diff = scrollProgress - smoothedProgress;

    if (Math.abs(diff) < 0.0008) {
      // Snap exactly and do one final draw, then stop until next scroll event
      smoothedProgress = scrollProgress;
      const snap = Math.round(smoothedProgress * (frameCount - 1));
      if (snap !== currentFrameIndex) {
        currentFrameIndex = snap;
        const frame = frames[currentFrameIndex];
        if (frame) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
        }
      }
      updateUIStates(smoothedProgress);
      rafId = null;
      return;
    }

    smoothedProgress += diff * lerpFactor;
    const targetFrame = Math.round(smoothedProgress * (frameCount - 1));
    if (targetFrame !== currentFrameIndex) {
      currentFrameIndex = targetFrame;
      const frame = frames[currentFrameIndex];
      if (frame) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
      }
    }
    updateUIStates(smoothedProgress);
    rafId = requestAnimationFrame(render);
  }

  // Optimized Scroll Listener — wakes the RAF loop only when needed
  window.addEventListener('scroll', () => {
    const rect = container.getBoundingClientRect();
    const progress = -rect.top / (rect.height - window.innerHeight);
    scrollProgress = Math.max(0, Math.min(1, progress));
    if (!rafId && imagesLoaded === frameCount) {
      rafId = requestAnimationFrame(render);
    }
  }, { passive: true });

  function startAnimationLoop() {
    rafId = requestAnimationFrame(render);
  }

  function updateUIStates(progress) {
    // Dynamic Scaled Side Pills - "Rise and Disappear" Effect
    // Pill 1 (Left Content) - Centered, Vertical Rise Only
    const p1Start = 0.1, p1End = 0.5;
    const p1Factor = Math.max(0, Math.min(1, (progress - p1Start) / (p1End - p1Start)));
    const p1Alpha = p1Factor > 0 && p1Factor < 1 ? Math.sin(Math.PI * p1Factor) : 0;
    const p1Rise = 300 - (p1Factor * 800);

    pillLeft.style.opacity = p1Alpha;
    pillLeft.style.transform = `translate(-50%, calc(-50% + ${p1Rise}px)) scale(${1 + (p1Alpha * 0.1)})`;
    pillLeft.style.visibility = p1Alpha > 0.01 ? 'visible' : 'hidden';

    // Pill 2 (Right Content) - Centered, Vertical Rise Only
    const p2Start = 0.4, p2End = 0.8;
    const p2Factor = Math.max(0, Math.min(1, (progress - p2Start) / (p2End - p2Start)));
    const p2Alpha = p2Factor > 0 && p2Factor < 1 ? Math.sin(Math.PI * p2Factor) : 0;
    const p2Rise = 300 - (p2Factor * 800);

    pillRight.style.opacity = p2Alpha;
    pillRight.style.transform = `translate(-50%, calc(-50% + ${p2Rise}px)) scale(${1 + (p2Alpha * 0.1)})`;
    pillRight.style.visibility = p2Alpha > 0.01 ? 'visible' : 'hidden';


    // Pizza Container Expansion
    const scaleProgress = Math.max(0, Math.min(1, progress / 0.5));
    animationBox.style.transform = `scale(${1 + (scaleProgress * 0.4)})`;

    // Menu Section Reveal
    const revealThreshold = 0.8;
    const revealProgress = progress > revealThreshold ? (progress - revealThreshold) / (1 - revealThreshold) : 0;

    menuSection.style.opacity = revealProgress;
    menuSection.style.transform = `translateY(${(1 - revealProgress) * 150}px)`;
    menuSection.style.zIndex = revealProgress > 0.9 ? "20" : "10";
  }


}

// Start User Experience
init();
setupProScrollAnimation();

/**
 * Category ScrollSpy
 * Automatically highlights the active category in the filter bar during "All" view
 */
function setupCategoryScrollSpy() {
  if (categoryObserver) {
    categoryObserver.disconnect();
    categoryObserver = null;
  }

  if (currentCategory !== 'all') return;
  if (typeof IntersectionObserver === 'undefined') return;

  const sections = document.querySelectorAll('.category-section');
  const tabs = document.querySelectorAll('.filter-tab');

  const observerOptions = {
    root: null,
    rootMargin: '-160px 0px -70% 0px', // Adjusted for sticky header
    threshold: 0
  };

  categoryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('cat-', '');

        tabs.forEach(tab => {
          if (tab.dataset.category === id) {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Scroll tab into view if container is overflowing (mobile)
            tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => categoryObserver.observe(section));
}

/**
 * Branch Configuration for Contact Section
 */
const branchConfig = {
  malki: {
    lat: 33.513412554802834,
    lng: 36.274720239021704,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6653.074670898194!2d36.274720239021704!3d33.513412554802834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e74d1f8f9b4b%3A0xc0f494ee8cb65f84!2sPizza%20hot!5e0!3m2!1sen!2sin!4v1773497156508!5m2!1sen!2sin"
  },
  midan: {
    lat: 33.49325620921114,
    lng: 36.296490004186026,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398.9624088250382!2d36.296490004186026!3d33.49325620921114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1d99c2cac8d%3A0xff665c2c43fbf630!2z2KfZhNmB2LfZitix2Kkg2KfZhNiz2KfYrtmG2Kk!5e0!3m2!1sen!2sin!4v1773499505527!5m2!1sen!2sin"
  },
  kafarsuseh: {
    lat: 33.50089679782757,
    lng: 36.27516329726185,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.87730770920194!2d36.27516329726185!3d33.50089679782757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1f6d74dbbd7%3A0xbc301596b0719340!2sTarget%20Market!5e0!3m2!1sen!2s!4v1774240870536!5m2!1sen!2s"
  }
};

let activeBranch = 'malki';

/**
 * Switch the active branch and update the map
 */
window.switchBranch = function (branchKey) {
  if (!branchConfig[branchKey]) return;

  activeBranch = branchKey;

  // Update branch item active state
  document.querySelectorAll('.branch-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeEl = document.getElementById(`branch-${branchKey}`);
  if (activeEl) activeEl.classList.add('active');

  // Update Map Iframe
  const mapIframe = document.getElementById('contactMap');
  if (mapIframe) {
    mapIframe.src = branchConfig[branchKey].mapUrl;
  }

  // Smooth scroll to map on mobile
  if (window.innerWidth < 992) {
    const mapCard = document.querySelector('.map-card');
    if (mapCard) {
      mapCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
};

/**
 * Get Directions to the current active branch
 * Uses a direct Google Maps URL for reliable redirection on all devices.
 */
window.getDirections = function () {
  const config = branchConfig[activeBranch];
  const restaurantLat = config.lat;
  const restaurantLng = config.lng;

  // Direct URL avoids async callbacks that mobile browsers often block.
  // Google Maps automatically handles "Your Location" if origin is omitted.
  const url = `https://www.google.com/maps/dir/?api=1&destination=${restaurantLat},${restaurantLng}&travelmode=driving`;
  window.open(url, '_blank');
};
