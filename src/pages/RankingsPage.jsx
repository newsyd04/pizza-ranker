import React from 'react';
import { Leaderboard } from '../components/leaderboard';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';

function RankingsPage() {
    const rankings = [
      { rank: 1, username: "Doom Slice", Score: 9.6, Location: "Dame Lane, Dublin", Style: "Detroit Slice", avatar: "https://external-content.duckduckgo.com/ip3/www.doomslice.pizza.ico" },
      { rank: 2, username: "Bambino", Score: 9.2, Location: "Stephen Street, Dublin", Style: "NYC Slice", avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F63207790b2303c07402c835a%2Fd3448bdc-ad2f-4f1d-a247-3459a6c32ad8%2FBambino%2BLogo&f=1&nofb=1&ipt=e2ea07ecd15ce86e143af17989b58fe493b9a4aa725f642f357817f0c9119568&ipo=images" },
      { rank: 3, username: "DJ Pizza", Score: 9, Location: "Castletroy, Limerick", Style: "DJ Pizza Style", avatar: "https://djpizzalimerick.com/cf-cgi/families/21231/resource-types/web-logo.png?width=256&fit=contain&quality=100&format=auto" },
      { rank: 4, username: "Mani", Score: 8.6, Location: "Drury Street, Dublin", Style: "Roman Slice", avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dublintown.ie%2F_next%2Fimage%2F%3Furl%3Dhttps%3A%252F%252Fdublintown.wpengine.com%252Fwp-content%252Fuploads%252F2024%252F03%252Fmani-1.jpg%26w%3D3840%26q%3D75&f=1&nofb=1&ipt=e99f99ec7afc836fc3021605b157fa4c7fd2b2c465f71228621786b6eac915ce&ipo=images" },
      { rank: 5, username: "Pi", Score: 8.5, Location: "George’s Street, Dublin", Style: "Neopolitan Pie", avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z-zICyFJOCOXdUXKibxZ8gAAAA%26pid%3DApi&f=1&ipt=ff94e1f569ab40e87b0627c759c351b6849323d5be299eb53fbcf6695c8ca5e9&ipo=images" },
    ];
  
    return (  
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="relative z-20 w-full">
          <Leaderboard rankings={rankings} />
        </div>
        <BackgroundGradientAnimation className="absolute inset-0 z-0" />
      </div>
    );
  }
  
export default RankingsPage;