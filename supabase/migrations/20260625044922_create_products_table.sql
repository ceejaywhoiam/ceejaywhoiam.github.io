
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  price numeric(10,2) NOT NULL,
  quantity integer NOT NULL DEFAULT 0,
  description text NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  image_url text,
  badge text,
  variants jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_products" ON products FOR SELECT TO anon, authenticated USING (true);

INSERT INTO products (name, category, price, quantity, description, features, badge) VALUES
(
  'Pink Dynasty',
  'Gloss',
  10.00,
  11,
  'A soft luxury pink created for the girls who know their worth and wear confidence effortlessly. "Pretty Paid" is the perfect baby pink matte gloss that delivers smooth, velvety color with a lightweight feel and an elegant finish. Feminine, classy, and timeless — this shade was made for soft glam days, brunch dates, selfies, boss moves, and being that girl everywhere you go.',
  ARRAY['Soft luxury baby pink','Smooth velvet matte finish','Lightweight & comfortable wear','Highly pigmented color payoff','Feminine soft glam essential','Beautiful on every skin tone'],
  '1 of 5 Matte Lip Gloss'
),
(
  'Expensive Taste',
  'Gloss',
  10.00,
  9,
  'A rich caramel nude designed for the woman who loves luxury, confidence, and timeless beauty. "Expensive Taste" delivers a smooth velvet-matte finish with a lightweight feel that melts perfectly onto the lips while giving effortless soft glam energy. This elegant nude shade is classy, bold, and sophisticated — perfect for everyday luxury, date nights, business looks, vacations, and iconic selfies.',
  ARRAY['Rich caramel nude tone','Smooth velvet matte finish','Lightweight & comfortable wear','Highly pigmented luxury color','Sophisticated soft glam essential','Beautiful on every skin tone'],
  '2 of 5 Matte Lip Gloss'
),
(
  'Rich Girl Energy',
  'Gloss',
  10.00,
  14,
  'A bold royal pink made for the girls who expect luxury, confidence, and attention the moment they walk in the room. "Princess Treatment" delivers rich color with a smooth velvet-matte finish that feels lightweight while giving full glam energy. This vibrant pink shade is feminine, classy, playful, and powerful all at once — perfect for date nights, brunches, vacations, selfies, and soft luxury looks.',
  ARRAY['Rich vibrant princess pink','Smooth velvet matte finish','Lightweight comfortable wear','Highly pigmented color payoff','Glamorous statement shade','Perfect for all skin tones'],
  '3 of 5 Matte Lip Gloss'
),
(
  'First Class Kiss',
  'Gloss',
  10.00,
  9,
  'A rich luxurious red shade designed for the woman who carries herself like a VIP everywhere she goes. "First Class Kiss" delivers bold feminine energy with a smooth velvet-matte finish that feels lightweight yet unforgettable. This glamorous statement color was made for soft luxury, date nights, vacations, selfies, girls'' night, and walking in confidence.',
  ARRAY['Rich vibrant red tone','Smooth velvet matte finish','Lightweight comfortable wear','Highly pigmented luxury color','Glamorous bold feminine energy','Perfect for all skin tones'],
  '4 of 5 Matte Lip Gloss'
),
(
  'Trophy Wife',
  'Gloss',
  10.00,
  7,
  'A rich mauve nude made for the woman who walks with confidence, elegance, and boss energy. "Trophy Wife" delivers a smooth velvet-matte finish with a luxurious lightweight feel that speaks power, beauty, and sophistication in every swipe. This timeless shade is perfect for business meetings, brunch dates, soft glam nights, luxury selfies, and everyday Iconixx beauty.',
  ARRAY['Sophisticated mauve nude tone','Smooth velvet matte finish','Lightweight & comfortable wear','Rich highly pigmented color','Soft luxury boss-girl energy','Beautiful on every skin tone'],
  '5 of 5 Matte Lip Gloss'
),
(
  'The Timeless Collection',
  'Mascara',
  14.99,
  20,
  'Turn every blink into a statement with the new Iconixx Beauty Mascara — designed to deliver bold volume, dramatic length, and flawless definition in every stroke. This luxury formula lifts and separates each lash effortlessly while creating a soft glamorous finish that lasts all day without clumping or flaking. The sleek black and rose gold packaging brings timeless elegance to your beauty routine while the precision wand coats every lash from root to tip for a fuller, eye-opening effect.',
  ARRAY['Intense volume & dramatic length','Smooth clump-free application','Lightweight comfortable wear','Long-lasting all-day glam','Precision wand for flawless definition','Vegan & cruelty-free'],
  'Black & Rose Gold'
),
(
  'Timeless Nude Luxe Palette',
  'Palette',
  9.99,
  10,
  'The Timeless Nude Luxe Palette is the definition of effortless beauty. Featuring warm caramel tones, rich chocolate browns, golden shimmer shades, and smooth transition colors, this palette delivers soft glam perfection every time. Whether you want a natural daytime look or a sultry nighttime beat, this palette does it all beautifully.',
  ARRAY['Warm caramel & chocolate tones','Golden shimmer shades','Smooth transition colors','Soft glam day-to-night versatility','Richly pigmented formula','Silky blendable texture'],
  'Tan'
),
(
  'Royal Reign Palette',
  'Palette',
  9.99,
  10,
  'A luxury neutral palette designed for soft glam lovers who want elegance, warmth, and rich pigment all in one. Featuring creamy matte browns, caramel tones, champagne shimmer, and golden bronze sparkle shades, this palette creates effortless beauty for everyday wear or full glam nights.',
  ARRAY['Creamy matte browns','Caramel & champagne tones','Golden bronze sparkle shades','Everyday to full glam versatility','Rich luxury pigment','Effortlessly blendable'],
  'Black'
),
(
  'Midnight Precision Liquid Liner',
  'Liner',
  8.00,
  20,
  'Create bold, flawless eyes with the Midnight Precision Liquid Liner by Iconixx Beauty — the ultimate luxury eyeliner designed for smooth, effortless application. This ultra-black formula glides on like silk with a precision tip that delivers sharp wings, dramatic cat-eyes, or sleek everyday definition in just one stroke. Smudge-resistant, long-lasting, and richly pigmented, this liner was made for beauty queens who want their eyes to speak before they do.',
  ARRAY['Ultra-black precision formula','Silk-smooth glide application','Smudge-resistant & long-lasting','Sharp wings in one stroke','Richly pigmented color','Precision felt tip wand'],
  NULL
),
(
  'CEO Lip Collection',
  'Lipstick',
  22.00,
  30,
  'CEO Lip Collection is the ultimate statement lip designed for the woman who walks in confidence and leaves a lasting impression. This ultra-smooth lipstick delivers rich pigment, a velvety matte finish, and luxurious all-day wear without feeling dry. From brunch dates to boss meetings, this vibrant collection was made to stand out.',
  ARRAY['Ultra-smooth matte formula','Rich highly pigmented color','All-day luxurious wear','Non-drying velvety finish','Available in Bare, Plum & Pink','Bold boss-girl statement'],
  'Bare / Plum / Pink'
);
