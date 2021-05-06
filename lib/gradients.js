/* eslint-disable prettier/prettier */

const ugly = {
  amber: ["blue", "cyan", "emerald", "green", "indigo", "lightBlue", "lime", "purple", "teal", "violet"],
  blue: ["amber", "lime", "orange", "red", "rose", "yellow"],
  cyan: ["amber", "orange", "pink", "red", "rose", "yellow"],
  emerald: ["amber", "fuchsia", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  fuchsia: ["emerald", "green", "lime", "teal"],
  green: ["amber", "fuchsia", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  indigo: ["amber", "lime", "orange", "red", "rose", "yellow"],
  lightBlue: ["amber", "orange", "red", "rose", "yellow"],
  lime: ["amber", "blue", "fuchsia", "indigo", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  orange: ["blue", "cyan", "emerald", "green", "indigo", "lightBlue", "lime", "purple", "teal", "violet"],
  pink: ["cyan", "emerald", "green", "lime", "teal"],
  purple: ["amber", "emerald", "green", "lime", "orange", "yellow"],
  red: ["blue", "cyan", "emerald", "green", "indigo", "lightBlue", "lime", "teal"],
  rose: ["blue", "cyan", "emerald", "green", "indigo", "lightBlue", "lime", "teal"],
  teal: ["amber", "fuchsia", "orange", "pink", "red", "rose", "yellow"],
  violet: ["amber", "emerald", "green", "lime", "orange", "yellow"],
  yellow: ["blue", "cyan", "emerald", "green", "indigo", "lightBlue", "lime", "purple", "teal", "violet"]
};

const similar = {
  amber: ["yellow"],
  blue: ["lightBlue"],
  cyan: ["teal"],
  emerald: ["green"],
  fuchsia: ["pink", "violet"],
  green: ["emerald"],
  indigo: [],
  lightBlue: ["blue"],
  lime: [],
  orange: ["yellow"],
  pink: ["fuchsia", "red"],
  purple: ["violet"],
  red: ["pink", "rose"],
  rose: ["red"],
  teal: ["cyan"],
  violet: ["fuchsia", "purple"],
  yellow: ["amber", "orange"]
}

const colors = Object.keys(ugly);

const all = colors
  .map(from =>
    colors.map(via =>
      colors.map(
        to =>
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
  .filter(i => i);

export const getGradient = () => all[Math.floor(Math.random() * all.length)];

export const getAllGradients = () => all;
