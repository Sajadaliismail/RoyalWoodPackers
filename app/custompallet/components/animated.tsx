import React, {  useRef, } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedLogo = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: 0 });
    if (svgRef.current) {
      tl.fromTo(
        svgRef.current?.querySelector(".svg8"),
        {
          x: 5000,
          opacity: 0,
        },
        { x: 0, opacity: 1, ease: "elastic.out", duration: 0.2 }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg9"),
        {
          x: 5000,
          opacity: 0,
        },
        { x: 0, opacity: 1, ease: "elastic.out", duration: 0.2 }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg10"),
        {
          x: 5000,
          opacity: 0,
        },
        { x: 0, opacity: 1, ease: "elastic.out", duration: 0.2 }
      );

      tl.fromTo(
        svgRef.current?.querySelectorAll(".svg7,.svg5"),
        {   
            opacity: 0,
            rotate: -180,
          },
          {
            x: 0,
            opacity: 1,
            ease: "back.out",
            duration: 0.3,
            rotate: 0,
          }
      );

      tl.fromTo(
        svgRef.current?.querySelectorAll(".svg6, .svg4"),
        {
          opacity: 0,
          rotate: 50,
        },
        {
          x: 0,
          opacity: 1,
          ease: "back.out",
          duration: 0.3,
          rotate: 0,
        }
      );

      gsap.fromTo(
        svgRef.current?.querySelector(".svg2"),
        { x: -5500, y: 5000, opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: "power3", duration: .9 }
      );
      gsap.fromTo(
        svgRef.current?.querySelector(".svg3"),
        {
          x: 2000,
          y: 2000,
          opacity: 0,
        },
        { x: 0, y: 0, opacity: 1, ease: "power3.out", duration: .9 }
      );

      gsap.fromTo(
        svgRef.current?.querySelector(".svg1"),
        {
          x: 200,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1.5, ease: "power4.inOut" }
      );
    }
  });

  return (
    <div>
      <svg
        ref={svgRef}
        width={350}
        height={101.2108383178711}
        viewBox="0 0 350 101.21084"
        className="looka-1j8o68f"
        id="svg21100"
      >
        <defs
     id="SvgjsDefs8860">
    <linearGradient
       id="SvgjsLinearGradient8865">
      <stop
         id="SvgjsStop8866"
         stop-color="#7d141d"
         offset="0" />
      <stop
         id="SvgjsStop8867"
         stop-color="#ff1e27"
         offset="1" />
    </linearGradient>
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23399"
       gradientTransform="scale(0.92127026,1.0854578)"
       x1="178.25174"
       y1="1.2949558"
       x2="212.51202"
       y2="1.2949558"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23401"
       gradientTransform="scale(0.72231135,1.3844445)"
       x1="168.8373"
       y1="7.1099997"
       x2="189.60397"
       y2="7.1099997"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23403"
       gradientTransform="scale(0.74535719,1.3416386)"
       x1="183.84595"
       y1="0.98961073"
       x2="211.62244"
       y2="0.98961073"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23405"
       gradientTransform="scale(1.2271845,0.8148734)"
       x1="69.455475"
       y1="23.296869"
       x2="93.519829"
       y2="23.296869"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23407"
       gradientTransform="scale(1.2080858,0.82775578)"
       x1="70.553185"
       y1="1.6985686"
       x2="94.997955"
       y2="1.6985686"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23409"
       gradientTransform="scale(1.2271845,0.81487339)"
       x1="36.860558"
       y1="23.296871"
       x2="60.924911"
       y2="23.296871"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23411"
       gradientTransform="scale(1.2080858,0.82775578)"
       x1="37.442951"
       y1="1.6985686"
       x2="61.887726"
       y2="1.6985686"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23413"
       gradientTransform="scale(2.0688065,0.48337048)"
       x1="2.9455631"
       y1="34.91111"
       x2="15.067528"
       y2="34.91111"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23415"
       gradientTransform="scale(2.1612472,0.4626958)"
       x1="2.8195758"
       y1="70.578117"
       x2="15.651981"
       y2="70.578117"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23417"
       gradientTransform="scale(2.1643232,0.46203821)"
       x1="2.8155684"
       y1="3.0430384"
       x2="15.666237"
       y2="3.0430384"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlinkHref="#SvgjsLinearGradient8865"
       id="linearGradient23419"
       gradientTransform="scale(2.2561222,0.4432384)"
       x1="2.7010062"
       y1="2.9954536"
       x2="86.777657"
       y2="2.9954536"
       gradientUnits="userSpaceOnUse" />
  </defs>
        <g
          id="SvgjsG8701"
          transform="matrix(1.8451429,0,0,1.8451429,-11.243931,-2.4497991)"
          fill="#c91019"
        >
          <path
            d="m 6.0938,1.406 h 27.813 V 7.3435 H 6.0938 Z"
            id="path21094"
            className="svg10"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 6.0938,32.6562 h 27.734 v 5.9375 H 6.0938 Z"
            id="path21967"
            className="svg9"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 6.0938,16.875 h 25.078 v 5.8594 H 6.0938 Z"
            id="path21969"
            className="svg8"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 64.922,1.406 c -2.8646,0 -5.5209,0.4686 -7.9688,1.4061 -2.3959,0.9375 -4.4792,2.2396 -6.2501,3.9063 -1.7188,1.5625 -3.0729,3.5416 -4.0625,5.9375 -0.83336,2.0313 -1.3021,4.2448 -1.4063,6.6406 v 2.3438 h 6.875 v -2.3438 c 0.10414,-1.7709 0.39063,-3.2031 0.85938,-4.2969 0.625,-1.5104 1.4844,-2.8645 2.5781,-4.0624 1.3021,-1.1979 2.6563,-2.0833 4.0625,-2.6562 1.6146,-0.625 3.3855,-0.9375 5.3126,-0.9375 h 9.8438 V 1.406 h -9.8438 z"
            id="path21971"
            className="svg7"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 67.891,18.984 7.6e-5,1.4843 h 0.07813 c -0.10414,1.6666 -0.41664,3.2031 -0.9375,4.6094 -0.67711,1.6146 -1.5365,2.9427 -2.5781,3.9844 -1.1459,1.1459 -2.5,2.0313 -4.0625,2.6563 -1.6146,0.625 -3.3855,0.9375 -5.3126,0.9375 h -9.8438 v 5.9375 h 9.8438 c 2.8646,0 5.5209,-0.46875 7.9688,-1.4063 2.3959,-0.9375 4.4792,-2.2396 6.2501,-3.9063 1.8229,-1.8229 3.177,-3.802 4.0624,-5.9374 0.9375,-2.0834 1.4063,-4.375 1.4063,-6.875 V 18.984 h -6.875 z"
            id="path21973"
            className="svg6"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 104.922,1.406 c -2.8646,0 -5.5209,0.4686 -7.9688,1.4061 -2.3959,0.9375 -4.4792,2.2396 -6.2501,3.9063 -1.7188,1.5625 -3.0729,3.5416 -4.0625,5.9375 -0.83336,2.0313 -1.3021,4.2448 -1.4063,6.6406 v 2.3438 h 6.875 v -2.3438 c 0.10414,-1.7709 0.39063,-3.2031 0.85938,-4.2969 0.625,-1.5104 1.4844,-2.8645 2.5781,-4.0624 1.3021,-1.1979 2.6563,-2.0833 4.0625,-2.6562 1.6146,-0.625 3.3855,-0.9375 5.3126,-0.9375 h 9.8438 V 1.406 h -9.8438 z"
            id="path21975"
            className="svg5"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 107.891,18.984 8e-5,1.4843 h 0.0781 c -0.10414,1.6666 -0.41664,3.2031 -0.9375,4.6094 -0.67711,1.6146 -1.5365,2.9427 -2.5781,3.9844 -1.1459,1.1459 -2.5,2.0313 -4.0625,2.6563 -1.614599,0.625 -3.385499,0.9375 -5.312599,0.9375 h -9.8438 v 5.9375 h 9.8438 c 2.8646,0 5.520899,-0.46875 7.968799,-1.4063 2.3959,-0.9375 4.4792,-2.2396 6.2501,-3.9063 1.8229,-1.8229 3.177,-3.802 4.0624,-5.9374 0.9375,-2.0834 1.4063,-4.375 1.4063,-6.875 V 18.984 h -6.875 z"
            id="path21977"
            className="svg4"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 150.703,38.5937 h 7.0313 l -13.594,-37.266 h -7.1094 l 7.8906,22.266 z"
            id="path21979"
            className="svg3"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 121.9531,38.5937 h 6.875 l 8.125,-19.844 -3.3594,-8.9063 z"
            id="path21981"
            className="svg2"
            fill="url(#SvgjsLinearGradient8865)"

          />
          <path
            d="m 195.781,38.5937 -10.078,-14.063 c 1.3541,-0.41664 2.552,-0.91141 3.5937,-1.4843 1.1459,-0.72914 2.0834,-1.5364 2.8125,-2.4218 0.83336,-0.98961 1.4323,-2.0573 1.797,-3.2032 0.46875,-1.25 0.70313,-2.6563 0.70313,-4.2188 0,-1.8229 -0.3125,-3.4635 -0.9375,-4.9219 -0.625,-1.4063 -1.5365,-2.6302 -2.7344,-3.6719 -1.1459,-0.98961 -2.6042,-1.7709 -4.3751,-2.3438 -1.8229,-0.57289 -3.75,-0.85938 -5.7813,-0.85938 h -16.563 v 5.9375 h 16.016 c 2.4479,0 4.3489,0.52086 5.703,1.5625 1.3541,1.04164 2.0313,2.6041 2.0313,4.6875 0,1.9271 -0.67711,3.4375 -2.0313,4.5313 -1.3541,1.1459 -3.2291,1.7188 -5.625,1.7188 h -16.094 v 18.75 h 6.4844 v -12.969 h 8.2031 l 9.1406,12.969 h 7.7344 v 0 z"
            id="path21983"
            className="svg1"
            fill="url(#SvgjsLinearGradient8865)"
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
