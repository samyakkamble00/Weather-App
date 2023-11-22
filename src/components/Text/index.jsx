import React from "react";

const sizeClasses = {
  txtInterRegular2362: "font-inter font-normal",
  txtInterRegular1395: "font-inter font-normal",
  txtInterRegular1383Gray900: "font-inter font-normal",
  txtInterExtraBold2362: "font-extrabold font-inter",
  txtInterRegular143DeeppurpleA200: "font-inter font-normal",
  txtInterMedium143: "font-inter font-medium",
  txtInterExtraBold3696: "font-extrabold font-inter",
  txtInterExtraBold1969Deeporange600: "font-extrabold font-inter",
  txtInterMedium1607Gray900: "font-inter font-medium",
  txtInterMedium1554: "font-inter font-medium",
  txtInterRegular162Gray900: "font-inter font-normal",
  txtInterRegular1418DeeppurpleA200: "font-inter font-normal",
  txtInterExtraBold56: "font-extrabold font-inter",
  txtInterSemiBold1418: "font-inter font-semibold",
  txtInterBold4481: "font-bold font-inter",
  txtInterRegular2006: "font-inter font-normal",
  txtInterRegular1554: "font-inter font-normal",
  txtInterRegular1036: "font-inter font-normal",
  txtInterRegular1383: "font-inter font-normal",
  txtInterSemiBold1395: "font-inter font-semibold",
  txtInterExtraBold3188: "font-extrabold font-inter",
  txtInterExtraBold20WhiteA700: "font-extrabold font-inter",
  txtInterRegular166: "font-inter font-normal",
  txtInterRegular166Black900: "font-inter font-normal",
  txtInterExtraBold48: "font-extrabold font-inter",
  txtInterExtraBold1969: "font-extrabold font-inter",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterExtraBold2381: "font-extrabold font-inter",
  txtInterRegular1371: "font-inter font-normal",
  txtInterBold3656: "font-bold font-inter",
  txtInterMedium1461: "font-inter font-medium",
  txtInterBold3812: "font-bold font-inter",
  txtInterExtraBold4725: "font-extrabold font-inter",
  txtInterRegular1371Gray900: "font-inter font-normal",
  txtInterRegular1938: "font-inter font-normal",
  txtInterRegular1488DeeppurpleA200: "font-inter font-normal",
  txtInterExtraBold2306: "font-extrabold font-inter",
  txtInterMedium1453: "font-inter font-medium",
  txtInterExtraBold377: "font-extrabold font-inter",
  txtInterRegular1418: "font-inter font-normal",
  txtInterRegular1138: "font-inter font-normal",
  txtInterRegular1465Black900: "font-inter font-normal",
  txtInterSemiBold1554: "font-inter font-semibold",
  txtInterRegular1254: "font-inter font-normal",
  txtInterRegular1647Black900: "font-inter font-normal",
  txtInterRegular1441Bluegray400: "font-inter font-normal",
  txtInterRegular1441Black900: "font-inter font-normal",
  txtInterBold1906: "font-bold font-inter",
  txtInterRegular1465DeeppurpleA200: "font-inter font-normal",
  txtInterRegular1383DeeppurpleA200: "font-inter font-normal",
  txtInterRegular1406Gray600: "font-inter font-normal",
  txtInterMedium1567: "font-inter font-medium",
  txtInterSemiBold1607: "font-inter font-semibold",
  txtInterRegular1406: "font-inter font-normal",
  txtInterRegular1647: "font-inter font-normal",
  txtInterMedium1441: "font-inter font-medium",
  txtInterRegular1525: "font-inter font-normal",
  txtInterSemiBold1567: "font-inter font-semibold",
  txtInterMedium1607: "font-inter font-medium",
  txtInterMedium1448: "font-inter font-medium",
  txtInterRegular1488: "font-inter font-normal",
  txtInterRegular1594: "font-inter font-normal",
  txtInterRegular1198: "font-inter font-normal",
  txtInterRegular1077: "font-inter font-normal",
  txtInterRegular1477DeeppurpleA200: "font-inter font-normal",
  txtInterExtraBold4744: "font-extrabold font-inter",
  txtInterSemiBold158: "font-inter font-semibold",
  txtInterBold3112: "font-bold font-inter",
  txtInterBold1453: "font-bold font-inter",
  txtInterExtraBold2325: "font-extrabold font-inter",
  txtInterExtraBold3138: "font-extrabold font-inter",
  txtInterMedium1634: "font-inter font-medium",
  txtInterRegular1607Gray900: "font-inter font-normal",
  txtInterRegular1395Gray600: "font-inter font-normal",
  txtInterMedium1594: "font-inter font-medium",
  txtInterRegular2325: "font-inter font-normal",
  txtInterRegular1117: "font-inter font-normal",
  txtInterRegular1359: "font-inter font-normal",
  txtInterRegular1634: "font-inter font-normal",
  txtInterRegular15Black900: "font-inter font-normal",
  txtInterSemiBold2269: "font-inter font-semibold",
  txtInterRegular1477: "font-inter font-normal",
  txtInterRegular3088: "font-inter font-normal",
  txtInterBold1969: "font-bold font-inter",
  txtInterSemiBold1594: "font-inter font-semibold",
  txtInterRegular1594Gray900: "font-inter font-normal",
  txtInterRegular1418Gray600: "font-inter font-normal",
  txtInterBold1687: "font-bold font-inter",
  txtInterRegular1453Gray600: "font-inter font-normal",
  txtInterBold3188: "font-bold font-inter",
  txtInterRegular1453DeeppurpleA200: "font-inter font-normal",
  txtInterRegular1229: "font-inter font-normal",
  txtInterSemiBold2559: "font-inter font-semibold",
  txtInterRegular1588: "font-inter font-normal",
  txtInterRegular1359Gray600: "font-inter font-normal",
  txtInterRegular1348: "font-inter font-normal",
  txtInterSemiBold1406Gray900: "font-inter font-semibold",
  txtInterRegular1465: "font-inter font-normal",
  txtInterMedium162: "font-inter font-medium",
  txtInterMedium1383: "font-inter font-medium",
  txtInterRegular158: "font-inter font-normal",
  txtInterRegular1634Black900: "font-inter font-normal",
  txtInterBold3578: "font-bold font-inter",
  txtInterExtraBold2344: "font-extrabold font-inter",
  txtInterExtraBold3399: "font-extrabold font-inter",
  txtInterBold1953: "font-bold font-inter",
  txtInterRegular155: "font-inter font-normal",
  txtInterExtraBold3711: "font-extrabold font-inter",
  txtInterRegular1477Bluegray400: "font-inter font-normal",
  txtInterRegular162: "font-inter font-normal",
  txtInterRegular162Orange800: "font-inter font-normal",
  txtInterRegular1219: "font-inter font-normal",
  txtInterExtraBold331: "font-extrabold font-inter",
  txtInterSemiBold1514: "font-inter font-semibold",
  txtInterSemiBold2603: "font-inter font-semibold",
  txtInterRegular2325Black900: "font-inter font-normal",
  txtInterRegular15DeeppurpleA200: "font-inter font-normal",
  txtInterRegular1453: "font-inter font-normal",
  txtInterRegular1647DeeppurpleA200: "font-inter font-normal",
  txtInterRegular1441DeeppurpleA200: "font-inter font-normal",
  txtInterMedium1418: "font-inter font-medium",
  txtInterRegular1575: "font-inter font-normal",
  txtInterRegular1441Gray600: "font-inter font-normal",
  txtInterSemiBold1371: "font-inter font-semibold",
  txtInterSemiBold13: "font-inter font-semibold",
  txtInterRegular143: "font-inter font-normal",
  txtInterSemiBold17: "font-inter font-semibold",
  txtInterExtraBold3607: "font-extrabold font-inter",
  txtInterRegular1607: "font-inter font-normal",
  txtInterBold3562: "font-bold font-inter",
  txtInterSemiBold1406: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular1209: "font-inter font-normal",
  txtInterSemiBold1922: "font-inter font-semibold",
  txtInterRegular1567: "font-inter font-normal",
  txtInterExtraBold20: "font-extrabold font-inter",
  txtInterRegular1687: "font-inter font-normal",
  txtInterMedium158: "font-inter font-medium",
  txtInterMedium1406: "font-inter font-medium",
  txtInterMedium1527: "font-inter font-medium",
  txtInterRegular1441: "font-inter font-normal",
  txtInterRegular1562: "font-inter font-normal",
  txtInterRegular1168: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
