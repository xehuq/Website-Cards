var app = angular.module("app", []);

app.run(function($rootScope) {
  $rootScope.games = [
    {
      name: "JarJar",
      version: "1.17.x",
      divider: "|",
      game__discription: "JarJar is a Minecraft Bedrock Edition internal 1.17+ Utility Client. We are currently still in development but you can join our discord server at https://discord.gg/jarjar, You can also download early access at https://odd1ty.github.io/Odd1ty/!",
      logo: "https://cdn.discordapp.com/attachments/853397854642241546/859189171683459122/JarJarIco.png",
      background: "https://i.pinimg.com/736x/51/f2/d5/51f2d54bd5c9e06d2743ce3ed2977fdf.jpg"
    },
    {
      name: "Jinx API",
      version: "1.8.x",
      divider: "|",
      game__discription: "Jinx API is a minecraft 1.8 Java Edition Utility Base with notes and tutorials on how to add modules and create your own client for java! Its currently in development but you can support them at https://discord.gg/jarjar",
      logo: "https://cdn.discordapp.com/attachments/853397854642241546/859189171683459122/JarJarIco.png",
      background: "https://3dandroidwallpaper.com/wp-content/uploads/2018/03/Trippy-Colorful-Android-Wallpaper.jpg"
    },
    {
      name: "Cardinal",
      version: "1.17.x",
      divider: "|",
      game__discription: "Cardinal is a Minecraft Bedrock Edition internal 1.17+ Utility Client created by EchoHackCmd, it is currently in development but you can support him and the creation of cardinal by going to https://discord.gg/gWGgCJ7a!",
      logo: "https://cdn.discordapp.com/icons/853503537095114793/34be8beac8f4ed809682fdf29c55a49e.png?size=128",
      background: "https://png.pngtree.com/thumb_back/fw800/background/20190521/pngtree-liquid-background-blue-and-green-color-image_113673.jpg"
    },
    {
      name: "Cyan",
      version: "1.17.x",
      divider: "|",
      game__discription: "Cyan is a Minecraft Bedrock Edition internal 1.17+ Utility Client created by Expando, it is currently in development but you can support him and the creation of cyan by going to https://discord.gg/Z5Trz7Ss59!",
      logo: "https://cdn.discordapp.com/icons/775729014010150922/6c51023859013758ac484ae072d9a863.png?size=128",
      background: "https://ak.picdn.net/shutterstock/videos/1024545137/thumb/1.jpg"
    },
    {
      name: "Strike",
      version: "1.17.x",
      divider: "|",
      game__discription: "Strike is a free Minecraft bedrock client with many features and the goal of being the most stable external Minecraft bedrock cheat, https://discord.gg/M7nJcVeNED",
      logo: "https://cdn.discordapp.com/attachments/859214632338325505/859253685066793010/image_5.png",
      background: "https://i.pinimg.com/736x/ea/0b/1b/ea0b1b7d289f55fcc01466b39f068a93.jpg"
    }
  ];
});
