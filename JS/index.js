gsap.registerPlugin(CSSRulePlugin);

const tl = gsap.timeline();

const h1Block = CSSRulePlugin.getRule(".headerText::before");
const paraBlock = CSSRulePlugin.getRule("::before");

tl.from(".blop", { duration: 1, x: 300, opacity: 0, scale: 0.5 });
tl.from(".phone", { duration: 1, y: -200, opacity: 0, scale: 0.5 }, "-=.4");
tl.to(h1Block, { duration: 1, width: "0%" }, "-=.4");
tl.to(paraBlock, { duration: 1, height: "0%" }, "-=.4");
// tl.to();
