export const ROUTES = [
  {
    id: 1,
    name: 'Explore Dice',
    path: '/explore-dice'
  },
  {
    id: 2,
    name: 'FAQ',
    path: '/faq'
  }
];

export const FAQ = [
  {
    id: 1,
    question: 'Why is there a waitlist?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 2,
    question: 'How much are the figures?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 3,
    question: 'Assume you accept ETH only?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 4,
    question: 'What is the wait time?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 5,
    question: 'Any way to shorten the wait time?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 6,
    question: 'How about delivery? Is it included?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 7,
    question: 'Do you only handle PFP NFTs? How about my other NFTs?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 8,
    question: 'Can I customize the size of my figure?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
];

// Chain infos
export const CHAIN_ID = 80001;
export const CHAIN_NAME = 'Mumbai Testnet';
export const RPC_URLS = ['https://rpc-mumbai.maticvigil.com'];
export const BLOCK_EXPLORER_URLS = ['https://polygonscan.com/'];
export const NATIVE_CURRENCY_NAME = 'MATIC';
export const NATIVE_CURRENCY_SYMBOL = 'MATIC';
export const DECIMALS = 18;

export const NO_ETHEREUM_OBJECT = /No Ethereum provider was found on window.ethereum/;

export const ERROR = 'error';
export const SWITCH_ERROR_CODE = 4902;

//  Animations
export const varFadeInUp = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const varFadeInDown = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const varFadeInLeft = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const varFadeInRight = {
  hidden: {
    x: 30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};