(() => {
'use strict';

/* ============================================================
   Type A: House Organizer — FINAL Draft
   Cozy drag-and-drop puzzle • 6 rooms: Living, Kitchen, Bedroom,
   Bathroom, Garage, Garden • realistic cozy illustrations
   ============================================================ */

/* ---------------- Gradients & ICONS (cozy illustrated) ---------------- */
const GRADIENT_DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="gCoral" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7BBA6"/><stop offset="1" stop-color="#E9866A"/></linearGradient>
<linearGradient id="gTeal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#79C4E4"/><stop offset="1" stop-color="#3E9BC4"/></linearGradient>
<linearGradient id="gWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DDB98D"/><stop offset="1" stop-color="#B5855E"/></linearGradient>
<linearGradient id="gAmber" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F9D98E"/><stop offset="1" stop-color="#E0A83C"/></linearGradient>
<linearGradient id="gSage" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B3CEA2"/><stop offset="1" stop-color="#7FA468"/></linearGradient>
<linearGradient id="gLav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D2C4EA"/><stop offset="1" stop-color="#A08BC6"/></linearGradient>
<linearGradient id="gBlush" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7C9C3"/><stop offset="1" stop-color="#E89A8E"/></linearGradient>
<linearGradient id="gGrey" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D6DAE0"/><stop offset="1" stop-color="#A9AFB8"/></linearGradient>
<linearGradient id="gCream" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF9EC"/><stop offset="1" stop-color="#F0DCC0"/></linearGradient>
<linearGradient id="gMint" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C2E2D2"/><stop offset="1" stop-color="#8FBFAB"/></linearGradient>
<linearGradient id="gPeach" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD3AA"/><stop offset="1" stop-color="#EFA467"/></linearGradient>
<linearGradient id="gRed" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F29284"/><stop offset="1" stop-color="#E2574C"/></linearGradient>
<linearGradient id="gBrown" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D2A77C"/><stop offset="1" stop-color="#A3764B"/></linearGradient>
<linearGradient id="gSoil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9A86D"/><stop offset="1" stop-color="#8B6F47"/></linearGradient>
</defs></svg>`;

/* PDF object artwork — 134 sprites cropped from the object catalogue (assets/objects/) */
const PNG = (id, alt) => `<img src="assets/objects/${id}.png" alt="${alt||id}" draggable="false">`;

const ICONS = {
  hammer: PNG('hammer','Hammer'),
  screwdriver: PNG('screwdriver','Screwdriver'),
  wrench: PNG('wrench','Wrench'),
  pliers: PNG('pliers','Pliers'),
  measuring_tape: PNG('measuring_tape','Measuring Tape'),
  drill: PNG('drill','Drill'),
  safety_goggles: PNG('safety_goggles','Safety Goggles'),
  bolts: PNG('bolts','Bolts'),
  paint_cans: PNG('paint_cans','Paint Cans'),
  motor_oil: PNG('motor_oil','Motor Oil'),
  small_boxes: PNG('small_boxes','Small Boxes'),
  tool_manuals: PNG('tool_manuals','Tool Manuals'),
  extension_cord: PNG('extension_cord','Extension Cord'),
  lubricant: PNG('lubricant','Lubricant'),
  spray_bottles_garage: PNG('spray_bottles_garage','Spray Bottles'),
  cleaning_rags: PNG('cleaning_rags','Cleaning Rags'),
  plastic_bottles: PNG('plastic_bottles','Plastic Bottles'),
  metal_shavings: PNG('metal_shavings','Metal Shavings'),
  broken_tools: PNG('broken_tools','Broken Tools'),
  empty_paint_tins: PNG('empty_paint_tins','Empty Paint Tins'),
  rusted_screws: PNG('rusted_screws','Rusted Screws'),
  rose_pot: PNG('rose_pot','Rose Pot'),
  lavender_pot: PNG('lavender_pot','Lavender Pot'),
  spider_plant: PNG('spider_plant','Spider Plant'),
  peace_lily: PNG('peace_lily','Peace Lily'),
  snake_plant: PNG('snake_plant','Snake Plant'),
  aloe_vera: PNG('aloe_vera','Aloe Vera'),
  bonsai: PNG('bonsai','Bonsai'),
  succulent: PNG('succulent','Succulent'),
  fertilizer_bags: PNG('fertilizer_bags','Fertilizer Bags'),
  seed_packets: PNG('seed_packets','Seed Packets'),
  plant_pots: PNG('plant_pots','Plant Pots'),
  watering_can: PNG('watering_can','Watering Can'),
  soil_bags: PNG('soil_bags','Soil Bags'),
  gardening_gloves: PNG('gardening_gloves','Gardening Gloves'),
  spray_bottles_garden: PNG('spray_bottles_garden','Spray Bottles'),
  small_buckets: PNG('small_buckets','Small Buckets'),
  shovel: PNG('shovel','Shovel'),
  rake: PNG('rake','Rake'),
  hoe: PNG('hoe','Hoe'),
  trowel: PNG('trowel','Trowel'),
  pruning_shears: PNG('pruning_shears','Pruning Shears'),
  garden_fork: PNG('garden_fork','Garden Fork'),
  wheelbarrow: PNG('wheelbarrow','Wheelbarrow'),
  lawn_mower: PNG('lawn_mower','Lawn Mower'),
  novels: PNG('novels','Novels'),
  photo_albums: PNG('photo_albums','Photo Albums'),
  trophy: PNG('trophy','Trophy'),
  decorative_bookends: PNG('decorative_bookends','Decorative Bookends'),
  picture_frame: PNG('picture_frame','Picture Frame'),
  journals: PNG('journals','Journals'),
  action_figures: PNG('action_figures','Action Figures'),
  teddy_bear: PNG('teddy_bear','Teddy Bear'),
  building_blocks: PNG('building_blocks','Building Blocks'),
  puzzle_set: PNG('puzzle_set','Puzzle Set'),
  toy_car: PNG('toy_car','Toy Car'),
  doll: PNG('doll','Doll'),
  yoyo: PNG('yoyo','Yo-Yo'),
  board_game_pieces: PNG('board_game_pieces','Board Game Pieces'),
  ball: PNG('ball','Ball'),
  keys_living: PNG('keys_living','Keys'),
  sunglasses: PNG('sunglasses','Sunglasses'),
  wallet: PNG('wallet','Wallet'),
  mail: PNG('mail','Mail'),
  umbrella: PNG('umbrella','Umbrella'),
  hat_living: PNG('hat_living','Hat'),
  shoes_entry_living: PNG('shoes_entry_living','Shoes'),
  plate: PNG('plate','Plates'),
  bowls: PNG('bowls','Bowls'),
  mugs: PNG('mugs','Mugs'),
  pan: PNG('pan','Pan'),
  mixing_bowls: PNG('mixing_bowls','Mixing Bowls'),
  baking_dish: PNG('baking_dish','Baking Dish'),
  cutting_board: PNG('cutting_board','Cutting Board'),
  spice_jars: PNG('spice_jars','Spice Jars'),
  milk: PNG('milk','Milk'),
  eggs: PNG('eggs','Eggs'),
  butter: PNG('butter','Butter'),
  vegetables: PNG('vegetables','Vegetables'),
  fruits: PNG('fruits','Fruits'),
  juice: PNG('juice','Juice'),
  yogurt: PNG('yogurt','Yogurt'),
  bottled_water: PNG('bottled_water','Bottled Water'),
  food_wrappers: PNG('food_wrappers','Food Wrappers'),
  peels: PNG('peels','Peels'),
  eggshells: PNG('eggshells','Eggshells'),
  empty_bottles_kitchen: PNG('empty_bottles_kitchen','Empty Bottles'),
  expired_food: PNG('expired_food','Expired Food'),
  tea_bags: PNG('tea_bags','Tea Bags'),
  brown_paper_bag: PNG('brown_paper_bag','Brown Paper Bag'),
  vegetable_peels: PNG('vegetable_peels','Vegetable Peels'),
  shirts: PNG('shirts','Shirts'),
  pants: PNG('pants','Pants'),
  dress: PNG('dress','Dress'),
  ties: PNG('ties','Ties'),
  sweaters: PNG('sweaters','Sweaters'),
  scarves: PNG('scarves','Scarves'),
  belts: PNG('belts','Belts'),
  jackets: PNG('jackets','Jackets'),
  dirty_shirts: PNG('dirty_shirts','Dirty Shirts'),
  dirty_socks: PNG('dirty_socks','Dirty Socks'),
  dirty_towels: PNG('dirty_towels','Dirty Towels'),
  dirty_shorts: PNG('dirty_shorts','Dirty Shorts'),
  bed_sheets: PNG('bed_sheets','Bed Sheets'),
  pillowcases: PNG('pillowcases','Pillowcases'),
  dirty_jeans: PNG('dirty_jeans','Dirty Jeans'),
  dirty_sweaters: PNG('dirty_sweaters','Dirty Sweaters'),
  shoes_bedroom: PNG('shoes_bedroom','Shoes'),
  hats_bedroom: PNG('hats_bedroom','Hats'),
  keys_bedroom: PNG('keys_bedroom','Keys'),
  decorative_frame: PNG('decorative_frame','Decorative Frame'),
  lamp: PNG('lamp','Lamp'),
  alarm_clock: PNG('alarm_clock','Alarm Clock'),
  phone_charger: PNG('phone_charger','Phone Charger'),
  notebook: PNG('notebook','Notebook'),
  bandages: PNG('bandages','Bandages'),
  painkillers: PNG('painkillers','Painkillers'),
  alcohol: PNG('alcohol','Alcohol'),
  cotton_balls: PNG('cotton_balls','Cotton Balls'),
  thermometer: PNG('thermometer','Thermometer'),
  ointments: PNG('ointments','Ointments'),
  eye_drops: PNG('eye_drops','Eye Drops'),
  first_aid_kit: PNG('first_aid_kit','First Aid Kit'),
  lipstick: PNG('lipstick','Lipstick'),
  foundation: PNG('foundation','Foundation'),
  mascara: PNG('mascara','Mascara'),
  eyeliner: PNG('eyeliner','Eyeliner'),
  makeup_brushes: PNG('makeup_brushes','Makeup Brushes'),
  makeup_remover: PNG('makeup_remover','Makeup Remover'),
  eyeshadow_palette: PNG('eyeshadow_palette','Eyeshadow Palette'),
  compact_powder: PNG('compact_powder','Compact Powder'),
  bath_towels: PNG('bath_towels','Bath Towels'),
  washcloths: PNG('washcloths','Washcloths'),
  shirts_bathroom: PNG('shirts_bathroom','Shirts'),
  /* legacy aliases (room icons, arrange fallback) */
  book: PNG('novels','Novels'),
  potted_plant: PNG('rose_pot','Rose Pot'),
  palette: PNG('lipstick','Lipstick'),
};

const CATEGORIES = {
  garage_workbench: { name: 'Workbench',       css: 'comp--workbench',   kind: 'bench',  hint: ICONS.hammer },
  garage_storage:   { name: 'Storage Shelf',   css: 'comp--storage',     kind: 'shelf',  hint: ICONS.paint_cans },
  garage_trash:     { name: 'Trash Bin',       css: 'comp--trash',       kind: 'bin',    hint: ICONS.plastic_bottles },
  garden_plant_stand:{ name: 'Plant Stand',    css: 'comp--plant',       kind: 'stand',  hint: ICONS.potted_plant },
  garden_storage:   { name: 'Storage Shelf',   css: 'comp--storage',     kind: 'shelf',  hint: ICONS.fertilizer_bags },
  garden_tools:     { name: 'Garden Tools',    css: 'comp--garden',      kind: 'rail',   hint: ICONS.shovel },
  living_bookshelf: { name: 'Bookshelf',       css: 'comp--bookshelf',   kind: 'shelf',  hint: ICONS.book },
  living_toybox:    { name: 'Toy Box',         css: 'comp--toybox',      kind: 'chest',  hint: ICONS.teddy_bear },
  living_entry:     { name: 'Entry Shelf',     css: 'comp--shoes',       kind: 'shelf',  hint: ICONS.sunglasses },
  kitchen_shelf:    { name: 'Kitchen Shelf',   css: 'comp--kitchen-mint',kind: 'shelf',  hint: ICONS.plate },
  kitchen_fridge:   { name: 'Fridge',          css: 'comp--fridge',      kind: 'door',   hint: ICONS.milk },
  kitchen_trash:    { name: 'Trash Bin',       css: 'comp--trash',       kind: 'bin',    hint: ICONS.food_wrappers },
  bedroom_closet:   { name: 'Closet',          css: 'comp--dresser',     kind: 'drawer', hint: ICONS.shirts },
  bedroom_laundry:  { name: 'Laundry Basket',  css: 'comp--laundry',     kind: 'basket', hint: ICONS.dirty_shirts },
  bedroom_entry:    { name: 'Entry Shelf',     css: 'comp--shoes',       kind: 'shelf',  hint: ICONS.lamp },
  bathroom_medicine:{ name: 'Medicine Cabinet',css: 'comp--medicine',    kind: 'mirror', hint: ICONS.bandages },
  bathroom_makeup:  { name: 'Makeup Drawer',   css: 'comp--vanity',      kind: 'drawer', hint: ICONS.palette },
  bathroom_towel:   { name: 'Towel Rack',      css: 'comp--towel',       kind: 'rack',   hint: ICONS.bath_towels },
};

const ITEMS = [
  { id: 'hammer',           name: 'Hammer',           cat: 'garage_workbench' },
  { id: 'screwdriver',      name: 'Screwdriver',      cat: 'garage_workbench' },
  { id: 'wrench',           name: 'Wrench',           cat: 'garage_workbench' },
  { id: 'pliers',           name: 'Pliers',           cat: 'garage_workbench' },
  { id: 'measuring_tape',   name: 'Measuring Tape',   cat: 'garage_workbench' },
  { id: 'drill',            name: 'Drill',            cat: 'garage_workbench' },
  { id: 'safety_goggles',   name: 'Safety Goggles',   cat: 'garage_workbench' },
  { id: 'bolts',            name: 'Bolts',            cat: 'garage_workbench' },
  { id: 'paint_cans',       name: 'Paint Cans',       cat: 'garage_storage' },
  { id: 'motor_oil',        name: 'Motor Oil',        cat: 'garage_storage' },
  { id: 'small_boxes',      name: 'Small Boxes',      cat: 'garage_storage' },
  { id: 'tool_manuals',     name: 'Tool Manuals',     cat: 'garage_storage' },
  { id: 'extension_cord',   name: 'Extension Cord',   cat: 'garage_storage' },
  { id: 'lubricant',        name: 'Lubricant',        cat: 'garage_storage' },
  { id: 'spray_bottles_garage', name: 'Spray Bottles', cat: 'garage_storage' },
  { id: 'cleaning_rags',    name: 'Cleaning Rags',    cat: 'garage_storage' },
  { id: 'plastic_bottles',  name: 'Plastic Bottles',  cat: 'garage_trash' },
  { id: 'metal_shavings',   name: 'Metal Shavings',   cat: 'garage_trash' },
  { id: 'broken_tools',     name: 'Broken Tools',     cat: 'garage_trash' },
  { id: 'empty_paint_tins', name: 'Empty Paint Tins', cat: 'garage_trash' },
  { id: 'rusted_screws',    name: 'Rusted Screws',    cat: 'garage_trash' },
  { id: 'rose_pot',         name: 'Rose Pot',         cat: 'garden_plant_stand' },
  { id: 'lavender_pot',     name: 'Lavender Pot',     cat: 'garden_plant_stand' },
  { id: 'spider_plant',     name: 'Spider Plant',     cat: 'garden_plant_stand' },
  { id: 'peace_lily',       name: 'Peace Lily',       cat: 'garden_plant_stand' },
  { id: 'snake_plant',      name: 'Snake Plant',      cat: 'garden_plant_stand' },
  { id: 'aloe_vera',        name: 'Aloe Vera',        cat: 'garden_plant_stand' },
  { id: 'bonsai',           name: 'Bonsai',           cat: 'garden_plant_stand' },
  { id: 'succulent',        name: 'Succulent',        cat: 'garden_plant_stand' },
  { id: 'fertilizer_bags',  name: 'Fertilizer Bags',  cat: 'garden_storage' },
  { id: 'seed_packets',     name: 'Seed Packets',     cat: 'garden_storage' },
  { id: 'plant_pots',       name: 'Plant Pots',       cat: 'garden_storage' },
  { id: 'watering_can',     name: 'Watering Can',     cat: 'garden_storage' },
  { id: 'soil_bags',        name: 'Soil Bags',        cat: 'garden_storage' },
  { id: 'gardening_gloves', name: 'Gardening Gloves', cat: 'garden_storage' },
  { id: 'spray_bottles_garden', name: 'Spray Bottles', cat: 'garden_storage' },
  { id: 'small_buckets',    name: 'Small Buckets',    cat: 'garden_storage' },
  { id: 'shovel',           name: 'Shovel',           cat: 'garden_tools' },
  { id: 'rake',             name: 'Rake',             cat: 'garden_tools' },
  { id: 'hoe',              name: 'Hoe',              cat: 'garden_tools' },
  { id: 'trowel',           name: 'Trowel',           cat: 'garden_tools' },
  { id: 'pruning_shears',   name: 'Pruning Shears',   cat: 'garden_tools' },
  { id: 'garden_fork',      name: 'Garden Fork',      cat: 'garden_tools' },
  { id: 'wheelbarrow',      name: 'Wheelbarrow',      cat: 'garden_tools' },
  { id: 'lawn_mower',       name: 'Lawn Mower',       cat: 'garden_tools' },
  { id: 'novels',           name: 'Novels',           cat: 'living_bookshelf' },
  { id: 'photo_albums',     name: 'Photo Albums',     cat: 'living_bookshelf' },
  { id: 'trophy',           name: 'Trophy',           cat: 'living_bookshelf' },
  { id: 'decorative_bookends', name: 'Decorative Bookends', cat: 'living_bookshelf' },
  { id: 'picture_frame',    name: 'Picture Frame',    cat: 'living_bookshelf' },
  { id: 'journals',         name: 'Journals',         cat: 'living_bookshelf' },
  { id: 'action_figures',   name: 'Action Figures',   cat: 'living_bookshelf' },
  { id: 'teddy_bear',       name: 'Teddy Bear',       cat: 'living_toybox' },
  { id: 'building_blocks',  name: 'Building Blocks',  cat: 'living_toybox' },
  { id: 'puzzle_set',       name: 'Puzzle Set',       cat: 'living_toybox' },
  { id: 'toy_car',          name: 'Toy Car',          cat: 'living_toybox' },
  { id: 'doll',             name: 'Doll',             cat: 'living_toybox' },
  { id: 'yoyo',             name: 'Yo-Yo',            cat: 'living_toybox' },
  { id: 'board_game_pieces', name: 'Board Game Pieces', cat: 'living_toybox' },
  { id: 'ball',             name: 'Ball',             cat: 'living_toybox' },
  { id: 'keys_living',      name: 'Keys',             cat: 'living_entry' },
  { id: 'sunglasses',       name: 'Sunglasses',       cat: 'living_entry' },
  { id: 'wallet',           name: 'Wallet',           cat: 'living_entry' },
  { id: 'mail',             name: 'Mail',             cat: 'living_entry' },
  { id: 'umbrella',         name: 'Umbrella',         cat: 'living_entry' },
  { id: 'hat_living',       name: 'Hat',              cat: 'living_entry' },
  { id: 'shoes_entry_living', name: 'Shoes',          cat: 'living_entry' },
  { id: 'plate',            name: 'Plates',           cat: 'kitchen_shelf' },
  { id: 'bowls',            name: 'Bowls',            cat: 'kitchen_shelf' },
  { id: 'mugs',             name: 'Mugs',             cat: 'kitchen_shelf' },
  { id: 'pan',              name: 'Pan',              cat: 'kitchen_shelf' },
  { id: 'mixing_bowls',     name: 'Mixing Bowls',     cat: 'kitchen_shelf' },
  { id: 'baking_dish',      name: 'Baking Dish',      cat: 'kitchen_shelf' },
  { id: 'cutting_board',    name: 'Cutting Board',    cat: 'kitchen_shelf' },
  { id: 'spice_jars',       name: 'Spice Jars',       cat: 'kitchen_shelf' },
  { id: 'milk',             name: 'Milk',             cat: 'kitchen_fridge' },
  { id: 'eggs',             name: 'Eggs',             cat: 'kitchen_fridge' },
  { id: 'butter',           name: 'Butter',           cat: 'kitchen_fridge' },
  { id: 'vegetables',       name: 'Vegetables',       cat: 'kitchen_fridge' },
  { id: 'fruits',           name: 'Fruits',           cat: 'kitchen_fridge' },
  { id: 'juice',            name: 'Juice',            cat: 'kitchen_fridge' },
  { id: 'yogurt',           name: 'Yogurt',           cat: 'kitchen_fridge' },
  { id: 'bottled_water',    name: 'Bottled Water',    cat: 'kitchen_fridge' },
  { id: 'food_wrappers',    name: 'Food Wrappers',    cat: 'kitchen_trash' },
  { id: 'peels',            name: 'Peels',            cat: 'kitchen_trash' },
  { id: 'eggshells',        name: 'Eggshells',        cat: 'kitchen_trash' },
  { id: 'empty_bottles_kitchen', name: 'Empty Bottles', cat: 'kitchen_trash' },
  { id: 'expired_food',     name: 'Expired Food',     cat: 'kitchen_trash' },
  { id: 'tea_bags',         name: 'Tea Bags',         cat: 'kitchen_trash' },
  { id: 'brown_paper_bag',  name: 'Brown Paper Bag',  cat: 'kitchen_trash' },
  { id: 'vegetable_peels',  name: 'Vegetable Peels',  cat: 'kitchen_trash' },
  { id: 'shirts',           name: 'Shirts',           cat: 'bedroom_closet' },
  { id: 'pants',            name: 'Pants',            cat: 'bedroom_closet' },
  { id: 'dress',            name: 'Dress',            cat: 'bedroom_closet' },
  { id: 'ties',             name: 'Ties',             cat: 'bedroom_closet' },
  { id: 'sweaters',         name: 'Sweaters',         cat: 'bedroom_closet' },
  { id: 'scarves',          name: 'Scarves',          cat: 'bedroom_closet' },
  { id: 'belts',            name: 'Belts',            cat: 'bedroom_closet' },
  { id: 'jackets',          name: 'Jackets',          cat: 'bedroom_closet' },
  { id: 'dirty_shirts',     name: 'Dirty Shirts',     cat: 'bedroom_laundry' },
  { id: 'dirty_socks',      name: 'Dirty Socks',      cat: 'bedroom_laundry' },
  { id: 'dirty_towels',     name: 'Dirty Towels',     cat: 'bedroom_laundry' },
  { id: 'dirty_shorts',     name: 'Dirty Shorts',     cat: 'bedroom_laundry' },
  { id: 'bed_sheets',       name: 'Bed Sheets',       cat: 'bedroom_laundry' },
  { id: 'pillowcases',      name: 'Pillowcases',      cat: 'bedroom_laundry' },
  { id: 'dirty_jeans',      name: 'Dirty Jeans',      cat: 'bedroom_laundry' },
  { id: 'dirty_sweaters',   name: 'Dirty Sweaters',   cat: 'bedroom_laundry' },
  { id: 'shoes_bedroom',    name: 'Shoes',            cat: 'bedroom_entry' },
  { id: 'hats_bedroom',     name: 'Hats',             cat: 'bedroom_entry' },
  { id: 'keys_bedroom',     name: 'Keys',             cat: 'bedroom_entry' },
  { id: 'decorative_frame', name: 'Decorative Frame', cat: 'bedroom_entry' },
  { id: 'lamp',             name: 'Lamp',             cat: 'bedroom_entry' },
  { id: 'alarm_clock',      name: 'Alarm Clock',      cat: 'bedroom_entry' },
  { id: 'phone_charger',    name: 'Phone Charger',    cat: 'bedroom_entry' },
  { id: 'notebook',         name: 'Notebook',         cat: 'bedroom_entry' },
  { id: 'bandages',         name: 'Bandages',         cat: 'bathroom_medicine' },
  { id: 'painkillers',      name: 'Painkillers',      cat: 'bathroom_medicine' },
  { id: 'alcohol',          name: 'Alcohol',          cat: 'bathroom_medicine' },
  { id: 'cotton_balls',     name: 'Cotton Balls',     cat: 'bathroom_medicine' },
  { id: 'thermometer',      name: 'Thermometer',      cat: 'bathroom_medicine' },
  { id: 'ointments',        name: 'Ointments',        cat: 'bathroom_medicine' },
  { id: 'eye_drops',        name: 'Eye Drops',        cat: 'bathroom_medicine' },
  { id: 'first_aid_kit',    name: 'First Aid Kit',    cat: 'bathroom_medicine' },
  { id: 'lipstick',         name: 'Lipstick',         cat: 'bathroom_makeup' },
  { id: 'foundation',       name: 'Foundation',       cat: 'bathroom_makeup' },
  { id: 'mascara',          name: 'Mascara',          cat: 'bathroom_makeup' },
  { id: 'eyeliner',         name: 'Eyeliner',         cat: 'bathroom_makeup' },
  { id: 'makeup_brushes',   name: 'Makeup Brushes',   cat: 'bathroom_makeup' },
  { id: 'makeup_remover',   name: 'Makeup Remover',   cat: 'bathroom_makeup' },
  { id: 'eyeshadow_palette', name: 'Eyeshadow Palette', cat: 'bathroom_makeup' },
  { id: 'compact_powder',   name: 'Compact Powder',   cat: 'bathroom_makeup' },
  { id: 'bath_towels',      name: 'Bath Towels',      cat: 'bathroom_towel' },
  { id: 'washcloths',       name: 'Washcloths',       cat: 'bathroom_towel' },
  { id: 'shirts_bathroom',  name: 'Shirts',           cat: 'bathroom_towel' },
];

/* ---------------- Rooms: Level 1-6 — 1F Garage/Garden, 2F Living/Kitchen, 3F Bedroom/Bathroom ---------------- */
const ROOMS = [
  { id: 'garage',      name: 'Garage',      floor: 1, categories: ['garage_workbench','garage_storage','garage_trash'],       icon: ICONS.hammer },
  { id: 'garden',      name: 'Garden',      floor: 1, categories: ['garden_plant_stand','garden_storage','garden_tools'],    icon: ICONS.potted_plant },
  { id: 'living_room', name: 'Living Room', floor: 2, categories: ['living_bookshelf','living_toybox','living_entry'],      icon: ICONS.book },
  { id: 'kitchen',     name: 'Kitchen',     floor: 2, categories: ['kitchen_shelf','kitchen_fridge','kitchen_trash'],       icon: ICONS.pan },
  { id: 'bedroom',     name: 'Bedroom',     floor: 3, categories: ['bedroom_closet','bedroom_laundry','bedroom_entry'],      icon: ICONS.shirts },
  { id: 'bathroom',    name: 'Bathroom',    floor: 3, categories: ['bathroom_medicine','bathroom_makeup','bathroom_towel'], icon: ICONS.palette },
];

const DIFFICULTIES = {
  easy:   { label: 'Easy',   time: 45, itemsPerCat: 1 },
  medium: { label: 'Medium', time: 60, itemsPerCat: 2 },
  hard:   { label: 'Hard',   time: 80, itemsPerCat: 3 },
};

const ROOM_LAYOUTS = {
  garage:      { garage_workbench: [39.5, 54, 29, 26], garage_storage: [66, 19, 32, 41], garage_trash: [84.5, 62, 11, 25] },
  garden:      { garden_plant_stand: [74, 53, 16, 29], garden_tools: [25, 40, 12, 33], garden_storage: [43.5, 55, 14, 22] },
  living_room: { living_bookshelf: [80.5, 28.5, 12, 29], living_toybox: [22, 63, 20, 21], living_entry: [12, 63, 12, 22] },
  kitchen:     { kitchen_shelf: [50, 55, 24, 18], kitchen_fridge: [3, 29, 12, 54], kitchen_trash: [85, 62, 10, 24] },
  bedroom:     { bedroom_closet: [73, 48, 21, 38], bedroom_laundry: [55, 64, 12, 20], bedroom_entry: [12, 63, 12, 20] },
  bathroom:    { bathroom_medicine: [14, 17, 14, 25], bathroom_towel: [63, 30, 25, 24], bathroom_makeup: [13, 57, 23, 23] },
};

const STAR_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.3 6.8L12 17.4 6 20.6l1.3-6.8L2.2 9.1l6.9-.8z"/></svg>`;
const LOCK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="3"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

/* ---------------- Audio ---------------- */
let audioCtx = null;
let sfxOn = true;
let musicOn = true;
let musicTimer = null;
let musicStep = 0;
const CHORDS = [[261.63,329.63,392.00],[220.00,261.63,329.63],[174.61,220.00,261.63],[196.00,246.94,293.66]];
function getAudio(){ if(!audioCtx){ const AC=window.AudioContext||window.webkitAudioContext; if(AC) audioCtx=new AC(); } if(audioCtx&&audioCtx.state==='suspended') audioCtx.resume(); return audioCtx; }
function blip(freq,dur,type,vol,delay){ if(!audioCtx) return; const t=audioCtx.currentTime+(delay||0); const osc=audioCtx.createOscillator(); const gain=audioCtx.createGain(); osc.type=type||'sine'; osc.frequency.value=freq; gain.gain.setValueAtTime(vol,t); gain.gain.exponentialRampToValueAtTime(0.001,t+dur); osc.connect(gain); gain.connect(audioCtx.destination); osc.start(t); osc.stop(t+dur+0.05); }
const sfx={ pick(){ if(!sfxOn) return; getAudio(); blip(520,.06,'triangle',.12); }, correct(){ if(!sfxOn) return; getAudio(); blip(659,.12,'sine',.2); blip(880,.16,'sine',.2,.09); blip(1318,.2,'sine',.13,.18); }, wrong(){ if(!sfxOn) return; getAudio(); blip(200,.18,'square',.1); blip(150,.24,'square',.1,.12); }, tick(){ if(!sfxOn) return; getAudio(); blip(880,.05,'sine',.08); }, win(){ if(!sfxOn) return; getAudio(); [523,659,784,1047].forEach((f,i)=>blip(f,.25,'triangle',.18,i*.12)); }, lose(){ if(!sfxOn) return; getAudio(); [440,349,277,220].forEach((f,i)=>blip(f,.28,'triangle',.16,i*.15)); } };
function startMusic(){ if(!musicOn) return; stopMusic(); getAudio(); musicStep=0; const pattern=[0,0,1,0,2,2,3,2]; const stepDur=.55; const tick=()=>{ if(!musicOn||!audioCtx) return; const chord=CHORDS[pattern[musicStep%pattern.length]]; chord.forEach((f,i)=>blip(f,stepDur*2.2,'triangle',.025,i*.05)); const mel=[523.25,659.25,587.33,783.99]; blip(mel[musicStep%4],stepDur*1.4,'sine',.022); musicStep++; }; tick(); musicTimer=setInterval(tick,stepDur*1000); }
function stopMusic(){ if(musicTimer){ clearInterval(musicTimer); musicTimer=null; } }

/* ---------------- DOM ---------------- */
const $=s=>document.querySelector(s);
const menuScreen=$('#menu'), houseMapScreen=$('#houseMap'), gameScreen=$('#game'), room=$('#room');
const overlay=$('#overlay'), overlayCard=$('#overlayCard'), timerEl=$('#timer'), scoreEl=$('#score'), starsHudEl=$('#starsHud'), levelPill=$('#levelPill');
const homeBtn=$('#homeBtn'), restartBtn=$('#restartBtn'), soundBtn=$('#soundBtn'), musicBtn=$('#musicBtn');
const houseWinEl=id=>$('#win-'+id); const diffPopup=$('#diffPopup'), diffRoomIcon=$('#diffRoomIcon'), diffRoomName=$('#diffRoomName'), diffBtnsMap=$('#diffBtnsMap'), playRoomBtn=$('#playRoomBtn'), closeDiffPopup=$('#closeDiffPopup'), menuFromMap=$('#menuFromMap'), playBtn=$('#playBtn');
const arrangeScreen=$('#arrange'), arrangeHub=$('#arrangeHub'), arrangeTrayWrap=$('#arrangeTrayWrap'), arrangeTray=$('#arrangeTray'), arrangeTitle=$('#arrangeTitle'), arrangeInstruction=$('#arrangeInstruction'), arrangeProgress=$('#arrangeProgress'), arrangeFeedback=$('#arrangeFeedback'), checkArrangeBtn=$('#checkArrangeBtn'), arrangeHintBtn=$('#arrangeHintBtn'), backToHubBtn=$('#backToHubBtn'), arrangeBackBtn=$('#arrangeBackBtn');

/* ---------------- State ---------------- */
const state={ diff:'medium', timerInt:null, timeLeft:0, totalTime:0, score:0, wrong:0, placed:0, total:0, items:[], running:false, ended:false, currentRoomId:null, lastPoolIds:[], progress:{ garage:{unlocked:true,completed:false,bestStars:0}, garden:{unlocked:false,completed:false,bestStars:0}, living_room:{unlocked:false,completed:false,bestStars:0}, kitchen:{unlocked:false,completed:false,bestStars:0}, bedroom:{unlocked:false,completed:false,bestStars:0}, bathroom:{unlocked:false,completed:false,bestStars:0} } };
let drag=null;

/* ---------------- Helpers ---------------- */
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]];} return arr; }
function fmt(sec){ const s=Math.max(0,Math.ceil(sec)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }

/* ---------------- Progress — resets to Level 1 (Garage) on every refresh/open ---------------- */
function saveProgress(){ try{ localStorage.setItem('house_organizer_progress', JSON.stringify(state.progress)); }catch(e){} }
function loadProgress(){ try{ localStorage.removeItem('house_organizer_progress'); }catch(e){} // always start fresh at Garage — fulfils "refresh appears to level 1 again"
 // keep function signature for session unlocks, but ignore saved data
}
function resetProgress(){ Object.keys(state.progress).forEach((id,i)=>{ state.progress[id]={unlocked:i===0,completed:false,bestStars:0}; }); try{ localStorage.removeItem('house_organizer_progress'); }catch(e){} }

/* ---------------- Screens ---------------- */
function showScreen(name){ menuScreen.classList.toggle('hidden',name!=='menu'); houseMapScreen.classList.toggle('hidden',name!=='houseMap'); gameScreen.classList.toggle('hidden',name!=='game'); if(arrangeScreen) arrangeScreen.classList.toggle('hidden',name!=='arrange'); try{ window.scrollTo(0,0); }catch(e){} }
function showMenu(){ stopTimer(); stopMusic(); overlay.classList.add('hidden'); diffPopup.classList.add('hidden'); showScreen('menu'); }
function showHouseMap(){ stopTimer(); stopMusic(); overlay.classList.add('hidden'); diffPopup.classList.add('hidden'); renderHouseMap(); showScreen('houseMap'); }
function showArrange(){ stopTimer(); stopMusic(); overlay.classList.add('hidden'); diffPopup.classList.add('hidden'); showScreen('arrange'); }

/* ---------------- House map ---------------- */
function renderHouseMap(){ ROOMS.forEach(roomDef=>{ const prog=state.progress[roomDef.id]; const winEl=houseWinEl(roomDef.id); if(!winEl) return; const cross=winEl.querySelector('.win-cross'); winEl.innerHTML=''; if(cross) winEl.appendChild(cross); winEl.className='house-window'; if(!prog.unlocked) winEl.classList.add('locked'); if(prog.completed) winEl.classList.add('completed'); const card=document.createElement('div'); card.className='room-card'; const icon=document.createElement('div'); icon.className='room-card-icon'; icon.innerHTML=roomDef.icon; const name=document.createElement('div'); name.className='room-card-name'; name.textContent=roomDef.name; const stars=document.createElement('div'); stars.className='room-card-stars'; for(let i=0;i<3;i++){ const s=document.createElement('span'); s.className='rc-star'+(i<prog.bestStars?' star-filled':''); s.textContent='\u2605'; stars.appendChild(s); } const lock=document.createElement('div'); lock.className='room-card-lock'; lock.innerHTML=LOCK_SVG; card.append(icon,name,stars,lock); card.addEventListener('click',()=>{ if(prog.unlocked) openDiffPopup(roomDef.id); }); winEl.appendChild(card); }); }

/* ---------------- Difficulty popup ---------------- */
let pendingRoomId=null;
function openDiffPopup(roomId){ pendingRoomId=roomId; const roomDef=ROOMS.find(r=>r.id===roomId); diffRoomIcon.innerHTML=roomDef.icon; diffRoomName.textContent=roomDef.name; diffBtnsMap.querySelectorAll('.diff-btn').forEach(btn=>{ const d=btn.dataset.diff; const total=Math.min(roomDef.categories.length*DIFFICULTIES[d].itemsPerCat, ITEMS.filter(i=>roomDef.categories.includes(i.cat)).length); btn.querySelector('span').textContent=DIFFICULTIES[d].time+'s \u00b7 '+total+' items'; btn.classList.toggle('selected',d==='medium'); }); state.diff='medium'; diffPopup.classList.remove('hidden'); }
function closeDiffPopupFn(){ diffPopup.classList.add('hidden'); pendingRoomId=null; }

/* ---------------- Arrange Mode — Level Up: sort photo items by height / color / size ---------------- */
const ITEM_ATTRS={
  slipper:{height:18,size:36,hue:15}, flat_pink:{height:22,size:36,hue:340}, flat_blue:{height:26,size:37,hue:205}, flat_red:{height:27,size:38,hue:0},
  sandal:{height:30,size:38,hue:30}, sneaker_mint:{height:48,size:42,hue:150}, sneaker_red:{height:50,size:42,hue:0}, sneaker:{height:46,size:42,hue:200},
  boot:{height:72,size:43,hue:30}, boot_tall_brown:{height:88,size:43,hue:30}, boot_tall_navy:{height:88,size:43,hue:220}, satchel_red:{height:52,size:48,hue:0},
  palette:{height:30,size:50,hue:18}, compact:{height:28,size:48,hue:28}, nail_polish:{height:38,size:20,hue:340}, lipstick:{height:42,size:18,hue:352}, mascara:{height:44,size:22,hue:360}, makeup_brush:{height:60,size:15,hue:170},
  mug:{height:32,size:30,hue:10}, pan:{height:40,size:45,hue:0}, rice_cooker:{height:36,size:55,hue:340}, whisk:{height:65,size:25,hue:0}, spatula:{height:68,size:28,hue:25}, ladle:{height:72,size:30,hue:200}, chopsticks:{height:82,size:20,hue:40},
};
const ARRANGE_CHALLENGES=[
  {id:'shoes_height',  title:'Entry Shelf — Shoes & Bags', instruction:'Drag left → right: <b>shortest → tallest</b>', sortKey:'height', itemIds:['slipper','flat_pink','sandal','sneaker_mint','boot_tall_brown']},
  {id:'makeup_color',  title:'Makeup Drawer',              instruction:'Arrange by <b>color</b>: light → dark',          sortKey:'hue',   itemIds:['palette','compact','nail_polish','lipstick','mascara']},
  {id:'kitchen_height',title:'Kitchen Shelf',              instruction:'Shortest → tallest utensil',                     sortKey:'height', itemIds:['rice_cooker','whisk','spatula','ladle','chopsticks']},
];
let arrangeDone={}; let curChallenge=null; let arrangeDrag=null, arrangePlaceholder=null, arrangeStartRect=null;
function openArrangeHub(){ renderArrangeHub(); showArrange(); }
function renderArrangeHub(){ arrangeHub.classList.remove('hidden'); arrangeTrayWrap.classList.add('hidden'); arrangeTitle.textContent='Level Up — Arrange Drawers'; arrangeInstruction.innerHTML='Click a drawer to sort its photo items by <b>height</b>, <b>color</b> &amp; <b>size</b>.'; const doneCount=Object.values(arrangeDone).filter(Boolean).length; arrangeProgress.textContent=doneCount+' / '+ARRANGE_CHALLENGES.length; arrangeFeedback.textContent=''; arrangeFeedback.className='arrange-feedback'; document.querySelectorAll('.hub-drawer').forEach(btn=>{ const id=btn.dataset.challenge; btn.classList.toggle('done', !!arrangeDone[id]); }); if(doneCount===ARRANGE_CHALLENGES.length){ arrangeInstruction.innerHTML='All drawers perfectly arranged! <b>Master Organizer!</b>'; confetti(50); } }
function startArrangeChallenge(id){ const ch=ARRANGE_CHALLENGES.find(c=>c.id===id); if(!ch) return; curChallenge=ch; arrangeHub.classList.add('hidden'); arrangeTrayWrap.classList.remove('hidden'); arrangeTitle.textContent=ch.title; arrangeInstruction.innerHTML=ch.instruction; arrangeProgress.textContent=(ARRANGE_CHALLENGES.findIndex(c=>c.id===id)+1)+' / '+ARRANGE_CHALLENGES.length; arrangeFeedback.textContent=''; arrangeFeedback.className='arrange-feedback'; renderArrangeTray(ch); }
function renderArrangeTray(ch){ arrangeTray.innerHTML=''; const shuffled=shuffle([...ch.itemIds]); shuffled.forEach(itemId=>{ const card=document.createElement('div'); card.className='arrange-card-photo'; card.dataset.id=itemId; const it=ITEMS.find(x=>x.id===itemId); const name=it?it.name:itemId; card.innerHTML=(ICONS[itemId]||ICONS.book)+`<div class="ac-name">${name}</div><div class="ac-meta">${ch.sortKey==='height'?(ITEM_ATTRS[itemId]?.height||'?')+' cm': ch.sortKey==='hue'?'hue '+ (ITEM_ATTRS[itemId]?.hue||'?') : (ITEM_ATTRS[itemId]?.size||'?') }</div>`; bindArrangeDrag(card); arrangeTray.appendChild(card); }); }
function bindArrangeDrag(card){
  card.addEventListener('pointerdown', e=>{
    e.preventDefault();
    const rect=card.getBoundingClientRect();
    arrangeDrag=card; arrangeStartRect=rect;
    arrangePlaceholder=document.createElement('div'); arrangePlaceholder.className='placeholder';
    arrangePlaceholder.style.width=rect.width+'px'; arrangePlaceholder.style.height=rect.height+'px';
    arrangeTray.insertBefore(arrangePlaceholder, card.nextSibling);
    card.style.width=rect.width+'px'; card.style.height=rect.height+'px';
    card.style.left=rect.left+'px'; card.style.top=rect.top+'px';
    card.classList.add('dragging'); card.style.position='fixed';
    try{ card.setPointerCapture(e.pointerId); }catch(_){}
  });
  card.addEventListener('pointermove', e=>{
    if(arrangeDrag!==card) return;
    const w=arrangeStartRect.width, h=arrangeStartRect.height;
    card.style.left=(e.clientX-w/2)+'px'; card.style.top=(e.clientY-h/2)+'px';
    const x=e.clientX, y=e.clientY;
    let target=null;
    for(let child of arrangeTray.children){
      if(child===card || child===arrangePlaceholder) continue;
      const r=child.getBoundingClientRect();
      if(y>r.top-10 && y<r.bottom+10 && x < r.left + r.width/2){ target=child; break; }
    }
    if(target) arrangeTray.insertBefore(arrangePlaceholder, target);
    else {
      const visibles=[...arrangeTray.children].filter(c=>c!==card && c!==arrangePlaceholder);
      const last=visibles[visibles.length-1];
      if(last){ const lr=last.getBoundingClientRect(); if(x>lr.right-10) arrangeTray.appendChild(arrangePlaceholder); }
    }
  });
  const endDrag=e=>{
    if(arrangeDrag!==card) return;
    arrangeTray.insertBefore(card, arrangePlaceholder);
    arrangePlaceholder.remove(); arrangePlaceholder=null;
    card.classList.remove('dragging'); card.style.position=''; card.style.left=''; card.style.top=''; card.style.width=''; card.style.height='';
    arrangeDrag=null; arrangeStartRect=null;
    [...arrangeTray.children].forEach(c=>{ c.classList.remove('correct','wrong'); });
    arrangeFeedback.textContent=''; arrangeFeedback.className='arrange-feedback';
  };
  card.addEventListener('pointerup', endDrag);
  card.addEventListener('pointercancel', endDrag);
}
function checkArrange(){ if(!curChallenge) return; const curIds=[...arrangeTray.children].filter(c=>c.classList.contains('arrange-card-photo')).map(c=>c.dataset.id); const expected=[...curChallenge.itemIds].sort((a,b)=>{ const av=ITEM_ATTRS[a]?.[curChallenge.sortKey]??0; const bv=ITEM_ATTRS[b]?.[curChallenge.sortKey]??0; return av-bv; }); const ok=curIds.length===expected.length && curIds.every((id,i)=>id===expected[i]); [...arrangeTray.children].forEach(c=>{ const id=c.dataset.id; const idx=expected.indexOf(id); const curIdx=curIds.indexOf(id); c.classList.toggle('correct', idx===curIdx); c.classList.toggle('wrong', idx!==curIdx); }); if(ok){ arrangeFeedback.textContent='Perfect! Ordered by '+(curChallenge.sortKey==='hue'?'color':curChallenge.sortKey)+' ✓'; arrangeFeedback.className='arrange-feedback ok'; sfx.correct(); confetti(36); arrangeDone[curChallenge.id]=true; setTimeout(()=>{ const doneCount=Object.values(arrangeDone).filter(Boolean).length; if(doneCount===ARRANGE_CHALLENGES.length){ overlayCard.innerHTML=''; const ic=document.createElement('div'); ic.className='oc-icon'; ic.innerHTML=ICONS.trophy; const ti=document.createElement('div'); ti.className='overlay-title'; ti.textContent='Master Organizer!'; const ms=document.createElement('p'); ms.className='overlay-msg'; ms.innerHTML='You mastered arranging by <b>height</b>, <b>color</b> &amp; <b>size</b>.<br>Every drawer is flawless!'; const starRow=document.createElement('div'); starRow.className='result-stars'; for(let i=0;i<3;i++){ const s=document.createElement('div'); s.className='star on'; s.innerHTML=STAR_SVG; starRow.appendChild(s); } const act=document.createElement('div'); act.className='overlay-actions'; const again=document.createElement('button'); again.className='btn btn-primary'; again.textContent='Play Again'; again.onclick=()=>{ overlay.classList.add('hidden'); resetProgress(); arrangeDone={}; curChallenge=null; showHouseMap(); }; const hubBtn=document.createElement('button'); hubBtn.className='btn btn-ghost'; hubBtn.textContent='Back to Drawers'; hubBtn.onclick=()=>{ overlay.classList.add('hidden'); renderArrangeHub(); }; act.append(again,hubBtn); overlayCard.append(ic,ti,starRow,ms,act); overlay.classList.remove('hidden'); sfx.win(); } else { renderArrangeHub(); } },900); } else { arrangeFeedback.textContent='Not quite — try again. Hint shows the right order.'; arrangeFeedback.className='arrange-feedback err'; sfx.wrong(); arrangeTray.classList.add('shake'); setTimeout(()=>arrangeTray.classList.remove('shake'),320); } }
function hintArrange(){ if(!curChallenge) return; const expected=[...curChallenge.itemIds].sort((a,b)=> (ITEM_ATTRS[a]?.[curChallenge.sortKey]??0) - (ITEM_ATTRS[b]?.[curChallenge.sortKey]??0)); [...arrangeTray.children].forEach(c=>{ c.classList.remove('correct','wrong'); }); expected.forEach((id,i)=>{ const card=[...arrangeTray.children].find(c=>c.dataset.id===id); if(card){ card.style.transition='transform .3s ease'; card.style.transform='scale(1.04)'; setTimeout(()=>card.style.transform='',300+i*70); } }); arrangeFeedback.textContent='Hint: order is '+expected.map(id=> (ITEMS.find(x=>x.id===id)?.name||id)).join(' → '); arrangeFeedback.className='arrange-feedback'; }

/* ---------------- Game setup ---------------- */
const ROOM_SCENES={
garage:`<svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="scGarWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0EFEA"/><stop offset="1" stop-color="#DCD8CE"/></linearGradient><pattern id="scPegs" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="13" cy="13" r="2.4" fill="#B49F79"/></pattern></defs><rect width="900" height="520" fill="url(#scGarWall)"/><rect y="0" width="900" height="14" fill="#CFCABE"/><line x1="450" y1="14" x2="450" y2="62" stroke="#8A8375" stroke-width="4"/><circle cx="450" cy="72" r="11" fill="#FFE9A8"/><ellipse cx="450" cy="210" rx="190" ry="140" fill="#FFF3C9" opacity=".15"/><rect x="52" y="96" width="300" height="338" rx="10" fill="#CBC5B7"/><rect x="66" y="112" width="272" height="306" fill="#DAD4C6"/><g fill="#BAB3A1"><rect x="66" y="144" width="272" height="4"/><rect x="66" y="178" width="272" height="4"/><rect x="66" y="212" width="272" height="4"/><rect x="66" y="246" width="272" height="4"/><rect x="66" y="280" width="272" height="4"/><rect x="66" y="314" width="272" height="4"/><rect x="66" y="348" width="272" height="4"/><rect x="66" y="382" width="272" height="4"/></g><rect x="182" y="396" width="40" height="11" rx="5.5" fill="#8F887A"/><rect x="596" y="102" width="264" height="232" rx="12" fill="#E5D6B6"/><rect x="596" y="102" width="264" height="232" rx="12" fill="url(#scPegs)"/><g stroke="#6E6252" stroke-width="9" stroke-linecap="round"><path d="M648 148v46M648 148a11 11 0 1 1 .01 0"/><path d="M716 152v42"/></g><path d="M716 194l-9-14h18Z" fill="#6E6252"/><rect x="686" y="128" width="60" height="16" rx="6" fill="#57503F"/><path d="M772 150l34 44" stroke="#57503F" stroke-width="7" stroke-linecap="round"/><path d="M766 142q10-10 20 0l14 18-16 12-18-22Z" fill="#57503F"/><rect x="596" y="356" width="264" height="11" rx="5" fill="#B49F79"/><g><rect x="618" y="326" width="34" height="30" rx="4" fill="#D96A4A"/><rect x="622" y="318" width="26" height="8" rx="3" fill="#B8522F"/><rect x="668" y="330" width="30" height="26" rx="4" fill="#7EA862"/><rect x="672" y="322" width="22" height="8" rx="3" fill="#5E8A48"/></g><g fill="#6E6A62"><circle cx="92" cy="438" r="21"/><circle cx="122" cy="440" r="21"/><circle cx="107" cy="416" r="21"/></g><g fill="#55524B"><circle cx="92" cy="438" r="9"/><circle cx="122" cy="440" r="9"/><circle cx="107" cy="416" r="9"/></g><g><rect x="360" y="298" width="260" height="18" rx="5" fill="#B98A5A"/><rect x="360" y="316" width="260" height="6" fill="#8F6A40"/><rect x="378" y="322" width="10" height="104" fill="#6E5A3C"/><rect x="592" y="322" width="10" height="104" fill="#6E5A3C"/><rect x="392" y="372" width="196" height="9" rx="3" fill="#A8834E"/></g><g><path d="M772 340 h76 l-9 106 h-58 Z" fill="#5A6673"/><path d="M776 340 h68 l-3 12 h-62 Z" fill="#49555F"/><rect x="764" y="330" width="92" height="12" rx="5" fill="#6E7C89"/></g></svg>`,
garden:`<svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="scSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C4E6F6"/><stop offset="1" stop-color="#F0F9EF"/></linearGradient></defs><rect width="900" height="520" fill="url(#scSky)"/><circle cx="788" cy="88" r="46" fill="#FFDE82"/><circle cx="788" cy="88" r="60" fill="#FFDE82" opacity=".3"/><g fill="#FFFFFF" opacity=".92"><ellipse cx="180" cy="96" rx="58" ry="20"/><ellipse cx="222" cy="84" rx="40" ry="16"/><ellipse cx="470" cy="64" rx="48" ry="17"/><ellipse cx="508" cy="54" rx="32" ry="13"/></g><rect x="0" y="252" width="900" height="118" fill="#DFC497"/><g stroke="#C9AA78" stroke-width="4"><line x1="54" y1="252" x2="54" y2="370"/><line x1="108" y1="252" x2="108" y2="370"/><line x1="162" y1="252" x2="162" y2="370"/><line x1="216" y1="252" x2="216" y2="370"/><line x1="270" y1="252" x2="270" y2="370"/><line x1="324" y1="252" x2="324" y2="370"/><line x1="378" y1="252" x2="378" y2="370"/><line x1="432" y1="252" x2="432" y2="370"/><line x1="486" y1="252" x2="486" y2="370"/><line x1="540" y1="252" x2="540" y2="370"/><line x1="594" y1="252" x2="594" y2="370"/><line x1="648" y1="252" x2="648" y2="370"/><line x1="702" y1="252" x2="702" y2="370"/><line x1="756" y1="252" x2="756" y2="370"/><line x1="810" y1="252" x2="810" y2="370"/><line x1="864" y1="252" x2="864" y2="370"/></g><rect x="0" y="244" width="900" height="12" rx="6" fill="#CDAE7F"/><rect x="0" y="362" width="900" height="12" rx="6" fill="#CDAE7F"/><rect x="86" y="238" width="22" height="146" rx="8" fill="#9A6B4F"/><g fill="#7EA862"><circle cx="97" cy="188" r="60"/><circle cx="47" cy="226" r="42"/><circle cx="150" cy="224" r="44"/></g><circle cx="76" cy="176" r="26" fill="#93BD79"/><ellipse cx="726" cy="398" rx="112" ry="48" fill="#7EA862"/><ellipse cx="856" cy="404" rx="92" ry="42" fill="#699853"/><g fill="#E07856"><circle cx="694" cy="384" r="5"/><circle cx="742" cy="398" r="5"/><circle cx="716" cy="410" r="5"/><circle cx="846" cy="392" r="5"/><circle cx="878" cy="408" r="5"/></g><g stroke="#5E8A48" stroke-width="4" stroke-linecap="round"><line x1="300" y1="446" x2="300" y2="414"/><line x1="420" y1="450" x2="420" y2="418"/><line x1="540" y1="446" x2="540" y2="414"/><line x1="620" y1="450" x2="620" y2="418"/></g><g><circle cx="300" cy="408" r="11" fill="#F2A7B8"/><circle cx="300" cy="408" r="4.5" fill="#FFE07A"/><circle cx="420" cy="412" r="11" fill="#FFF6E8"/><circle cx="420" cy="412" r="4.5" fill="#F0A04B"/><circle cx="540" cy="408" r="11" fill="#FFE07A"/><circle cx="540" cy="408" r="4.5" fill="#D96A5A"/><circle cx="620" cy="412" r="11" fill="#F2A7B8"/><circle cx="620" cy="412" r="4.5" fill="#FFE07A"/></g><g fill="#E07856"><ellipse cx="506" cy="182" rx="10" ry="6" transform="rotate(-24 506 182)"/><ellipse cx="522" cy="176" rx="10" ry="6" transform="rotate(20 522 176)"/></g><g><rect x="228" y="212" width="102" height="168" rx="8" fill="#C9A86D"/><rect x="238" y="222" width="82" height="148" rx="6" fill="#EAD7B0"/><g stroke="#8A6A42" stroke-width="5" stroke-linecap="round"><line x1="256" y1="238" x2="256" y2="258"/><line x1="288" y1="238" x2="288" y2="258"/><line x1="320" y1="238" x2="320" y2="258"/></g><path d="M250 258 l12 26 M282 258 l12 22 M314 258 l10 24" stroke="#6E6252" stroke-width="6" stroke-linecap="round"/></g><g><rect x="392" y="296" width="134" height="12" rx="5" fill="#A87B47"/><rect x="400" y="308" width="118" height="92" rx="6" fill="#C99B5F"/><rect x="400" y="338" width="118" height="7" fill="#8F6A3C"/><rect x="400" y="368" width="118" height="7" fill="#8F6A3C"/></g><g><rect x="700" y="286" width="10" height="136" fill="#578A42"/><rect x="784" y="286" width="10" height="136" fill="#578A42"/><rect x="678" y="298" width="138" height="11" rx="4" fill="#7EA862"/><rect x="678" y="364" width="138" height="11" rx="4" fill="#7EA862"/></g></svg>`,
living_room:`<svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="scLivWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF5E7"/><stop offset="1" stop-color="#F9E4CC"/></linearGradient></defs><rect width="900" height="520" fill="url(#scLivWall)"/><rect x="8" y="106" width="92" height="352" rx="9" fill="#D9C6A8"/><rect x="16" y="116" width="76" height="342" rx="7" fill="#F7EEDD"/><rect x="25" y="127" width="58" height="138" rx="5" fill="#FFFFFF" opacity=".6"/><rect x="25" y="283" width="58" height="148" rx="5" fill="#FFFFFF" opacity=".6"/><circle cx="83" cy="290" r="5.5" fill="#C9A86D"/><line x1="150" y1="76" x2="410" y2="76" stroke="#9A6B4F" stroke-width="6" stroke-linecap="round"/><rect x="170" y="84" width="216" height="206" rx="10" fill="#FFFDF9"/><rect x="184" y="98" width="188" height="178" fill="#C9E9F7"/><path d="M184 236 Q234 196 288 226 T372 218 V276 H184 Z" fill="#A9CB8E"/><g stroke="#FFFDF9" stroke-width="7"><line x1="278" y1="98" x2="278" y2="276"/><line x1="184" y1="187" x2="372" y2="187"/></g><path d="M158 84 q-14 100 8 208 h30 q-18-106-6-208 Z" fill="#E08A6A"/><path d="M398 84 q14 100-8 208 h-30 q18-106 6-208 Z" fill="#E08A6A"/><rect x="512" y="96" width="94" height="116" rx="6" fill="#FFFDF9" stroke="#E3CBAF" stroke-width="4"/><path d="M528 186 l22-34 16 20 12-16 20 30 Z" fill="#7EA862"/><rect x="618" y="120" width="66" height="66" rx="6" fill="#FFFDF9" stroke="#E3CBAF" stroke-width="4"/><circle cx="651" cy="153" r="18" fill="#F0B14C"/><path d="M436 214 h56 l14 46 h-84 Z" fill="#E8A84C"/><line x1="464" y1="260" x2="464" y2="446" stroke="#9A6B4F" stroke-width="7"/><ellipse cx="464" cy="450" rx="30" ry="7" fill="#9A6B4F"/><ellipse cx="650" cy="452" rx="212" ry="14" fill="#E0B896" opacity=".55"/><rect x="478" y="306" width="344" height="76" rx="24" fill="#C96F4A"/><rect x="470" y="356" width="360" height="98" rx="26" fill="#C96F4A"/><rect x="492" y="352" width="150" height="52" rx="15" fill="#D97F57"/><rect x="658" y="352" width="150" height="52" rx="15" fill="#D97F57"/><rect x="452" y="330" width="40" height="124" rx="19" fill="#B05A38"/><rect x="808" y="330" width="40" height="124" rx="19" fill="#B05A38"/><rect x="516" y="308" width="52" height="52" rx="12" fill="#E8A84C" transform="rotate(-8 542 334)"/><rect x="724" y="310" width="52" height="52" rx="12" fill="#7EA862" transform="rotate(7 750 336)"/><path d="M872 452 h-40 l6-52 h28 Z" fill="#C96F4A"/><g fill="#7EA862"><path d="M852 402 q-26-30-8-58 q20 26 8 58Z"/><path d="M852 402 q26-26 12-56 q-22 24-12 56Z"/></g><g><rect x="724" y="146" width="112" height="150" rx="8" fill="#8F6A40"/><rect x="736" y="157" width="88" height="128" fill="#F7EBD2"/><rect x="736" y="212" width="88" height="9" fill="#C9A86D"/><rect x="736" y="266" width="88" height="9" fill="#C9A86D"/></g><g><rect x="204" y="352" width="170" height="96" rx="10" fill="#D1A46A"/><rect x="196" y="340" width="186" height="18" rx="8" fill="#B98A5A"/><circle cx="289" cy="400" r="6" fill="#8A6238"/></g><g><rect x="112" y="350" width="104" height="14" rx="6" fill="#B98A5A"/><rect x="122" y="364" width="9" height="84" fill="#8F6A40"/><rect x="197" y="364" width="9" height="84" fill="#8F6A40"/><rect x="130" y="390" width="70" height="8" rx="3" fill="#A8834E"/></g></svg>`,
kitchen:`<svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="scKitWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8EC"/><stop offset="1" stop-color="#FBEED6"/></linearGradient><pattern id="scTiles" width="36" height="36" patternUnits="userSpaceOnUse"><rect width="36" height="36" fill="#FFEDCB"/><rect width="36" height="36" fill="none" stroke="#F1D6A4" stroke-width="2.5"/></pattern></defs><rect width="900" height="520" fill="url(#scKitWall)"/><rect x="40" y="60" width="820" height="110" rx="9" fill="#BFDBCB"/><g fill="#CDE4D6"><rect x="52" y="72" width="190" height="86" rx="7"/><rect x="252" y="72" width="190" height="86" rx="7"/><rect x="452" y="72" width="190" height="86" rx="7"/><rect x="652" y="72" width="196" height="86" rx="7"/></g><g fill="#7FA98F"><circle cx="228" cy="115" r="5"/><circle cx="428" cy="115" r="5"/><circle cx="628" cy="115" r="5"/><circle cx="834" cy="115" r="5"/></g><rect x="40" y="166" width="820" height="9" fill="#9FBEAC"/><rect x="416" y="0" width="68" height="172" fill="#CBD0D4"/><path d="M356 172 h188 l44 66 H312 Z" fill="#CBD0D4"/><g stroke="#AEB4BA" stroke-width="4"><line x1="330" y1="196" x2="570" y2="196"/><line x1="322" y1="212" x2="578" y2="212"/></g><line x1="250" y1="0" x2="250" y2="128" stroke="#8A8375" stroke-width="4"/><path d="M204 128 h92 a46 46 0 0 1-92 0Z" fill="#E8A84C"/><circle cx="250" cy="140" r="12" fill="#FFF3C9"/><line x1="640" y1="0" x2="640" y2="112" stroke="#8A8375" stroke-width="4"/><path d="M594 112 h92 a46 46 0 0 1-92 0Z" fill="#E8A84C"/><circle cx="640" cy="124" r="12" fill="#FFF3C9"/><rect x="688" y="196" width="146" height="120" rx="9" fill="#FFFDF9"/><rect x="700" y="208" width="122" height="96" fill="#C9E9F7"/><g stroke="#FFFDF9" stroke-width="6"><line x1="761" y1="208" x2="761" y2="304"/><line x1="700" y1="256" x2="822" y2="256"/></g><rect x="678" y="314" width="166" height="10" rx="4" fill="#E0C79E"/><path d="M742 314 q0-26 20-26 t20 26Z" fill="#C96F4A"/><g fill="#7EA862"><path d="M756 292 q-10-18 0-30 q10 12 0 30Z"/><path d="M768 292 q10-16 2-30 q-12 12-2 30Z"/></g><rect x="0" y="300" width="900" height="76" fill="url(#scTiles)"/><rect x="0" y="372" width="900" height="9" fill="#E0C79E"/><rect x="28" y="150" width="100" height="282" rx="12" fill="#DAE7ED"/><line x1="28" y1="236" x2="128" y2="236" stroke="#B9CDD6" stroke-width="4"/><g fill="#AFC4CD"><rect x="104" y="172" width="9" height="42" rx="4.5"/><rect x="104" y="252" width="9" height="64" rx="4.5"/></g><path d="M330 372 a52 30 0 0 0 104 0 Z" fill="#C96F4A"/><circle cx="356" cy="366" r="14" fill="#F0A04B"/><circle cx="384" cy="362" r="14" fill="#E8913C"/><circle cx="410" cy="366" r="13" fill="#D96A5A"/></g><g><rect x="456" y="296" width="8" height="82" fill="#578F76"/><rect x="652" y="296" width="8" height="82" fill="#578F76"/><rect x="450" y="290" width="216" height="10" rx="4" fill="#79B39A"/><rect x="450" y="344" width="216" height="10" rx="4" fill="#79B39A"/></g><g><path d="M776 340 h72 l-9 106 h-54 Z" fill="#5A6673"/><rect x="770" y="330" width="84" height="12" rx="5" fill="#6E7C89"/></g></svg>`,
bedroom:`<svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="scBedWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FCF0F4"/><stop offset="1" stop-color="#F6E3E9"/></linearGradient><pattern id="scDots" width="52" height="52" patternUnits="userSpaceOnUse"><circle cx="26" cy="26" r="2.6" fill="#E9CBD6"/></pattern></defs><rect width="900" height="520" fill="url(#scBedWall)"/><rect width="900" height="520" fill="url(#scDots)"/><rect x="8" y="108" width="92" height="350" rx="9" fill="#E8CBD4"/><rect x="16" y="118" width="76" height="340" rx="7" fill="#FFF5F0"/><rect x="25" y="129" width="58" height="136" rx="5" fill="#FFFFFF" opacity=".65"/><rect x="25" y="283" width="58" height="146" rx="5" fill="#FFFFFF" opacity=".65"/><circle cx="83" cy="288" r="5.5" fill="#D9A8B8"/><path d="M60 42 Q450 100 840 42" stroke="#C9A98F" stroke-width="4" fill="none"/><g><polygon points="112,52 138,52 125,86" fill="#E08A6A"/><polygon points="238,64 264,64 251,98" fill="#9FC9A8"/><polygon points="364,72 390,72 377,106" fill="#F0B14C"/><polygon points="490,74 516,74 503,108" fill="#E08A6A"/><polygon points="616,66 642,66 629,100" fill="#9FC9A8"/><polygon points="742,54 768,54 755,88" fill="#F0B14C"/></g><rect x="636" y="96" width="176" height="156" rx="10" fill="#FFFDF9"/><rect x="648" y="108" width="152" height="132" fill="#33406B"/><circle cx="756" cy="146" r="24" fill="#FFF0C2"/><circle cx="766" cy="140" r="21" fill="#33406B"/><g fill="#FFF6DE"><circle cx="676" cy="130" r="3"/><circle cx="700" cy="164" r="2.5"/><circle cx="668" cy="192" r="2.5"/><circle cx="724" cy="204" r="3"/><circle cx="778" cy="196" r="2.5"/></g><path d="M624 96 q-12 78 6 156 h26 q-14-78-4-156 Z" fill="#F2C4CF"/><path d="M824 96 q12 78-6 156 h-26 q14-78 4-156 Z" fill="#F2C4CF"/><ellipse cx="426" cy="452" rx="196" ry="15" fill="#EFC9BC" opacity=".8"/><rect x="240" y="282" width="366" height="102" rx="26" fill="#C97B5E"/><rect x="224" y="350" width="398" height="82" rx="18" fill="#FFF8EF"/><rect x="224" y="392" width="398" height="40" rx="16" fill="#E8927A"/><rect x="264" y="322" width="118" height="46" rx="14" fill="#FFFFFF" transform="rotate(-4 323 345)"/><rect x="398" y="322" width="118" height="46" rx="14" fill="#FBEFE2" transform="rotate(3 457 345)"/><rect x="660" y="250" width="196" height="205" rx="11" fill="#AECBA6"/><line x1="758" y1="254" x2="758" y2="451" stroke="#8FAE86" stroke-width="5"/><g fill="#6E8A66"><circle cx="742" cy="352" r="7"/><circle cx="774" cy="352" r="7"/></g><rect x="652" y="242" width="212" height="12" rx="6" fill="#8FAE86"/></g><g><rect x="118" y="350" width="102" height="13" rx="6" fill="#C97B5E"/><rect x="128" y="363" width="9" height="86" fill="#96502F"/><rect x="201" y="363" width="9" height="86" fill="#96502F"/></g><g><ellipse cx="550" cy="360" rx="56" ry="14" fill="#EAD7B0"/><path d="M494 360 q4 90 56 92 q52-2 56-92 Z" fill="#D9BE92"/><path d="M502 380 q48 14 96 0 M498 404 q52 16 104 0 M504 428 q46 14 92 0" stroke="#B3946A" stroke-width="5" fill="none"/></g></svg>`,
bathroom:`<svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="scBathTiles" width="44" height="44" patternUnits="userSpaceOnUse"><rect width="44" height="44" fill="#E2F1F7"/><rect width="44" height="44" fill="none" stroke="#C2DEEA" stroke-width="3"/></pattern></defs><rect width="900" height="520" fill="url(#scBathTiles)"/><rect x="0" y="236" width="900" height="40" fill="#A9D3E4" opacity=".55"/><circle cx="190" cy="152" r="66" fill="#FFFFFF"/><circle cx="190" cy="152" r="54" fill="#D2ECF6"/><line x1="158" y1="128" x2="186" y2="100" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round" opacity=".85"/><rect x="560" y="168" width="270" height="13" rx="6" fill="#D9B98A"/><g><circle cx="612" cy="146" r="21" fill="#FFFFFF"/><circle cx="612" cy="146" r="10" fill="#EFE4D6"/><circle cx="664" cy="146" r="21" fill="#F2C4CF"/><circle cx="664" cy="146" r="10" fill="#E5A9B8"/><circle cx="716" cy="146" r="21" fill="#BFD8C2"/><circle cx="716" cy="146" r="10" fill="#A3C2A8"/></g><line x1="800" y1="0" x2="800" y2="92" stroke="#9FB6C0" stroke-width="7"/><path d="M800 96 q0 26-34 26" stroke="#9FB6C0" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="742" y="116" width="52" height="16" rx="8" fill="#9FB6C0"/><g stroke="#9CD3E8" stroke-width="5" stroke-linecap="round"><line x1="756" y1="146" x2="752" y2="168"/><line x1="776" y1="152" x2="772" y2="176"/><line x1="744" y1="184" x2="741" y2="202"/><line x1="764" y1="192" x2="761" y2="212"/><line x1="750" y1="226" x2="748" y2="244"/></g><g fill="#FFFFFF" opacity=".9"><circle cx="512" cy="330" r="12"/><circle cx="546" cy="296" r="8"/><circle cx="580" cy="342" r="15"/><circle cx="620" cy="306" r="9"/><circle cx="660" cy="338" r="11"/><circle cx="700" cy="290" r="7"/></g><rect x="470" y="382" width="412" height="72" rx="30" fill="#FFFFFF" stroke="#D5E5EC" stroke-width="4"/><ellipse cx="676" cy="396" rx="182" ry="16" fill="#C9E9F5"/><g fill="#E8EDF0"><rect x="500" y="448" width="18" height="14" rx="4"/><rect x="836" y="448" width="18" height="14" rx="4"/></g><g><ellipse cx="540" cy="374" rx="15" ry="11" fill="#FFD65C"/><circle cx="554" cy="360" r="9" fill="#FFD65C"/><polygon points="562,358 572,361 562,365" fill="#F0A04B"/><circle cx="556" cy="358" r="1.8" fill="#57503F"/></g><g><rect x="124" y="300" width="196" height="13" rx="6" fill="#C9A86D"/><rect x="138" y="313" width="168" height="50" rx="7" fill="#EAD9BE"/><circle cx="188" cy="338" r="6" fill="#8A6A42"/><circle cx="256" cy="338" r="6" fill="#8A6A42"/><rect x="142" y="363" width="10" height="52" fill="#9A7B52"/><rect x="292" y="363" width="10" height="52" fill="#9A7B52"/></g></svg>`
};
function startGame(roomId,diff){ const roomDef=ROOMS.find(r=>r.id===roomId); state.currentRoomId=roomId; state.diff=diff; state.score=0; state.wrong=0; state.placed=0; state.ended=false; state.running=false; state.items=[]; overlay.classList.add('hidden'); diffPopup.classList.add('hidden'); showScreen('game'); room.className='room room--'+roomId; room.innerHTML='<div class="room-scene" aria-hidden="true">'+ROOM_SCENES[roomId]+'</div>'; buildCompartments(roomDef); const pool=buildItemPool(roomDef); spawnItems(pool); state.total=pool.length; state.timeLeft=DIFFICULTIES[diff].time; state.totalTime=state.timeLeft; levelPill.textContent=roomDef.name+' \u00b7 '+DIFFICULTIES[diff].label; updateHud(); updateTimerDisplay(true); startTimer(); state.running=true; getAudio(); startMusic(); }
function buildCompartments(roomObj){ const layout=ROOM_LAYOUTS[roomObj.id]; Object.keys(layout).forEach(cat=>{ const [l,t,w,h]=layout[cat]; const comp=document.createElement('div'); comp.className='comp '+CATEGORIES[cat].css; comp.dataset.cat=cat; comp.dataset.kind=CATEGORIES[cat].kind; comp.style.cssText='left:'+l+'%;top:'+t+'%;width:'+w+'%;height:'+h+'%;'; const hint=document.createElement('div'); hint.className='comp-hint'; hint.innerHTML=CATEGORIES[cat].hint; const slots=document.createElement('div'); slots.className='comp-slots'; const label=document.createElement('div'); label.className='comp-label'; label.textContent=CATEGORIES[cat].name; comp.append(hint,slots,label); room.appendChild(comp); }); }
function buildItemPool(roomObj){ const itemsPerCat=DIFFICULTIES[state.diff].itemsPerCat; const prev=state.lastPoolIds||[]; const pool=[]; roomObj.categories.forEach(cat=>{ let cands=ITEMS.filter(i=>i.cat===cat); const fresh=cands.filter(i=>!prev.includes(i.id)); if(fresh.length>=itemsPerCat) cands=fresh; shuffle(cands); pool.push(...cands.slice(0,itemsPerCat)); }); state.lastPoolIds=pool.map(i=>i.id); return shuffle(pool); }
function getResponsiveItemSize(){ const w=window.innerWidth; if(w<360) return 76; if(w<480) return 80; if(w<600) return 84; if(w<768) return 88; if(w<1024) return 96; if(w>=1400) return 112; return 100; }
function spawnItems(pool){ const rect=room.getBoundingClientRect(); const itemW=getResponsiveItemSize(),itemH=itemW; const comps=Array.from(room.querySelectorAll('.comp')).map(c=>{ const r=c.getBoundingClientRect(); return{left:r.left-rect.left,top:r.top-rect.top,right:r.right-rect.left,bottom:r.bottom-rect.top}; }); const taken=[]; const margin=14; const topZone=rect.height*0.52; const zoneH=rect.height*0.32; pool.forEach((item,idx)=>{ let pos=null; for(let tries=0;tries<900&&!pos;tries++){ const x=16+Math.random()*(rect.width-itemW-32); const y=topZone+Math.random()*zoneH; const box={left:x-margin,top:y-margin,right:x+itemW+margin,bottom:y+itemH+margin}; const hitsComp=comps.some(c=>box.right>c.left&&box.left<c.right&&box.bottom>c.top&&box.top<c.bottom); const hitsItem=taken.some(tt=>box.right>tt.left&&box.left<tt.right&&box.bottom>tt.top&&box.top<tt.bottom); if(!hitsComp&&!hitsItem) pos={x,y}; } if(!pos){ const cols=Math.max(1,Math.floor((rect.width-40)/(itemW+margin))); const col=idx%cols, row=Math.floor(idx/cols); pos={x:Math.min(Math.max(12,20+col*(itemW+margin)),Math.max(12,rect.width-itemW-12)), y:Math.min(rect.height-itemH-8, topZone+row*(itemH+margin)*0.65)}; } taken.push({left:pos.x,top:pos.y,right:pos.x+itemW,bottom:pos.y+itemH}); const chip=createItemChip(item,pos.x,pos.y,idx); room.appendChild(chip); state.items.push({...item,chip,x:pos.x,y:pos.y,placed:false}); }); }
function createItemChip(item,x,y,idx){ const chip=document.createElement('div'); chip.className='item'; chip.style.left=x+'px'; chip.style.top=y+'px'; chip.style.animationDelay=(idx*0.05)+'s'; const rot=(Math.random()*14-7).toFixed(1); chip.style.setProperty('--rot', rot+'deg'); chip.style.rotate=rot+'deg'; chip.innerHTML=ICONS[item.id]; chip.title=item.name; bindDrag(chip); return chip; }

/* ---------------- Drag & drop — robust (tracks hover comp, returns on miss) ---------------- */
let dragOverComp=null;
function bindDrag(chip){ chip.addEventListener('pointerdown',e=>{ if(state.ended||!state.running) return; e.preventDefault(); chip.setPointerCapture(e.pointerId); const r=chip.getBoundingClientRect(); const roomRect=room.getBoundingClientRect(); chip.style.transition='none'; drag={chip,ox:e.clientX-r.left,oy:e.clientY-r.top,startLeft:parseFloat(chip.style.left)||0,startTop:parseFloat(chip.style.top)||0,roomRect,itemSize:r.width}; dragOverComp=null; chip.classList.add('dragging'); chip.style.zIndex=50; sfx.pick(); }); chip.addEventListener('pointermove',e=>{ if(!drag||drag.chip!==chip) return; const roomRect=drag.roomRect; const sz=drag.itemSize||86; let x=e.clientX-roomRect.left-drag.ox; let y=e.clientY-roomRect.top-drag.oy; x=Math.max(-12,Math.min(roomRect.width-sz+8,x)); y=Math.max(-12,Math.min(roomRect.height-sz+8,y)); chip.style.left=x+'px'; chip.style.top=y+'px'; const cx=e.clientX,cy=e.clientY; let over=null; room.querySelectorAll('.comp').forEach(c=>{ const r=c.getBoundingClientRect(); if(cx>=r.left&&cx<=r.right&&cy>=r.top&&cy<=r.bottom) over=c; }); dragOverComp=over; room.querySelectorAll('.comp').forEach(c=>c.classList.toggle('dragover',c===over)); }); const endDrag=e=>{ if(!drag||drag.chip!==chip) return; const ch=drag.chip; const targetComp=dragOverComp; drag=null; dragOverComp=null; chip.style.zIndex=''; chip.style.transition=''; room.querySelectorAll('.comp').forEach(c=>c.classList.remove('dragover')); resolveDrop(ch,targetComp); ch.classList.remove('dragging'); }; chip.addEventListener('pointerup',endDrag); chip.addEventListener('pointercancel',()=>{ if(drag&&drag.chip===chip){ drag=null; dragOverComp=null; chip.style.zIndex=''; chip.style.transition=''; room.querySelectorAll('.comp').forEach(c=>c.classList.remove('dragover')); chip.classList.remove('dragging'); } }); }
function resolveDrop(chip,comp){ const item=state.items.find(i=>i.chip===chip); if(!item) return; if(comp){ if(comp.dataset.cat===item.cat) placeItem(item,comp); else wrongDrop(item); return; } returnItem(item); }
function placeItem(item,comp){ item.placed=true; const chip=item.chip; const plus=document.createElement('div'); plus.className='float-plus'; plus.textContent='+1'; comp.appendChild(plus); setTimeout(()=>plus.remove(),700); chip.classList.add('placed'); chip.style.left=''; chip.style.top=''; chip.style.rotate=''; chip.style.animationDelay=''; chip.style.pointerEvents='none'; const slot=document.createElement('div'); slot.className='slot pop'; slot.title=item.name; slot.appendChild(chip); comp.querySelector('.comp-slots').appendChild(slot); state.score++; state.placed++; sfx.correct(); updateHud(); scoreEl.style.transform='scale(1.18)'; setTimeout(()=>scoreEl.style.transform='',160); const expected=state.items.filter(i=>i.cat===item.cat).length; const done=state.items.filter(i=>i.cat===item.cat&&i.placed).length; if(done===expected){ comp.classList.add('complete'); comp.style.transform='scale(1.02)'; setTimeout(()=>comp.style.transform='',220); } if(state.placed===state.total) win(); }
function wrongDrop(item){ state.wrong++; sfx.wrong(); bounceBack(item); }
function returnItem(item){ bounceBack(item); }
function bounceBack(item){ const chip=item.chip; chip.classList.add('returning'); if(chip.classList.contains('shake')) chip.classList.remove('shake'); void chip.offsetWidth; chip.classList.add('shake'); chip.style.left=item.x+'px'; chip.style.top=item.y+'px'; setTimeout(()=>chip.classList.remove('shake'),380); setTimeout(()=>chip.classList.remove('returning'),460); }

/* ---------------- Timer ---------------- */
let lastWholeSec=-1;
function startTimer(){ stopTimer(); lastWholeSec=-1; state.timerInt=setInterval(()=>{ state.timeLeft=Math.max(0,state.timeLeft-0.1); updateTimerDisplay(); if(state.timeLeft<=0){ stopTimer(); lose(); } },100); }
function stopTimer(){ if(state.timerInt){ clearInterval(state.timerInt); state.timerInt=null; } }
function updateTimerDisplay(force){ const whole=Math.max(0,Math.ceil(state.timeLeft)); if(whole!==lastWholeSec||force){ lastWholeSec=whole; if(!force&&whole<=10&&whole>0) sfx.tick(); } timerEl.textContent=fmt(state.timeLeft); timerEl.classList.toggle('urgent',whole<=10&&state.timeLeft>0); }

/* ---------------- HUD ---------------- */
function updateHud(){ scoreEl.textContent=state.score; const ratio=state.total?state.placed/state.total:0; const filled=Math.round(ratio*3); document.querySelectorAll('#starsHud .hud-star').forEach((s,i)=>{ s.classList.toggle('star-filled',i<filled); }); }

/* ---------------- End ---------------- */
function calcStars(){ const acc=state.total/(state.total+state.wrong); const timeRatio=state.timeLeft/state.totalTime; if(acc>=0.99&&timeRatio>=0.45) return 3; if(acc>=0.7&&timeRatio>=0.2) return 2; return 1; }
function win(){ if(state.ended) return; state.ended=true; state.running=false; stopTimer(); stopMusic(); const stars=calcStars(); const prog=state.progress[state.currentRoomId]; prog.completed=true; prog.bestStars=Math.max(prog.bestStars,stars); const idx=ROOMS.findIndex(r=>r.id===state.currentRoomId); if(idx<ROOMS.length-1) state.progress[ROOMS[idx+1].id].unlocked=true; saveProgress(); sfx.win(); confetti(70); const allDone=ROOMS.every(r=>state.progress[r.id].completed); if(allDone) showAllDoneOverlay(stars); else showOverlay(true,stars); }
function showAllDoneOverlay(lastStars){ overlayCard.innerHTML=''; const icon=document.createElement('div'); icon.className='oc-icon'; icon.innerHTML=ICONS.trophy; const title=document.createElement('div'); title.className='overlay-title'; title.textContent='Congratulations!'; const sub=document.createElement('p'); sub.className='overlay-msg'; sub.innerHTML='You tidied the whole house — all 6 rooms!<br><b>Every shelf, drawer and basket is perfectly organized.</b>'; const starsRow=document.createElement('div'); starsRow.className='result-stars'; for(let i=0;i<3;i++){ const s=document.createElement('div'); s.className='star'+(i<lastStars?' on':''); s.innerHTML=STAR_SVG; s.style.transitionDelay=(0.25+i*0.18)+'s'; starsRow.appendChild(s); } const actions=document.createElement('div'); actions.className='overlay-actions'; const againBtn=document.createElement('button'); againBtn.className='btn btn-primary'; againBtn.textContent='Play Again (Reset)'; againBtn.onclick=()=>{ resetProgress(); overlay.classList.add('hidden'); showHouseMap(); }; actions.appendChild(againBtn); overlayCard.append(icon,title,starsRow,sub,actions); overlay.classList.remove('hidden'); }
function lose(){ if(state.ended) return; state.ended=true; state.running=false; stopTimer(); stopMusic(); sfx.lose(); showOverlay(false,0); }
function showOverlay(isWin,stars){ const acc=Math.round((state.total/(state.total+state.wrong))*100); overlayCard.innerHTML=''; const icon=document.createElement('div'); icon.className='oc-icon'; icon.innerHTML=isWin?ICONS.trophy:ICONS.alarm_clock; const title=document.createElement('div'); title.className='overlay-title'; title.textContent=isWin?'Room Complete!':'Out of Time!'; const starsRow=document.createElement('div'); starsRow.className='result-stars'; for(let i=0;i<3;i++){ const s=document.createElement('div'); s.className='star'+(isWin&&i<stars?' on':''); s.innerHTML=STAR_SVG; s.style.transitionDelay=(0.25+i*0.18)+'s'; starsRow.appendChild(s); } const grid=document.createElement('div'); grid.className='stats-grid'; grid.innerHTML='<div class="stat-box"><span class="k">Score</span><span class="v">'+state.score+'</span></div><div class="stat-box"><span class="k">Accuracy</span><span class="v">'+acc+'%</span></div><div class="stat-box"><span class="k">Items</span><span class="v">'+state.placed+'/'+state.total+'</span></div><div class="stat-box"><span class="k">Time Left</span><span class="v">'+fmt(state.timeLeft)+'</span></div>'; const msg=document.createElement('p'); msg.className='overlay-msg'; msg.textContent=isWin?(stars===3?'Flawless organization!':stars===2?'Nice tidying!':'Good job, you made it!'):'The room is still messy. Try again!'; const actions=document.createElement('div'); actions.className='overlay-actions'; if(isWin){ const cont=document.createElement('button'); cont.className='btn btn-primary'; cont.textContent='Continue'; cont.onclick=showHouseMap; actions.appendChild(cont); }else{ const retry=document.createElement('button'); retry.className='btn btn-primary'; retry.textContent='Try Again'; retry.onclick=()=>startGame(state.currentRoomId,state.diff); actions.appendChild(retry); } const mapBtn=document.createElement('button'); mapBtn.className='btn btn-ghost'; mapBtn.textContent='House Map'; mapBtn.onclick=showHouseMap; actions.appendChild(mapBtn); overlayCard.append(icon,title,starsRow,msg,grid,actions); overlay.classList.remove('hidden'); }
function confetti(n){ const colors=['#F7D98A','#E0A83C','#B3CEA2','#7FA468','#F2A89B','#CCA890','#D2C4EA','#FFD9C4']; for(let i=0;i<n;i++){ const c=document.createElement('div'); c.className='confetti'; c.style.left=(Math.random()*100)+'vw'; c.style.background=colors[Math.floor(Math.random()*colors.length)]; c.style.animationDuration=(1.6+Math.random()*1.6)+'s'; c.style.animationDelay=(Math.random()*0.5)+'s'; c.style.width=(6+Math.random()*8)+'px'; c.style.height=(8+Math.random()*10)+'px'; c.style.borderRadius=Math.random()>0.5?'50%':'2px'; document.body.appendChild(c); setTimeout(()=>c.remove(),4200); } }

/* ---------------- Controls ---------------- */
playBtn.addEventListener('click',showHouseMap);
menuFromMap.addEventListener('click',showMenu);
homeBtn.addEventListener('click',showHouseMap);
restartBtn.addEventListener('click',()=>startGame(state.currentRoomId,state.diff));
diffBtnsMap.addEventListener('click',e=>{ const btn=e.target.closest('.diff-btn'); if(!btn) return; diffBtnsMap.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); state.diff=btn.dataset.diff; });
playRoomBtn.addEventListener('click',()=>{ if(pendingRoomId) startGame(pendingRoomId,state.diff); });
closeDiffPopup.addEventListener('click',closeDiffPopupFn);
diffPopup.addEventListener('click',e=>{ if(e.target===diffPopup) closeDiffPopupFn(); });
soundBtn.addEventListener('click',()=>{ sfxOn=!sfxOn; soundBtn.textContent='Sound: '+(sfxOn?'On':'Off'); soundBtn.classList.toggle('off',!sfxOn); if(sfxOn) sfx.pick(); });
musicBtn.addEventListener('click',()=>{ musicOn=!musicOn; musicBtn.textContent='Music: '+(musicOn?'On':'Off'); musicBtn.classList.toggle('off',!musicOn); if(musicOn) startMusic(); else stopMusic(); });
// Arrange hub & tray controls
document.querySelectorAll('.hub-drawer').forEach(btn=> btn.addEventListener('click',()=> startArrangeChallenge(btn.dataset.challenge)));
checkArrangeBtn?.addEventListener('click', checkArrange);
arrangeHintBtn?.addEventListener('click', hintArrange);
backToHubBtn?.addEventListener('click', renderArrangeHub);
arrangeBackBtn?.addEventListener('click', ()=>{ if(arrangeTrayWrap.classList.contains('hidden')) showHouseMap(); else renderArrangeHub(); });

/* ---------------- Init ---------------- */
document.body.insertAdjacentHTML("afterbegin",GRADIENT_DEFS);
starsHudEl.innerHTML=[0,1,2].map(()=>'<span class="hud-star">'+STAR_SVG+'</span>').join('');
loadProgress();
showMenu();
})();
