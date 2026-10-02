// Every product image uses a stable placeholder service (picsum.photos) seeded
// by product id, so the picture never breaks or disappears. Swap the `image`
// field for your own /src/assets files any time -- see the README.

export const categories = [
  { id: 'electronics', name: 'Electronics', subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Smart Watches', 'Cameras'] },
  { id: 'fashion', name: 'Fashion', subcategories: ["Men's Clothing", "Women's Clothing", 'Shoes', 'Bags', 'Watches'] },
  { id: 'beauty', name: 'Beauty', subcategories: ['Skincare', 'Makeup', 'Haircare', 'Fragrances'] },
  { id: 'home', name: 'Home & Living', subcategories: ['Furniture', 'Kitchen', 'Home Decor', 'Lighting'] },
  { id: 'grocery', name: 'Grocery', subcategories: ['Snacks', 'Beverages', 'Household Essentials'] },
  { id: 'sports', name: 'Sports', subcategories: ['Fitness', 'Running', 'Cricket', 'Gym Equipment'] },
  { id: 'books', name: 'Books', subcategories: ['Fiction', 'Technology', 'Self Development'] },
  { id: 'toys', name: 'Toys & Kids', subcategories: ['Toys', 'Games', 'Kids Clothing'] },
]

const raw = [
  ['Pulse X200 Smartphone', 'electronics', 'Smartphones', 'Pulse', 24999, 32999, 5, 'A crisp 6.5" display, 5000mAh battery and a triple camera for everyday shooting.', ['Midnight Black', 'Ocean Blue'], null],
  ['Nimbus Air 14 Laptop', 'electronics', 'Laptops', 'Nimbus', 54990, 64990, 5, 'A 1.3kg ultrabook with 14 hours of battery life, built for students and travel.', ['Silver', 'Space Grey'], null],
  ['Echo Beat Wireless Earbuds', 'electronics', 'Headphones', 'Echo', 2499, 3999, 5, 'Active noise cancellation with 30-hour total playback in a pocket-sized case.', ['White', 'Black'], null],
  ['Orbit Fit 2 Smart Watch', 'electronics', 'Smart Watches', 'Orbit', 3499, 4999, 4, 'Heart-rate, SpO2 and 7-day battery, with 100+ workout modes.', ['Black', 'Rose Gold'], null],
  ['Lumen Z Mirrorless Camera', 'electronics', 'Cameras', 'Lumen', 47999, 54999, 4, 'A beginner-friendly mirrorless camera with 4K video and interchangeable lenses.', ['Black'], null],
  ['Volt 65W Fast Charger', 'electronics', 'Accessories', 'Volt', 1299, 1799, 4, 'Charge a laptop and phone at once with dual USB-C ports.', ['White'], null],
  ['Classic Oxford Shirt', 'fashion', "Men's Clothing", 'Fieldstone', 1299, 1999, 4, 'A breathable cotton shirt that moves from the office to the weekend.', ['White', 'Sky Blue', 'Navy'], ['S', 'M', 'L', 'XL']],
  ['Everyday Wrap Dress', 'fashion', "Women's Clothing", 'Maren', 1799, 2599, 4, 'A flattering wrap silhouette in soft, breathable jersey.', ['Terracotta', 'Forest Green'], ['XS', 'S', 'M', 'L']],
  ['Trail Runner Sneakers', 'fashion', 'Shoes', 'Ridgeline', 2999, 3999, 5, 'Lightweight cushioning built for city streets and light trails alike.', ['Grey/Lime', 'Black/White'], ['7', '8', '9', '10', '11']],
  ['Weekender Canvas Tote', 'fashion', 'Bags', 'Fieldstone', 999, 1499, 4, 'A roomy, durable tote that fits a 15" laptop with room to spare.', ['Sand', 'Charcoal'], null],
  ['Aria Chronograph Watch', 'fashion', 'Watches', 'Aria', 4499, 6999, 4, 'A stainless steel chronograph with a sapphire-coated crystal face.', ['Silver', 'Gunmetal'], null],
  ['Slim Fit Chinos', 'fashion', "Men's Clothing", 'Fieldstone', 1499, 2199, 4, 'Stretch-cotton chinos tailored for a clean, modern fit.', ['Khaki', 'Navy', 'Black'], ['30', '32', '34', '36']],
  ['Hydra Glow Serum', 'beauty', 'Skincare', 'Lumiere', 899, 1299, 4, 'A lightweight hyaluronic acid serum for all-day hydration.', null, null],
  ['Velvet Matte Lipstick Set', 'beauty', 'Makeup', 'Rouge & Co', 1199, 1699, 5, 'Four long-wear shades that go from desk to dinner.', ['Set of 4'], null],
  ['Argan Repair Shampoo', 'beauty', 'Haircare', 'Verdant', 549, 749, 4, 'A sulphate-free shampoo that repairs and adds shine.', null, null],
  ['Bloom Eau de Parfum', 'beauty', 'Fragrances', 'Bloom & Co', 2499, 3299, 5, 'A floral-woody fragrance with notes of jasmine and sandalwood.', ['50ml'], null],
  ['Nordic Oak Coffee Table', 'home', 'Furniture', 'Haven', 6999, 9499, 4, 'Solid oak with clean lines, built to anchor a living room.', ['Natural Oak'], null],
  ['5-Piece Non-Stick Cookware Set', 'home', 'Kitchen', 'Copperline', 3499, 4999, 4, 'Even-heating pans with a scratch-resistant non-stick coating.', null, null],
  ['Woven Wall Hanging', 'home', 'Home Decor', 'Haven', 1299, 1799, 4, 'A handwoven macrame piece that softens any wall.', ['Ivory'], null],
  ['Warm Glow Table Lamp', 'home', 'Lighting', 'Haven', 1599, 2199, 4, 'A dimmable ceramic lamp with a linen shade.', ['Terracotta', 'White'], null],
  ['Roasted Almonds 500g', 'grocery', 'Snacks', 'Harvest', 399, 499, 3, 'Lightly salted, slow-roasted almonds -- a protein-rich snack.', null, null],
  ['Cold Brew Coffee Concentrate', 'grocery', 'Beverages', 'Brewhouse', 449, 599, 4, 'Smooth, low-acid concentrate -- just add water or milk.', null, null],
  ['Plant-Based Dish Wash 1L', 'grocery', 'Household Essentials', 'Verdant', 249, 329, 3, 'A biodegradable dish soap that cuts grease without harsh chemicals.', null, null],
  ['Multigrain Breakfast Mix', 'grocery', 'Snacks', 'Harvest', 329, 399, 4, 'A wholesome blend of oats, millet and seeds.', null, null],
  ['Pro Grip Yoga Mat', 'sports', 'Fitness', 'Ridgeline', 1299, 1799, 5, 'A 6mm non-slip mat with alignment lines for better form.', ['Teal', 'Charcoal'], null],
  ['Aero Running Shoes', 'sports', 'Running', 'Ridgeline', 3299, 4499, 4, 'Responsive foam cushioning for long, easy miles.', ['Black/Orange', 'Grey/Blue'], ['7', '8', '9', '10', '11']],
  ['Match Ready Cricket Bat', 'sports', 'Cricket', 'Boundary', 3999, 5499, 4, 'A Kashmir willow bat balanced for quick strokes.', null, null],
  ['Adjustable Dumbbell Set', 'sports', 'Gym Equipment', 'IronCore', 4499, 5999, 4, 'A space-saving pair that adjusts from 2.5kg to 20kg each.', null, null],
  ['The Last Lighthouse (Novel)', 'books', 'Fiction', 'Pageturn Press', 349, 499, 5, 'A quiet, gripping story about a keeper and the sea he watches.', null, null],
  ['Clean Code Fundamentals', 'books', 'Technology', 'Compile Books', 799, 999, 5, 'A practical guide to writing code that other people can read.', null, null],
  ['Atomic Habits, Simplified', 'books', 'Self Development', 'Northline', 399, 549, 5, 'Small, everyday changes explained in plain language.', null, null],
  ['Wooden Building Blocks (80pc)', 'toys', 'Toys', 'Little Maker', 999, 1399, 5, "Sanded, paint-safe blocks that grow with your child's imagination.", null, null],
  ['Family Strategy Board Game', 'toys', 'Games', 'Tabletop Co', 1199, 1599, 4, 'A 30-minute game for 2-4 players, ages 8 and up.', null, null],
  ['Soft Cotton Kids Hoodie', 'toys', 'Kids Clothing', 'Little Maker', 699, 999, 4, 'Brushed-cotton fleece, machine washable and durable.', ['Mustard', 'Sky Blue'], ['2-3Y', '4-5Y', '6-7Y']],
]

function seededReviewCount(seed) {
  return 40 + (seed * 37) % 900
}

const productImages = [
  // 1. Smartphone
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',

  // 2. Laptop
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',

  // 3. Wireless Earbuds
  'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',

  // 4. Smart Watch
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',

  // 5. Camera
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',

  // 6. Volt 65W Fast Charger
  'https://images.unsplash.com/photo-1618052442385-ecaa3ad0b1e2?auto=format&fit=crop&w=800&q=80',

  // 7. T-Shirt
  'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=80',

  // 8. Dress
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',

  // 9. Trail Runner Sneakers
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',

  // 10. Backpack
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',

  // 11. Watch
  'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',

  // 12. Travel Bag
  'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=800&q=80',

  // 13. Skincare
  'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80',

  // 14. Lipstick
  'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',

  // 15. Shampoo / Hair Care
  'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',

  // 16. Perfume
  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',

  // 17. Sofa / Furniture
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',

  // 18. Non-Stick Cookware
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',

  // 19. Office Chair
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80',

  // 20. Table Lamp
  'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',

  // 21. Roasted Almonds 500g
  'https://images.unsplash.com/photo-1579282940892-6152e6e80c52?auto=format&fit=crop&w=800&q=80',

  // 22. Coffee
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',

  // 23. Plant-Based Dish Wash 1L
  'https://images.unsplash.com/photo-1691057183900-0a0f9ddbf6e4?auto=format&fit=crop&w=800&q=80',

  // 24. Notebook / Stationery
  'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=800&q=80',

  // 25. Yoga / Fitness
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',

  // 26. Running Shoes
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',

  // 27. Match Ready Cricket Bat
  'https://images.unsplash.com/photo-1547839918-5ed99eac4175?auto=format&fit=crop&w=800&q=80',

  // 28. Gym / Fitness
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',

  // 29. Book
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',

  // 30. Books
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80',

  // 31. Reading / Book
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80',

  // 32. Wooden Building Blocks (80pc)
  'https://images.unsplash.com/photo-1568828668638-b1b4014d91a2?auto=format&fit=crop&w=800&q=80',

  // 33. Home Decor
  'https://images.unsplash.com/photo-1560961911-ba7ef651a56c?auto=format&fit=crop&w=800&q=80',

  // 34. Soft Cotton Kids Hoodie
  'https://images.unsplash.com/photo-1563730372821-22094003e498?auto=format&fit=crop&w=800&q=80',
]
export const products = raw.map((r, i) => {
  const id = i + 1
  const [name, category, subcategory, brand, price, originalPrice, ratingBase, description, colors, sizes] = r
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
  return {
    id,
    name,
    category,
    subcategory,
    brand,
    price,
    originalPrice,
    discount,
    rating: ratingBase + (i % 2 === 0 ? 0.3 : 0.6),
    reviews: seededReviewCount(id),
    image: productImages[i],
    images: [
      productImages[i],
      productImages[i],
      productImages[i],
    ],
    description,
    stock: (id * 7) % 15,
    colors,
    sizes,
    specifications: {
      Brand: brand,
      Category: category,
      'Model No.': `SN-${1000 + id}`,
      Warranty: '1 Year Manufacturer Warranty',
    },
    tags: id % 5 === 0 ? ['bestseller'] : id % 4 === 0 ? ['new'] : id % 3 === 0 ? ['trending'] : [],
  }
})

export const getProductById = (id) => products.find((p) => p.id === Number(id))
