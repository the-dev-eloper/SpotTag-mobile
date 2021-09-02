const Color = require("color")

const primary = Color('#006CDB');
const secondary = Color("#00c497");
const sidebar = Color("#FFFFFF");
const dark = Color("rgba(0,0,0,0.8)");
const light = Color("rgba(255,255,255,0.8)");

const navBarFontSize = 20

module.exports = {
	brandPrimary: primary,
	brandSecondary: secondary,
	brandSidebar: sidebar,
	dark: dark,
	light: light,

  	navBarFontSize: navBarFontSize,
  	navBarFontColor: Color('#FFFFFF'),
	
  	alertFontColor: Color('#000000'),
  	alertSuccessBgColor: Color('#C5E1A5'),
  	alertWarningBgColor: Color('#FFF59D'),
  	alertErrorBgColor: Color('#EF9A9A'),

	menuModalBgColor: primary,

	blue: Color('#1976D2'),
}