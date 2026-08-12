// index.tsx
// 젤 처음 만나게 되는 메인 페이지
// 같이 있는 폴더에 있는 섹션에서 내용을 만들고
// 여기에서 조립만 할 것임 (깔끔하게 유지하기)

import { Hero } from "./Hero";
import { Highlights } from "./Highlights";
import { Activities } from "./Activities";
import { Projects } from "./Projects";
import Schedule  from "./Schedule";
import { Stats } from "./Stats";
import { Contributors } from "./Contributors";
import { Join } from "./Join";
import { Tracks } from "./Tracks";

export function Home() {
  return (
    <main className="home">
      <Hero />
      <Stats />
      <Activities />
      <Tracks />
      <Projects />
      <Highlights />
      <Schedule />
      <Join />
      <Contributors />
    </main>
  );
}
