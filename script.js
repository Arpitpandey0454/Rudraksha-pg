
const products = [
    { id: 1 ,  name: "1 Mukhi Rudraksha",  price: 3190, off: 10, img: "r1.png" },
    { id: 2,  name: "2 Mukhi Rudraksha",  price: 1151, off: 10, img: "r2.jpg" },
    { id: 3,  name: "4 Mukhi Rudraksha",  price: 1021, off: 10, img: "r3.jpg" },
    { id: 4,  name: "5 Mukhi Rudraksha",  price: 499,  off: 10, img: "r4.jpg" },
    { id: 5,  name: "6 Mukhi Rudraksha",  price: 699,  off: 10, img: "r5.jpg" },
    { id: 6,  name: "7 Mukhi Rudraksha",  price: 799,  off: 10, img: "r6.jpg" },
    { id: 7,  name: "8 Mukhi Rudraksha",  price: 2990, off: 10, img: "r7.jpg" },
    { id: 8,  name: "9 Mukhi Rudraksha",  price: 3590, off: 10, img: "r8.jpg" },
    { id: 9,  name: "10 Mukhi Rudraksha", price: 3999, off: 10, img: "r9.jpg" },
    { id:10,  name: "11 Mukhi Rudraksha", price: 4299, off: 10, img: "r10.jpg" },
    { id:11,  name: "12 Mukhi Rudraksha", price: 5480, off: 10, img: "r11.jpg" },
    { id:12,  name: "13 Mukhi Rudraksha", price: 6994, off: 10, img: "r12.jpg" },
    { id:13,  name: "14 Mukhi Rudraksha", price: 39990, off:10, img: "r13.jpg" },
    { id:14,  name: "Ganesh Rudraksha",  price: 1990, off: 10, img: "r14.jpg" },
    { id:15,  name: "Gauri Shankar Rudraksha", price: 5990, off:10, img: "r15.jpg" },
    { id:16,  name: "3 Mukhi Rudraksha", price: 1290, off: 10, img: "r16.jpg" },
  ];
  
 
  let cartCount = 0;
  
 
  const rupee = (n) =>
    "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 0 });
  
 
  const productGrid = document.getElementById("productGrid");
  const cartCountEl = document.getElementById("cartCount");
  
  
  function renderProducts() {
    productGrid.innerHTML = products
      .map((p) => {
        return `
      <article class="rounded-2xl shadow-card overflow-hidden border border-slate-100 bg-white 
           transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        
          <div class="relative p-4">
            <span class="absolute left-4 top-4 text-[11px] font-medium bg-brand.tag text-slate-800 px-2 py-1 rounded-full">Rudraksha</span>
            <button data-wish="${p.id}" aria-label="Add to wishlist"
              class="absolute right-4 top-4 w-8 h-8 grid place-items-center rounded-full border border-slate-200 bg-white hover:bg-slate-50">
              <svg class="heart h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 21s-6.716-4.21-9.1-7.8C1.1 10.7 2.6 7.2 6 7.2c1.9 0 3.2 1.1 4 2.4.8-1.3 2.1-2.4 4-2.4 3.4 0 4.9 3.5 3.1 6C18.7 16.8 12 21 12 21z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
  
          
            <div class="rounded-2xl bg-gradient-to-b from-brand.goldLight to-brand.gold p-6">
              <img src="${p.img}" alt="${p.name}" class="w-full h-48 object-contain drop-shadow-md select-none pointer-events-none">
              
              <div class="w-36 h-3 bg-white/80 rounded-full blur-[2px] mx-auto mt-4"></div>
            </div>
          </div>
  
        
          <div class="px-4 pb-4">
            <h3 class="font-semibold text-slate-800">${p.name}</h3>
            <div class="mt-1 flex items-center justify-between">
              <div class="text-sm">
                <span class="font-semibold text-slate-900">${rupee(p.price)}</span>
                <span class="text-[12px] text-brand.accent font-semibold ml-2">${p.off}% OFF</span>
              </div>
              <button data-cart="${p.id}" class="add-cart inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
                    d="M2.5 3.5h2l1.5 9.5a1.5 1.5 0 001.48 1.27h9.54a1.5 1.5 0 001.48-1.27L19.5 7.5H6.4"/>
                  <circle cx="10" cy="19.5" r="1.2"/><circle cx="17" cy="19.5" r="1.2"/>
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }
  
  
  function bindWishlist() {
    productGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-wish]");
      if (!btn) return;
      btn.classList.toggle("bg-rose-50");
      const svg = btn.querySelector(".heart");
      const active = btn.classList.contains("bg-rose-50");
      svg.setAttribute("fill", active ? "#ef4444" : "none");
      svg.setAttribute("stroke", active ? "#ef4444" : "currentColor");
    });
  }
  
 
  function bindCart() {
    productGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cart]");
      if (!btn) return;
  
     
      const active = btn.classList.toggle("bg-emerald-50");
      const label = btn.querySelector("span");
      if (active) {
        label.textContent = "Added to Cart";
        cartCount++;
      } else {
        label.textContent = "Add to Cart";
        cartCount = Math.max(0, cartCount - 1);
      }
      cartCountEl.textContent = String(cartCount);
    });
  }
  
  
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav  = document.getElementById("mobileNav");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }
  
  
  renderProducts();
  bindWishlist();
  bindCart();
  