import React, { useState, useRef, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PopularItem from "../../components/popular/PopularItem";

const Popular = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const [i, setI] = useState<number>(0);
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const [slides, setSlides] = useState<NodeListOf<Element>>();
  useEffect(() => {
    setSlides(getSlides(".popular__item"));
  }, []);
  const NextSlide = () => {
    const check = slides && slides[arr.length - 1].getAttribute("data-tab");
    if (check) {
      const slidesActive = getSlides(".popular__item-active");
      const slidesHidden = getSlides(".popular__item-hidden");
      if (slidesActive[4].getAttribute("data-tab") != check) {
        changeItem(slidesHidden[i]);
        changeItem(slidesActive[0]);
        setI(i + 1);
      }
    }
  };
  const prevSlide = () => {
    const check = slides && slides[0].getAttribute("data-tab");
    if (check && i != 0) {
      const slidesActive = getSlides(".popular__item-active");
      const slidesHidden = getSlides(".popular__item-hidden");
      if (slidesActive[i - 1].getAttribute("data-tab") != check) {
        changeItem(slidesHidden[i - 1]);
        changeItem(slidesActive[4]);
        setI(i - 1);
      }
    }
  };
  const getSlides = (name: string): NodeListOf<Element> => {
    return document.querySelectorAll(`${name}`);
  };

  const changeItem = (slide: Element) => {
    slide.classList.toggle("popular__item-active");
    slide.classList.toggle("popular__item-hidden");
  };

  return (
    <section className="popular">
      <h3 className="popular__title">Popular items</h3>
      <div className="popular__body">
        <div className="popular__button next" onClick={prevSlide}>
          <ArrowBackIosIcon />
        </div>
        <div className="popular__content">
          <PopularItem type="order-1" name="active" data_tab="0" />
          <PopularItem type="order-2" name="active" data_tab="1" />
          <PopularItem type="order-3" name="active" data_tab="2" />
          <PopularItem type="order-4" name="active" data_tab="3" />
          <PopularItem type="order-5" name="active" data_tab="4" />
          <PopularItem type="order-3" name="hidden" data_tab="5" />
          <PopularItem type="order-2" name="hidden" data_tab="6" />
        </div>

        <div className="popular__button prev" onClick={NextSlide}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </section>
  );
};

export default Popular;
