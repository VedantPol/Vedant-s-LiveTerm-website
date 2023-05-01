// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
const songs = [
  { name: 'Fed Up', file:'music.mp3' },
  { name: 'Aaja', file:'music3.mp3' },
  { name: 'Rip & Tear', file:'music2.mp3' },

  // add more songs here
];

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, my name is ${config.name}. 
Welcome to my website!

My journey with open source began during my college days when I discovered Linux. 
Since then, I have been actively involved in various open source projects, fixing bugs, contributing code, 
and helping others in the community. I believe that by working together, developers can create software 
that is more reliable, secure, and innovative.

Thus I developed a portfolio website designed to resemble a Linux terminal, which serves as a 
platform for showcasing my skills and expressing my passion for Linux.

More about me:
'summary' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);

  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

let audio: HTMLAudioElement;
export const radio = async (args: string[]): Promise<string> => {
 const randomIndex = Math.floor(Math.random() * songs.length);
 const song = songs[randomIndex];
 audio = new Audio(song.file);
 audio.play();
 return `Now playing: ${song.name} please do not write radio two times its breaking the music`;
};

export const radiostop = async (args: string[]): Promise<string> => {
  if (audio && !audio.paused) {
    audio.pause();
    audio.src = '';
    audio.load();
    audio = null;
    return `Music stopped.`;
  } else {
    return `Music is not currently playing.`;
  }
};
export const radioremove = async (args: string[]): Promise<string> => {
 if (audio) {
   audio.pause();
   audio.src = '';
   audio.load();
   audio.parentNode?.removeChild(audio);
   audio = null;
   return `Music element removed.`;
 } else {
   return `Music is not currently playing.`;
 }
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const cat = async (args?: string[]): Promise<string> => {
  return `meow`;
};
// export const neofetch = async (args?: string[]): Promise<string> => {
//   const str= `_______                                       
//                    -`                    albedo@Arch 
//                   .o+`                   ----------- 
//                  `ooo/                   OS: Arch Linux x86_64 
//                 `+oooo:                  Host: 81LK IdeaPad L340-15IRH Gaming 
//                `+oooooo:                 Kernel: 6.2.13-arch1-1 
//                -+oooooo+:                Uptime: 7 hours, 38 mins 
//              `/:-:++oooo+:               Packages: 908 (pacman), 7 (flatpak), 10 (snap) 
//             `/++++/+++++++:              Shell: bash 5.1.16 
//            `/++++++++++++++:             Resolution: 1920x1080, 1366x768 
//           `/+++ooooooooooooo/`           WM: i3                                                          
//          ./ooosssso++osssssso+`          Theme: Adwaita [GTK2/3] 
//         .oossssso-````/ossssss+`         Icons: Adwaita [GTK2/3]                                              
//        -osssssso.      :ssssssso.        Terminal: cool-retro-term                                            
//       :osssssss/        osssso+++.       CPU: Intel i5-9300H (8) @ 4.100GHz                                   
//      /ossssssss/        +ssssooo/-       GPU: NVIDIA GeForce GTX 1050 3 GB Max-Q                              
//    `/ossssso+/:-        -:/+osssso+-     GPU: Intel CoffeeLake-H GT2 [UHD Graphics 630]                       
//   `+sso+:-`                 `.-/+oso:    Memory: 8377MiB / 15751MiB                                           
//  `++:.                           `-/+/     `;
//               return str;
// };
export const ls = async (args: string[]): Promise<string> => {
  return `A list of few of my Projects 

  -> Packaing-snap -    A universal snap package of XWiki software that can be installed on all major linux distributions.
                        It currently has over 2000+ montly downloads with 100+ weekly active users.
                        <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/xwiki-contrib/packaging-snap" target="_blank">Github Repo</a></u>

  -> TCET-Liux -        A arch based linux operating system created from scratch for Thakur College 
                        of Engineering and Technology computer science department. 
                        <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/VedantPol/tcet-linux/tree/main" target="_blank">Github Repo</a></u>

  -> Auto-Light-Alarm - If you are a heavy sleeper and need someone to turn your room lights on for you, 
                        here is a simple and quick IOT-based solution to help you wake up . (I use it everyday)
                        <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/VedantPol/Auto-light-alarm" target="_blank">Github Repo</a></u>
                        `
  ;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ██╗   ██╗███████╗██████╗  █████╗ ███╗   ██╗████████╗    ██████╗  ██████╗ ██╗     
  ██║   ██║██╔════╝██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝    ██╔══██╗██╔═══██╗██║     
  ██║   ██║█████╗  ██║  ██║███████║██╔██╗ ██║   ██║       ██████╔╝██║   ██║██║     
  ╚██╗ ██╔╝██╔══╝  ██║  ██║██╔══██║██║╚██╗██║   ██║       ██╔═══╝ ██║   ██║██║     
   ╚████╔╝ ███████╗██████╔╝██║  ██║██║ ╚████║   ██║       ██║     ╚██████╔╝███████╗
    ╚═══╝  ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝       ╚═╝      ╚═════╝ ╚══════╝


Type 'help' to see the list of available commands.
Type 'summary' to display summary.
Type 'about' for a short bio.
`;
};
