import { useState, useEffect, type ReactNode } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import svgPaths from "@/imports/1920/svg-9ahr6apnr3";

// ─── SEO ──────────────────────────────────────────────────────────────────────
function useSEO() {
  useEffect(() => {
    document.title =
      "고요(GOYO) — 한옥에서 보내는 온전한 쉼의 시간";
    document.documentElement.lang = "ko";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(
        `meta[name="${name}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    const setOg = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(
        `meta[property="${property}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta(
      "description",
      "도심의 소음 너머 온전한 쉼이 시작되는 곳, 고요. 정갈한 한옥에서 명인의 전통 체험과 함께 일상의 여유를 되찾으세요.",
    );
    setMeta(
      "keywords",
      "고요,GOYO,한옥,전통체험,다도,서예,도자기,한복,한옥숙소,전통문화,명인",
    );
    setMeta("robots", "index, follow");
    setMeta("viewport", "width=device-width, initial-scale=1");
    setOg(
      "og:title",
      "고요(GOYO) — 한옥에서 보내는 온전한 쉼의 시간",
    );
    setOg(
      "og:description",
      "도심의 소음 너머 온전한 쉼이 시작되는 곳, 고요. 정갈한 한옥에서 명인의 전통 체험과 함께 일상의 여유를 되찾으세요.",
    );
    setOg("og:type", "website");
    setOg("og:locale", "ko_KR");
    setOg("og:image", "/images/hero/hero-background.jpg");
    setMeta("twitter:card", "summary_large_image");
    setMeta(
      "twitter:title",
      "고요(GOYO) — 한옥에서 보내는 온전한 쉼의 시간",
    );
    setMeta(
      "twitter:description",
      "도심의 소음 너머 온전한 쉼이 시작되는 곳, 고요. 정갈한 한옥에서 명인의 전통 체험과 함께 일상의 여유를 되찾으세요.",
    );
    setMeta(
      "twitter:image",
      "/images/hero/hero-background.jpg",
    );
  }, []);
}

// ─── SVG LOGOS ────────────────────────────────────────────────────────────────
function GoyoLogoDark({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 88 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="고요 로고"
    >
      <g clipPath="url(#goyo-hd-clip)">
        <path d={svgPaths.p30bb7280} fill="#4E4336" />
        <g>
          <mask
            id="goyo-hd-mask"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            height="33"
            width="90"
            x="-1"
            y="-1"
          >
            <g>
              <path d={svgPaths.p29d19700} fill="white" />
              <path d={svgPaths.p30bb7280} fill="black" />
            </g>
          </mask>
          <g mask="url(#goyo-hd-mask)">
            <path d={svgPaths.p1f52ef80} fill="#4E4336" />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="goyo-hd-clip">
          <rect fill="white" height="32" width="88" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GoyoLogoLight({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 88 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="고요 로고"
    >
      <g clipPath="url(#goyo-ft-clip)">
        <path d={svgPaths.p30bb7280} fill="#EDE1D4" />
        <g>
          <mask
            id="goyo-ft-mask"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            height="33"
            width="90"
            x="-1"
            y="-1"
          >
            <g>
              <path d={svgPaths.p29d19700} fill="white" />
              <path d={svgPaths.p30bb7280} fill="black" />
            </g>
          </mask>
          <g mask="url(#goyo-ft-mask)">
            <path d={svgPaths.p1f52ef80} fill="#EDE1D4" />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="goyo-ft-clip">
          <rect fill="white" height="32" width="88" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GoyoBigLogo({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 174 63.2727"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="고요 대형 로고"
    >
      <g clipPath="url(#goyo-big-clip)">
        <path d={svgPaths.pf47800} fill="#EDE1D4" />
        <g>
          <mask
            id="goyo-big-mask"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            height="64"
            width="177"
            x="-1"
            y="-1"
          >
            <g>
              <path d={svgPaths.p3a3be500} fill="white" />
              <path d={svgPaths.p2dd2a900} fill="black" />
            </g>
          </mask>
          <g mask="url(#goyo-big-mask)">
            <path d={svgPaths.p3e71c800} fill="#EDE1D4" />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="goyo-big-clip">
          <rect fill="white" height="63.2727" width="174" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ChineseTitleSvg({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      fill="none"
      viewBox="0 0 50.8984 121.469"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={svgPaths.p3b919500} fill="#4E4336" />
      <path d={svgPaths.p3310d800} fill="#4E4336" />
    </svg>
  );
}

// ─── SHARED SUBCOMPONENTS ─────────────────────────────────────────────────────
function SectionHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-3 xl:gap-5">
        <h2 className="font-serif font-normal text-[#ede1d4] text-[26px] md:text-[32px] xl:text-[40px] tracking-[-0.78px] md:tracking-[-0.96px] xl:tracking-[-1.2px]">
          {title}
        </h2>
        <p className="font-sans font-normal text-[rgba(237,225,212,0.72)] text-[14px] md:text-[17px] xl:text-[22px] tracking-[-0.42px] xl:tracking-[-0.66px] leading-[1.55]">
          {desc}
        </p>
      </div>
      <button className="font-sans font-medium text-[rgba(237,225,212,0.7)] text-[13px] md:text-[14px] xl:text-[16px] tracking-[-0.39px] hover:text-[#ede1d4] transition-colors shrink-0 mt-1 underline underline-offset-2 decoration-[rgba(237,225,212,0.3)]">
        더보기
      </button>
    </div>
  );
}

function HScrollWrap({ children }: { children: ReactNode }) {
  return (
    <div
      className="overflow-x-auto -mx-4 px-4 md:-mx-[120px] md:px-[120px] xl:mx-0 xl:px-0 xl:overflow-x-visible pb-3 xl:pb-0"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="flex gap-2 md:gap-3 xl:gap-6 xl:w-full"
        style={{ width: "max-content" }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── QURATION CARD ────────────────────────────────────────────────────────────
function QCard({
  img,
  alt,
  badge,
  title,
  large = false,
}: {
  img: string;
  alt: string;
  badge: string;
  title: string;
  large?: boolean;
}) {
  return (
    <article
      className={`relative overflow-clip w-full flex flex-col justify-between group ${
        large
          ? "h-[260px] md:h-[340px] xl:h-[660px] xl:w-[628px] xl:flex-shrink-0"
          : "h-[200px] md:h-[260px] xl:h-[318px]"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <img
          alt={alt}
          className="absolute object-cover size-full group-hover:scale-[1.02] transition-transform duration-700"
          src={img}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[50%] from-transparent to-[#4e4336] to-[96%]" />
      </div>
      <div className="relative flex justify-end p-4 xl:p-6">
        <button className="flex items-center gap-1 font-sans font-normal text-[#ede1d4] text-[12px] xl:text-[15px] tracking-[-0.36px] hover:opacity-60 transition-opacity">
          예약하기 <ChevronRight size={10} />
        </button>
      </div>
      <div className="relative p-4 xl:p-7">
        <p className="font-sans font-normal text-[rgba(237,225,212,0.75)] text-[12px] xl:text-[15px] tracking-[-0.36px] leading-[1.7] mb-1 xl:mb-2">
          {badge}
        </p>
        <p className="font-sans font-semibold text-[#ede1d4] text-[17px] xl:text-[22px] tracking-[-0.51px] xl:tracking-[-0.66px] leading-[1.35]">
          {title}
        </p>
      </div>
    </article>
  );
}

// ─── CLASS CARD (명인 서비스) ─────────────────────────────────────────────────
function ClassCard({
  img,
  alt,
  title,
  desc,
}: {
  img: string;
  alt: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="relative overflow-clip flex-shrink-0 w-[268px] md:w-[302px] xl:w-[411px] h-[420px] xl:h-[520px] flex flex-col justify-between p-5 xl:p-7 group">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <img
          alt={alt}
          className="absolute object-cover size-full group-hover:scale-[1.02] transition-transform duration-700"
          src={img}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[38%] from-transparent to-[rgba(43,37,31,0.92)] to-[92%]" />
      </div>
      <div className="relative flex justify-end">
        <button className="flex items-center gap-1 font-sans font-semibold text-[#ede1d4] text-[12px] xl:text-[15px] tracking-[-0.36px] hover:opacity-60 transition-opacity">
          예약하기 <ChevronRight size={12} />
        </button>
      </div>
      <div className="relative flex flex-col gap-3 xl:gap-4">
        <p className="font-sans font-semibold text-[#ede1d4] text-[17px] xl:text-[22px] tracking-[-0.51px] xl:tracking-[-0.66px] leading-[1.4]">
          {title}
        </p>
        <p className="font-sans font-normal text-[rgba(237,225,212,0.8)] text-[13px] xl:text-[17px] tracking-[-0.39px] xl:tracking-[-0.51px] leading-[1.65]">
          {desc}
        </p>
      </div>
    </article>
  );
}

// ─── TRADITIONAL CULTURE CARD ─────────────────────────────────────────────────
function TradCard({
  img,
  alt,
  label,
  title,
}: {
  img: string;
  alt: string;
  label: string;
  title: string;
}) {
  return (
    <article className="relative overflow-clip flex-shrink-0 w-[234px] md:w-[270px] xl:flex-1 xl:min-w-0 h-[360px] xl:h-[440px] flex flex-col justify-end p-5 xl:p-6 group">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <img
          alt={alt}
          className="absolute object-cover size-full group-hover:scale-[1.02] transition-transform duration-700"
          src={img}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[44%] from-transparent to-[rgba(43,37,31,0.93)]" />
      </div>
      <div className="relative flex items-end justify-between w-full">
        <div>
          <p className="font-sans font-normal text-[rgba(237,225,212,0.72)] text-[12px] xl:text-[14px] tracking-[-0.36px] leading-[1.8] mb-0.5">
            {label}
          </p>
          <p className="font-sans font-semibold text-[#ede1d4] text-[15px] xl:text-[19px] tracking-[-0.45px] xl:tracking-[-0.57px] leading-[1.35]">
            {title}
          </p>
        </div>
        <button aria-label={`${title} 자세히 보기`}>
          <ChevronRight
            size={15}
            className="text-[rgba(237,225,212,0.7)]"
          />
        </button>
      </div>
    </article>
  );
}

// ─── REVIEW CARD ──────────────────────────────────────────────────────────────
function ReviewCard({
  name,
  type,
  quote,
  review,
}: {
  name: string;
  type: string;
  quote: string;
  review: string;
}) {
  return (
    <article className="bg-[#38312a] flex-shrink-0 w-[268px] md:w-[302px] xl:w-[411px] p-6 xl:p-9 flex flex-col justify-between gap-5 xl:gap-6">
      <div>
        <p className="font-sans font-medium text-[#ede1d4] text-[14px] xl:text-[18px] tracking-[-0.42px] xl:tracking-[-0.54px] leading-[1.5] mb-1">
          {name}
        </p>
        <p className="font-sans font-normal text-[#a3978a] text-[12px] xl:text-[15px] tracking-[-0.36px] xl:tracking-[-0.45px] leading-[1.5]">
          {type}
        </p>
      </div>
      <div>
        <p className="font-sans font-normal text-[#ede1d4] text-[14px] xl:text-[17px] tracking-[-0.42px] xl:tracking-[-0.51px] leading-[1.65] mb-2 xl:mb-3">
          {quote}
        </p>
        <p className="font-sans font-normal text-[rgba(237,225,212,0.7)] text-[13px] xl:text-[15px] tracking-[-0.39px] xl:tracking-[-0.45px] leading-[1.7] line-clamp-4">
          {review}
        </p>
      </div>
    </article>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  useSEO();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  const navItems = [
    { label: "고요 이야기", href: "#about" },
    { label: "한옥 찾기", href: "#quration" },
    { label: "전통 체험", href: "#class2" },
    { label: "예약하기", href: "#form" },
    { label: "게스트 후기", href: "#review" },
  ];

  return (
    <div className="bg-[#2b251f] min-h-screen w-full font-sans text-[#ede1d4] overflow-x-hidden">
      {/* ══════════════════ HEADER ══════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.07)] backdrop-blur-md border-b border-[rgba(237,225,212,0.07)]">
        <div className="flex items-center justify-between px-4 h-14 md:px-10 md:h-[60px] xl:px-[60px] xl:h-[72px]">
          <a href="/" aria-label="고요 홈으로">
            <div className="relative w-[50px] h-[18px] md:w-[65px] md:h-[24px] xl:w-[88px] xl:h-[32px]">
              <GoyoLogoDark className="absolute inset-0 w-full h-full" />
            </div>
          </a>

          {/* Desktop full nav */}
          <nav
            className="hidden xl:flex items-center gap-10"
            aria-label="주요 메뉴"
          >
            <ul className="flex items-center gap-8 font-normal text-[#4e4336] text-[18px] tracking-[-0.54px]">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:opacity-55 transition-opacity"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5 ml-2">
              <button
                className="flex items-center gap-1 text-[#4e4336] text-[15px] tracking-[-0.45px] hover:opacity-55 transition-opacity"
                aria-label="언어 선택"
              >
                KO <ChevronDown size={12} />
              </button>
              <button className="bg-[#4e4336] text-[#ede1d4] text-[14px] tracking-[-0.42px] px-4 py-[7px] hover:bg-[#5c5143] transition-colors">
                로그인
              </button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-[#4e4336] p-1 -mr-1"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((v) => !v);
            }}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <nav
            className="xl:hidden bg-[#2b251f] border-t border-[rgba(237,225,212,0.08)] px-4 pb-5 pt-2"
            onClick={(e) => e.stopPropagation()}
            aria-label="모바일 메뉴"
          >
            <ul className="flex flex-col">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block py-3 font-sans font-normal text-[#ede1d4] text-[16px] tracking-[-0.48px] border-b border-[rgba(237,225,212,0.07)] hover:opacity-65 transition-opacity"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <button className="text-[#a3978a] text-[13px] tracking-[-0.39px]">
                KO
              </button>
              <button className="bg-[#4e4336] text-[#ede1d4] text-[13px] tracking-[-0.39px] px-4 py-1.5 hover:bg-[#5c5143] transition-colors">
                로그인
              </button>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* ══════════════════ HERO ══════════════════ */}
        <section
          id="hero"
          className="relative h-[767px] xl:h-[960px] overflow-clip"
          aria-label="메인 비주얼"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
          >
            <img
              alt="고요 한옥 전경"
              className="absolute object-cover size-full"
              src="/images/hero/hero-background.jpg"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 52%, #2b251f 100%)",
              }}
            />
          </div>

          {/* Chinese calligraphy vertical title */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[113px] xl:top-[176px]"
            aria-hidden="true"
          >
            <ChineseTitleSvg className="w-[43px] xl:w-[51px] h-auto" />
          </div>

          {/* Hero text */}
          <div className="absolute bottom-[90px] md:bottom-[110px] left-0 right-0 flex flex-col items-center text-center px-4 xl:bottom-auto xl:top-[324px] xl:right-[320px] xl:left-auto xl:items-end xl:text-right xl:w-[421px] xl:px-0">
            <p className="font-serif font-normal text-[#ede1d4] xl:text-[#4e4336] text-[18px] md:text-[22px] xl:text-[24px] tracking-[-0.54px] xl:tracking-[-0.72px] leading-[1.65] mb-2 xl:mb-1">
              <span className="xl:hidden">
                도심의 소음 너머
                <br />
                온전한 쉼이 시작되는 곳,
              </span>
              <span className="hidden xl:inline">
                도심의 소음 너머 온전한 쉼이 시작되는 곳,
              </span>
            </p>
            <p className="font-serif font-normal text-[#ede1d4] xl:text-[#4e4336] text-[48px] xl:text-[52px] leading-[1.0] tracking-[-1.44px] xl:tracking-[-1.56px]">
              고요
            </p>
          </div>
        </section>

        {/* ══════════════════ ABOUT + QURATION wrapper ══════════════════ */}
        <div className="relative">
          {/* Texture overlay for about section */}
          <div
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[520px] overflow-hidden pointer-events-none mix-blend-multiply opacity-35"
          >
            <img
              alt=""
              className="w-full h-full object-cover object-top"
              src="/images/texture/texture-about.png"
            />
          </div>

          {/* ── ABOUT ── */}
          <section
            id="about"
            className="relative px-4 pt-16 pb-14 md:px-[120px] md:pt-20 md:pb-20 xl:px-[320px] xl:pt-[160px] xl:pb-[150px]"
            aria-labelledby="about-h"
          >
            <div className="max-w-[343px] md:max-w-[750px] xl:max-w-[1280px] mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 xl:gap-0">
              <div className="shrink-0 relative w-[100px] h-[36px] md:w-[130px] md:h-[47px] xl:w-[174px] xl:h-[63px]">
                <GoyoBigLogo className="absolute inset-0 w-full h-full" />
              </div>

              <div className="flex flex-col gap-4 xl:gap-6 xl:max-w-[820px]">
                <h2
                  id="about-h"
                  className="flex items-end gap-0 text-[#ede1d4] leading-none"
                >
                  <span className="font-sans font-medium text-[18px] md:text-[21px] xl:text-[24px] tracking-[-0.54px] xl:tracking-[-0.72px]">
                    나를 위한 온전한 쉼표
                  </span>
                  <span className="font-serif font-normal text-[22px] xl:text-[28px] tracking-[-0.66px]">
                    ,
                  </span>
                </h2>
                <div className="flex flex-col gap-5 xl:gap-6 font-sans font-normal text-[14px] md:text-[16px] xl:text-[19px] text-[rgba(237,225,212,0.8)] tracking-[-0.42px] xl:tracking-[-0.57px] leading-[1.75]">
                  <p>
                    바쁘게 흘러가는 시간 속에서 우리는 종종
                    '멈춤'의 가치를 잊고 살아갑니다. 한옥의
                    정갈한 서까래와 자연이 빚어낸 풍경은
                    우리에게 가장 자연스러운 속도를
                    되찾아줍니다.
                  </p>
                  <p>
                    한옥 안에서 마주하는 명인의 정성스러운
                    손길과 깊이 있는 전통 프로그램은 단순한
                    머무름의 시간을 넘어 일상에 지친 마음에 깊은
                    울림과 영감을 채워줍니다.
                  </p>
                  <p>
                    번잡함을 비워낸 자리에 평온을 채우는 곳.
                    고요한 한옥 안에서 온전한 쉼의 여정을 시작해
                    보세요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── QURATION ── */}
          <section
            id="quration"
            className="relative px-4 pb-14 md:px-[120px] md:pb-20 xl:px-[320px] xl:pb-[140px]"
            aria-labelledby="quration-h"
          >
            <div className="max-w-[343px] md:max-w-[750px] xl:max-w-[1280px] mx-auto flex flex-col gap-6 xl:gap-10">
              <div id="quration-h">
                <SectionHeader
                  title="온전한 쉼을 위한 공간"
                  desc="정갈하고 포근한 분위기의 한옥에서 온전한 쉼을 경험해 보세요."
                />
              </div>

              {/* Cards — stacked on mobile/tablet, two-column on desktop */}
              <div className="flex flex-col xl:flex-row gap-2 md:gap-3 xl:gap-6">
                <QCard
                  img="/images/quration/hanok-teahouse.jpg"
                  alt="다도실이 있는 한옥"
                  badge="인기 한옥"
                  title="다도실이 있는 한옥"
                  large
                />
                <div className="flex flex-col gap-2 md:gap-3 xl:gap-6 xl:flex-1">
                  <QCard
                    img="/images/quration/hanok-hyushimjae.jpg"
                    alt="책과 사색이 머무는 휴심재"
                    badge="추천 한옥"
                    title="책과 사색이 머무는 휴심재"
                  />
                  <QCard
                    img="/images/quration/hanok-detached.jpg"
                    alt="넓은 마당이 있는 독채 숙소"
                    badge="대표 한옥"
                    title="넓은 마당이 있는 독채 숙소"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ══════════════════ FORM — 예약하기 ══════════════════ */}
        <section
          id="form"
          className="px-4 py-14 md:px-[120px] md:py-20 xl:px-[320px] xl:py-[140px]"
          aria-labelledby="form-h"
        >
          <div className="max-w-[343px] md:max-w-[750px] xl:max-w-[1280px] mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 xl:gap-0">
            {/* Form content */}
            <div className="flex flex-col gap-6 xl:gap-12 w-full xl:w-[555px]">
              <div className="flex flex-col gap-3 xl:gap-5">
                <h2
                  id="form-h"
                  className="font-serif font-normal text-[#ede1d4] text-[26px] md:text-[32px] xl:text-[40px] tracking-[-0.78px] xl:tracking-[-1.2px]"
                >
                  머무름 예약
                </h2>
                <p className="font-sans font-normal text-[rgba(237,225,212,0.72)] text-[14px] md:text-[17px] xl:text-[21px] tracking-[-0.42px] xl:tracking-[-0.63px] leading-[1.6]">
                  복잡한 일상에서 벗어나, 한옥에서 보낼 고요한
                  하루를 골라주세요.
                </p>
              </div>

              <div className="flex flex-col gap-2 xl:gap-3">
                <button className="bg-[#38312a] h-[52px] xl:h-[64px] flex items-center justify-between px-5 xl:px-7 font-sans font-medium text-[#ede1d4] text-[14px] xl:text-[18px] tracking-[-0.42px] xl:tracking-[-0.54px] hover:bg-[#4e4336] transition-colors">
                  <span>어떤 시간을 보내고 싶으신가요?</span>
                  <ChevronDown
                    size={14}
                    className="shrink-0 opacity-60"
                  />
                </button>

                <button className="bg-[#38312a] h-[52px] xl:h-[64px] flex items-center gap-3 px-5 xl:px-7 font-sans font-medium text-[#ede1d4] text-[14px] xl:text-[18px] tracking-[-0.42px] hover:bg-[#4e4336] transition-colors">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 xl:w-6 xl:h-6 shrink-0 opacity-70"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p18868900}
                      fill="#EDE1D4"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>날짜 선택</span>
                </button>

                <button className="bg-[#38312a] h-[52px] xl:h-[64px] flex items-center gap-3 px-5 xl:px-7 font-sans font-medium text-[#ede1d4] text-[14px] xl:text-[18px] tracking-[-0.42px] hover:bg-[#4e4336] transition-colors">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 xl:w-6 xl:h-6 shrink-0 opacity-70"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p20027c00}
                      fill="#EDE1D4"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>인원 선택</span>
                </button>

                <button className="bg-[#4e4336] h-[52px] xl:h-[64px] flex items-center justify-center font-sans font-semibold text-[#ede1d4] text-[14px] xl:text-[18px] tracking-[-0.42px] xl:tracking-[-0.54px] hover:bg-[#5c5143] transition-colors">
                  검색하기
                </button>
              </div>
            </div>

            {/* Form image */}
            <div className="relative overflow-clip w-full xl:w-[628px] h-[240px] md:h-[320px] xl:h-[572px] flex-shrink-0">
              <div className="absolute inset-0 xl:left-[-202px] xl:right-0">
                <img
                  alt="한옥 내부 풍경"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/form/form-hanok.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ CLASS2 — 전통 문화 ══════════════════ */}
        <section
          id="class2"
          className="px-4 py-14 md:px-[120px] md:py-20 xl:px-[320px] xl:py-[140px]"
          aria-labelledby="class2-h"
        >
          <div className="max-w-[343px] md:max-w-[750px] xl:max-w-[1280px] mx-auto flex flex-col gap-6 xl:gap-10">
            <div id="class2-h">
              <SectionHeader
                title="전통을 마주하는 순간"
                desc="전통 문화 공간에서 한국의 미를 느껴보세요."
              />
            </div>

            <HScrollWrap>
              <TradCard
                img="/images/traditional-culture/dasik.jpg"
                alt="다식만들기 체험"
                label="달콤한 전통의 맛,"
                title="다식만들기"
              />
              <TradCard
                img="/images/traditional-culture/pottery.jpg"
                alt="도자기 공예 체험"
                label="흙으로 빚어내는 시간,"
                title="도자기 공예"
              />
              <TradCard
                img="/images/traditional-culture/hanbok.jpg"
                alt="한복과 예절 체험"
                label="옷끝에 배어나는 품격,"
                title="한복과 예절 체험"
              />
              <TradCard
                img="/images/traditional-culture/tteok.jpg"
                alt="전통 떡메치기 체험"
                label="정성을 들여 만드는 찰진 맛,"
                title="전통 떡메치기"
              />
            </HScrollWrap>
          </div>
        </section>

        {/* ══════════════════ CLASS — 찾아가는 명인 서비스 ══════════════════ */}
        <section
          id="class"
          className="px-4 py-14 md:px-[120px] md:py-20 xl:px-[320px] xl:py-[140px]"
          aria-labelledby="class-h"
        >
          <div className="max-w-[343px] md:max-w-[750px] xl:max-w-[1280px] mx-auto flex flex-col gap-6 xl:gap-10">
            <div id="class-h">
              <SectionHeader
                title="찾아가는 명인 서비스"
                desc="명인이 직접 찾아와 진행하는 전통 체험을 만나보세요."
              />
            </div>

            <HScrollWrap>
              <ClassCard
                img="/images/class/tea-ceremony.png"
                alt="다도 체험"
                title="차 한 잔의 여유, 다도 체험"
                desc="정갈한 한옥에서 명인이 직접 우려내는 차의 깊은 맛과 여유를 즐겨보세요."
              />
              <ClassCard
                img="/images/class/calligraphy.png"
                alt="서예 클래스"
                title="마음을 담는 붓끝, 서예 클래스"
                desc="묵향 가득한 공간에서 새하얀 한지에 생각을 마음껏 적어보세요."
              />
              <ClassCard
                img="/images/class/kite.png"
                alt="방패연 만들기"
                title="소원을 담는 전통 방패연 만들기"
                desc="대나무와 한지로 한국의 연을 완성하며 선조들의 지혜를 배워보세요."
              />
            </HScrollWrap>
          </div>
        </section>

        {/* ══════════════════ REVIEW ══════════════════ */}
        <section
          id="review"
          className="relative px-4 py-14 md:px-[120px] md:py-20 xl:px-[320px] xl:py-[140px]"
          aria-labelledby="review-h"
        >
          <div
            aria-hidden
            className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-multiply opacity-20"
          >
            <img
              alt=""
              className="absolute bottom-0 left-0 right-0 w-full h-[55%] object-cover object-top"
              src="/images/texture/texture-review.png"
            />
          </div>

          <div className="relative max-w-[343px] md:max-w-[750px] xl:max-w-[1280px] mx-auto flex flex-col gap-6 xl:gap-10">
            <div id="review-h">
              <SectionHeader
                title="이용객 후기"
                desc="고요를 다녀간 이들의 따뜻한 소감을 만나보세요."
              />
            </div>

            <HScrollWrap>
              <ReviewCard
                name="김OO님"
                type="한옥 이용객"
                quote='"잡생각을 비울 수 있어서 좋았어요."'
                review="요즘 머릿속이 복잡해져서 찾아왔는데 고즈넉한 공간에 앉아 혼자 조용히 시간을 보내다 보니 자연스럽게 생각 정리를 할 수 있어서 너무 좋았습니다!"
              />
              <ReviewCard
                name="한OO님"
                type="한옥 및 다도 체험 이용객"
                quote='"휴식이 필요했는데 너무 잘 쉬었어요."'
                review="최근에 피로도 많이 쌓이고 휴식이 필요했는데 한옥에서 너무 잘 쉬었어요. 복잡한 도시에서 벗어나 조용한 곳에 있으니 마음이 너무 편안해져서 다음에는 친구랑 같이 오고 싶네요."
              />
              <ReviewCard
                name="박OO님"
                type="한옥 및 도자기 공예 이용객"
                quote='"힐링되는 하루를 보낼 수 있었어요."'
                review="물레에 앉아 흙을 만지며 집중하다 보니 시간 가는 줄 몰랐습니다. 오롯이 나에게만 집중하며 쉴 수 있는 편안한 시간이었어요. 정말 다시 오고 싶습니다."
              />
            </HScrollWrap>
          </div>
        </section>
      </main>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer>
        <div className="flex items-center justify-center px-6 py-16 md:py-20 xl:pt-[200px] xl:pb-10">
          <p className="font-serif font-normal text-[#ede1d4] text-[18px] md:text-[22px] xl:text-[30px] tracking-[-0.54px] md:tracking-[-0.66px] xl:tracking-[-0.9px] text-center leading-[1.75]">
            오늘 하루, 당신의 마음에도 고요가 머물기를
          </p>
        </div>

        <div className="relative overflow-clip h-[340px] md:h-[480px] xl:h-[880px] w-full">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
          >
            <img
              alt="고요 한옥 전경"
              className="absolute object-cover size-full"
              src="/images/footer/footer-background.png"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #2b251f 28%, rgba(43,37,31,0.72) 48%, rgba(43,37,31,0.22) 68%, transparent 88%)",
              }}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-5 xl:gap-10 pb-10 md:pb-14 xl:pb-[110px] px-4">
            <div className="relative w-[50px] h-[18px] md:w-[65px] md:h-[24px] xl:w-[88px] xl:h-[32px]">
              <GoyoLogoLight className="absolute inset-0 w-full h-full" />
            </div>

            <nav aria-label="푸터 메뉴">
              <ul className="flex flex-col items-center gap-2 md:gap-3 xl:flex-row xl:gap-8">
                {[
                  "개인정보처리방침",
                  "서비스 약관",
                  "고객센터",
                ].map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="font-sans font-normal text-[rgba(237,225,212,0.75)] text-[12px] md:text-[14px] xl:text-[16px] tracking-[-0.36px] hover:text-[#ede1d4] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="font-sans font-normal not-italic text-[rgba(237,225,212,0.5)] text-[11px] md:text-[13px] xl:text-[14px] tracking-[-0.33px] xl:tracking-[-0.42px] text-center leading-[1.9] flex flex-col gap-0.5 xl:gap-1">
              <p>(08288) 서울특별시 구로구 새말로 97</p>
              <a
                href="mailto:contact@goyo.kr"
                className="hover:text-[rgba(237,225,212,0.75)] transition-colors"
              >
                contact@goyo.kr
              </a>
            </address>

            <p className="font-sans font-normal text-[rgba(237,225,212,0.35)] text-[10px] md:text-[11px] xl:text-[13px] tracking-[-0.3px]">
              © 2026 GOYO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}