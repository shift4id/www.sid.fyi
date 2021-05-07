import Layout from "@/components/layout";
import Card from "@/components/setup/card";

const hardware = [
  {
    product: "Macbook Pro",
    type: "Laptop",
    description: "16 in, 1TB SSD, 16 GB RAM, Intel i9, AMD Radeon 5500M",
    href: "https://www.apple.com/macbook-pro/",
  },
  {
    product: "ZSA Moonlander",
    type: "Primary Keyboard",
    description:
      'White Colorway, Kailh Silver (Linear) Keyswitches, ePBT "Less, but better" Keycaps',
    href: "https://www.zsa.io/moonlander/",
  },
  {
    product: "GMMK Pro",
    type: "Secondary Keyboard",
    description: 'White Colorway, Tealios V2 (Linear) Keyswitches, GMK "Taro" Keycaps',
    href: "https://www.zsa.io/moonlander/",
  },
  {
    product: "KBD67 Lite",
    type: "Travel Keyboard",
    description: 'White Colorway, Zilent (Tactile) Keyswitches, GMK "Dots" Keycaps',
    href: "https://kbdfans.com/products/kbd67lite",
  },
  {
    product: "Logi MX Master 3",
    type: "Mouse",
    description: "Gray Colorway, MacOS Edition",
    href: "https://www.logitech.com/en-us/mx/mx-for-mac.html",
  },
];

const software = [
  { product: "Firefox", type: "Web Browser", href: "https://www.mozilla.org/firefox/" },
  { product: "Figma", type: "Design Software", href: "https://www.figma.com/" },
  { product: "GitKraken", type: "Git Client", href: "https://gitkraken.com/" },
  { product: "iTerm", type: "Terminal", href: "https://iterm2.com/" },
  { product: "WebStorm", type: "JavaScript IDE", href: "https://www.jetbrains.com/webstorm/" },
  { product: "GoLand", type: "Golang IDE", href: "https://www.jetbrains.com/goland/" },
  { product: "PyCharm", type: "Python IDE", href: "https://www.jetbrains.com/pycharm/" },
  { product: "Vim", type: "Text Editor", href: "https://www.vim.org/" },
];

const Setup = () => {
  return (
    <Layout title="Setup" description="Here are a few of the main tools/software that I use!">
      <h3 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
        HARDWARE
      </h3>
      {hardware.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card {...item} />
      ))}
      <h3 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
        SOFTWARE
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4">
        {software.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Card {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default Setup;
