import { BulletsProp } from "../../types/types";

// Handle Click Event When Swip From Image To Image ( Make It Active & Unactive The Last One )
export function setActiveBullets({index , setActiveIndex, swiperRef}: BulletsProp): void {
    setActiveIndex(index);
    if (swiperRef.current) swiperRef.current.slideTo(index, 1200);
}