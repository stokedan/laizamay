export type GiftCategory = 'tops' | 'bottoms' | 'socks'

export type BrandOption = {
  id: string
  name: string
  description: string
  logo?:
    | { type: 'image'; src: string; alt: string; fit?: 'cover' | 'contain' }
    | { type: 'text'; text: string }
}

export type ProductOption = {
  id: string
  name: string
  imageSrc: string
}

export const giftConfig: {
  appBadge: string
  title: string
  subtitle: string
  intro: {
    heading: string
    subheading: string
    paragraphs: string[]
    cta: string
  }
  steps: {
    tops: { title: string; subtitle: string }
    bottoms: { title: string; subtitle: string }
    socks: { title: string; subtitle: string }
    reveal: { title: string; subtitle: string }
  }
  brandsByCategory: Record<GiftCategory, BrandOption[]>
  topsProductsByBrandId: Record<string, ProductOption[]>
  bottomsProductsByBrandId: Record<string, ProductOption[]>
  socksProductsByBrandId: Record<string, ProductOption[]>
  gymsharkTopBlock: {
    imageSrc: string
    imageAlt: string
    message: string
  }
  gymsharkBottomBlock: {
    imageSrc: string
    imageAlt: string
    message: string
  }
  gymsharkSocksBlock: {
    imageSrc: string
    imageAlt: string
    message: string
  }
} = {
  appBadge: 'stkdn',
  title: 'Welcome Laiza May!',
  subtitle: '2026 is our fitness year 💪',
  intro: {
    heading: '',
    subheading: '',
    paragraphs: [
      'This year we strive to become the best versions of ourselves.',
      'Shall we call it “Laiza May’s Fitness Era”?',
      'Whether it be the gym — working out, running, pilates, and maybe somewhere along the line… pickleball.',
      'So instead of a normal gift, I thought it would be fun if you helped me choose something that fits your fitness era.',
      'This app helps you become the ultimate fitfluencer!! Made by yours truly hehe',
      'You’ll be given a series of selections to help build the ultimate fit girl drip.',
      'Do note there are no prices given, as it may create bias in the selection process.',
      'Fire away, Laiza May!',
    ],
    cta: 'Start',
  },
  steps: {
    tops: {
      title: 'Choose a brand for the top',
      subtitle: 'This brand will only be used for the top.',
    },
    bottoms: {
      title: 'Choose a brand for the bottom',
      subtitle: 'This brand will only be used for the bottom.',
    },
    socks: {
      title: 'Choose a brand for the socks',
      subtitle: 'This brand will only be used for the socks.',
    },
    reveal: {
      title: 'Your fit is locked in',
      subtitle:
        'You just unlocked your 2026 fitness era. Screenshot this and send it to me so we can make it real — I hope this helps you feel a little more excited about your goals this year. I love you Laiza May, Happy Five Years of love, and a lifetime of being fit with you!! 🫶',
    },
  },
  brandsByCategory: {
    tops: [
      {
        id: 'alo-yoga',
        name: 'Alo Yoga',
        description: 'Pilates aesthetic. Clean, minimal, studio-ready fits.',
        logo: {
          type: 'image',
          src: 'https://static.wixstatic.com/media/42325f_f65d7a2cb72345a3a27637fd2f720999~mv2.jpg/v1/fill/w_2500,h_1185,al_c/42325f_f65d7a2cb72345a3a27637fd2f720999~mv2.jpg',
          alt: 'Alo Yoga',
        },
      },
      {
        id: 'lululemon',
        name: 'Lululemon',
        description: 'Premium performance wear for gym, yoga, and running.',
        logo: {
          type: 'image',
          src: 'https://cdn.dribbble.com/userupload/32266684/file/still-acaef88743709ad2b6480bd634832a8f.gif',
          alt: 'Lululemon',
        },
      },
      {
        id: 'nike-skims',
        name: 'Nike / NikeSKIMS',
        description: 'Sporty performance with a sleek fashion edge.',
        logo: {
          type: 'image',
          src: 'https://imgproxy.divecdn.com/-XasMA2MNSPf1lqyh2q23wYlV6X0za8qCt-wBV_YnMo/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9OaWtlX1NraW1zX1BST0RfUlVCQkVSX1NUSUxMXzE2eDlfUEhFT05JWF8wMDFfMDAwMDAuanBn.webp',
          alt: 'Nike / NikeSKIMS',
        },
      },
      {
        id: 'gymshark',
        name: 'Gymshark',
        description: 'Gym-focused gear built for lifting and training.',
        logo: {
          type: 'image',
          src: 'https://images.seeklogo.com/logo-png/33/1/gymshark-logo-png_seeklogo-335188.png',
          alt: 'Gymshark',
          fit: 'contain',
        },
      },
      {
        id: 'athleta',
        name: 'Athleta',
        description: 'Empowering performance wear for every move.',
        logo: {
          type: 'image',
          src: 'https://athleta.gap.com/Asset_Archive/GPWeb/content/0018/211/208/assets/ATHLETA_logo_Wave-Black.png',
          alt: 'Athleta',
          fit: 'contain',
        },
      },
      {
        id: 'vuori',
        name: 'Vuori',
        description: 'Soft premium athleisure for studio workouts.',
        logo: { type: 'text', text: 'VUORI' },
      },
    ],
    bottoms: [
      // Using the same brand set for now (easy to swap later).
      // If you send your bottoms brands, I’ll replace this list.
      ...[],
    ],
    socks: [
      // Using the same brand set for now (easy to swap later).
      // If you send your socks brands, I’ll replace this list.
      ...[],
    ],
  },
  topsProductsByBrandId: {
    'alo-yoga': [
      {
        id: 'alosoft-finesse-longsleeve',
        name: 'Alosoft Finesse Longsleeve',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W3442R_01_b1_s1_a1_1_m262_1500x.jpg?v=1766081895',
      },
      {
        id: 'alosoft-halfzip-rabid-pullover',
        name: 'Alosoft 1/2 Zip Rabid Pullover',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W3694R_01_b1_s1_a1_m54_1500x.jpg?v=1767400042',
      },
      {
        id: 'all-day-short-sleeve',
        name: 'All Day Short Sleeve',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W1430R_01_b1_s1_a1_1_m76_1500x.jpg?v=1741638123',
      },
      {
        id: 'softsculpt-precision-short-sleeve',
        name: 'ALO Softsculpt Precision Short Sleeve Top',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W1479R_01_b1_s1_a1_m191_ddcfe232-eae7-4159-8c5d-fa26fb0814e5_1500x.jpg?v=1753984988',
      },
      {
        id: 'cropped-all-day-short-sleeve',
        name: 'Cropped All Day Short Sleeve',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W1444R_01_b1_s1_a1_1_dSP26_m191_1500x.jpg?v=1770748055',
      },
      {
        id: 'ribbed-sea-coast-longsleeve',
        name: 'Ribbed Sea Coast Long Sleeve',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W3781R_01_b1_s1_a1_dSU26_m54_d2d9f108-efaa-4292-a9db-d84c9bd4e60a_1500x.jpg?v=1772063194',
      },
    ],
    'nike-skims': [
      {
        id: 'wrap-long-sleeve-cropped-top',
        name: 'Wrap Long Sleeve Cropped Top',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LSL-10088W-OBD-MM-NIKESKIMS-STRETCHKNIT-04-FR.webp?v=1769323069&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'long-sleeve-crew-neck-top',
        name: 'Long Sleeve Crew Neck Top',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/TP-LST-2752-OBD-EC-NIKE-ACTIVE_0072-SD.webp?v=1772518744&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'zip-front-top',
        name: 'Zip Front Top',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/TP-ZUP-6797W-OBD-MM-NIKESKIMS-MATTE-04-FR.webp?v=1769299440&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'mock-neck-full-zip-jacket',
        name: 'Mock Neck Full Zip Jacket',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/ZU-ZUP-8315W-OBD-RC-SKIMS-LOUNGEWEAR_5160-FR_7e210fc1-eabb-43b6-85f5-9b5796a038c8.jpg?v=1758219263&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
    ],
    lululemon: [
      {
        id: 'drapey-softstreme-boatneck-longsleeve',
        name: 'Drapey Softstreme Boatneck Long-Sleeve Shirt',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW3KD5S_0554_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'wunder-train-cropped-longsleeve-flocked',
        name: 'Wunder Train Cropped Long-Sleeve Shirt (Flocked)',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW3JLGS_071359_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'its-rulu-ribbed-cropped-half-zip',
        name: "It's Rulu Ribbed Cropped Half Zip",
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW3IO5S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'wundermost-ultra-soft-nulu-hip-length-crewneck',
        name: 'Wundermost Ultra-Soft Nulu Hip-Length Crewneck Shirt',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW3HXGS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'jersey-training-longsleeve-wordmark',
        name: 'Jersey Training Long-Sleeve Shirt (Wordmark)',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW3KMJS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_usm=0.5,2,10,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'swiftly-tech-short-sleeve-2-hip-length',
        name: 'Swiftly Tech Short-Sleeve Shirt 2.0 (Hip Length)',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW3HHHS_4780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_usm=0.5,2,10,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
    ],
    vuori: [
      {
        id: 'daydream-crew',
        name: 'Daydream Crew',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW133HBK_FA25_W_TOPS_FRONT_3.jpg?v=1761263106&width=800&height=1000&crop=center',
      },
      {
        id: 'long-sleeve-heavyweight-cotton-tee',
        name: 'Long Sleeve Heavyweight Cotton Tee',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW1313OBL_SP26_W_TOPS_DETAIL_9.png?v=1768954793&width=800&height=1000&crop=center',
      },
      {
        id: 'long-sleeve-halo-essential-scoop',
        name: 'Long Sleeve Halo Essential Scoop',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW1263SBK_FA25_W_TOPS_FRONT_4_1.jpg?v=1756418648&width=800&height=1000&crop=center',
      },
      {
        id: 'halo-cardigan-2-0',
        name: 'Halo Cardigan 2.0',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW1396HBK_SP25_W_ECOMM_TOPS_FRONT_3.jpg?v=1743021040&width=2000&height=2500&crop=center',
      },
      {
        id: 'long-sleeve-seamless-surge-tee',
        name: 'Long Sleeve Seamless Surge Tee',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW1198BLK_SP25_W_ECOMM_TOPS_FRONT_1.jpg?v=1741890958&width=800&height=1000&crop=center',
      },
      {
        id: 'long-sleeve-halo-essential-crew-tee',
        name: 'Long Sleeve Halo Essential Crew Tee',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW1469HEE_FA25_W_TOPS_FULL_6.jpg?v=1761938153&width=800&height=1000&crop=center',
      },
      {
        id: 'halo-baby-tee',
        name: 'Halo Baby Tee',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW1219BTH_FA25_W_ECOMM_TOPS_FRONT_2.jpg?v=1752699224&width=800&height=1000&crop=center',
      },
      {
        id: 'pose-fitted-tee',
        name: 'Pose Fitted Tee',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW169FRS_SP26_W_TOPS_CREATIVE_9.png?v=1770328361&width=800&height=1000&crop=center',
      },
      {
        id: 'energy-tee',
        name: 'Energy Tee',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW1011HRV_SP26_W_TOPS_DETAIL_7.jpg?v=1767369762&width=800&height=1000&crop=center',
      },
    ],
    athleta: [
      {
        id: 'move-with-ease-top',
        name: 'Move With Ease Top',
        imageSrc:
          'https://athleta.gap.com/webcontent/0061/246/006/cn61246006.jpg',
      },
      {
        id: 'momentum-seamless',
        name: 'Momentum Seamless',
        imageSrc:
          'https://athleta.gap.com/webcontent/0060/403/743/cn60403743.jpg',
      },
      {
        id: 'signature-rib-long-sleeve-henley-top',
        name: 'Signature Rib Long Sleeve Henley Top',
        imageSrc:
          'https://athleta.gap.com/webcontent/0061/910/438/cn61910438.jpg',
      },
      {
        id: 'signature-rib-crop-tee',
        name: 'Signature Rib Crop Tee',
        imageSrc:
          'https://athleta.gap.com/webcontent/0060/493/286/cn60493286.jpg',
      },
      {
        id: 'momentum-seamless-tee',
        name: 'Momentum Seamless Tee',
        imageSrc:
          'https://athleta.gap.com/webcontent/0060/101/236/cn60101236.jpg',
      },
      {
        id: 'with-ease-crop-tee',
        name: 'With Ease Crop Tee',
        imageSrc:
          'https://athleta.gap.com/webcontent/0059/891/199/cn59891199.jpg',
      },
    ],
  },
  bottomsProductsByBrandId: {
    'alo-yoga': [
      {
        id: 'high-waist-airlift-legging',
        name: 'High-Waist Airlift Legging',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W5766R_01_b1_s1_a2_1_m224_1500x.jpg?v=1762820993',
      },
      {
        id: 'high-waist-bootcut-legging',
        name: 'High-Waist Bootcut Legging',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W51119R_01_b1_s1_a2_m218_1500x.jpg?v=1762560093',
      },
      {
        id: 'airbrush-high-waist-heart-throb-legging',
        name: 'Airbrush High-Waist Heart Throb Legging',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W51298R_0100_b1_s1_a3_2_m224_1500x.jpg?v=1770668689',
      },
      {
        id: 'airlift-high-waist-line-up-legging',
        name: 'Airlift High-Waist Line Up Legging',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/W51154R_01_b1_s1_a1_1_m224_1500x.jpg?v=1769646065',
      },
    ],
    'nike-skims': [
      {
        id: 'drawcord-cropped-17-legging',
        name: 'Drawcord Cropped 17" Legging',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-LEG-7887W-NVY-EB-SKIMS-ACTIVE_0013-FR.webp?v=1771978766&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'regular-leggings-26-or-29',
        name: 'Regular Leggings 26" or 29"',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-LEG-7005W-OBD-CD-SKIMS-ACTIVE_30210-FR.jpg?v=1762546712&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'foldover-slimflare-leggings',
        name: 'Foldover Slimflare Leggings',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-LEG-9493W-OBD-MM-NIKESKIMS-MATTE-01-FR.webp?v=1769320657&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'v-line-26-legging',
        name: 'V-Line 26" Legging',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-LEG-7008W-OBD-CB-SKIMS-ACTIVE_0560-FR.jpg?v=1762546810&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'bonded-waist-legging',
        name: 'Bonded Waist Legging',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-LEG-8352W-PHO-EC-SKIMS-ACTIVE_30299-FR.jpg?v=1762545019&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'straight-34-legging',
        name: '34" Straight Legging',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PT-LEG-9722W-OAR-MM-NIKESKIMS-RIBSEAMLESS-01-FR_fbcc2a68-9ee8-4c7a-9614-8debf79e0923.webp?v=1769322320&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
    ],
    lululemon: [
      {
        id: 'align-no-line-high-rise-pant-25',
        name: 'Align No Line™ High-Rise Pant 25"',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW5ISVS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'wunder-train-no-line-piped-high-rise-tight-25',
        name: 'Wunder Train No-Line Piped High-Rise Tight 25"',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW5HZES_036522_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'fast-and-free-high-rise-crop-19-5-pocket',
        name: 'Fast and Free High-Rise Crop 19" (5 Pocket)',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW6CP2S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'unrestricted-power-high-rise-tight-25',
        name: 'Unrestricted Power High-Rise Tight 25"',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LW5GP4S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
    ],
    vuori: [
      {
        id: 'all-the-feels-leggings',
        name: 'All the Feels Leggings',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW4018JET_FA24_W_ECOMM_PANTS_FULL_4.jpg?v=1728505700&width=800&height=1000&crop=center',
      },
      {
        id: 'all-the-feels-corset-leggings',
        name: 'All the Feels Corset Leggings',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW4363AGG_SP26_W_BOTTOMS_SIDE_4.jpg?v=1767392953&width=800&height=1000&crop=center',
      },
      {
        id: 'all-the-form-leggings',
        name: 'All the Form Leggings',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW4130FRS_SP26_W_BOTTOMS_SIDE_4_ee3513c0-cea3-42db-a90d-9f9cd5558546.jpg?v=1767920358&width=800&height=1000&crop=center',
      },
      {
        id: 'daily-form-leggings',
        name: 'Daily Form Leggings',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW4309-LBCO_SP26_W_BOTTOMS_SIDE_3.jpg?v=1767210818&width=800&height=1000&crop=center',
      },
      {
        id: 'all-the-feels-slim-flare-leggings',
        name: 'All the Feels Slim Flare Leggings',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW4301-SBLK_SP25_W_ECOMM_BOTTOMS_SIDE_3.jpg?v=1764097307&width=800&height=1000&crop=center',
      },
      {
        id: 'all-the-feels-shirred-crop-leggings',
        name: 'All the Feels Shirred Crop Leggings',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW4460BLK_SP26_W_BOTTOMS_FRONT_2.png?v=1770766571&width=800&height=1000&crop=center',
      },
      {
        id: 'all-the-form-flared-leggings',
        name: 'All the Form Flared Leggings',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW4414BLK_FA25_W_BOTTOMS_SIDE_3.jpg?v=1764036722&width=800&height=1000&crop=center',
      },
    ],
    athleta: [
      {
        id: 'transcend-high-rise-7-8-legging',
        name: 'Transcend High Rise 7/8 Legging',
        imageSrc:
          'https://athleta.gap.com/webcontent/0061/309/948/cn61309948.jpg',
      },
      {
        id: 'elation-ultra-high-rise-7-8-legging',
        name: 'Elation Ultra High Rise 7/8 Legging',
        imageSrc:
          'https://athleta.gap.com/webcontent/0060/741/284/cn60741284.jpg',
      },
      {
        id: 'interval-stash-high-rise-7-8-legging',
        name: 'Interval Stash High Rise 7/8 Legging',
        imageSrc:
          'https://athleta.gap.com/webcontent/0061/344/228/cn61344228.jpg',
      },
      {
        id: 'elation-ultra-high-rise-flare-pant',
        name: 'Elation Ultra High Rise Flare Pant',
        imageSrc:
          'https://athleta.gap.com/webcontent/0061/803/522/cn61803522.jpg',
      },
      {
        id: 'salutation-stash-high-rise-legging',
        name: 'Salutation Stash High Rise Legging',
        imageSrc:
          'https://athleta.gap.com/webcontent/0060/863/312/cn60863312.jpg',
      },
      {
        id: 'headlands-hybrid-high-rise-cargo-legging',
        name: 'Headlands Hybrid High Rise Cargo Legging',
        imageSrc:
          'https://athleta.gap.com/webcontent/0060/616/139/cn60616139.jpg',
      },
      {
        id: 'elation-ultra-high-rise-capri',
        name: 'Elation Ultra High Rise Capri',
        imageSrc:
          'https://athleta.gap.com/webcontent/0059/611/050/cn59611050.jpg',
      },
    ],
  },
  socksProductsByBrandId: {
    'alo-yoga': [
      {
        id: 'womens-pulse-grip-sock',
        name: "Women's Pulse Grip Sock",
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/products/A0485W_01_b1_s1_a3_1_m78_1500x.jpg?v=1683573450',
      },
      {
        id: 'womens-pivot-barre-sock',
        name: "Women's Pivot Barre Sock",
        imageSrc:
          'https://cdn.shopify.com/s/files/1/2185/2813/files/A0094W_01_b1_a1_m100_1500x.jpg?v=1683841524',
      },
    ],
    'nike-skims': [
      {
        id: 'dri-fit-pilates-grip-crew-sock',
        name: 'Dri-Fit Pilates Grip Crew Sock',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-NIKE-SOCKS-IV3354-HLN_COMPOSITE.jpg?v=1769393629&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
      {
        id: 'lettuce-edge-crew-sock',
        name: 'Lettuce Edge Crew Sock',
        imageSrc:
          'https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-SOCKS-SH-SCK-9593W-BBG-2.jpg?v=1768611022&auto=format&q=70&ixlib=react-9.11.0&w=1075',
      },
    ],
    lululemon: [
      {
        id: 'find-your-balance-grip-crew-socks',
        name: 'Unisex Find Your Balance Grip Crew Socks',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LU9CJBS_033454_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'find-your-balance-grip-socks-strappy',
        name: 'Unisex Find Your Balance Grip Socks (Strappy)',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LU9CJ9S_033454_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
      {
        id: 'find-your-balance-grip-tab-socks',
        name: 'Unisex Find Your Balance Grip Tab Socks',
        imageSrc:
          'https://images.lululemon.com/is/image/lululemon/LU9CJ8S_033454_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      },
    ],
    vuori: [
      {
        id: 'half-crew-gripper-socks',
        name: 'Half Crew Gripper Socks',
        imageSrc:
          'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V8097LHG_FA25_UNISEX_SOCKS_FLAT_LAY_1_4eafb274-34f2-406d-bd87-e8757affdc5a.jpg?v=1763764594&width=800&height=1000&crop=center',
      },
    ],
    athleta: [
      {
        id: 'athleta-pilates-gripper-crew-sock-1',
        name: 'Athleta Pilates Gripper Crew Sock',
        imageSrc:
          'https://athleta.gap.com/webcontent/0061/097/621/cn61097621.jpg',
      },
      {
        id: 'athleta-pilates-gripper-crew-sock-2',
        name: 'Athleta Pilates Gripper Crew Sock',
        imageSrc:
          'https://athleta.gap.com/webcontent/0059/967/006/cn59967006.jpg',
      },
    ],
  },
  gymsharkTopBlock: {
    // Replace this with your own photo URL (or a hosted image link).
    imageSrc:
      'https://i.imgur.com/iom3gxD.png',
    imageAlt: 'Gymshark top',
    message: 'Oops, sorry you currently have a gymshark top ;) ',
  },
  gymsharkBottomBlock: {
    imageSrc: 'https://i.imgur.com/Svp4EHB.png',
    imageAlt: 'Gymshark leggings',
    message: "Oops, dont forget you ALSO have gymshark leggings :p",
  },
  gymsharkSocksBlock: {
    imageSrc: 'https://i.imgur.com/mTJxwPm.png',
    imageAlt: 'Gymshark socks',
    message:
      'Lastly, I know you have gymshark socks!! This may not be the exact one but you can’t get socks also bleeh',
  },
}

// Reuse tops list for bottoms/socks unless you supply different lists.
giftConfig.brandsByCategory.bottoms = giftConfig.brandsByCategory.tops
giftConfig.brandsByCategory.socks = giftConfig.brandsByCategory.tops

