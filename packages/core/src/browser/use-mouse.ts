import {createSignal} from "solid-js";
import {useEventListener} from "./use-event-listener";
import {useAtom} from "../logical/use-atom";

export type UseMouseOptions = {
  /**
   * @default "page"
   * */
  type: 'page' | 'client',
  /**
   * @default true
   * */
  touch: boolean
}

export const useMouse = (options: Partial<UseMouseOptions> = {}) => {
  const {type = 'page', touch = true} = options;
  const passive = {passive: true};

  const [sourceType, setSourceType] = createSignal<string | null>(null);
  const [x, setX] = createSignal<number | null>(null);
  const [y, setY] = createSignal<number | null>(null);
  const [isTouching, setIsTouching] = createSignal<boolean | null>(null);

  const setCoordinates = (xCord: number, yCord: number) => {
    setX(xCord)
    setY(yCord)
  }

  const touchHandler = (event: TouchEvent) => {
    if (event.touches.length > 0) {
      const touch = event.touches[0]
      if (type === 'page') {
        setCoordinates(touch.pageX, touch.pageY);
      } else if (type === 'client') {
        setCoordinates(touch.clientX, touch.clientY);
      }
      setIsTouching(true)
      setSourceType('touch')
    }
  }

  const mouseHandler = (event: MouseEvent) => {
    if (type === 'page') {
      setCoordinates(event.pageX, event.pageY);
    } else if (type === 'client') {
      setCoordinates(event.clientX, event.clientY);
    }
    setSourceType('mouse');
  }

  const resetTouch = () => setIsTouching(false);

  useEventListener('mousemove', mouseHandler, passive)
  useEventListener('dragover', mouseHandler, passive)

  if (touch) {
    useEventListener('touchstart', touchHandler, passive)
    useEventListener('touchmove', touchHandler, passive)
    useEventListener('touchend', resetTouch, passive)
  }

  return {x, y, isTouching, sourceType};
}