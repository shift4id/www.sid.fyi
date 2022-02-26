const ugly = {
  amber: ["blue", "cyan", "emerald", "green", "indigo", "lime", "purple", "sky", "teal", "violet"],
  blue: ["amber", "lime", "orange", "red", "rose", "yellow"],
  cyan: ["amber", "orange", "pink", "red", "rose", "yellow"],
  emerald: ["amber", "fuchsia", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  fuchsia: ["emerald", "green", "lime", "teal"],
  green: ["amber", "fuchsia", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  indigo: ["amber", "lime", "orange", "red", "rose", "yellow"],
  lime: ["amber", "blue", "fuchsia", "indigo", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  orange: ["blue", "cyan", "emerald", "green", "indigo", "sky", "lime", "purple", "teal", "violet"],
  pink: ["cyan", "emerald", "green", "lime", "teal"],
  purple: ["amber", "emerald", "green", "lime", "orange", "yellow"],
  red: ["blue", "cyan", "emerald", "green", "indigo", "lime", "sky", "teal"],
  rose: ["blue", "cyan", "emerald", "green", "indigo", "lime", "sky", "teal"],
  sky: ["amber", "orange", "red", "rose", "yellow"],
  teal: ["amber", "fuchsia", "orange", "pink", "red", "rose", "yellow"],
  violet: ["amber", "emerald", "green", "lime", "orange", "yellow"],
  yellow: ["blue", "cyan", "emerald", "green", "indigo", "lime", "purple", "sky", "teal", "violet"],
};

const similar = {
  amber: ["yellow"],
  blue: ["sky"],
  cyan: ["teal"],
  emerald: ["green"],
  fuchsia: ["pink", "violet"],
  green: ["emerald"],
  indigo: [],
  lime: [],
  orange: ["yellow"],
  pink: ["fuchsia", "red"],
  purple: ["violet"],
  red: ["pink", "rose"],
  rose: ["red"],
  sky: ["blue"],
  teal: ["cyan"],
  violet: ["fuchsia", "purple"],
  yellow: ["amber", "orange"],
};

const colors = Object.keys(ugly);

const gradients = colors
  .map((from) =>
    colors.map((via) =>
      colors.map(
        (to) =>
          from !== to &&
          from !== via &&
          via !== to &&
          !ugly[from].includes(via) &&
          !ugly[from].includes(to) &&
          !ugly[via].includes(to) &&
          !similar[from].includes(via) &&
          !similar[from].includes(to) &&
          !similar[via].includes(to) &&
          `from-${from}-500 via-${via}-500 to-${to}-500`
      )
    )
  )
  .flat(2)
  .filter((i) => i);

export const getGradient = function () {
  return gradients[Math.floor(Math.random() * gradients.length)];
};

export const getGradients = function () {
  return gradients;
};
