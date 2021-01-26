import React, {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FC,
  useEffect,
  useCallback,
} from 'react';
import styled from 'styled-components';
import FormGroup from '../forms/FormGroup';
import Label from '../forms/Label';
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
      <FormGroup>
        <Label htmlFor="hue-slider">Hue</Label>
        <Slider
          id="hue-slider"
          min={0}
          max={360}
          value={String(h)}
          onChange={handleChange('setH')}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="saturation-slider">Saturation</Label>
        <Slider
          id="saturation-slider"
          min={0}
          max={100}
          value={String(s)}
          onChange={handleChange('setS')}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="lightness-slider">Lightness</Label>
        <Slider
          id="lightness-slider"
          min={0}
          max={100}
          value={String(l)}
          onChange={handleChange('setL')}
        />
      </FormGroup>
    </ColorSliderWrapper>
  );
};
export default ColorSlider;
