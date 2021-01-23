import React, {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FC,
  useEffect,
  useCallback,
} from 'react';
import styled from 'styled-components';
import Slider from '../forms/Slider';
import useHSL, { parseStringToHSL } from './useHSL';

const ColorSliderWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > * {
    margin-bottom: 1rem;
  }
`;

export type ColorSliderProps = {
  value: string;
  onChange: (value: string) => void;
};

const ColorSlider: FC<ColorSliderProps> = ({ value, onChange }) => {
  const [hsl, setHSL, { h, s, l }] = useHSL(parseStringToHSL(value));

  useEffect(() => onChange(hsl), [onChange, hsl]);

  const handleChange = useCallback(
    (selector: 'setH' | 'setS' | 'setL') => {
      const setter: Dispatch<SetStateAction<number>> = setHSL[selector];

      return (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value ?? 0);
        setter(value);
      };
    },
    [setHSL],
  );

  return (
    <ColorSliderWrapper>
      <Slider
        id="hue-slider"
        label="Hue"
        min={0}
        max={360}
        value={String(h)}
        onChange={handleChange('setH')}
      />

      <Slider
        id="saturation-slider"
        label="Saturation"
        min={0}
        max={100}
        value={String(s)}
        onChange={handleChange('setS')}
      />

      <Slider
        id="lightness"
        label="Lightness"
        min={0}
        max={100}
        value={String(l)}
        onChange={handleChange('setL')}
      />
    </ColorSliderWrapper>
  );
};
export default ColorSlider;
