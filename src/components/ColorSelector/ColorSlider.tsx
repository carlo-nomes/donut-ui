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
import Input from '../forms/Input';
import Label from '../forms/Label';
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
        <Input
          id="hue-slider"
          type="range"
          min={0}
          max={360}
          value={String(h)}
          onChange={handleChange('setH')}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="saturation-slider">Saturation</Label>
        <Input
          id="saturation-slider"
          type="range"
          min={0}
          max={100}
          value={String(s)}
          onChange={handleChange('setS')}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="lightness-slider">Lightness</Label>
        <Input
          id="lightness-slider"
          type="range"
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
