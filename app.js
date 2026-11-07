(function () {
  const STORAGE = {
    cart: "dongne_cart",
    orders: "dongne_orders",
    likes: "dongne_likes",
    coupons: "dongne_coupons",
    adminStores: "dongne_admin_stores",
    adminMenus: "dongne_admin_menus",
    adminAuth: "dongne_admin_auth",
    authUsers: "dongne_auth_users",
    authUser: "dongne_auth_user",
  };

  const categories = ["전체", "한식", "분식", "치킨", "중식", "일식", "카페·디저트", "버거·피자"];

  const baseStores = [
    {
      id: "store_1",
      name: "동네김밥",
      category: "분식",
      imageIndex: 0,
      rating: 4.8,
      reviewCount: 312,
      deliveryTime: "25~35분",
      deliveryFee: 2000,
      minimumOrderPrice: 12000,
      address: "서울 마포구 와우산로 12",
      openingHours: "09:30~21:30",
      status: "open",
    },
    {
      id: "store_2",
      name: "빨간떡볶이",
      category: "분식",
      imageIndex: 1,
      rating: 4.6,
      reviewCount: 428,
      deliveryTime: "20~30분",
      deliveryFee: 1500,
      minimumOrderPrice: 11000,
      address: "서울 마포구 독막로 8",
      openingHours: "11:00~23:30",
      status: "open",
    },
    {
      id: "store_3",
      name: "바삭치킨",
      category: "치킨",
      imageIndex: 2,
      rating: 4.9,
      reviewCount: 1038,
      deliveryTime: "35~45분",
      deliveryFee: 3000,
      minimumOrderPrice: 17000,
      address: "서울 마포구 양화로 32",
      openingHours: "14:00~01:00",
      status: "open",
    },
    {
      id: "store_4",
      name: "북경짜장",
      category: "중식",
      imageIndex: 3,
      rating: 4.5,
      reviewCount: 287,
      deliveryTime: "30~40분",
      deliveryFee: 2500,
      minimumOrderPrice: 13000,
      address: "서울 마포구 성미산로 21",
      openingHours: "10:30~21:00",
      status: "open",
    },
    {
      id: "store_5",
      name: "스시하루",
      category: "일식",
      imageIndex: 4,
      rating: 4.7,
      reviewCount: 198,
      deliveryTime: "35~50분",
      deliveryFee: 3500,
      minimumOrderPrice: 18000,
      address: "서울 마포구 월드컵북로 10",
      openingHours: "11:30~22:00",
      status: "open",
    },
    {
      id: "store_6",
      name: "카페온도",
      category: "카페·디저트",
      imageIndex: 5,
      rating: 4.8,
      reviewCount: 164,
      deliveryTime: "20~35분",
      deliveryFee: 2000,
      minimumOrderPrice: 9000,
      address: "서울 마포구 동교로 16",
      openingHours: "08:00~22:00",
      status: "open",
    },
    {
      id: "store_7",
      name: "골목비빔밥",
      category: "한식",
      imageIndex: 6,
      rating: 4.6,
      reviewCount: 233,
      deliveryTime: "25~40분",
      deliveryFee: 2500,
      minimumOrderPrice: 12000,
      address: "서울 마포구 잔다리로 11",
      openingHours: "10:00~20:30",
      status: "open",
    },
    {
      id: "store_8",
      name: "버거스팟",
      category: "버거·피자",
      imageIndex: 7,
      rating: 4.4,
      reviewCount: 329,
      deliveryTime: "25~35분",
      deliveryFee: 2500,
      minimumOrderPrice: 14000,
      address: "서울 마포구 홍익로 24",
      openingHours: "10:30~23:00",
      status: "open",
    },
    {
      id: "store_9",
      name: "피자도우",
      category: "버거·피자",
      imageIndex: 8,
      rating: 4.5,
      reviewCount: 276,
      deliveryTime: "35~45분",
      deliveryFee: 3000,
      minimumOrderPrice: 16000,
      address: "서울 마포구 어울마당로 27",
      openingHours: "11:00~24:00",
      status: "open",
    },
    {
      id: "store_10",
      name: "맑은국밥",
      category: "한식",
      imageIndex: 11,
      rating: 4.3,
      reviewCount: 141,
      deliveryTime: "40~50분",
      deliveryFee: 2500,
      minimumOrderPrice: 10000,
      address: "서울 마포구 연남로 31",
      openingHours: "10:00~15:00",
      status: "closed",
    },
  ];

  const baseMenus = [
    menu("menu_1", "store_1", "참치김밥", "고소한 참치와 아삭한 채소를 꽉 채운 김밥", 4500, 0, true),
    menu("menu_2", "store_1", "불고기김밥", "달짝지근한 불고기와 계란 지단 조합", 5200, 0),
    menu("menu_3", "store_1", "라볶이 세트", "라면사리와 떡볶이를 함께 즐기는 든든한 세트", 8500, 1, true),
    menu("menu_4", "store_1", "우동", "따뜻한 국물과 쫄깃한 면발", 6500, 10),
    menu("menu_5", "store_1", "모둠튀김", "김말이, 오징어, 야채튀김 구성", 5500, 1),

    menu("menu_6", "store_2", "국물떡볶이", "매콤달콤한 국물에 말랑한 밀떡", 9000, 1, true),
    menu("menu_7", "store_2", "치즈떡볶이", "모짜렐라 치즈를 듬뿍 올린 인기 메뉴", 11000, 1, true),
    menu("menu_8", "store_2", "순대", "촉촉하고 담백한 순대 한 접시", 6000, 1),
    menu("menu_9", "store_2", "꼬마김밥", "한입 크기로 먹기 좋은 미니 김밥", 5000, 0),
    menu("menu_10", "store_2", "매운오뎅", "칼칼한 국물의 꼬치 오뎅", 4500, 10, false, true),

    menu("menu_11", "store_3", "후라이드치킨", "겉은 바삭하고 속은 촉촉한 기본 치킨", 18000, 2, true),
    menu("menu_12", "store_3", "양념치킨", "매콤달콤한 특제 양념", 19000, 2),
    menu("menu_13", "store_3", "반반치킨", "후라이드와 양념을 한 번에", 20000, 2, true),
    menu("menu_14", "store_3", "치즈볼", "쫀득한 치즈볼 5개", 5500, 2),
    menu("menu_15", "store_3", "감자튀김", "짭조름하고 바삭한 사이드", 4500, 7),

    menu("menu_16", "store_4", "짜장면", "진한 춘장 소스와 탱글한 면발", 7500, 3, true),
    menu("menu_17", "store_4", "짬뽕", "해물 향 가득한 얼큰한 국물", 8500, 10),
    menu("menu_18", "store_4", "탕수육 소", "바삭한 튀김과 새콤달콤 소스", 16000, 2, true),
    menu("menu_19", "store_4", "볶음밥", "불향을 살린 고슬고슬 볶음밥", 8500, 6),
    menu("menu_20", "store_4", "군만두", "겉바속촉 군만두 8개", 5500, 3),

    menu("menu_21", "store_5", "모둠초밥 10p", "광어, 연어, 새우 등 기본 구성", 18000, 4, true),
    menu("menu_22", "store_5", "연어초밥 8p", "부드러운 연어를 두툼하게 올린 초밥", 16500, 4),
    menu("menu_23", "store_5", "사케동", "생연어와 간장 소스의 덮밥", 15000, 4),
    menu("menu_24", "store_5", "우동 세트", "초밥과 함께 먹기 좋은 미니 우동", 6000, 10),
    menu("menu_25", "store_5", "새우튀김", "바삭한 새우튀김 4개", 8000, 2, false, true),

    menu("menu_26", "store_6", "아메리카노", "깔끔한 산미의 데일리 커피", 3800, 5),
    menu("menu_27", "store_6", "바닐라라떼", "부드러운 우유와 달콤한 바닐라", 5200, 5, true),
    menu("menu_28", "store_6", "딸기케이크", "상큼한 딸기와 폭신한 시트", 6800, 5, true),
    menu("menu_29", "store_6", "크로플", "바삭한 크로플과 메이플 시럽", 6200, 5),
    menu("menu_30", "store_6", "자몽에이드", "톡 쏘는 탄산과 상큼한 자몽", 5900, 5),

    menu("menu_31", "store_7", "전주비빔밥", "나물과 고추장을 비벼 먹는 대표 메뉴", 11000, 6, true),
    menu("menu_32", "store_7", "제육덮밥", "매콤한 제육과 따뜻한 밥", 10500, 6),
    menu("menu_33", "store_7", "된장찌개", "구수한 된장과 두부, 채소", 9000, 11),
    menu("menu_34", "store_7", "불고기정식", "간장 불고기와 반찬 구성", 13500, 6),
    menu("menu_35", "store_7", "계란찜", "부드럽고 따뜻한 사이드", 4500, 6),

    menu("menu_36", "store_8", "클래식버거", "육즙 가득 패티와 신선한 채소", 9800, 7, true),
    menu("menu_37", "store_8", "치즈버거", "체다치즈를 두 장 넣은 진한 맛", 10800, 7),
    menu("menu_38", "store_8", "더블버거", "패티 두 장으로 든든하게", 13800, 7, true),
    menu("menu_39", "store_8", "감자튀김", "바삭한 프렌치프라이", 4300, 7),
    menu("menu_40", "store_8", "콜라", "시원한 탄산음료", 2500, 7),

    menu("menu_41", "store_9", "마르게리타 피자", "토마토, 바질, 모짜렐라 기본 피자", 16900, 8, true),
    menu("menu_42", "store_9", "페퍼로니 피자", "짭조름한 페퍼로니를 듬뿍", 18900, 8),
    menu("menu_43", "store_9", "고구마 피자", "달콤한 고구마 무스와 치즈", 19900, 8),
    menu("menu_44", "store_9", "치즈오븐스파게티", "치즈를 올려 구운 토마토 파스타", 8900, 10),
    menu("menu_45", "store_9", "샐러드", "가볍게 곁들이는 신선한 샐러드", 6900, 9),

    menu("menu_46", "store_10", "맑은돼지국밥", "담백하고 진한 돼지 육수", 9000, 11, true),
    menu("menu_47", "store_10", "얼큰국밥", "칼칼한 양념을 넣은 국밥", 9500, 11),
    menu("menu_48", "store_10", "수육 한 접시", "부드러운 수육과 새우젓", 15000, 11),
    menu("menu_49", "store_10", "공기밥", "따뜻한 흰쌀밥", 1000, 11),
  ];

  const guestUser = { id: "guest", name: "방문자", nickname: "방문자", email: "", username: "", birthDate: "", phone: "", address: "배달 주소를 등록해 주세요" };
  let user = { ...guestUser };

  const baseCoupons = [
    {
      id: "coupon_welcome_3000",
      title: "첫 주문 3,000원 할인",
      description: "모든 음식점에서 사용할 수 있는 신규 주문 쿠폰",
      type: "fixed",
      value: 3000,
      minOrderPrice: 12000,
      maxDiscount: 3000,
      categories: ["전체"],
      expiresAt: "2026-12-31",
    },
    {
      id: "coupon_delivery_2000",
      title: "배달팁 2,000원 할인",
      description: "배달팁에서 최대 2,000원까지 차감돼요",
      type: "delivery",
      value: 2000,
      minOrderPrice: 10000,
      maxDiscount: 2000,
      categories: ["전체"],
      expiresAt: "2026-09-30",
    },
    {
      id: "coupon_night_10",
      title: "야식 10% 할인",
      description: "치킨·버거·피자 주문에 쓰기 좋은 밤 메뉴 쿠폰",
      type: "percent",
      value: 10,
      minOrderPrice: 18000,
      maxDiscount: 4000,
      categories: ["치킨", "버거·피자"],
      expiresAt: "2026-08-31",
    },
    {
      id: "coupon_dessert_2000",
      title: "디저트 2,000원 할인",
      description: "카페·디저트 메뉴를 가볍게 주문할 때 사용해요",
      type: "fixed",
      value: 2000,
      minOrderPrice: 9000,
      maxDiscount: 2000,
      categories: ["카페·디저트"],
      expiresAt: "2026-10-31",
    },
  ];

  const state = {
    cart: loadJson(STORAGE.cart, { storeId: null, items: [] }),
    orders: loadJson(STORAGE.orders, []),
    likes: loadJson(STORAGE.likes, []),
    coupons: loadJson(STORAGE.coupons, []),
    customStores: loadJson(STORAGE.adminStores, []),
    customMenus: loadJson(STORAGE.adminMenus, []),
    adminAuthed: loadJson(STORAGE.adminAuth, false),
    authUsers: loadJson(STORAGE.authUsers, []),
    authUser: loadJson(STORAGE.authUser, null),
    afterLogin: "/my",
    activeCategory: "전체",
    search: "",
    selectedMenuId: null,
    selectedQty: 1,
    riderProgress: {},
    keepSearchFocus: false,
  };

  if (state.authUser) user = { ...guestUser, ...state.authUser };

  const timers = {
    loading: null,
    preparing: null,
    tracking: null,
    toast: null,
  };

  const app = document.getElementById("app");
  const toast = document.getElementById("toast");

  function menu(id, storeId, name, description, price, imageIndex, isPopular = false, isSoldOut = false) {
    return { id, storeId, name, description, price, imageIndex, isPopular, isSoldOut };
  }

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function stores() {
    return [...baseStores, ...state.customStores];
  }

  function menus() {
    return [...baseMenus, ...state.customMenus];
  }

  function findStore(id) {
    return stores().find((store) => store.id === id);
  }

  function findMenu(id) {
    return menus().find((item) => item.id === id);
  }

  function menusByStore(storeId) {
    return menus().filter((item) => item.storeId === storeId);
  }

  function findCoupon(id) {
    return baseCoupons.find((coupon) => coupon.id === id);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatPrice(value) {
    return `${Number(value || 0).toLocaleString("ko-KR")}원`;
  }

  function formatDate(value) {
    if (!value) return "";
    return new Intl.DateTimeFormat("ko-KR", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  }

  function spritePos(index = 0) {
    const safeIndex = Math.abs(Number(index) || 0) % 12;
    const col = safeIndex % 4;
    const row = Math.floor(safeIndex / 4);
    const x = col === 0 ? 0 : col === 3 ? 100 : (col / 3) * 100;
    const y = row === 0 ? 0 : row === 2 ? 100 : 50;
    return `${x}% ${y}%`;
  }

  function statusLabel(status) {
    const labels = {
      requested: "주문 요청",
      preparing: "음식 준비",
      delivering: "배달 중",
      completed: "배달 완료",
      canceled: "주문 취소",
    };
    return labels[status] || labels.preparing;
  }

  function statusClass(status) {
    if (status === "requested") return "preparing";
    return status || "preparing";
  }

  function statusBadge(status) {
    return `<span class="badge status-${statusClass(status)}">${statusLabel(status)}</span>`;
  }

  function route() {
    let hash = location.hash.replace(/^#/, "");
    if (!hash) hash = "/loading";
    if (!hash.startsWith("/")) hash = `/${hash}`;
    return hash;
  }

  function routeParts() {
    return route().split("/").filter(Boolean);
  }

  function navigate(path) {
    location.hash = `#${path}`;
  }

  function goBack() {
    if (history.length > 1) {
      history.back();
      return;
    }
    navigate("/");
  }

  function cartCount() {
    return state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  function cartTotal() {
    return state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function cartStore() {
    return state.cart.storeId ? findStore(state.cart.storeId) : null;
  }

  function couponEntry(couponId) {
    return state.coupons.find((coupon) => coupon.couponId === couponId);
  }

  function isCouponDownloaded(couponId) {
    return Boolean(couponEntry(couponId));
  }

  function isCouponUsed(couponId) {
    return Boolean(couponEntry(couponId)?.usedAt);
  }

  function unusedDownloadedCoupons() {
    return baseCoupons.filter((coupon) => isCouponDownloaded(coupon.id) && !isCouponUsed(coupon.id));
  }

  function couponBadgeCount() {
    return unusedDownloadedCoupons().length;
  }

  function couponRequirement(coupon) {
    const categoryText = coupon.categories.includes("전체") ? "전체 가게" : coupon.categories.join(", ");
    return `${categoryText} · ${formatPrice(coupon.minOrderPrice)} 이상 · ${coupon.expiresAt}까지`;
  }

  function couponBenefit(coupon) {
    if (coupon.type === "percent") return `${coupon.value}% 할인 · 최대 ${formatPrice(coupon.maxDiscount)}`;
    if (coupon.type === "delivery") return `배달팁 최대 ${formatPrice(coupon.maxDiscount)} 할인`;
    return `${formatPrice(coupon.value)} 할인`;
  }

  function couponEligibility(coupon, store, itemsTotal, deliveryFee) {
    if (!coupon) return { ok: false, reason: "쿠폰을 찾을 수 없어요." };
    if (!isCouponDownloaded(coupon.id)) return { ok: false, reason: "먼저 쿠폰을 다운로드해 주세요." };
    if (isCouponUsed(coupon.id)) return { ok: false, reason: "이미 사용한 쿠폰이에요." };
    if (!store) return { ok: false, reason: "장바구니에 메뉴를 담아 주세요." };
    if (!coupon.categories.includes("전체") && !coupon.categories.includes(store.category)) {
      return { ok: false, reason: `${store.category} 가게에는 사용할 수 없어요.` };
    }
    if (itemsTotal < coupon.minOrderPrice) {
      return { ok: false, reason: `${formatPrice(coupon.minOrderPrice - itemsTotal)} 더 담으면 사용할 수 있어요.` };
    }
    if (coupon.type === "delivery" && deliveryFee <= 0) {
      return { ok: false, reason: "차감할 배달팁이 없어요." };
    }
    return { ok: true, reason: "사용 가능" };
  }

  function couponDiscountAmount(coupon, store, itemsTotal, deliveryFee) {
    if (!couponEligibility(coupon, store, itemsTotal, deliveryFee).ok) return 0;
    if (coupon.type === "delivery") return Math.min(coupon.value, deliveryFee, coupon.maxDiscount);
    if (coupon.type === "percent") return Math.min(Math.floor(itemsTotal * (coupon.value / 100)), coupon.maxDiscount);
    return Math.min(coupon.value, itemsTotal, coupon.maxDiscount);
  }

  function cartPricing() {
    const store = cartStore();
    const itemsTotal = cartTotal();
    const deliveryFee = store?.deliveryFee || 0;
    const coupon = state.cart.appliedCouponId ? findCoupon(state.cart.appliedCouponId) : null;
    const eligibility = coupon ? couponEligibility(coupon, store, itemsTotal, deliveryFee) : { ok: false, reason: "" };
    const couponDiscount = eligibility.ok ? couponDiscountAmount(coupon, store, itemsTotal, deliveryFee) : 0;
    const totalBeforeDiscount = itemsTotal + deliveryFee;
    return {
      store,
      itemsTotal,
      deliveryFee,
      totalBeforeDiscount,
      coupon,
      couponEligibility: eligibility,
      couponDiscount,
      totalPrice: Math.max(totalBeforeDiscount - couponDiscount, 0),
    };
  }

  function saveCart() {
    if (state.cart.items.length === 0) {
      state.cart.storeId = null;
      state.cart.appliedCouponId = null;
    }
    saveJson(STORAGE.cart, state.cart);
  }

  function saveOrders() {
    saveJson(STORAGE.orders, state.orders);
  }

  function saveLikes() {
    saveJson(STORAGE.likes, state.likes);
  }

  function saveCoupons() {
    saveJson(STORAGE.coupons, state.coupons);
  }

  function clearCart() {
    state.cart = { storeId: null, items: [], appliedCouponId: null };
    saveCart();
  }

  function downloadCoupon(couponId) {
    const coupon = findCoupon(couponId);
    if (!coupon) return;
    if (isCouponDownloaded(couponId)) {
      showToast("이미 받은 쿠폰이에요.");
      return;
    }
    state.coupons = [{ couponId, downloadedAt: new Date().toISOString(), usedAt: null }, ...state.coupons];
    saveCoupons();
    showToast("쿠폰을 받았어요.");
    render();
  }

  function applyCoupon(couponId) {
    const coupon = findCoupon(couponId);
    const pricing = cartPricing();
    const eligibility = couponEligibility(coupon, pricing.store, pricing.itemsTotal, pricing.deliveryFee);
    if (!eligibility.ok) {
      showToast(eligibility.reason);
      return;
    }
    state.cart.appliedCouponId = couponId;
    saveCart();
    showToast("쿠폰이 적용됐어요.");
    if (route() !== "/cart") navigate("/cart");
    else render();
  }

  function removeAppliedCoupon() {
    state.cart.appliedCouponId = null;
    saveCart();
    showToast("쿠폰 적용을 해제했어요.");
    render();
  }

  function consumeCoupon(couponId) {
    const entry = couponEntry(couponId);
    if (!entry || entry.usedAt) return;
    entry.usedAt = new Date().toISOString();
    saveCoupons();
  }

  function addToCart(menuItem, quantity) {
    const store = findStore(menuItem.storeId);
    if (!store || store.status !== "open") {
      showToast("지금은 주문할 수 없는 가게입니다.");
      return false;
    }
    if (state.cart.storeId && state.cart.storeId !== menuItem.storeId) {
      const ok = window.confirm("다른 가게 메뉴가 담겨 있어요. 기존 장바구니를 비우고 담을까요?");
      if (!ok) return false;
      clearCart();
    }
    state.cart.storeId = menuItem.storeId;
    const existing = state.cart.items.find((item) => item.menuId === menuItem.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      state.cart.items.push({
        menuId: menuItem.id,
        storeId: menuItem.storeId,
        name: menuItem.name,
        price: menuItem.price,
        quantity,
        option: null,
        imageIndex: menuItem.imageIndex,
      });
    }
    saveCart();
    return true;
  }

  function incCart(menuId) {
    const item = state.cart.items.find((cartItem) => cartItem.menuId === menuId);
    if (!item) return;
    item.quantity += 1;
    saveCart();
    render();
  }

  function decCart(menuId) {
    const item = state.cart.items.find((cartItem) => cartItem.menuId === menuId);
    if (!item) return;
    if (item.quantity <= 1) {
      removeCart(menuId);
      return;
    }
    item.quantity -= 1;
    saveCart();
    render();
  }

  function removeCart(menuId) {
    state.cart.items = state.cart.items.filter((item) => item.menuId !== menuId);
    saveCart();
    render();
  }

  function createOrderFromCart() {
    const store = cartStore();
    if (!store || state.cart.items.length === 0) return null;
    const pricing = cartPricing();
    const itemsTotal = pricing.itemsTotal;
    const appliedCoupon = pricing.coupon && pricing.couponDiscount > 0 ? pricing.coupon : null;
    const order = {
      id: `order_${new Date().toISOString().slice(0, 10).replaceAll("-", "")}_${Date.now().toString().slice(-5)}`,
      storeId: store.id,
      storeName: store.name,
      items: state.cart.items.map((item) => ({ ...item })),
      itemsTotal,
      deliveryFee: store.deliveryFee,
      coupon: appliedCoupon
        ? {
            id: appliedCoupon.id,
            title: appliedCoupon.title,
            discountAmount: pricing.couponDiscount,
          }
        : null,
      couponDiscount: pricing.couponDiscount,
      totalPrice: pricing.totalPrice,
      deliveryStatus: "preparing",
      estimatedDeliveryTime: store.deliveryTime,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    if (appliedCoupon) consumeCoupon(appliedCoupon.id);
    state.orders = [order, ...state.orders];
    saveOrders();
    clearCart();
    return order;
  }

  function updateOrderStatus(orderId, status) {
    const order = state.orders.find((item) => item.id === orderId);
    if (!order) return;
    order.deliveryStatus = status;
    order.completedAt = status === "completed" ? new Date().toISOString() : null;
    saveOrders();
  }

  function isLiked(storeId) {
    return state.likes.some((item) => item.storeId === storeId);
  }

  function toggleLike(storeId) {
    if (isLiked(storeId)) {
      state.likes = state.likes.filter((item) => item.storeId !== storeId);
      showToast("찜을 해제했어요.");
    } else {
      state.likes = [{ storeId, createdAt: new Date().toISOString() }, ...state.likes];
      showToast("찜한 가게에 추가했어요.");
    }
    saveLikes();
    render();
  }

  function showToast(message) {
    clearTimeout(timers.toast);
    toast.textContent = message;
    toast.classList.add("show");
    timers.toast = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  function header(title, showBack = true, right = "") {
    return `
      <header class="header">
        <button class="icon-btn" type="button" data-action="back" aria-label="뒤로가기">${showBack ? "‹" : ""}</button>
        <h1 class="header-title">${escapeHtml(title)}</h1>
        <div>${right}</div>
      </header>
    `;
  }

  function page({ title, content, showBack = true, right = "", tab = false, extraClass = "" }) {
    const tabClass = tab ? "with-tab" : "";
    return `
      <div class="screen ${tabClass} ${extraClass}">
        ${title ? header(title, showBack, right) : ""}
        ${content}
      </div>
      ${tab ? bottomTab() : ""}
    `;
  }

  function bottomTab() {
    const current = route();
    const items = [
      { path: "/", label: "홈", icon: "⌂" },
      { path: "/cart", label: "장바구니", icon: "▣" },
      { path: "/coupons", label: "쿠폰", icon: "%" },
      { path: "/likes", label: "찜", icon: "♡" },
      { path: "/orders", label: "주문내역", icon: "≡" },
      { path: "/my", label: "마이", icon: "●" },
    ];
    return `
      <nav class="tabbar" aria-label="하단 탭">
        ${items
          .map((item) => {
            const active = current === item.path;
            const cartBadge = item.path === "/cart" && cartCount() > 0 ? cartCount() : 0;
            const couponBadge = item.path === "/coupons" && couponBadgeCount() > 0 ? couponBadgeCount() : 0;
            const badgeCount = cartBadge || couponBadge;
            const badge = badgeCount ? `<span class="tab-badge">${badgeCount}</span>` : "";
            return `
              <button class="tab ${active ? "active" : ""}" type="button" data-action="nav" data-path="${item.path}">
                <span class="tab-icon">${item.icon}</span>
                <span>${item.label}</span>
                ${badge}
              </button>
            `;
          })
          .join("")}
      </nav>
    `;
  }

  function foodStyle(index) {
    return `style="--pos: ${spritePos(index)}"`;
  }

  function storeCard(store, options = {}) {
    const tag = options.static ? "article" : "button";
    const attrs = options.static
      ? `role="button" tabindex="0" data-action="open-store" data-store-id="${escapeHtml(store.id)}"`
      : `type="button" data-action="open-store" data-store-id="${escapeHtml(store.id)}"`;
    const unlike = options.showUnlike
      ? `<button class="icon-btn heart active" type="button" data-action="toggle-like" data-store-id="${escapeHtml(store.id)}" aria-label="찜 해제">♡</button>`
      : "";
    return `
      <${tag} class="store-card" ${attrs}>
        <div class="food-img store-thumb" ${foodStyle(store.imageIndex)}></div>
        <div class="store-meta">
          <div class="store-name-row">
            <h3 class="store-name">${escapeHtml(store.name)}</h3>
            ${unlike || `<span class="${store.status === "open" ? "status-open" : "status-closed"}">${store.status === "open" ? "영업중" : "준비중"}</span>`}
          </div>
          <div class="store-info"><strong>★ ${store.rating}</strong> (${store.reviewCount}) · ${escapeHtml(store.deliveryTime)}</div>
          <div class="store-sub">배달팁 ${formatPrice(store.deliveryFee)} · 최소주문 ${formatPrice(store.minimumOrderPrice)}</div>
        </div>
      </${tag}>
    `;
  }

  function menuCard(item, store) {
    const disabled = item.isSoldOut || store.status !== "open";
    return `
      <button class="menu-card ${disabled ? "soldout" : ""}" type="button" data-action="open-menu" data-menu-id="${escapeHtml(item.id)}" ${disabled ? "disabled" : ""}>
        <div>
          <div class="badges">
            ${item.isPopular ? `<span class="badge popular">인기</span>` : ""}
            ${item.isSoldOut ? `<span class="badge sold">매진</span>` : ""}
            ${store.status !== "open" ? `<span class="badge sold">주문 불가</span>` : ""}
          </div>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="menu-desc">${escapeHtml(item.description)}</p>
          <p class="menu-price">${formatPrice(item.price)}</p>
        </div>
        <div class="food-img menu-thumb" ${foodStyle(item.imageIndex)}></div>
      </button>
    `;
  }

  function quantityStepper(value, actionPrefix, id) {
    return `
      <div class="stepper">
        <button type="button" data-action="${actionPrefix}-dec" ${id ? `data-id="${escapeHtml(id)}"` : ""} aria-label="수량 줄이기">−</button>
        <strong>${value}</strong>
        <button type="button" data-action="${actionPrefix}-inc" ${id ? `data-id="${escapeHtml(id)}"` : ""} aria-label="수량 늘리기">+</button>
      </div>
    `;
  }

  function emptyState(title, desc, actionLabel, action, icon = "·") {
    return `
      <section class="empty-state">
        <div class="empty-icon">${icon}</div>
        <h2>${escapeHtml(title)}</h2>
        ${desc ? `<p>${escapeHtml(desc)}</p>` : ""}
        ${actionLabel ? `<button class="primary-btn" type="button" data-action="${action}">${escapeHtml(actionLabel)}</button>` : ""}
      </section>
    `;
  }

  function renderLoading() {
    clearTimeout(timers.loading);
    timers.loading = setTimeout(() => navigate("/"), 1300);
    return `
      <section class="loading-screen">
        <div>
          <div class="loading-logo">동</div>
          <h1>동네배달</h1>
          <p>가까운 맛집을 빠르게 찾고 주문하세요.</p>
          <div class="loader" aria-label="로딩 중"></div>
        </div>
      </section>
    `;
  }

  function renderHome() {
    const query = state.search.trim().toLowerCase();
    const filtered = stores().filter((store) => {
      const categoryOk = state.activeCategory === "전체" || store.category === state.activeCategory;
      const queryOk = !query || store.name.toLowerCase().includes(query);
      return categoryOk && queryOk;
    });
    const content = `
      <section class="home-top">
        <div class="brand">
          <div class="logo-mark">동</div>
          <div>
            <h1 class="brand-title">동네배달</h1>
            <p class="address">${escapeHtml(user.address)}</p>
          </div>
        </div>
        <button class="icon-btn admin-link" type="button" data-action="nav" data-path="/admin" aria-label="관리자">⚙</button>
      </section>
      <div class="search-row">
        <span>⌕</span>
        <input id="store-search" class="search-input" type="search" value="${escapeHtml(state.search)}" placeholder="가게 이름으로 검색" autocomplete="off" />
      </div>
      <section class="banner">
        <div>
          <h2>오늘 저녁은 가까운 맛집에서</h2>
          <p>최소주문금액과 배달팁을 한눈에 비교해요.</p>
        </div>
      </section>
      <div class="chips" aria-label="음식 카테고리">
        ${categories
          .map(
            (category) =>
              `<button class="chip ${state.activeCategory === category ? "active" : ""}" type="button" data-action="set-category" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`,
          )
          .join("")}
      </div>
      <div class="section-title">
        <h2>동네 음식점</h2>
        <span>${filtered.length}곳</span>
      </div>
      <div class="store-list">
        ${filtered.length ? filtered.map((store) => storeCard(store)).join("") : emptyState("검색 결과가 없어요", "다른 검색어나 카테고리를 골라보세요.", "", "", "⌕")}
      </div>
    `;
    return page({ title: "", content, showBack: false, tab: true });
  }

  function renderStoreDetail(storeId) {
    const store = findStore(storeId);
    if (!store) {
      return page({
        title: "가게 상세",
        content: emptyState("가게를 찾을 수 없어요", "홈에서 다시 선택해 주세요.", "홈으로 가기", "go-home", "!",
        ),
      });
    }
    const right = `<button class="icon-btn heart ${isLiked(store.id) ? "active" : ""}" type="button" data-action="toggle-like" data-store-id="${escapeHtml(store.id)}" aria-label="찜">${isLiked(store.id) ? "♥" : "♡"}</button>`;
    const storeMenus = menusByStore(store.id);
    const content = `
      <section class="hero-image food-img" ${foodStyle(store.imageIndex)}>
        <div class="detail-hero-overlay">
          <h2>${escapeHtml(store.name)}</h2>
          <p>${escapeHtml(store.category)} · ${escapeHtml(store.openingHours)} · ${store.status === "open" ? "영업중" : "준비중"}</p>
        </div>
      </section>
      <section class="detail-stats">
        <div class="stat"><strong>★ ${store.rating}</strong><span>리뷰 ${store.reviewCount}</span></div>
        <div class="stat"><strong>${escapeHtml(store.deliveryTime)}</strong><span>예상 시간</span></div>
        <div class="stat"><strong>${formatPrice(store.deliveryFee)}</strong><span>배달팁</span></div>
      </section>
      <div class="notice">최소주문금액 ${formatPrice(store.minimumOrderPrice)} · ${escapeHtml(store.address)}</div>
      <div class="section-title" style="margin-top: 18px;">
        <h2>메뉴</h2>
        <span>${storeMenus.length}개</span>
      </div>
      <div class="menu-list">
        ${storeMenus.map((item) => menuCard(item, store)).join("")}
      </div>
      ${
        cartCount() > 0
          ? `<div class="checkout-bar detail-cart-bar">
              <button class="primary-btn" type="button" data-action="nav" data-path="/cart">장바구니 보기 · ${cartCount()}개 · ${formatPrice(cartTotal())}</button>
            </div>`
          : ""
      }
      ${state.selectedMenuId ? renderMenuSheet(state.selectedMenuId) : ""}
    `;
    return page({ title: "가게 상세", content, right, extraClass: cartCount() > 0 ? "with-detail-cart" : "" });
  }

  function renderMenuSheet(menuId) {
    const item = findMenu(menuId);
    if (!item) return "";
    const qty = state.selectedQty;
    return `
      <div class="sheet-backdrop">
        <section class="bottom-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
          <div class="grabber"></div>
          <div class="sheet-head">
            <div class="food-img sheet-thumb" ${foodStyle(item.imageIndex)}></div>
            <div>
              <h2 id="sheet-title">${escapeHtml(item.name)}</h2>
              <p>${escapeHtml(item.description)}</p>
              <strong>${formatPrice(item.price)}</strong>
            </div>
          </div>
          <div class="quantity-row">
            <strong>수량</strong>
            ${quantityStepper(qty, "sheet")}
          </div>
          <div class="total-row">
            <span>합계</span>
            <strong>${formatPrice(item.price * qty)}</strong>
          </div>
          <div class="action-grid">
            <button class="secondary-btn" type="button" data-action="close-sheet">닫기</button>
            <button class="primary-btn" type="button" data-action="add-cart" data-menu-id="${escapeHtml(item.id)}">담기</button>
          </div>
        </section>
      </div>
    `;
  }

  function renderCart() {
    const store = cartStore();
    if (!store || state.cart.items.length === 0) {
      return page({
        title: "장바구니",
        showBack: false,
        tab: true,
        content: emptyState("담은 메뉴가 없어요", "먹고 싶은 메뉴를 골라 장바구니에 담아보세요.", "홈으로 가기", "go-home", "▣"),
      });
    }
    const pricing = cartPricing();
    const itemsTotal = pricing.itemsTotal;
    const totalPrice = pricing.totalPrice;
    const shortage = Math.max(store.minimumOrderPrice - itemsTotal, 0);
    const content = `
      <section class="cart-store">
        <div class="logo-mark">동</div>
        <div>
          <strong>${escapeHtml(store.name)}</strong>
          <span>${escapeHtml(store.deliveryTime)} · 최소주문 ${formatPrice(store.minimumOrderPrice)}</span>
        </div>
      </section>
      <div class="menu-list">
        ${state.cart.items
          .map(
            (item) => `
          <article class="cart-item">
            <div class="food-img cart-thumb" ${foodStyle(item.imageIndex)}></div>
            <div>
              <h3>${escapeHtml(item.name)}</h3>
              <p class="muted">${formatPrice(item.price)}</p>
              <div class="cart-actions">
                ${quantityStepper(item.quantity, "cart", item.menuId)}
                <button class="remove-btn" type="button" data-action="cart-remove" data-id="${escapeHtml(item.menuId)}">삭제</button>
              </div>
            </div>
          </article>
        `,
          )
          .join("")}
      </div>
      ${renderCartCouponPanel(pricing)}
      <section class="summary-panel">
        <div class="price-line"><span>메뉴 합계</span><strong>${formatPrice(itemsTotal)}</strong></div>
        <div class="price-line"><span>배달팁</span><strong>${formatPrice(pricing.deliveryFee)}</strong></div>
        ${
          pricing.coupon
            ? `<div class="price-line discount"><span>쿠폰 할인</span><strong>${pricing.couponDiscount > 0 ? `-${formatPrice(pricing.couponDiscount)}` : "0원"}</strong></div>`
            : ""
        }
        <div class="price-line total"><span>총 결제금액</span><strong>${formatPrice(totalPrice)}</strong></div>
        ${pricing.coupon && !pricing.couponEligibility.ok ? `<p class="notice">${escapeHtml(pricing.couponEligibility.reason)}</p>` : ""}
        ${shortage > 0 ? `<p class="notice">${formatPrice(shortage)} 더 담으면 주문할 수 있어요.</p>` : ""}
      </section>
      <div class="checkout-bar">
        <button class="primary-btn" type="button" data-action="order-now" ${shortage > 0 ? "disabled" : ""}>주문하기 · ${formatPrice(totalPrice)}</button>
      </div>
    `;
    return page({ title: "장바구니", showBack: false, tab: true, content, extraClass: "with-checkout" });
  }

  function renderCartCouponPanel(pricing) {
    const coupons = unusedDownloadedCoupons();
    if (!coupons.length) {
      return `
        <section class="summary-panel coupon-panel">
          <div class="section-title">
            <h3>쿠폰</h3>
            <span>0장</span>
          </div>
          <p class="muted">받은 쿠폰이 없어요.</p>
          <button class="secondary-btn" type="button" data-action="nav" data-path="/coupons">쿠폰 받으러 가기</button>
        </section>
      `;
    }

    return `
      <section class="summary-panel coupon-panel">
        <div class="section-title">
          <h3>쿠폰</h3>
          <span>${coupons.length}장 보유</span>
        </div>
        <div class="coupon-option-list">
          ${coupons
            .map((coupon) => {
              const eligibility = couponEligibility(coupon, pricing.store, pricing.itemsTotal, pricing.deliveryFee);
              const discount = eligibility.ok ? couponDiscountAmount(coupon, pricing.store, pricing.itemsTotal, pricing.deliveryFee) : 0;
              const active = state.cart.appliedCouponId === coupon.id;
              return `
                <article class="coupon-option ${active ? "active" : ""} ${eligibility.ok ? "" : "disabled"}">
                  <div>
                    <strong>${escapeHtml(coupon.title)}</strong>
                    <span>${eligibility.ok ? `${formatPrice(discount)} 할인 가능` : eligibility.reason}</span>
                  </div>
                  ${
                    active
                      ? `<button class="text-btn" type="button" data-action="remove-coupon">해제</button>`
                      : `<button class="secondary-btn" type="button" data-action="apply-coupon" data-coupon-id="${escapeHtml(coupon.id)}" ${eligibility.ok ? "" : "disabled"}>적용</button>`
                  }
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  function renderOrderComplete(orderId) {
    const order = state.orders.find((item) => item.id === orderId);
    if (!order) {
      return page({
        title: "주문 완료",
        content: emptyState("주문을 찾을 수 없어요", "주문내역에서 다시 확인해 주세요.", "주문내역 보기", "go-orders", "!"),
      });
    }
    const content = `
      <section class="complete-panel">
        <div class="complete-mark">✓</div>
        <h2>주문이 접수됐어요</h2>
        <p>${escapeHtml(order.storeName)}에서 음식을 준비하기 시작했어요.</p>
      </section>
      <section class="summary-panel">
        <div class="price-line"><span>주문번호</span><strong>${escapeHtml(order.id)}</strong></div>
        <div class="price-line"><span>주문 메뉴</span><strong>${escapeHtml(order.items.map((item) => `${item.name} ${item.quantity}개`).join(", "))}</strong></div>
        <div class="price-line"><span>예상 시간</span><strong>${escapeHtml(order.estimatedDeliveryTime)}</strong></div>
        ${order.coupon ? `<div class="price-line discount"><span>${escapeHtml(order.coupon.title)}</span><strong>-${formatPrice(order.coupon.discountAmount)}</strong></div>` : ""}
        <div class="price-line total"><span>총 결제금액</span><strong>${formatPrice(order.totalPrice)}</strong></div>
      </section>
      <div class="action-grid">
        <button class="primary-btn" type="button" data-action="track-order" data-id="${escapeHtml(order.id)}">배달현황 보기</button>
        <button class="secondary-btn" type="button" data-action="go-orders">주문내역 보기</button>
      </div>
    `;
    return page({ title: "주문 완료", content });
  }

  function renderTracking(orderId) {
    const order = state.orders.find((item) => item.id === orderId);
    if (!order) {
      return page({
        title: "배달현황",
        content: emptyState("주문을 찾을 수 없어요", "주문내역에서 다시 확인해 주세요.", "주문내역 보기", "go-orders", "!"),
      });
    }
    const store = findStore(order.storeId);
    const status = order.deliveryStatus;
    const progress = status === "completed" ? 100 : status === "delivering" ? state.riderProgress[order.id] ?? 8 : 0;
    const rider = riderPosition(progress);
    const copy = {
      requested: "가게에서 주문을 확인하고 있어요.",
      preparing: "음식점에서 음식을 준비하고 있어요.",
      delivering: "라이더가 음식을 가지고 이동 중이에요.",
      completed: "배달이 완료되었어요. 맛있게 드세요.",
      canceled: "주문이 취소되었어요.",
    };
    const content = `
      <section class="summary-panel">
        <div class="order-head">
          <div>
            <h3>${escapeHtml(order.storeName)}</h3>
            <p>${escapeHtml(order.items.map((item) => `${item.name} ${item.quantity}개`).join(", "))}</p>
          </div>
          ${statusBadge(status)}
        </div>
        <p class="tracking-copy">${copy[status] || copy.preparing}</p>
      </section>
      <section class="tracking-stage">
        ${trackingStage(status)}
      </section>
      <section class="map-box" aria-label="배달 지도">
        <div class="road"></div>
        <div class="marker store" style="--x: 18%; --y: 30%;" title="${escapeHtml(store?.name || "음식점")}">가</div>
        <div class="marker user" style="--x: 78%; --y: 72%;" title="도착지">집</div>
        <div id="rider-marker" class="marker rider" style="--x: ${rider.x}%; --y: ${rider.y}%;" title="라이더">R</div>
      </section>
      <section class="summary-panel">
        <div class="price-line"><span>예상 도착</span><strong>${status === "completed" ? "도착 완료" : order.estimatedDeliveryTime}</strong></div>
        <div class="price-line"><span>배달 주소</span><strong>${escapeHtml(user.address)}</strong></div>
        ${order.completedAt ? `<div class="price-line"><span>완료 시각</span><strong>${formatDate(order.completedAt)}</strong></div>` : ""}
      </section>
    `;
    return page({ title: "배달현황", content });
  }

  function trackingStage(status) {
    const current = status === "completed" ? 2 : status === "delivering" ? 1 : 0;
    const stages = ["음식 준비", "배달 중", "배달 완료"];
    return stages
      .map((stage, index) => {
        const cls = index < current ? "done" : index === current ? "active" : "";
        return `<div class="stage ${cls}"><span>${index + 1}</span><strong>${stage}</strong></div>`;
      })
      .join("");
  }

  function riderPosition(progress) {
    const start = { x: 18, y: 30 };
    const end = { x: 78, y: 72 };
    const pct = Math.max(0, Math.min(progress, 100)) / 100;
    return {
      x: Math.round((start.x + (end.x - start.x) * pct) * 10) / 10,
      y: Math.round((start.y + (end.y - start.y) * pct) * 10) / 10,
    };
  }

  function renderOrders() {
    const sorted = [...state.orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const content = sorted.length
      ? `<div class="order-list">${sorted.map(orderCard).join("")}</div>`
      : emptyState("주문내역이 없어요", "첫 주문을 완료하면 이곳에서 다시 확인할 수 있어요.", "홈으로 가기", "go-home", "≡");
    return page({ title: "주문내역", showBack: false, tab: true, content });
  }

  function orderCard(order) {
    const canTrack = ["requested", "preparing", "delivering"].includes(order.deliveryStatus);
    const canReorder = order.deliveryStatus === "completed";
    const actionsClass = canTrack && canReorder ? "" : "single";
    return `
      <article class="order-card">
        <div class="order-head">
          <div>
            <h3>${escapeHtml(order.storeName)}</h3>
            <p>${formatDate(order.createdAt)} · ${order.couponDiscount ? `쿠폰 ${formatPrice(order.couponDiscount)} 할인 · ` : ""}${formatPrice(order.totalPrice)}</p>
          </div>
          ${statusBadge(order.deliveryStatus)}
        </div>
        <p class="order-items">${escapeHtml(order.items.map((item) => `${item.name} ${item.quantity}개`).join(", "))}</p>
        <div class="order-actions ${actionsClass}">
          ${canTrack ? `<button class="primary-btn" type="button" data-action="track-order" data-id="${escapeHtml(order.id)}">배달현황 보기</button>` : ""}
          ${canReorder ? `<button class="secondary-btn" type="button" data-action="reorder" data-id="${escapeHtml(order.id)}">다시 주문하기</button>` : ""}
          ${!canTrack && !canReorder ? `<button class="secondary-btn" type="button" data-action="ready-toast">상세 보기</button>` : ""}
        </div>
      </article>
    `;
  }

  function renderCoupons() {
    const downloadedCount = baseCoupons.filter((coupon) => isCouponDownloaded(coupon.id)).length;
    const unusedCount = couponBadgeCount();
    const content = `
      <section class="coupon-hero">
        <div>
          <span>내 쿠폰</span>
          <h2>${unusedCount}장 사용 가능</h2>
          <p>쿠폰을 받은 뒤 장바구니 결제금액에 바로 적용할 수 있어요.</p>
        </div>
      </section>
      <div class="section-title">
        <h2>쿠폰 받기</h2>
        <span>${downloadedCount}/${baseCoupons.length}장 보유</span>
      </div>
      <div class="coupon-list">
        ${baseCoupons.map(couponCard).join("")}
      </div>
    `;
    return page({ title: "쿠폰", showBack: false, tab: true, content });
  }

  function couponCard(coupon) {
    const entry = couponEntry(coupon.id);
    const downloaded = Boolean(entry);
    const used = Boolean(entry?.usedAt);
    const pricing = cartPricing();
    const eligibility = couponEligibility(coupon, pricing.store, pricing.itemsTotal, pricing.deliveryFee);
    const discount = eligibility.ok ? couponDiscountAmount(coupon, pricing.store, pricing.itemsTotal, pricing.deliveryFee) : 0;
    const active = state.cart.appliedCouponId === coupon.id;
    let action = `<button class="primary-btn" type="button" data-action="download-coupon" data-coupon-id="${escapeHtml(coupon.id)}">다운로드</button>`;

    if (used) {
      action = `<button class="secondary-btn" type="button" disabled>사용 완료</button>`;
    } else if (downloaded && active) {
      action = `<button class="secondary-btn" type="button" data-action="nav" data-path="/cart">적용됨</button>`;
    } else if (downloaded && eligibility.ok) {
      action = `<button class="primary-btn" type="button" data-action="apply-coupon" data-coupon-id="${escapeHtml(coupon.id)}">장바구니에 적용</button>`;
    } else if (downloaded && state.cart.items.length > 0) {
      action = `<button class="secondary-btn" type="button" disabled>조건 미충족</button>`;
    } else if (downloaded) {
      action = `<button class="secondary-btn" type="button" data-action="go-home">메뉴 담기</button>`;
    }

    return `
      <article class="coupon-card ${downloaded ? "downloaded" : ""} ${used ? "used" : ""}">
        <div class="coupon-ticket-edge"></div>
        <div class="coupon-card-body">
          <div class="coupon-card-head">
            <span class="coupon-tag">${downloaded ? (used ? "사용 완료" : "보유중") : "다운로드 가능"}</span>
            <strong>${escapeHtml(couponBenefit(coupon))}</strong>
          </div>
          <h3>${escapeHtml(coupon.title)}</h3>
          <p>${escapeHtml(coupon.description)}</p>
          <div class="coupon-meta">${escapeHtml(couponRequirement(coupon))}</div>
          ${
            downloaded && !used
              ? `<div class="coupon-meta strong">${eligibility.ok ? `지금 적용 시 ${formatPrice(discount)} 할인` : eligibility.reason}</div>`
              : ""
          }
          <div class="coupon-actions">${action}</div>
        </div>
      </article>
    `;
  }

  function renderLikes() {
    const likedStores = state.likes.map((like) => findStore(like.storeId)).filter(Boolean);
    const content = likedStores.length
      ? `<div class="liked-list">${likedStores.map((store) => storeCard(store, { static: true, showUnlike: true })).join("")}</div>`
      : emptyState("찜한 가게가 없어요", "자주 주문할 가게를 찜해두면 빠르게 다시 찾을 수 있어요.", "홈으로 가기", "go-home", "♡");
    return page({ title: "찜", showBack: false, tab: true, content });
  }

  function renderMy() {
    if (!state.authUser) return renderLogin();
    const content = `
      <section class="profile-panel">
        <div class="avatar">${escapeHtml(user.nickname.slice(0, 1))}</div>
        <div><h2>${escapeHtml(user.nickname)}님</h2><p>${escapeHtml(user.name)} · ${escapeHtml(user.username)}</p><p>${escapeHtml(user.email)}</p><p>${escapeHtml(user.birthDate || "생년월일 미등록")}</p></div>
      </section>
      <section class="menu-links">
        <button class="menu-link" type="button" data-action="ready-toast">주소 관리 <span>›</span></button>
        <button class="menu-link" type="button" data-action="go-orders">주문내역 <span>›</span></button>
        <button class="menu-link" type="button" data-action="nav" data-path="/coupons">쿠폰함 <span>›</span></button>
        <button class="menu-link" type="button" data-action="nav" data-path="/likes">찜한 가게 <span>›</span></button>
        <button class="menu-link" type="button" data-action="ready-toast">고객센터 <span>›</span></button>
        <button class="menu-link" type="button" data-action="logout">로그아웃 <span>›</span></button>
        <button class="menu-link" type="button" data-action="nav" data-path="/admin">관리자 <span>›</span></button>
      </section>`;
    return page({ title: "마이", showBack: false, tab: true, content });
  }

  function renderLogin() {
    const content = '
      <section class="auth-card"><div class="auth-brand"><div class="logo-mark">동</div><h2>동네배달에 오신 걸 환영해요</h2><p>아이디 또는 이메일로 로그인해 주세요.</p></div>
      <form id="login-form" class="form-grid"><label class="auth-label">아이디 또는 이메일<input class="field" name="loginId" autocomplete="username" placeholder="아이디 또는 이메일" required /></label>
      <label class="auth-label">비밀번호<input class="field" name="password" type="password" autocomplete="current-password" placeholder="비밀번호" required /></label>
      <button class="primary-btn" type="submit">로그인</button></form>
      <div class="auth-bottom"><span>아직 회원이 아니신가요?</span><button class="text-btn" type="button" data-action="nav" data-path="/signup">회원가입</button></div></section>';
    return page({ title: "로그인", content });
  }

  function renderSignup() {
    const today = new Date().toISOString().slice(0, 10);
    const content = '
      <section class="auth-card"><div class="auth-brand"><div class="logo-mark">동</div><h2>회원가입</h2><p>아래 정보를 입력해 계정을 만들어 주세요.</p></div>
      <form id="signup-form" class="form-grid">
      <label class="auth-label">이름<input class="field" name="name" autocomplete="name" placeholder="실명 입력" maxlength="30" required /></label>
      <label class="auth-label">생년월일<input class="field" name="birthDate" type="date" autocomplete="bday" max="' + today + '" required /></label>
      <label class="auth-label">이메일<input class="field" name="email" type="email" autocomplete="email" placeholder="example@email.com" required /></label>
      <label class="auth-label">아이디<input class="field" name="username" autocomplete="username" placeholder="영문·숫자 4~20자" minlength="4" maxlength="20" pattern="[A-Za-z0-9_]{4,20}" required /></label>
      <label class="auth-label">비밀번호<input class="field" name="password" type="password" autocomplete="new-password" placeholder="8자 이상 입력" minlength="8" required /></label>
      <label class="auth-label">비밀번호 확인<input class="field" name="passwordConfirm" type="password" autocomplete="new-password" placeholder="비밀번호 다시 입력" minlength="8" required /></label>
      <label class="auth-label">닉네임<input class="field" name="nickname" placeholder="사이트에서 사용할 닉네임" maxlength="20" required /></label>
      <label class="auth-agree"><input type="checkbox" name="agree" required /> 개인정보 수집 및 이용 안내를 확인했고 동의합니다.</label>
      <button class="primary-btn" type="submit">회원가입 완료</button></form>
      <div class="auth-bottom"><span>이미 계정이 있으신가요?</span><button class="text-btn" type="button" data-action="nav" data-path="/login">로그인</button></div></section>';
    return page({ title: "회원가입", content });
  }

  function renderAdmin() {
    if (!state.adminAuthed) {
      const login = `
        <section class="admin-panel">
          <h2>관리자 로그인</h2>
          <div class="form-grid">
            <input id="admin-password" class="field" type="password" placeholder="비밀번호 0000" />
            <button class="primary-btn" type="button" data-action="admin-login">로그인</button>
          </div>
          <p class="muted">데모용 화면이라 실제 보안 기능은 포함하지 않았어요.</p>
        </section>
      `;
      return page({ title: "관리자", content: login });
    }

    const storeOptions = stores()
      .map((store) => `<option value="${escapeHtml(store.id)}">${escapeHtml(store.name)}</option>`)
      .join("");
    const foodOptions = [
      "김밥",
      "떡볶이",
      "치킨",
      "짜장면",
      "초밥",
      "커피·케이크",
      "비빔밥",
      "버거",
      "피자",
      "샐러드",
      "라멘",
      "국밥",
    ]
      .map((label, index) => `<option value="${index}">${label}</option>`)
      .join("");
    const orderRows = state.orders.length
      ? state.orders.map(adminOrderRow).join("")
      : `<p class="muted">아직 주문이 없어요.</p>`;
    const content = `
      <section class="admin-panel">
        <h2>가게 등록</h2>
        <form id="store-form" class="form-grid">
          <input name="name" class="field" placeholder="가게 이름" required />
          <div class="two-col">
            <select name="category" class="select">${categories.filter((item) => item !== "전체").map((item) => `<option>${escapeHtml(item)}</option>`).join("")}</select>
            <select name="imageIndex" class="select">${foodOptions}</select>
          </div>
          <div class="two-col">
            <input name="minimumOrderPrice" class="field" type="number" min="0" step="500" placeholder="최소주문" required />
            <input name="deliveryFee" class="field" type="number" min="0" step="500" placeholder="배달팁" required />
          </div>
          <input name="deliveryTime" class="field" placeholder="예: 25~35분" required />
          <button class="primary-btn" type="button" data-action="admin-add-store">가게 추가</button>
        </form>
      </section>
      <section class="admin-panel">
        <h2>메뉴 등록</h2>
        <form id="menu-form" class="form-grid">
          <select name="storeId" class="select">${storeOptions}</select>
          <input name="name" class="field" placeholder="메뉴 이름" required />
          <textarea name="description" class="textarea" placeholder="메뉴 설명" required></textarea>
          <div class="two-col">
            <input name="price" class="field" type="number" min="0" step="500" placeholder="가격" required />
            <select name="imageIndex" class="select">${foodOptions}</select>
          </div>
          <label class="check-row"><input type="checkbox" name="isPopular" /> 인기 메뉴</label>
          <label class="check-row"><input type="checkbox" name="isSoldOut" /> 매진</label>
          <button class="primary-btn" type="button" data-action="admin-add-menu">메뉴 추가</button>
        </form>
      </section>
      <section class="admin-panel">
        <h2>주문 상태 관리</h2>
        ${orderRows}
      </section>
    `;
    return page({ title: "관리자", content });
  }

  function adminOrderRow(order) {
    return `
      <article class="admin-order">
        <div class="order-head">
          <div>
            <h3>${escapeHtml(order.storeName)}</h3>
            <p>${formatDate(order.createdAt)} · ${formatPrice(order.totalPrice)}</p>
          </div>
          ${statusBadge(order.deliveryStatus)}
        </div>
        <select class="select admin-status-select" data-id="${escapeHtml(order.id)}">
          ${["requested", "preparing", "delivering", "completed", "canceled"]
            .map((status) => `<option value="${status}" ${order.deliveryStatus === status ? "selected" : ""}>${statusLabel(status)}</option>`)
            .join("")}
        </select>
      </article>
    `;
  }

  function render() {
    clearTimeout(timers.loading);
    const path = route();
    const parts = routeParts();
    const isTracking = parts[0] === "order" && parts[2] === "tracking";
    if (!isTracking) stopTracking();

    if (path === "/loading") {
      app.innerHTML = renderLoading();
      return;
    }
    if (path === "/") app.innerHTML = renderHome();
    else if (path === "/login") app.innerHTML = renderLogin();
    else if (path === "/signup") app.innerHTML = renderSignup();
    else if (path === "/cart") app.innerHTML = renderCart();
    else if (path === "/coupons") app.innerHTML = state.authUser ? renderCoupons() : renderLogin();
    else if (path === "/orders") app.innerHTML = state.authUser ? renderOrders() : renderLogin();
    else if (path === "/likes") app.innerHTML = state.authUser ? renderLikes() : renderLogin();
    else if (path === "/my") app.innerHTML = renderMy();
    else if (path === "/admin") app.innerHTML = renderAdmin();
    else if (parts[0] === "store" && parts[1]) app.innerHTML = renderStoreDetail(parts[1]);
    else if (parts[0] === "order" && parts[1] === "complete" && parts[2]) app.innerHTML = renderOrderComplete(parts[2]);
    else if (parts[0] === "order" && parts[2] === "tracking") app.innerHTML = renderTracking(parts[1]);
    else app.innerHTML = page({ title: "페이지 없음", content: emptyState("페이지를 찾을 수 없어요", "홈으로 돌아가 다시 시도해 주세요.", "홈으로 가기", "go-home", "!") });

    bindDynamicInputs();
    if (isTracking) {
      const order = state.orders.find((item) => item.id === parts[1]);
      startTracking(order);
    }
  }

  function bindDynamicInputs() {
    const search = document.getElementById("store-search");
    if (search) {
      search.addEventListener("input", (event) => {
        state.search = event.target.value;
        state.keepSearchFocus = true;
        render();
      });
      if (state.keepSearchFocus) {
        requestAnimationFrame(() => {
          const current = document.getElementById("store-search");
          if (!current) return;
          current.focus();
          current.setSelectionRange(current.value.length, current.value.length);
          state.keepSearchFocus = false;
        });
      }
    }

    document.querySelectorAll(".admin-status-select").forEach((select) => {
      select.addEventListener("change", (event) => {
        const orderId = event.target.dataset.id;
        updateOrderStatus(orderId, event.target.value);
        if (event.target.value === "delivering") state.riderProgress[orderId] = 12;
        showToast("주문 상태가 변경됐어요.");
        render();
      });
    });
  }

  function startTracking(order) {
    stopTracking();
    if (!order || ["completed", "canceled"].includes(order.deliveryStatus)) return;

    if (["requested", "preparing"].includes(order.deliveryStatus)) {
      timers.preparing = setTimeout(() => {
        updateOrderStatus(order.id, "delivering");
        state.riderProgress[order.id] = 0;
        render();
      }, 5000);
      return;
    }

    if (order.deliveryStatus === "delivering") {
      if (state.riderProgress[order.id] == null) state.riderProgress[order.id] = 8;
      timers.tracking = setInterval(() => {
        state.riderProgress[order.id] = Math.min((state.riderProgress[order.id] || 0) + 3.5, 100);
        const marker = document.getElementById("rider-marker");
        if (marker) {
          const rider = riderPosition(state.riderProgress[order.id]);
          marker.style.setProperty("--x", `${rider.x}%`);
          marker.style.setProperty("--y", `${rider.y}%`);
        }
        if (state.riderProgress[order.id] >= 100) {
          updateOrderStatus(order.id, "completed");
          stopTracking();
          render();
        }
      }, 320);
    }
  }

  function stopTracking() {
    clearTimeout(timers.preparing);
    clearInterval(timers.tracking);
    timers.preparing = null;
    timers.tracking = null;
  }

  function adminLogin() {
    const password = document.getElementById("admin-password")?.value;
    if (password !== "0000") {
      showToast("비밀번호를 확인해 주세요.");
      return;
    }
    state.adminAuthed = true;
    saveJson(STORAGE.adminAuth, true);
    showToast("관리자 화면에 들어왔어요.");
    render();
  }

  function addAdminStore() {
    const form = document.getElementById("store-form");
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const store = {
      id: `store_custom_${Date.now()}`,
      name: data.get("name").trim(),
      category: data.get("category"),
      imageIndex: Number(data.get("imageIndex")),
      rating: 4.2,
      reviewCount: 0,
      deliveryTime: data.get("deliveryTime").trim(),
      deliveryFee: Number(data.get("deliveryFee")),
      minimumOrderPrice: Number(data.get("minimumOrderPrice")),
      address: "관리자가 등록한 동네 주소",
      openingHours: "10:00~22:00",
      status: "open",
    };
    state.customStores = [store, ...state.customStores];
    saveJson(STORAGE.adminStores, state.customStores);
    form.reset();
    showToast("가게가 추가됐어요.");
    render();
  }

  function addAdminMenu() {
    const form = document.getElementById("menu-form");
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const item = {
      id: `menu_custom_${Date.now()}`,
      storeId: data.get("storeId"),
      name: data.get("name").trim(),
      description: data.get("description").trim(),
      price: Number(data.get("price")),
      imageIndex: Number(data.get("imageIndex")),
      isPopular: data.has("isPopular"),
      isSoldOut: data.has("isSoldOut"),
    };
    state.customMenus = [item, ...state.customMenus];
    saveJson(STORAGE.adminMenus, state.customMenus);
    form.reset();
    showToast("메뉴가 추가됐어요.");
    render();
  }

  function restoreOrderToCart(orderId) {
    const order = state.orders.find((item) => item.id === orderId);
    if (!order) return;
    if (state.cart.storeId && state.cart.storeId !== order.storeId) {
      const ok = window.confirm("기존 장바구니를 비우고 이 주문을 다시 담을까요?");
      if (!ok) return;
    }
    state.cart = {
      storeId: order.storeId,
      items: order.items.map((item) => ({ ...item })),
    };
    saveCart();
    showToast("장바구니에 다시 담았어요.");
    navigate("/cart");
  }

  async function hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: encoder.encode(salt), iterations: 120000, hash: "SHA-256" }, key, 256);
    return Array.from(new Uint8Array(bits), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  async function handleSignup(event) {
    event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return;
    const data = new FormData(form); const name = String(data.get("name")).trim();
    const birthDate = String(data.get("birthDate")); const email = String(data.get("email")).trim().toLowerCase();
    const username = String(data.get("username")).trim().toLowerCase(); const password = String(data.get("password"));
    const passwordConfirm = String(data.get("passwordConfirm")); const nickname = String(data.get("nickname")).trim();
    if (password !== passwordConfirm) return showToast("비밀번호가 서로 달라요.");
    if (new Date(birthDate) > new Date()) return showToast("생년월일을 확인해 주세요.");
    if (state.authUsers.some((item) => item.username === username)) return showToast("이미 사용 중인 아이디예요.");
    if (state.authUsers.some((item) => item.email === email)) return showToast("이미 가입된 이메일이에요.");
    const salt = Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, "0")).join("");
    const passwordHash = await hashPassword(password, salt);
    const account = { id: "member_" + Date.now(), name, birthDate, email, username, nickname, salt, passwordHash, address: "배달 주소를 등록해 주세요", createdAt: new Date().toISOString() };
    state.authUsers.push(account); saveJson(STORAGE.authUsers, state.authUsers);
    state.authUser = account; saveJson(STORAGE.authUser, account); user = { ...guestUser, ...account };
    showToast("회원가입이 완료됐어요."); navigate(state.afterLogin || "/my");
  }

  async function handleLogin(event) {
    event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return;
    const data = new FormData(form); const loginId = String(data.get("loginId")).trim().toLowerCase();
    const password = String(data.get("password")); const account = state.authUsers.find((item) => item.username === loginId || item.email === loginId);
    if (!account || await hashPassword(password, account.salt) !== account.passwordHash) return showToast("아이디 또는 비밀번호를 확인해 주세요.");
    state.authUser = account; saveJson(STORAGE.authUser, account); user = { ...guestUser, ...account };
    showToast("로그인했어요."); navigate(state.afterLogin || "/my");
  }

  app.addEventListener("submit", (event) => {
    if (event.target.id === "signup-form") handleSignup(event);
    if (event.target.id === "login-form") handleLogin(event);
  });

  app.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;

    if (action === "nav") {
      const path = target.dataset.path;
      if (["/my", "/orders", "/coupons", "/likes"].includes(path) && !state.authUser) { state.afterLogin = path; navigate("/login"); }
      else navigate(path);
    }
    if (action === "back") goBack();
    if (action === "go-home") navigate("/");
    if (action === "go-orders") navigate("/orders");
    if (action === "set-category") {
      state.activeCategory = target.dataset.category;
      render();
    }
    if (action === "open-store") navigate(`/store/${target.dataset.storeId}`);
    if (action === "toggle-like") toggleLike(target.dataset.storeId);
    if (action === "open-menu") {
      state.selectedMenuId = target.dataset.menuId;
      state.selectedQty = 1;
      render();
    }
    if (action === "close-sheet") {
      state.selectedMenuId = null;
      render();
    }
    if (action === "sheet-inc") {
      state.selectedQty += 1;
      render();
    }
    if (action === "sheet-dec") {
      state.selectedQty = Math.max(1, state.selectedQty - 1);
      render();
    }
    if (action === "add-cart") {
      const item = findMenu(target.dataset.menuId);
      if (!item) return;
      if (addToCart(item, state.selectedQty)) {
        state.selectedMenuId = null;
        showToast("장바구니에 담았어요.");
        render();
      }
    }
    if (action === "cart-inc") incCart(target.dataset.id);
    if (action === "cart-dec") decCart(target.dataset.id);
    if (action === "cart-remove") removeCart(target.dataset.id);
    if (action === "download-coupon") downloadCoupon(target.dataset.couponId);
    if (action === "apply-coupon") applyCoupon(target.dataset.couponId);
    if (action === "remove-coupon") removeAppliedCoupon();
    if (action === "order-now") {
      const order = createOrderFromCart();
      if (!order) return;
      navigate(`/order/complete/${order.id}`);
    }
    if (action === "track-order") navigate(`/order/${target.dataset.id}/tracking`);
    if (action === "reorder") restoreOrderToCart(target.dataset.id);
    if (action === "ready-toast") showToast("준비 중입니다.");
    if (action === "admin-login") adminLogin();
    if (action === "logout") {
      state.authUser = null; user = { ...guestUser }; localStorage.removeItem(STORAGE.authUser);
      showToast("로그아웃했어요."); navigate("/login");
    }
    if (action === "admin-add-store") addAdminStore();
    if (action === "admin-add-menu") addAdminMenu();
  });

  window.addEventListener("hashchange", render);

  if (!location.hash) {
    location.replace("#/loading");
  }
  render();
})();
