import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Logo = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: 0 });
    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current,
        {
          x: 20,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 3 }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg1"),
        {
          x: 7000,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.3, ease: "elastic.inOut" }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg5"),
        {
          x: 7000,
          opacity: 0,
        },
        { x: -4400, opacity: 1, ease: "power4.inOut", duration: 0.15 }
      );

      tl.fromTo(
        svgRef.current?.querySelector(".svg7"),
        { x: 5000, y: -5000, opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: "power3", duration: 0.15 }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg2"),
        { x: 5500, y: -5000, opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: "power3", duration: 0.15 }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg3"),
        {
          x: 6000,
          y: -5000,
          opacity: 0,
        },
        { x: 0, y: 0, opacity: 1, ease: "power3", duration: 0.15 }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg4"),
        {
          // x: 10000,

          opacity: 0,
          rotate: 30,
        },
        {
          x: 2800,
          opacity: 1,
          ease: "elastic.inOut",
          duration: 0.4,
          rotate: 0,
        }
      );
      tl.fromTo(
        svgRef.current?.querySelector(".svg6"),
        {
          x: 10000,
          opacity: 0,
        },
        { x: 0, opacity: 1, ease: "elastic.inOut", duration: 0.3 }
      );
    }
  });
  return (
    <svg
      ref={svgRef}
      version="1.0"
      className="svgLogo md:w-60 md:h-fit h-24 md:mx-0 mx-auto"
      viewBox="0 0 3264 1800"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="matrix(0.1,0,0,-0.1,0,1836)" fill="#000000" stroke="none">
        <path
          className="svg1  fill-slate-200 "
          // className="svg-elem-1"
          d="M 1020.8554,9034.0925 V 1184.6458 H 2729.2738 4444.0904 V 7380.062 c 0,4371.823 -12.7968,6163.422 0,6235.407 17.5966,99.177 36.7923,100.777 100.7776,124.772 666.9118,229.193 1105.991,239.154 1812.3951,-207.953 28.8359,11.09 7.9982,63.985 -102.3768,262.34 l -1194.9328,2154.719 -531.0818,935.791 H 1020.8554 Z"
        />
        <path
          className="svg2  fill-sky-700"
          //   className="svg-elem-2"
          d="M 20166.547,1184.6458 11642.051,16885.138 h 3327.256 L 20166.547,1184.6458 21807.78,4561.4916 14969.307,16885.138"
        />
        <path
          className="svg3 fill-sky-700"
          //   className="svg-elem-3"
          d="m 16890.235,16885.138 5960.269,-10771.993 1511.662,3405.6393 -4117.48,7366.3537 z"
        />
        <path
          className="svg4   fill-slate-200"
          //   className="svg-elem-4"
          d="m 19353,14930 1981,-3614 59,1593 c 7,6 45,18 83,28 1260.068,295.228 2440.525,-1239.159 1651,-2445 -236.592,-340.224 -531.86,-541.7707 -884,-657 L 22133.336,9800.2203 23104,8201 c 30,-12 76,7 306,122 863.055,478.9848 1529.995,1032.5491 1929,1905 367.291,849.231 331.547,1771.615 -72,2572 -533.769,1076.473 -1726.127,1693.955 -2664.5,2089 -48.461,23.081 -95.626,41 -146.75,41 H 20929 Z"
          transform="matrix(1.5996427,0,0,1.5996427,-8793.6244,-6997.5266)"
        />
        <path
          className="svg5   fill-slate-200"
          //   className="svg-elem-5"
          d="m 9690,9783 863,-1508 1292,-2230 549.311,-930 H 12419 l 1111,-1 1106,1 -1892,3505 -1394,2510 c -55,101 -96,160 -109,160 -205.831,-951.927 -617.092,-1312.1673 -1551,-1507 z"
          id="path1977"
          transform="matrix(1.5996427,0,0,1.5996427,-10240.63,-6997.5266)"
        />
        <path
          className="svg6   fill-slate-200"
          //   className="svg-elem-6"
          d="m 22164.26,1184.6458 h 3124.103 l -7.999,6518.544 z"
        />
        <path
          className="svg7 fill-sky-700"
          //   className="svg-elem-7"
          d="M 10884.725,8712.6927 C 8656.5307,12818.112 6746.831,16336.403 6640.9508,16531.115 l -192.5075,354.023 H 8084.7877 9721.134 l 3250.242,-5857.374 c 1787.631,-3221.5565 3324.715,-5993.6573 3415.738,-6160.2256 l 165.496,-302.8508 -802.17,-1652.9331 c -441.194,-909.1138 -804.932,-1655.3026 -808.307,-1658.1977 -3.377,-2.8961 -1829.209,3353.7154 -4057.408,7459.1359 z"
          id="path351"
        />
      </g>
    </svg>
  );
};

export default Logo;
