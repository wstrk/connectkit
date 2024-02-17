"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("./styles");
const styles_2 = require("../../Common/Modal/styles");
const Button_1 = require("../../Common/Button");
const graphics_1 = require("./graphics");
const framer_motion_1 = require("framer-motion");
const Modal_1 = require("../../Common/Modal");
const useLocales_1 = require("../../../hooks/useLocales");
const FitText_1 = require("../../Common/FitText");
const ConnectKit_1 = require("../../ConnectKit");
const About = () => {
    const locales = (0, useLocales_1.default)({});
    const context = (0, ConnectKit_1.useContext)();
    const ctaUrl = context.options?.ethereumOnboardingUrl ?? locales.aboutScreen_ctaUrl;
    const [ready, setReady] = (0, react_1.useState)(true);
    const [slider, setSlider] = (0, react_1.useState)(0);
    const interacted = (0, react_1.useRef)(false);
    const scrollPos = (0, react_1.useRef)(0);
    const animationEase = [0.16, 1, 0.3, 1];
    const animationDuration = 600;
    const autoplayDelay = 5100;
    let interval;
    (0, react_1.useEffect)(() => {
        return () => clearInterval(interval);
    }, []);
    const isSwipe = () => {
        if (sliderRef.current) {
            const { overflow } = getComputedStyle(sliderRef.current);
            return overflow !== 'visible';
        }
        return false;
    };
    const gotoSlide = (index) => {
        setReady(false);
        if (isSwipe()) {
            scrollToSlide(index);
        }
        else {
            setSlider(index);
        }
    };
    const nextSlide = () => {
        if (interacted.current)
            return;
        setSlider((prevSlider) => {
            const index = (prevSlider + 1) % slides.length;
            scrollToSlide(index);
            return index;
        });
        interval = setTimeout(nextSlide, autoplayDelay);
    };
    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            const { offsetWidth: width } = sliderRef.current;
            sliderRef.current.scrollLeft = width * index;
            setTimeout(() => setSlider(index), 100);
        }
    };
    const onScroll = () => {
        if (!sliderRef.current)
            return;
        const { offsetWidth: width, scrollLeft: x } = sliderRef.current;
        const prevScroll = scrollPos.current;
        scrollPos.current = x;
        const threshold = 4;
        if (prevScroll - x > -threshold && prevScroll - x < threshold) {
            const currentSlide = Math.round(x / width);
            setSlider(currentSlide);
        }
    };
    const onTouchMove = () => {
        didInteract();
    };
    const onTouchEnd = () => {
        const { offsetWidth: width, scrollLeft: x } = sliderRef.current;
        const currentSlide = Math.round(x / width);
        setSlider(currentSlide);
    };
    const didInteract = () => {
        interacted.current = true;
        clearTimeout(interval);
    };
    const sliderRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!sliderRef.current)
            return;
        sliderRef.current.addEventListener('scroll', onScroll);
        sliderRef.current.addEventListener('touchmove', onTouchMove);
        sliderRef.current.addEventListener('touchend', onTouchEnd);
        return () => {
            if (!sliderRef.current)
                return;
            sliderRef.current.removeEventListener('scroll', onScroll);
            sliderRef.current.removeEventListener('touchmove', onTouchMove);
            sliderRef.current.removeEventListener('touchend', onTouchEnd);
        };
    }, [sliderRef]);
    const graphics = [
        <graphics_1.SlideOne layoutId={'graphicCircle'} duration={animationDuration} ease={animationEase}/>,
        <graphics_1.SlideTwo layoutId={'graphicCircle'} duration={animationDuration} ease={animationEase}/>,
        <graphics_1.SlideThree layoutId={'graphicCircle'} duration={animationDuration} ease={animationEase}/>,
    ];
    const mobileGraphics = [
        <graphics_1.SlideOne duration={animationDuration} ease={animationEase}/>,
        <graphics_1.SlideTwo duration={animationDuration} ease={animationEase}/>,
        <graphics_1.SlideThree duration={animationDuration} ease={animationEase}/>,
    ];
    const slideHeight = (() => {
        switch (context.options?.language) {
            case 'en-US':
            case 'zh-CN':
                return 64;
            default:
                return 84;
        }
    })();
    const slides = [
        <>
      <styles_2.ModalH1 style={{ height: 24 }} $small>
        <FitText_1.default>{locales.aboutScreen_a_h1}</FitText_1.default>
      </styles_2.ModalH1>
      <styles_2.ModalBody style={{ height: slideHeight }}>
        <FitText_1.default>{locales.aboutScreen_a_p}</FitText_1.default>
      </styles_2.ModalBody>
    </>,
        <>
      <styles_2.ModalH1 style={{ height: 24 }} $small>
        <FitText_1.default>{locales.aboutScreen_b_h1}</FitText_1.default>
      </styles_2.ModalH1>
      <styles_2.ModalBody style={{ height: slideHeight }}>
        <FitText_1.default>{locales.aboutScreen_b_p}</FitText_1.default>
      </styles_2.ModalBody>
    </>,
        <>
      <styles_2.ModalH1 style={{ height: 24 }} $small>
        <FitText_1.default>{locales.aboutScreen_c_h1}</FitText_1.default>
      </styles_2.ModalH1>
      <styles_2.ModalBody style={{ height: slideHeight }}>
        <FitText_1.default>{locales.aboutScreen_c_p}</FitText_1.default>
      </styles_2.ModalBody>
    </>,
    ];
    return (<styles_2.PageContent>
      <styles_1.Slider>
        <styles_1.ImageContainer>
          <framer_motion_1.MotionConfig transition={{
            duration: animationDuration / 1000,
            ease: animationEase,
        }}>
            <framer_motion_1.AnimatePresence initial={false} onExitComplete={() => setReady(true)}>
              {graphics.map((g, i) => slider === i && (<styles_1.ImageContainerInner key={i} style={{ position: 'absolute' }}>
                      {g}
                    </styles_1.ImageContainerInner>))}
            </framer_motion_1.AnimatePresence>
          </framer_motion_1.MotionConfig>
        </styles_1.ImageContainer>
        <styles_1.Slides ref={sliderRef}>
          <framer_motion_1.AnimatePresence>
            {slides.map((s, i) => (<styles_1.Slide key={i} $active={slider === i}>
                <styles_1.MobileImageContainer>
                  <framer_motion_1.MotionConfig transition={{
                duration: 0,
            }}>
                    <styles_1.ImageContainerInner>
                      {mobileGraphics[i]}
                    </styles_1.ImageContainerInner>
                  </framer_motion_1.MotionConfig>
                </styles_1.MobileImageContainer>
                <styles_2.ModalContent style={{ gap: 8, paddingBottom: 0 }}>
                  {s}
                </styles_2.ModalContent>
              </styles_1.Slide>))}
          </framer_motion_1.AnimatePresence>
        </styles_1.Slides>
      </styles_1.Slider>
      <Modal_1.OrDivider>
        <styles_1.Dots>
          {slides.map((s, i) => (<styles_1.Dot key={i} $active={slider === i} onClick={() => {
                didInteract();
                gotoSlide(i);
            }}/>))}
        </styles_1.Dots>
      </Modal_1.OrDivider>
      <Button_1.default href={ctaUrl} arrow>
        {locales.aboutScreen_ctaText}
      </Button_1.default>
    </styles_2.PageContent>);
};
exports.default = About;
//# sourceMappingURL=index.js.map